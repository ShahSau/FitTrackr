import { Router } from 'express';
import { getUsers, createUser } from '../controllers/userController.js';
const router = Router();

// Get all users
router.get('/', getUsers);

// Create a user
router.post('/', createUser);

export default router;
