import mongoose from "mongoose";

const userSchemas=new mongoose.Schema({

    name:{
        type:String,

    },
    email:{
        type:String,
        require:true
    },
    password:{

        type:String,   
        require:true
    }
})

export const userSchema=mongoose.model('user',userSchemas)