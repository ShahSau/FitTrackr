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
        sodium:{
            type: Number,
            default: 0
        },
        date:{
            type: Date,
        }
    }
  ],
  breakfast:[
    {
        name:{
            type: String,
            default: ""
        },
        date:{
          type: Date,
        }
    }
  ],
  lunch:[
    {
      name:{
          type: String,
          default: ""
      },
      date:{
        type: Date,
      }
  }
  ],
  dinner:[
    {
      name:{
          type: String,
          default: ""
      },
      date:{
        type: Date,
      }
  }
  ],
  snacks:[
    {
      name:{
          type: String,
      },
      date:{
        type: Date,
      }
  }
  ],
  BurntCalories:[
    {
        calories:{
            type: Number,
            default: 0
        },
        date:{
            type: Date,
        }
    }
  ],
  workout:[
    {
        name:{
            type: String,
            required: true
        },
        numberofsets:{
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
  token: {
    type: String,
  },
  
});

export default model('User', UserSchema);