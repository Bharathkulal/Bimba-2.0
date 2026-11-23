"""
backend/app/models/resume.py
----------------------------
MongoDB document models for Resumes and ATS Analysis.
"""
from datetime import datetime, timezone
from typing import Optional, List, Dict, Any
from pydantic import BaseModel, Field


class ResumeModel(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    user_id: str
    title: str
    sections: Dict[str, Any] = Field(default_factory=dict)
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

    model_config = {
        "populate_by_name": True,
        "arbitrary_types_allowed": True,
    }


class ATSAnalysisModel(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    user_id: str
    resume_id: str
    overall_score: int  # 0 to 100
    keyword_score: int
    formatting_score: int
    impact_score: int
    strengths: List[str] = Field(default_factory=list)
    weaknesses: List[str] = Field(default_factory=list)
    missing_keywords: List[str] = Field(default_factory=list)
    suggested_improvements: List[Dict[str, str]] = Field(default_factory=list)
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

    model_config = {
        "populate_by_name": True,
        "arbitrary_types_allowed": True,
    }
