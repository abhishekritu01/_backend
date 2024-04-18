import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true,
    },
    complete:{
        type: Boolean,
        default: false,
    },
    // referance the user who created the todo
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo",
        },
    ],//array of subTodos

    }, { timestamps: true });

export const Todo = mongoose.model("Todo", todoSchema);