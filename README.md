# Prime Trade AI – Fullstack Assignment

A scalable, secure MERN stack project with authentication, role-based access, REST APIs, and a React frontend. Built for the Backend Developer (Intern) assignment.

---

## 📦 Project Structure

- **backend/** – Node.js, Express, MongoDB (Mongoose)
  - User registration/login (JWT, bcrypt)
  - Role-based access (user/admin)
  - CRUD APIs for tasks
  - API versioning, error handling, validation
  - Swagger API docs (`/api-docs`)
  - Dockerfile, scalability, and logging notes
- **frontend/** – React, Vite, Tailwind CSS
  - Register/login UI
  - Protected dashboard (JWT required)
  - CRUD for tasks
  - Error/success messages
  - Dockerfile, security note

---

## 🚀 Quick Start

### Backend
1. `cd backend`
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and fill in values
4. Start MongoDB locally or use MongoDB Atlas
5. Run dev server: `npm run dev`
6. API docs: [http://localhost:5000/api-docs](http://localhost:5000/api-docs)

### Frontend
1. `cd frontend`
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and fill in values
4. Run dev server: `npm run dev`
5. App: [http://localhost:5173](http://localhost:5173)

---

## 🛠️ Environment Variables
- See `backend/.env.example` and `frontend/.env.example` for required variables.

---

## 🧩 API Documentation
- Swagger UI: [http://localhost:5000/api-docs](http://localhost:5000/api-docs)
- Exported: `backend/swagger.json`
- Postman: `backend/postman_collection.json`

---

## 🧪 Features
- Secure JWT authentication & password hashing
- Role-based access (user/admin)
- CRUD for tasks (secondary entity)
- Input validation & sanitization
- Error handling (RESTful status codes)
- Modular, scalable structure
- Docker-ready (see Dockerfiles)
- API docs (Swagger/Postman)
- Scalability & logging notes
- Frontend JWT security note

---

## 🏗️ Scalability & Security
- See `backend/scalability-note.md` and `backend/logging.md`
- See `frontend/SECURITY.md` for JWT storage best practices

---

## 🐳 Docker
- Backend: `cd backend && docker build -t prime-trade-ai-backend .`
- Frontend: `cd frontend && docker build -t prime-trade-ai-frontend .`

---

## 📁 Submission Checklist
- [x] All code in GitHub repo
- [x] `.env.example` files (backend & frontend)
- [x] `swagger.json` and `postman_collection.json` (backend)
- [x] Scalability, logging, and security notes
- [x] Dockerfiles for backend & frontend
- [x] Updated README.md (this file)

---

## 📚 References
- See `backend/README.md` and `frontend/README.md` for more details
- API docs: `/api-docs` (Swagger UI)
- For questions, see code comments and documentation files
