import { Router } from 'express';
import { 
    getCaloriesBurned, createCaloriesBurned,
    getAllWorkouts, createWorkout,
    getWorkoutDays
 } from '../controllers/workoutController.js';

const router = Router();


//Get all calories burned
router.get('/', getCaloriesBurned);

//Create a calorie burned
router.post('/calories', createCaloriesBurned);

//get all workouts
router.get('/all', getAllWorkouts);

//create a workout and workout day
router.post('/create', createWorkout);

//get all workouts days
router.get('/days', getWorkoutDays);


export default router;