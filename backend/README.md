# Prime Trade AI Backend
## Features
- User registration & login (JWT, bcrypt)
- Role-based access (user/admin)
- CRUD for tasks
- API versioning (/api/v1)
- Error handling & validation
- Swagger API docs at `/api-docs`
- MongoDB database

## New: See `.env.example`, `swagger.json`, and `scalability-note.md` for submission requirements.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up `.env` (see example in repo)
3. Start MongoDB locally or use MongoDB Atlas
4. Run in dev mode:
   ```bash
   npm run dev
   ```
   Or in prod:
   ```bash
   npm start
   ```

## API Documentation
Visit [http://localhost:5000/api-docs](http://localhost:5000/api-docs) after running the server.
- Exported Swagger JSON: `swagger.json` in this folder.

## Scalability Note
See `scalability-note.md` for details.

## Docker
To build and run with Docker:
```bash
docker build -t prime-trade-ai-backend .
docker run -p 5000:5000 --env-file .env prime-trade-ai-backend
```

---

For full assignment, see the frontend folder and Postman/Swagger docs.
