"""
app/schemas/resume.py
---------------------
Pydantic models for resume create / update / response.
"""
from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from datetime import datetime


class ResumeSection(BaseModel):
    contact: Dict[str, Any] = Field(default_factory=dict)
    summary: str = ""
    experience: List[Dict[str, Any]] = Field(default_factory=list)
    education: List[Dict[str, Any]] = Field(default_factory=list)
    skills: List[str] = Field(default_factory=list)
    projects: List[Dict[str, Any]] = Field(default_factory=list)
    certifications: List[Dict[str, Any]] = Field(default_factory=list)


class ResumeCreate(BaseModel):
    title: str = Field(..., min_length=1, max_length=200, examples=["Software Engineer Resume"])
    sections: ResumeSection = Field(default_factory=ResumeSection)


class ResumeUpdate(BaseModel):
    title: Optional[str] = Field(None, min_length=1, max_length=200)
    sections: Optional[ResumeSection] = None


class ResumeResponse(BaseModel):
    id: str
    user_id: str
    title: str
    sections: ResumeSection
    created_at: str
    updated_at: str

    model_config = {"from_attributes": True}
