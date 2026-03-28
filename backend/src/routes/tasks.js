import express from 'express';
import {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask
} from '../controllers/taskController.js';
import { authenticateToken } from '../middleware/auth.js';
import { body } from 'express-validator';

const router = express.Router();

router.use(authenticateToken);

router.post('/', body('title').notEmpty(), createTask);
router.get('/', getTasks);
router.get('/:id', getTask);
router.put('/:id',
  body('title').optional().notEmpty(),
  body('description').optional(),
  body('completed').optional().isBoolean(),
  updateTask
);
router.delete('/:id', deleteTask);

export default router;
