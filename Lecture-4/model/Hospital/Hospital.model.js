import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name: {
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
    email: {
        type: String,
        required: true,
    },
    beds: {
        type: Number,
        required: true,
    },
    oxygen: {
        type: Boolean,
        required: true,
    },
    ventilator: {
        type: Boolean,
        required: true,
    },
    icu: {
        type: Boolean,
        required: true,
    },
    isolation: {
        type: Boolean,
        required: true,
    },
    isolationBeds: {
        type: Number,
        required: true,
    },
    doctors: {
        type: Number,
        required: true,
    },
    nurses: {
        type: Number,
        required: true,
    },
    ambulances: {
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
    image: {
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
    website: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "completed", "cancelled", "delivered"],
        default: "pending"
    }

}, { timestamps: true });

export const Hospital = mongoose.model("Hospital", hospitalSchema);