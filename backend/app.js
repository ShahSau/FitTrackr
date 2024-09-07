import express, { json } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/user.js';
import exercisesRoutes from './routes/exercises.js';
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/exercises', exercisesRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;  // Export app for testing purposes
