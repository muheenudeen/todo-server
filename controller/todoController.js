import { todoSchema } from "../model/todoSchemas.js"
import { userSchema } from "../model/userSchema.js"


export const addTodo =async (req,res)=>{
    try {
        const userId=req.params.id
        const {title,descripeton}=req.body

       const user=await userSchema.findOne({_id:userId})
       
       if(!user){
        return res.status(401).json({success:false,message:'user not found'})

       }

       const newData=await todoSchema ({
        title,
        descripeton,
        _id:userId

       })

       await newData.save()

       res.status(200).json({success:false, message:'todo added compleet',newData})


    } catch (error) {
        return res.status(500).json({success:false, message:`${error.message}`})

    }
}


export const deleteTodo = async (req,res)=>{
    try {
        const userId=req.params.id

        const user=await todoSchema.findById(userId)
        if(!user){
            return res.status(402).json({success:false, message:'user not found'})

        }

        const deleteTodo =await todoSchema.findByIdAndDelete(userId)

        res.status(200).json({success:true, message:'delet compleet'})

    } catch (error) {
        return res.status(500).json({success:false, message:`${error.message}`})

    }
}

export const editBlog =async (req,res)=>{

    try {
        const userId= req.params.id
        const {title,descripeton}=req.body

        const user=await todoSchema.findById(userId)

        if(!user){
            return res.status(402).json({success:false,message:'user no found'})
        }


       const edited =await todoSchema.findByIdAndUpdate(userId,{title,descripeton},{new:true})

        // await edited.save()

        res.status(200).json({success:true, message:edited})
        
    } catch (error) {
        return res.status(500).json({success:false, message:`${error.message}`})

    }
}