import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique: true
    },
    username:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    list: [{
        type:mongoose.Types.ObjectId,
        ref:"List"
    }]
})

const List= mongoose.model("User", userSchema)
export default  List;