import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: String,
        username1: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
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
        }
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);
