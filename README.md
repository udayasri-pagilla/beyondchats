>>>>BeyondChats Article Automation Platform

A full-stack web application that scrapes articles from BeyondChats, enriches them using competitor insights, and presents both original and AI-enhanced versions through a clean, modern UI.

This project was built as part of the BeyondChats – Full Stack Web Developer Intern Assignment.

>>> Live Demo

>> Frontend Live URL: https://beyondchats-ten.vercel.app/
>> Backend API URL: https://beyondchats-backend-ys8y.onrender.com

>>>> Problem Statement

The goal of this assignment was to:

Scrape the oldest articles from BeyondChats blog

Store and manage them via CRUD APIs

Automate article enhancement using competitor content

Display original and generated articles in a professional UI

>>>> Architecture Overview
High-Level Flow
BeyondChats Blog
      ↓
Web Scraper (Cheerio)
      ↓
MongoDB (Articles Collection)
      ↓
REST APIs (Node.js + Express)
      ↓
Automation Script (Google Search + Scraping + LLM)
      ↓
React Frontend (Vite + Tailwind)

>>> Features
>>> Phase 1 – Backend & Scraping

Scrapes 5 oldest BeyondChats blog articles

Stores articles in MongoDB

Full CRUD APIs for articles

Clean MVC folder structure

>>> Phase 2 – Automation Pipeline

Fetches articles from backend APIs

Searches article titles on Google

Scrapes top competitor articles

Enhances original content using LLM (Groq / fallback logic)

Stores generated articles with references

>>> Phase 3 – Frontend (React)

Clean card-based UI (Tailwind CSS)

Filters: All / Original / Generated

Article detail page

Generated articles show references

Fully responsive design

>>>> Tech Stack
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

LLM integration (Groq – optional / fallback supported)

Frontend

React (Vite)

Tailwind CSS

React Router DOM

DevOps & Tools

Git & GitHub

GitHub Secret Scanning Protection

PowerShell (Windows)

>>>>> Folder Structure
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

>>> Local Setup Instructions
>>>Clone the Repository
git clone https://github.com/udayasri-pagilla/beyondchats.git
cd beyondchats

>>>Backend Setup
cd beyondchats-backend
npm install


Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
GROQ_API_KEY=your_api_key   # optional


Run backend:

npm run dev

 Run Automation Script (Phase 2)
node src/automation/runAutomation.js


>>> LLM is optional — fallback logic ensures script runs even without credits.

>>> Frontend Setup
cd ../beyondchats-frontend
npm install
npm run dev


Open:

http://localhost:5173
