
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import setupSwagger from './swagger.js';

// Load environment variables
dotenv.config();

const app = express();

// Swagger docs (must be after app is defined)
setupSwagger(app);

// Middleware
app.use(cors());
app.use(express.json());


// Health check route
app.get('/api/v1/health', (req, res) => {
  res.json({ status: 'ok' });
});

// API routes
import authRoutes from './routes/auth.js';
import taskRoutes from './routes/tasks.js';
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/tasks', taskRoutes);

// Error handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Internal server error', error: err.message });
});

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/prime-trade-ai';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
