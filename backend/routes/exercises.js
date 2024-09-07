import { Router } from 'express';
import { getExercises, createExercise, getExercise } from '../controllers/exerciseController.js';
const router = Router();


//Get all exercises
router.get('/', getExercises);

//Create an exercise
router.post('/', createExercise);

//get a user
router.get('/:id', getExercise);

export default router;