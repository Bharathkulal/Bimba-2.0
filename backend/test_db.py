"""
backend/test_db.py
------------------
Interactive verification script to test MongoDB connection and index creation.
Run with:
    cd backend
    python test_db.py
"""
import sys
import os
import asyncio

# Ensure backend root is on sys.path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from app.core.config import settings
from motor.motor_asyncio import AsyncIOMotorClient
from app.db.indexes import create_indexes


async def run_diagnostics():
    print("=" * 65)
    print("  BIMBA AI 2.0 — MongoDB Connection Diagnostics")
    print("=" * 65)
    
    url = settings.MONGODB_URL
    masked_url = url
    if "@" in url:
        prefix, rest = url.split("@", 1)
        scheme = prefix.split("://")[0]
        masked_url = f"{scheme}://****:****@{rest}"

    print(f"\n[1] Configuration Check:")
    print(f"    • Database Name : {settings.DATABASE_NAME}")
    print(f"    • Target URL    : {masked_url}")

    if "YOUR_USERNAME" in url or "YOUR_PASSWORD" in url or "YOUR_CLUSTER" in url:
        print("\n❌ ERROR: Placeholder credentials detected in backend/.env!")
        print("   Please replace YOUR_USERNAME and YOUR_PASSWORD in backend/.env with your actual MongoDB Atlas or local connection string.")
        print("\n   Example Atlas URL:")
        print("   MONGODB_URL=mongodb+srv://admin:myPassword123@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority")
        print("\n   Example Local MongoDB URL:")
        print("   MONGODB_URL=mongodb://127.0.0.1:27017")
        print("=" * 65)
        return

    print("\n[2] Connecting to MongoDB...")
    client = AsyncIOMotorClient(
        url,
        serverSelectionTimeoutMS=5000,
        connectTimeoutMS=10000,
    )

    try:
        # Ping command
        ping_result = await client.admin.command("ping")
        print("    ✅ Connection established successfully!")
        print(f"    • Ping Response : {ping_result}")
    except Exception as exc:
        print(f"\n❌ FAILED TO CONNECT TO MONGODB:")
        print(f"   {exc}\n")
        print("Troubleshooting steps:")
        print("1. If using MongoDB Atlas:")
        print("   • Ensure your IP address is whitelisted in Atlas (Network Access -> Add IP Address -> Allow Access from Anywhere or Current IP).")
        print("   • Check that the database user and password are correct.")
        print("   • Check that special characters in your password are URL encoded (e.g. '@' becomes '%40').")
        print("2. If using Local MongoDB:")
        print("   • Ensure the MongoDB service is running (e.g., net start MongoDB or mongod).")
        print("   • Use 'mongodb://127.0.0.1:27017' as the MONGODB_URL.")
        print("=" * 65)
        return

    # Database and Collections
    db = client[settings.DATABASE_NAME]
    print(f"\n[3] Inspecting Database '{settings.DATABASE_NAME}'...")
    collections = await db.list_collection_names()
    print(f"    • Existing Collections: {collections if collections else '(None yet — will be created automatically)'}")

    # Index Creation Test
    print("\n[4] Testing Index Creation on Collections...")
    try:
        await create_indexes(db)
        print("    ✅ All collections and indexes verified!")
    except Exception as exc:
        print(f"    ⚠️ Index creation warning: {exc}")

    client.close()
    print("\n" + "=" * 65)
    print("  🎉 DATABASE READY FOR BIMBA AI BACKEND!")
    print("  You can now start the FastAPI server with:")
    print("      uvicorn app.main:app --reload --port 8000")
    print("=" * 65)


if __name__ == "__main__":
    asyncio.run(run_diagnostics())
