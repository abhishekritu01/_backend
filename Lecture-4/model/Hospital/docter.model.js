import mongoose from "mongoose";

const hospitalHoursSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    address: {
        type: String,
        required: true,
        lowercase: true
    },
    spesiality: [
        {
            type: String,
            required: true,
            lowercase: true
        }
    ],
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    workingDays: {
        type: [String],
        required: true      
    },
},{timestamps: true});

const docterSchema =new mongoose.Schema({
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
    salary: {
        type: Number,
        required: true
    },
    qualification: {
        enum: ["MBBS", "MD", "MS", "DM", "MCH", "DNB", "BDS", "MDS", "BAMS", "BHMS", "BUMS", "BVSc", "BVSc&AH", "BUMS", "BPT", "BOT", "BMLT", "BSc", "BScN"],
        required: true,
        lowercase: true
    },
    experience: {
        type: Number,
        required: true
    },
    workInHospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true
    },
    workingHours: [hospitalHoursSchema],


},{timestamps: true});

export const Docter = mongoose.model("Docter", docterSchema);
