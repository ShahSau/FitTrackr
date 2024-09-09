import User from '../models/User.js';



export const getCaloriesBurned = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user.BurntCalories);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }

}

export const createCaloriesBurned = async (req, res) => {
    const { email, calories, date } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        let newdate = new Date(date);
        user.BurntCalories.push({ calories, date: newdate });
        user.save();
        res.status(200).json({ message: "Calories burned updated", user });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }

}

export const getAllWorkouts = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const workouts = user.workout.map(workout => {
            return {
                duration: workout.duration,
                date: workout.date
            }
        }
        );
        res.status(200).json(workouts);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const createWorkout = async (req, res) => {
    const { email, numberofsets, duration, date } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        let newdate = new Date(date);
        const dateFilter = user.workout.filter(workout => workout.date.getDate() == newdate.getDate());
        if (dateFilter.length > 0) {
            dateFilter[0].numberofsets += numberofsets;
            dateFilter[0].duration += duration;
        }else{
            user.workout.push({ numberofsets, duration, date: newdate });
        }
        user.save();
        res.status(200).json({ message: "Workout updated", user });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}



export const getWorkoutDays = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const workoutdays = user.workout.map(workout => {
            return {
                date: workout.date,
                numberofsets: workout.numberofsets,

            }
        }
        );
        res.status(200).json(workoutdays);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
