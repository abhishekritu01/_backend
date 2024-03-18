import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true,
        lowercase: true
    },
    bloodGroup: {
        enum : ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        required: true,
        lowercase: true
    },
    Gender: {
        enum:["male","female","other"],
        required: true,
    },
    diagnosis: {
        type: String,
        required: true,
        lowercase: true},
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true
    },
    medicalRecord: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MedicalRecord",
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

},{timestamps: true});

export const Patient = mongoose.model("Patient", patientSchema);