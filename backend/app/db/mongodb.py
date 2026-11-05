"""
app/db/mongodb.py
-----------------
MongoDB Atlas connection using Motor (async driver).

- Connects once at application startup via FastAPI lifespan.
- Provides get_database() dependency for route injection.
- Connection pooling is handled by Motor automatically.
- Pings Atlas on startup to verify connectivity.
"""
import logging
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from app.core.config import settings

logger = logging.getLogger(__name__)

# ── Module-level client & db (set during lifespan startup) ──
_client: AsyncIOMotorClient | None = None
_db: AsyncIOMotorDatabase | None = None


async def connect_to_mongo() -> None:
    """
    Called once during FastAPI startup.
    Creates the Motor client and pings Atlas to verify the connection.
    Raises RuntimeError if Atlas is unreachable so the app fails fast.
    """
    global _client, _db

    logger.info("🔌 Connecting to MongoDB Atlas...")

    _client = AsyncIOMotorClient(
        settings.MONGODB_URL,
        maxPoolSize=10,
        minPoolSize=1,
        serverSelectionTimeoutMS=5000,   # fail fast if Atlas unreachable
        connectTimeoutMS=10000,
        socketTimeoutMS=10000,
    )

    # Ping to confirm connectivity before accepting requests
    try:
        await _client.admin.command("ping")
        _db = _client[settings.DATABASE_NAME]
        logger.info(
            "✅ MongoDB Atlas connected — database: '%s'", settings.DATABASE_NAME
        )
    except Exception as exc:
        logger.error("❌ MongoDB Atlas connection failed: %s", exc)
        raise RuntimeError(f"Cannot connect to MongoDB Atlas: {exc}") from exc


async def close_mongo_connection() -> None:
    """
    Called once during FastAPI shutdown.
    Closes the Motor client and releases all pooled connections.
    """
    global _client, _db
    if _client:
        _client.close()
        _client = None
        _db = None
        logger.info("🔒 MongoDB Atlas connection closed.")


def get_database() -> AsyncIOMotorDatabase:
    """
    FastAPI dependency — returns the shared database instance.

    Usage in a route:
        from app.db.mongodb import get_database
        from motor.motor_asyncio import AsyncIOMotorDatabase
        from fastapi import Depends

        async def my_route(db: AsyncIOMotorDatabase = Depends(get_database)):
            ...
    """
    if _db is None:
        raise RuntimeError(
            "Database not initialised. Ensure connect_to_mongo() ran at startup."
        )
    return _db
