import User from '../models/User.js';



export const getCaloriesBurned = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const data = {
            labels:[],
            datasets:[
                {
                    data:[]
                }
            ]
        }
        user.BurntCalories.forEach(caloriesburned => {
            data.labels.push(caloriesburned.date.toDateString().slice(4,10));
            data.datasets[0].data.push(caloriesburned.calories);
        });
        res.status(200).json(data);
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
        const dateFilter = user.BurntCalories.filter(caloriesburned => caloriesburned.date.getDate() == newdate.getDate());

        if (dateFilter.length > 0) {
            dateFilter[0].calories += calories;
        } else {
            user.BurntCalories.push({ calories, date: newdate });
        }
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
        const minData ={
            labels:[],
            datasets:[
                {
                    data:[]
                }
            ]
        }
        const daysData =[

        ]
        user.workout.forEach(workout => {
            minData.labels.push(workout.date.toDateString().slice(4,10));
            minData.datasets[0].data.push(workout.duration);
            daysData.push({date:workout.date.toString().split("T")[0], duration:workout.duration});
        }
        );
        res.status(200).json({minData,daysData});
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
