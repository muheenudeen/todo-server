import express from 'express'
import { login, signUp } from '../controller/userController.js'

export const userRouter = express.Router()

userRouter.post('/signup',signUp)
userRouter.post('/login',login)