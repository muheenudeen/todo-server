import mongoose from "mongoose";

const todoSchemas=new mongoose.Schema({
    
    title:{type:String, require:true},
    description:{type:String}


})

export const todoSchema = mongoose.model('todo',todoSchemas)