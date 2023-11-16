import mongoose from "mongoose";

const { validateEmail, validatePassword, validateFullName } = require("./app/services/user-service");


const userSchema = new mongoose.Schema(
    {
    email: {
       type: String,
       required: true,
       unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    }
    ,
    joined: { type: Date, default: Date.now },
  });
  
  export const User = mongoose.model("user", userSchema);