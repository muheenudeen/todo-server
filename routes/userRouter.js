import express from 'express'
import { login, logout, signUp } from '../controller/userController.js'
import { addTodo, deleteTodo, editBlog } from '../controller/todoController.js'

export const userRouter = express.Router()

userRouter.post('/signup',signUp)
userRouter.post('/login',login)
userRouter.post('/logout',logout)

userRouter.post('/todo/:id',addTodo)
userRouter.delete('/todo/:id',deleteTodo)
userRouter.patch('/todo/:id',editBlog)

   

