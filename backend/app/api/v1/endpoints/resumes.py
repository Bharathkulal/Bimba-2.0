"""
app/api/v1/endpoints/resumes.py
--------------------------------
Resume CRUD endpoints — all operations are scoped to the authenticated user.
  GET    /api/v1/resumes/        — list user's resumes
  POST   /api/v1/resumes/        — create a resume
  GET    /api/v1/resumes/{id}    — get one resume
  PUT    /api/v1/resumes/{id}    — update a resume
  DELETE /api/v1/resumes/{id}    — delete a resume
"""
import logging
from datetime import datetime, timezone
from typing import List

from bson import ObjectId
from bson.errors import InvalidId
from fastapi import APIRouter, Depends, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorDatabase

from app.api.v1.endpoints.auth import get_current_user
from app.db.mongodb import get_database
from app.schemas.resume import ResumeCreate, ResumeUpdate, ResumeResponse

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/resumes", tags=["Resumes"])


def _doc_to_response(doc: dict) -> ResumeResponse:
    return ResumeResponse(
        id=str(doc["_id"]),
        user_id=doc["user_id"],
        title=doc["title"],
        sections=doc.get("sections", {}),
        created_at=doc["created_at"].isoformat(),
        updated_at=doc["updated_at"].isoformat(),
    )


def _resolve_id(resume_id: str) -> ObjectId:
    try:
        return ObjectId(resume_id)
    except (InvalidId, Exception):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid resume ID.")


# ── GET / (list) ───────────────────────────────────────────────────────────────

@router.get("/", response_model=List[ResumeResponse])
async def list_resumes(
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    user_id = str(current_user["_id"])
    cursor = db.resumes.find({"user_id": user_id}).sort("updated_at", -1)
    return [_doc_to_response(doc) async for doc in cursor]


# ── POST / (create) ────────────────────────────────────────────────────────────

@router.post("/", response_model=ResumeResponse, status_code=status.HTTP_201_CREATED)
async def create_resume(
    payload: ResumeCreate,
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    now = datetime.now(timezone.utc)
    doc = {
        "user_id": str(current_user["_id"]),
        "title": payload.title,
        "sections": payload.sections.model_dump(),
        "created_at": now,
        "updated_at": now,
    }
    result = await db.resumes.insert_one(doc)
    doc["_id"] = result.inserted_id
    logger.info("Resume created: %s for user %s", result.inserted_id, doc["user_id"])
    return _doc_to_response(doc)


# ── GET /{id} ──────────────────────────────────────────────────────────────────

@router.get("/{resume_id}", response_model=ResumeResponse)
async def get_resume(
    resume_id: str,
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    doc = await db.resumes.find_one({"_id": _resolve_id(resume_id), "user_id": str(current_user["_id"])})
    if not doc:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Resume not found.")
    return _doc_to_response(doc)


# ── PUT /{id} ──────────────────────────────────────────────────────────────────

@router.put("/{resume_id}", response_model=ResumeResponse)
async def update_resume(
    resume_id: str,
    payload: ResumeUpdate,
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    updates: dict = {"updated_at": datetime.now(timezone.utc)}
    if payload.title is not None:
        updates["title"] = payload.title
    if payload.sections is not None:
        updates["sections"] = payload.sections.model_dump()

    result = await db.resumes.find_one_and_update(
        {"_id": _resolve_id(resume_id), "user_id": str(current_user["_id"])},
        {"$set": updates},
        return_document=True,
    )
    if not result:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Resume not found.")
    return _doc_to_response(result)


# ── DELETE /{id} ───────────────────────────────────────────────────────────────

@router.delete("/{resume_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_resume(
    resume_id: str,
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    result = await db.resumes.delete_one(
        {"_id": _resolve_id(resume_id), "user_id": str(current_user["_id"])}
    )
    if result.deleted_count == 0:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Resume not found.")
