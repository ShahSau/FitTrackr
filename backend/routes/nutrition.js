import { Router } from 'express';
import { 
    getConsumption, addConsumption,
    getBreakfast, addBreakfast,
    addLunch, getLunch,
    addDinner, getDinner,
    getSnacks, addSnacks,
    getAllMeals, getConsumptionWithoutDate

} from '../controllers/nutritionController.js';
const router = Router();


// get today's consumtion
router.get('/', getConsumption);

// add to today's consumtion
router.post('/', addConsumption);

// get consumption without date
router.get('/consumption', getConsumptionWithoutDate);


// get today's Breakfast
router.get('/breakfast', getBreakfast);

// add to today's Breakfast
router.post('/breakfast', addBreakfast);


// get today's Lunch
router.get('/lunch', getLunch);

// add to today's Lunch
router.post('/lunch', addLunch);


// get today's Dinner
router.get('/dinner', getDinner);

// add to today's Dinner
router.post('/dinner', addDinner);


// get today's Snacks
router.get('/snacks', getSnacks);


// add to today's Snacks
router.post('/snacks', addSnacks);

// get all meals
router.get('/all', getAllMeals);

export default router;