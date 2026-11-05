"""
app/api/v1/endpoints/auth.py
----------------------------
Authentication endpoints:
  POST /api/v1/auth/register  — create a new user account
  POST /api/v1/auth/login     — login and receive a JWT
  GET  /api/v1/auth/me        — get the current authenticated user
"""
import logging
from datetime import datetime, timezone

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from motor.motor_asyncio import AsyncIOMotorDatabase

from app.core.config import settings
from app.core.security import hash_password, verify_password, create_access_token, decode_access_token
from app.db.mongodb import get_database
from app.schemas.auth import RegisterRequest, LoginRequest, TokenResponse, UserResponse

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/auth", tags=["Authentication"])
bearer_scheme = HTTPBearer()


# ── Dependency: get current authenticated user ─────────────────────────────────

async def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme),
    db: AsyncIOMotorDatabase = Depends(get_database),
) -> dict:
    """Validate the Bearer JWT and return the user document."""
    token = credentials.credentials
    payload = decode_access_token(token)
    if payload is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token.",
            headers={"WWW-Authenticate": "Bearer"},
        )
    user_id = payload.get("sub")
    if not user_id:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Token payload invalid.")

    from bson import ObjectId
    user = await db.users.find_one({"_id": ObjectId(user_id)})
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User not found.")
    if not user.get("is_active", True):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Account is disabled.")
    return user


# ── POST /register ─────────────────────────────────────────────────────────────

@router.post("/register", response_model=TokenResponse, status_code=status.HTTP_201_CREATED)
async def register(payload: RegisterRequest, db: AsyncIOMotorDatabase = Depends(get_database)):
    """Register a new user. Returns a JWT on success."""

    # Check if email already exists
    existing = await db.users.find_one({"email": payload.email.lower()})
    if existing:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="An account with this email already exists.",
        )

    now = datetime.now(timezone.utc)
    user_doc = {
        "full_name": payload.full_name.strip(),
        "email": payload.email.lower(),
        "hashed_password": hash_password(payload.password),
        "role": "student",
        "is_active": True,
        "created_at": now,
        "updated_at": now,
    }

    result = await db.users.insert_one(user_doc)
    user_id = str(result.inserted_id)

    # Also create an empty user profile document
    await db.user_profiles.insert_one({
        "user_id": user_id,
        "bio": "",
        "skills": [],
        "experience_years": 0,
        "education": [],
        "avatar_url": "",
        "created_at": now,
        "updated_at": now,
    })

    access_token = create_access_token(data={"sub": user_id})
    logger.info("✅ New user registered: %s", payload.email)

    return TokenResponse(
        access_token=access_token,
        token_type="bearer",
        expires_in=settings.ACCESS_TOKEN_EXPIRE_MINUTES * 60,
    )


# ── POST /login ────────────────────────────────────────────────────────────────

@router.post("/login", response_model=TokenResponse)
async def login(payload: LoginRequest, db: AsyncIOMotorDatabase = Depends(get_database)):
    """Login with email and password. Returns a JWT on success."""

    user = await db.users.find_one({"email": payload.email.lower()})
    if not user or not verify_password(payload.password, user["hashed_password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password.",
            headers={"WWW-Authenticate": "Bearer"},
        )

    if not user.get("is_active", True):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Account is disabled.")

    user_id = str(user["_id"])
    access_token = create_access_token(data={"sub": user_id})
    logger.info("✅ User logged in: %s", payload.email)

    return TokenResponse(
        access_token=access_token,
        token_type="bearer",
        expires_in=settings.ACCESS_TOKEN_EXPIRE_MINUTES * 60,
    )


# ── GET /me ────────────────────────────────────────────────────────────────────

@router.get("/me", response_model=UserResponse)
async def get_me(current_user: dict = Depends(get_current_user)):
    """Return the currently authenticated user's profile."""
    return UserResponse(
        id=str(current_user["_id"]),
        full_name=current_user["full_name"],
        email=current_user["email"],
        role=current_user.get("role", "student"),
        is_active=current_user.get("is_active", True),
        created_at=current_user["created_at"].isoformat(),
    )
