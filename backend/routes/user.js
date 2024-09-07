import { Router } from 'express';
import { getUsers, createUser, signIn } from '../controllers/userController.js';
const router = Router();

// Get all users
router.get('/', getUsers);

// Create a user
router.post('/', createUser);

// sign in
router.post('/signin', signIn);

export default router;
