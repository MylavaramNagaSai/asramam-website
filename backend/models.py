from sqlalchemy import Column, Integer, String, Text, Date, Boolean
from database import Base
import datetime

class News(Base):
    __tablename__ = "news"
    id = Column(Integer, primary_key=True, index=True)
    headline = Column(String)
    content = Column(Text)
    publish_date = Column(Date, default=datetime.date.today)

class Event(Base):
    __tablename__ = "events"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    date = Column(Date)
    description = Column(Text)
    is_major = Column(Boolean, default=False) # For the popup banner idea

class Facility(Base):
    __tablename__ = "facilities"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String) # e.g., Gosala, Library, 1935 Museum
    description = Column(Text)
