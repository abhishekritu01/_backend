import mongoose from 'mongoose';

const schoolRecordSchema = new mongoose.Schema({
    schoolname: { type: String, required: true },
    location: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    students: { type: Number, required: true },
    teachers: { type: Number, required: true },
    classes: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    reviews: { type: Number, required: true },
    image: { type: String, required: true },
    website: { type: String, required: true },
    established: { type: Number, required: true },
    board: { type: String, required: true },
    schoolId: { type: String, required: true },
    teacherId: { type: String, required: true },
    studentId: { type: String, required: true },
});

export const SchoolRecord = mongoose.model("SchoolRecord", schoolRecordSchema);