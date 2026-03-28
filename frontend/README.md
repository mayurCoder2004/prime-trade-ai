# Prime Trade AI Frontend

## Features
- Register & login UI
- Protected dashboard (JWT required)
- CRUD for tasks
- Error/success messages
- Built with Vite + React + Tailwind CSS

## New: See `.env.example` for environment variables. Backend API required at `http://localhost:5000`.

## Getting Started

1. Install dependencies:
	```bash
	npm install
	```
2. Start the dev server:
	```bash
	npm run dev
	```
3. The app runs at [http://localhost:5173](http://localhost:5173)

## API Connection
- The frontend expects the backend to be running at `http://localhost:5000`.
- For production, set up a proxy or update API URLs as needed.

## Docker
You can containerize the frontend for deployment. See Vercel/Netlify docs for details.

## Scalability Note
- Modular React components for easy extension
- Tailwind for rapid UI changes
- Can be containerized with Docker
- Ready for deployment to Vercel, Netlify, or similar

---

For backend and API docs, see the backend folder and `/api-docs`.
