import User from '../models/User.js';


// get today's consumtion
export const getConsumption = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const today = new Date().toISOString().split('T')[0];
        let consumption = user.consumption.filter(consumption => new Date(consumption.date).toISOString().split('T')[0] === today);
        if (consumption.length === 0) {
            consumption = [{ date: today, calories: 0, protein: 0, fat: 0, sodium: 0 }];
        }
        res.status(200).json(consumption);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// add today's consumtion
export const addConsumption = async (req, res) => {
    const {email, date, calories, protein, fat, sodium} = req.body
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if(user.consumption.filter(consumption => consumption.date === date).length > 0){
            user.consumption.map(consumption => {
                if(consumption.date === date){
                    consumption.calories += calories;
                    consumption.protein += protein;
                    consumption.fat += fat;
                    consumption.sodium += sodium;
                }
            });
        }
        else{
            let newdate = new Date(date);
            user.consumption.push({ date:newdate, calories, protein, fat, sodium });
        }
        user.save();
        res.status(200).json({ message: "Consumption updated", user });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// get today's Breakfast
export const getBreakfast = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const today = new Date().toISOString().split('T')[0];
        let breakfast = user.breakfast.filter(breakfast => new Date(breakfast.date).toISOString().split('T')[0] === today);
        if (breakfast.length === 0) {
            breakfast = [{ date: today, name: "" }];
        }
        res.status(200).json(breakfast);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// add to today's Breakfast
export const addBreakfast = async (req, res) => {
    const {email, name, date} = req.body
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        let newdate = new Date(date);
        user.breakfast.push({ name, date:newdate });
        user.save();
        res.status(200).json({ message: "Breakfast Added", user });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// get today's Lunch
export const getLunch = async (req, res) => {
    const { email } = req.body;
    try {
    const user = await User.findOne({ email: email });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    const today = new Date().toISOString().split('T')[0];
    let lunch = user.lunch.filter(lunch => new Date(lunch.date).toISOString().split('T')[0] === today);
    if (lunch.length === 0) {
        lunch = [{ date: today, name: "" }];
    }
    res.status(200).json(lunch);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// add to today's Lunch
export const addLunch = async (req, res) => {
    const {email, name, date} = req.body
    try {
       const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        let newdate = new Date(date);
        user.lunch.push({ name, date:newdate });
        user.save();
        res.status(200).json({ message: "Lunch Added", user });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// get today's Dinner
export const getDinner = async (req, res) => {
    const { email } = req.body;
    try {
    const user = await User.findOne({ email: email });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    const today = new Date().toISOString().split('T')[0];
    let dinner = user.dinner.filter(dinner => new Date(dinner.date).toISOString().split('T')[0] === today);
    if (dinner.length === 0) {
        dinner = [{ date: today, name: "" }];
    }
    res.status(200).json(dinner);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// add to today's Dinner
export const addDinner = async (req, res) => {
    const {email, name, date} = req.body
    try {
       const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        let newdate = new Date(date);
        user.dinner.push({ name, date:newdate });
        user.save();
        res.status(200).json({ message: "dinner Added", user });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}


// get today's Snacks
export const getSnacks = async (req, res) => {
    const { email } = req.body;
    try {
    const user = await User.findOne({ email: email });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    const today = new Date().toISOString().split('T')[0];
    let snacks = user.snacks.filter(snacks => new Date(snacks.date).toISOString().split('T')[0] === today);
    if (snacks.length === 0) {
        snacks = [{ date: today, name: "" }];
    }
    res.status(200).json(snacks);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// add to today's Snacks
export const addSnacks = async (req, res) => {
    const {email, name, date} = req.body
    try {
       const user = await User .findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        let newdate = new Date(date);
        user.snacks.push({ name, date:newdate });
        user.save();
        res.status(200).json({ message: "snacks Added", user });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}


// get all meals
export const getAllMeals = async (req, res) => {

    const { email } = req.body;
    const today = new Date();
    try {
        const data =User.aggregate([
            {
              $match: {
                email: email
              },
            },
            {
              $project: {
                _id: 1,
                meals: {
                  $concatArrays: [
                    { $filter: { input: "$user.breakfast", cond: { $eq: ["$$this.date", today] } } },
                    { $filter: { input: "$user.lunch", cond: { $eq: ["$$this.date", today] } } },
                    { $filter: { input: "$user.dinner", cond: { $eq: ["$$this.date", today] } } },
                    { $filter: { input: "$user.snacks", cond: { $eq: ["$$this.date", today] } } },
                  ],
                },
              },
            },
          ]);
    
            res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}

// get consumption without date
export const getConsumptionWithoutDate = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        let consumption = user.consumption;
        res.status(200).json(consumption);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}