import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import {errorHandler} from '../utils/error.js'
import jwt from 'jsonwebtoken'

export const signup = async (req,res,next) =>{
const {username,email,password} = req.body;
const hashedPassword = bcryptjs.hashSync(password,10);
const newUser = new User ({username,email,password:hashedPassword});
try{
    await newUser.save();
    res.status(202).json({message :"User created successfully!"})
} catch(err){
    next(err);
}


}


export const signin =async(req,res,next)=>{
    const {email,password} =req.body;
    try {
        const validUser =await User.findOne({email});
        // console.log(validUser)
        if(!validUser) return next(errorHandler(404,"User Not Found"));
        const validPassword = bcryptjs.compareSync(password,validUser.password);
        if(!validPassword) return next(errorHandler(401,"Wrong Credential"));
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET);
        const {password:hashedPassword,...rest} = validUser._doc;
        const expiryDate = new Date(Date.now() + 3600000); // 1 hour
        console.log(rest);
        res.cookie('Access_Token',token,{ httpOnly: true, expires: expiryDate }).status(200).json(rest);
    } catch (error) {
        next(error);
    }
}
