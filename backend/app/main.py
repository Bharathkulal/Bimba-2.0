"""
backend/app/main.py
-------------------
Main FastAPI application entrypoint for BIMBA AI 2.0.
Handles lifespan events (connecting to MongoDB and creating database indexes),
enables CORS middleware for frontend communication, and mounts API v1 routes.
"""
import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorDatabase

from app.core.config import settings
from app.db.mongodb import connect_to_mongo, close_mongo_connection, get_database, _db
from app.db.indexes import create_indexes
from app.api.v1.router import api_router

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)-7s | %(name)s | %(message)s",
)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Application lifespan manager.
    Runs on startup to initialize database connection and create indexes.
    Runs on shutdown to safely release connection pool.
    """
    logger.info("🚀 Starting BIMBA AI Backend...")
    try:
        await connect_to_mongo()
        if _db is not None:
            await create_indexes(_db)
    except Exception as exc:
        logger.error("⚠️ Startup database connection warning: %s", exc)
        logger.warning("Backend started with database offline. Please verify MONGODB_URL in backend/.env.")

    yield

    logger.info("🛑 Shutting down BIMBA AI Backend...")
    await close_mongo_connection()


app = FastAPI(
    title="BIMBA AI API",
    description="AI-Powered Career Architecture, Resume Engineering & Placement Automation Platform API",
    version="2.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan,
)

# ── CORS Middleware Configuration ──
# Allows requests from Vite development servers and production domains
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3001",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
] + settings.CORS_ORIGINS

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ── Health Check Endpoints ──
@app.get("/", tags=["System"])
async def root():
    return {
        "app": settings.APP_NAME,
        "version": "2.0.0",
        "status": "online",
        "documentation": "/docs",
    }


@app.get("/health", tags=["System"])
@app.get("/api/v1/health", tags=["System"])
async def health_check(db: AsyncIOMotorDatabase = Depends(get_database)):
    """Health check endpoint that verifies database ping connectivity."""
    try:
        await db.command("ping")
        db_status = "connected"
    except Exception as exc:
        db_status = f"unreachable: {str(exc)}"

    return {
        "status": "healthy" if db_status == "connected" else "degraded",
        "database": db_status,
        "database_name": settings.DATABASE_NAME,
    }


# ── Mount API v1 Routers ──
app.include_router(api_router)
