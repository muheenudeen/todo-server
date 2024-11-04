import express from 'express'
import mongoose from 'mongoose'
import { userRouter } from './routes/userRouter.js'
import dotenv from 'dotenv';
import cors from 'cors'
const app=express()
app.use(express.json())
const PORT=3004
app.use(cors())
dotenv.config()
app.use('/api/user',userRouter)

app.listen(PORT,()=>{
    console.log('running');
    
})

main()
async function main(){
 await mongoose.connect('mongodb+srv://muheenudeen313:KBggrvsPnq0A8ejQ@cluster0.hhyge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
}