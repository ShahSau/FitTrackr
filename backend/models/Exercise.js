import { Schema, model } from 'mongoose';

const ExerciseSchema = new Schema({
    id:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    excersises:[
        {
            id:{
                type: String,
                required: true
            },
            image:{
                type: String,
                required: true
            },
            name:{
                type: String,
                required: true
            },
            sets:{
                type: Number,
                required: true
            },
        }
    ]
    });

export default model('Exercise', ExerciseSchema);