import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  consumption:[
    {
        calories:{
            type: Number,
            default: 0
        },
        protein:{
            type: Number,
            default: 0
        },
        fat:{
            type: Number,
            default: 0
        },
        protein:{
            type: Number,
            default: 0
        },
    }
  ],
  breakfast:[],
  lunch:[],
  dinner:[],
  snacks:[],
  BurntCalories:{
    type: Number,
    default: 0
  },
  workout:[
    {
        name:{
            type: String,
            required: true
        },
        calories:{
            type: Number,
            default: 0
        },
        duration:{
            type: Number,
            default: 0
        },
        date:{
            type: Date,
            default: Date.now
        }
    }
  ],
  
});

export default model('User', UserSchema);