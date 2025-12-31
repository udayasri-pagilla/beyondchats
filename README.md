BeyondChats Article Automation Platform 🚀

A full-stack web application that scrapes articles from the BeyondChats blog, enriches them using competitor insights, and presents both original and AI-enhanced articles through a clean, modern user interface.

This project was built as part of the BeyondChats – Full Stack Web Developer Intern Assignment.

🔗 Live Demo

Frontend (Vercel):
👉 https://beyondchats-ten.vercel.app

Backend API (Render):
👉 https://beyondchats-backend-ys8y.onrender.com

👉 Articles API: /api/articles
👉 Automation Trigger: /run-automation

📌 Problem Statement

The objective of this assignment was to:

Scrape the oldest articles from the BeyondChats blog

Store and manage articles using REST APIs

Automate article enhancement using competitor content

Display original vs generated articles in a professional UI

Build a scalable, production-ready full-stack solution

🏗️ Architecture Overview
High-Level Flow
BeyondChats Blog
        ↓
Web Scraper (Cheerio)
        ↓
MongoDB (Articles Collection)
        ↓
REST APIs (Node.js + Express)
        ↓
Automation Pipeline
(Google Search + Scraping + LLM)
        ↓
React Frontend (Vite + Tailwind CSS)

✨ Features
Phase 1 – Backend & Scraping

Scrapes 5 oldest BeyondChats blog articles

Stores articles in MongoDB

Full CRUD APIs for articles

Clean MVC folder structure

Error handling & logging

Phase 2 – Automation Pipeline

Fetches original articles from backend APIs

Searches article titles on Google

Scrapes top competitor articles

Enhances content using LLM (Groq – optional)

Fallback logic when LLM is unavailable

Stores enhanced articles as separate documents

Saves competitor links as references

Phase 3 – Frontend (React)

Clean card-based UI

Filters: All / Original / Generated

Article detail page

Generated articles show references

Fully responsive design

Built with Tailwind CSS

🛠️ Tech Stack
Backend

Node.js

Express.js

MongoDB + Mongoose

Cheerio (web scraping)

Axios

dotenv

Automation

Google Search scraping

Cheerio

LLM integration (Groq – optional with fallback)

Frontend

React (Vite)

Tailwind CSS

React Router DOM

DevOps & Tools

Git & GitHub

GitHub Secret Scanning Protection

Render (Backend Deployment)

Vercel (Frontend Deployment)

PowerShell (Windows)

📂 Folder Structure
Backend
beyondchats-backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── scraper/
│   └── automation/
├── server.js
├── .env (ignored)
└── package.json

Frontend
beyondchats-frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── api/
│   └── main.jsx
├── tailwind.config.js
├── postcss.config.js
└── package.json

⚙️ Local Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/udayasri-pagilla/beyondchats.git
cd beyondchats

2️⃣ Backend Setup
cd beyondchats-backend
npm install


Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
GROQ_API_KEY=your_api_key   # optional


Run backend:

npm run dev

3️⃣ Run Automation (Phase 2)
node src/automation/runAutomation.js


⚠️ LLM is optional — fallback logic ensures automation works even without API credits.

4️⃣ Frontend Setup
cd ../beyondchats-frontend
npm install
npm run dev


Open in browser:

http://localhost:5173

🔐 Security Notes

.env files are ignored via .gitignore

API keys are never committed

GitHub Push Protection enabled for secrets

📈 Future Improvements

Full-text search

Pagination

Admin dashboard

Cron-based automation

Better article summarization

Auth & role-based access

👩‍💻 Author

Udayasri Pagilla
Full Stack Developer (Intern Candidate)

GitHub: https://github.com/udayasri-pagilla