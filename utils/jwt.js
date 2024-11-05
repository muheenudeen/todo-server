import jwt from 'jsonwebtoken'

export const generateToken = (userId) =>{
    return jwt.sign({_id: userId},process.env.JWY_SECRET,{expiresIn:'1h'})}