import express from 'express';
import { register, login } from '../controllers/authController.js';
import { body } from 'express-validator';

const router = express.Router();

router.post('/register',
  body('username').isLength({ min: 3 }),
  body('password').isLength({ min: 6 }),
  register
);

router.post('/login',
  body('username').isLength({ min: 3 }),
  body('password').isLength({ min: 6 }),
  login
);

export default router;
