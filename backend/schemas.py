from pydantic import BaseModel
from datetime import date
from typing import Optional

class NewsCreate(BaseModel):
    headline: str
    content: str

class EventCreate(BaseModel):
    title: str
    date: date
    description: str
    is_major: bool = False

class FacilityCreate(BaseModel):
    name: str
    description: str