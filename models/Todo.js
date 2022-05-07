import mongoose from "mongoose";
const todoschema = mongoose.Schema({
    todo: { type :String, required: true},
    createdAt:{
        type: Date,
        required: true,
        default: new Date()
    }
})

const Todo = mongoose.model('Todos', todoschema);
export default Todo;