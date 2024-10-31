import { userSchema } from "../model/userSchema";

const signUp=async (req,res)=>{
    try {

        const {name,email,password}=req.body

        const existingEmail =userSchema.findOne({email})

        if(existingEmail){
            return res.status(402).json({success:false,message:"account alredy created"})
        }

        


        
    } catch (error) {
        
    }
}