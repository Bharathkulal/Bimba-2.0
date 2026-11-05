"""
app/schemas/auth.py
-------------------
Pydantic request/response models for authentication endpoints.
"""
from pydantic import BaseModel, EmailStr, Field
from typing import Optional


class RegisterRequest(BaseModel):
    full_name: str = Field(..., min_length=2, max_length=100, examples=["Bharath Kulal"])
    email: EmailStr = Field(..., examples=["bharath@example.com"])
    password: str = Field(..., min_length=8, examples=["StrongPass123!"])


class LoginRequest(BaseModel):
    email: EmailStr = Field(..., examples=["bharath@example.com"])
    password: str = Field(..., examples=["StrongPass123!"])


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    expires_in: int  # seconds


class UserResponse(BaseModel):
    id: str
    full_name: str
    email: str
    role: str
    is_active: bool
    created_at: str

    model_config = {"from_attributes": True}
