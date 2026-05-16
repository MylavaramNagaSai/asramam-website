from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import models, database, schemas

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="Sri Sathyanandha Asramam API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Asramam API is Online"}

# --- NEWS ENDPOINTS ---
@app.get("/news")
def get_news(db: Session = Depends(database.get_db)):
    return db.query(models.News).all()

@app.post("/news")
def create_news(news: schemas.NewsCreate, db: Session = Depends(database.get_db)):
    db_news = models.News(**news.model_dump())
    db.add(db_news)
    db.commit()
    db.refresh(db_news)
    return db_news

# --- FACILITY ENDPOINTS (Gosala, Museum, etc.) ---
@app.get("/facilities")
def get_facilities(db: Session = Depends(database.get_db)):
    return db.query(models.Facility).all()

@app.post("/facilities")
def create_facility(facility: schemas.FacilityCreate, db: Session = Depends(database.get_db)):
    db_facility = models.Facility(**facility.model_dump())
    db.add(db_facility)
    db.commit()
    db.refresh(db_facility)
    return db_facility