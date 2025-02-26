import express from 'express'
import User from '../models/user.js'
import {generateToken} from '../lib/utils.js'
import bcrypt from 'bcrypt'

const router=express.Router()
//Sign Up
router.post("/register", async(req,res)=>{
    try{
        const {email,username,password} = req.body;
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        const user = new User({email,username,password:hashedPassword})
        generateToken(user._id,res)
        await user.save().then(()=>
            res.status(200).json({user:user})

        )
    }catch(error){
        console.log("Error in auth.js: ",error)
        res.status(400).json({message: "User already exists"})
    }
})

//Log In
router.post("/signin", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ message: "Please sign up first" });
        }

        const checkPassword = await bcrypt.compare(req.body.password, user.password); // <-- Await here!
        if (!checkPassword) {
            return res.status(400).json({ message: "Invalid password" });
        }

        generateToken(user._id, res);
        const { password, ...others } = user._doc; // Exclude password from the response
        res.status(200).json({
            message: "Logged in Successfully",
            others
        });
    } catch (error) {
        console.error("Error in auth.js: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


//Log Out: res.cookie("jwt","", {maxAge:0})

export default router
