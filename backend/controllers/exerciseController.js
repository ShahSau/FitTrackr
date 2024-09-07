import Exercise from '../models/Exercise.js';

//@desc   Get all exercises
//@route  GET /api/exercises
const getExercises = async (req, res) => {
    try {
        const exercises = await Exercise.find();
        res.json(exercises);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//@desc   Create an exercise
//@route  POST /api/exercises
const createExercise = async (req, res) => {
    const { id, image, name, description, excersises } = req.body;
    const newExercise = new Exercise({ id, image, name, description, excersises });
    try {
        const savedExercise = await newExercise.save();
        res.status(201).json(savedExercise);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

//@desc   Get an exercise
//@route  GET /api/exercises/:id
const getExercise = async (req, res) => {
    const { id } = req.params;
    try {
        const exercise = await Exercise.find({ id: id });
        if (!exercise) {
            return res.status(404).json({ message: 'Exercise not found' });
        }
        res.json(exercise);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }

}

export { getExercises, createExercise, getExercise };