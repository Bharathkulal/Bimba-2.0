"""
app/api/v1/router.py
--------------------
Central router — mounts all endpoint routers under /api/v1
"""
from fastapi import APIRouter
from app.api.v1.endpoints import auth, resumes

api_router = APIRouter(prefix="/api/v1")

api_router.include_router(auth.router)
api_router.include_router(resumes.router)
