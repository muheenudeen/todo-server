import { userSchema } from "../model/userSchema.js";
import { bcryptData } from "../utils/bcrypt.js";
import { generateToken } from "../utils/jwt.js";



export const signUp=async (req,res)=>{
    try {

        const {name,email,password}=req.body

        const existingEmail =await userSchema.findOne({email})

        if(existingEmail){
            return res.status(400).json({success:false,message:"account alredy created"})
        }

        
        const hashedPassword = await bcryptData.hashedPassword(password)

        const user = new userSchema({
            name,
            email,
            password:hashedPassword
        })

       await user.save()

       res.status(200).json({success:true, message:"signing compleet", user})


        
    } catch (error) {

        return res.status(500).json({success:false, message:`${error.message}`})
    }
}

export const login =async (req,res)=>{
    try {

        const {email,password}= req.body
        
        const user = await userSchema.findOne({email})

        if(!user){
            return res.status(401).json({success:false, message:'not valid'})
        }

        const comparePassword =await bcryptData.comparePassword(password,user.password)

        if(!comparePassword){
            return res.status(400).json({success:false, message:'password incorrect'})
        }

        const token = generateToken(user._id);
        console.log(token);
        

        return req.status(200).json({success:true, message:"login successfull", token, data:user})
        

    } catch (error) {
        return res.status(500).json({success:false, message:`error ${error.message}`})
        
    }
}