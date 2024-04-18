import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema({

    schoolname: { type: String, required: true, },
    location: {
        type: String, required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    students: {
        type: Number,
        required: true,
    },
    teachers: {
        type: Number,
        required: true,
    },
    classes: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    reviews: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        required: true,
    },
    established: {
        type: Number,
        required: true,
    },
    board: {
        type: String,
        required: true,
    },
    medium: {
        type: String,
        required: true,
    },
    facilities: {
        type: String,
        required: true,
    },
    admission: {
        type: String,
        required: true,
    },
    affiliation: {
        type: String,
        required: true,
    },
    recognition: {
        type: String,
        required: true,
    },
    certification: {
        type: String,
        required: true,
    },
    awards: {
        type: String,
        required: true,
    },
    achievements: {
        type: String,
        required: true,
    },
    gallery: {
        type: String,
        required: true,
    },
    video: {
        type: String,
        required: true,
    },
    social: {
        type: String,
        required: true,
    },
    reviews: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
});

export default mongoose.model("school", schoolSchema)