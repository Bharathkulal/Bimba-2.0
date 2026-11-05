"""
app/db/indexes.py
-----------------
Creates all required MongoDB indexes for the bimba_ai database.
Called once at startup AFTER the Atlas connection is established.

Safe to call repeatedly — MongoDB ignores existing identical indexes.
"""
import logging
from motor.motor_asyncio import AsyncIOMotorDatabase
from pymongo import ASCENDING, DESCENDING, TEXT

logger = logging.getLogger(__name__)


async def create_indexes(db: AsyncIOMotorDatabase) -> None:
    """Create all collection indexes. Called from FastAPI lifespan."""

    logger.info("📑 Creating database indexes...")

    # ── users ────────────────────────────────────────────────────────
    await db.users.create_index([("email", ASCENDING)], unique=True, name="idx_users_email_unique")
    await db.users.create_index([("created_at", ASCENDING)], name="idx_users_created_at")

    # ── resumes ──────────────────────────────────────────────────────
    await db.resumes.create_index([("user_id", ASCENDING)], name="idx_resumes_user_id")
    await db.resumes.create_index(
        [("user_id", ASCENDING), ("updated_at", DESCENDING)],
        name="idx_resumes_user_updated"
    )

    # ── jobs ─────────────────────────────────────────────────────────
    await db.jobs.create_index(
        [("title", TEXT), ("skills_required", TEXT), ("description", TEXT)],
        name="idx_jobs_text_search"
    )
    await db.jobs.create_index(
        [("is_active", ASCENDING), ("posted_at", DESCENDING)],
        name="idx_jobs_active_posted"
    )
    await db.jobs.create_index([("company_id", ASCENDING)], name="idx_jobs_company_id")

    # ── companies ────────────────────────────────────────────────────
    await db.companies.create_index([("name", ASCENDING)], name="idx_companies_name")

    # ── applications ─────────────────────────────────────────────────
    await db.applications.create_index(
        [("user_id", ASCENDING), ("job_id", ASCENDING)],
        name="idx_applications_user_job"
    )
    await db.applications.create_index([("status", ASCENDING)], name="idx_applications_status")
    await db.applications.create_index([("applied_at", DESCENDING)], name="idx_applications_applied_at")

    # ── user_profiles ────────────────────────────────────────────────
    await db.user_profiles.create_index(
        [("user_id", ASCENDING)], unique=True, name="idx_profiles_user_id_unique"
    )

    # ── ats_analysis ─────────────────────────────────────────────────
    await db.ats_analysis.create_index([("user_id", ASCENDING)], name="idx_ats_user_id")
    await db.ats_analysis.create_index(
        [("user_id", ASCENDING), ("resume_id", ASCENDING)],
        name="idx_ats_user_resume"
    )
    await db.ats_analysis.create_index([("created_at", DESCENDING)], name="idx_ats_created_at")

    # ── skill_gaps ───────────────────────────────────────────────────
    await db.skill_gaps.create_index([("user_id", ASCENDING)], name="idx_skillgaps_user_id")
    await db.skill_gaps.create_index([("created_at", DESCENDING)], name="idx_skillgaps_created_at")

    # ── notifications ────────────────────────────────────────────────
    await db.notifications.create_index(
        [("user_id", ASCENDING), ("is_read", ASCENDING)],
        name="idx_notifications_user_read"
    )
    await db.notifications.create_index([("created_at", DESCENDING)], name="idx_notifications_created_at")

    logger.info("✅ All database indexes created successfully.")
