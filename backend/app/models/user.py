"""
backend/app/models/user.py
--------------------------
MongoDB document models for User and UserProfile.
"""
from datetime import datetime, timezone
from typing import Optional, List, Dict, Any
from pydantic import BaseModel, EmailStr, Field


class UserModel(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    full_name: str
    email: EmailStr
    hashed_password: str
    role: str = "student"  # "student", "admin", "recruiter"
    is_active: bool = True
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

    model_config = {
        "populate_by_name": True,
        "arbitrary_types_allowed": True,
    }


class UserProfileModel(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    user_id: str
    bio: str = ""
    skills: List[str] = Field(default_factory=list)
    experience_years: float = 0.0
    education: List[Dict[str, Any]] = Field(default_factory=list)
    avatar_url: str = ""
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

    model_config = {
        "populate_by_name": True,
        "arbitrary_types_allowed": True,
    }
