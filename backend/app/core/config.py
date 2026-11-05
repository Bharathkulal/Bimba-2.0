"""
app/core/config.py
------------------
Centralised settings loaded from the .env file.
Pydantic BaseSettings automatically reads environment variables.
"""
from pydantic_settings import BaseSettings
from pydantic import field_validator
from typing import List
import json


class Settings(BaseSettings):
    # ── App ──────────────────────────────────────────────
    APP_NAME: str = "BIMBA AI"
    DEBUG: bool = True
    PORT: int = 8000

    # ── MongoDB ──────────────────────────────────────────
    MONGODB_URL: str
    DATABASE_NAME: str = "bimba_ai"

    # ── JWT ──────────────────────────────────────────────
    JWT_SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 1440  # 24 hours

    # ── AI Providers ─────────────────────────────────────
    GEMINI_API_KEY: str = ""
    GROQ_API_KEY: str = ""
    OPENROUTER_API_KEY: str = ""

    # ── CORS ─────────────────────────────────────────────
    CORS_ORIGINS: List[str] = ["http://localhost:3000", "http://127.0.0.1:3000"]

    @field_validator("CORS_ORIGINS", mode="before")
    @classmethod
    def parse_cors(cls, v):
        if isinstance(v, str):
            return json.loads(v)
        return v

    model_config = {"env_file": ".env", "env_file_encoding": "utf-8"}


# Single shared instance — import this everywhere
settings = Settings()
