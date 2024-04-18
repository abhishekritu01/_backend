import mongoose from 'mongoose';


const teacherSchema = new mongoose.Schema({
    teachername: { type: String, required: true },
    subject: { type: String, required: true },
    classes: { type: String, required: true },
    students: { type: Number, required: true },
    experience: { type: Number, required: true },
    salary: { type: Number, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    reviews: { type: Number, required: true },
    image: { type: String, required: true },
    website: { type: String, required: true },
    established: { type: Number, required: true },
    board: { type: String, required: true },
    location: { type: String, required: true },
    schoolname: { type: String, required: true },
    schoolId: { type: String, required: true },
    teacherId: { type: String, required: true },

});


export const Teacher = mongoose.model("Teacher", teacherSchema);