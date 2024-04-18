
import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    studentname: { type: String, required: true },
    rollno: { type: Number, required: true },
    classes: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    reviews: { type: Number, required: true },
    image: { type: String, required: true },
    established: { type: Number, required: true },
    board: { type: String, required: true },
    location: { type: String, required: true },
    schoolname: { type: String, required: true },
    schoolId: { type: String, required: true },
    studentId: { type: String, required: true },

});

export const Student = mongoose.model("Student", studentSchema);
