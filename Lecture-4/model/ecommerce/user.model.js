import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        // required: [true, "Password is required"],
        minlength: 6,
    }


}, { timespam: true });

export const User = mongoose.model("User", userSchema);