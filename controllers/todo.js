import { ObjectId } from "bson";
import mongoose from "mongoose";
import Todo from "../models/Todo.js";

export const saveTodo = async (req, res)=>{
    const {todo} = req.body;

    try {
        await Todo.create({todo})
        res.status(201).json({message:"Created todo"})
        
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

export const getAll = async (req, res)=> {

    try {
        const result = await Todo.find()
        if(!result) return res.status(401).json({message:'Error Occured'})
        res.status(200).json(result)
    } catch (error) {
        
    }

}

export const getTodo = async (req, res)=> {
        const { id } = req.body;
    try {
        const result = await Todo.findOne({_id: ObjectId(id)})
        if(!result) return res.status(401).json({message:'Error Occured'})
        res.status(200).json(result)
    } catch (error) {
        
    }

}

export const updateTodo = async (req, res)=> {
    const { id, todo } = req.body;
try {
    const result = await Todo.findOneAndUpdate({_id: ObjectId(id)}, {todo: todo})
    if(!result) return res.status(401).json({message:'Not updated'})
    res.status(200).json(result)
} catch (error) {
    
}

}

export const deleteTodo = async (req, res)=> {
    const { id } = req.body;
try {
    const result = await Todo.deleteOne({_id: ObjectId(id)})
    if(!result) return res.status(401).json({message:'Not Deleted'})
    res.status(200).json(result)
} catch (error) {
    
}

}