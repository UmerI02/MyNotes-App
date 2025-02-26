import express from "express";
import User from '../models/user.js';
import List from '../models/list.js';
import {protectRoute} from '../middleware/auth.middleware.js'

//New Task
const router = express.Router()
router.post("/addTask", async (req,res)=>{
    try {
        const {title,body,id}=req.body;
    const existingUser = await User.findById(id)
    if(existingUser){
        const list = new List({title,body,user: existingUser})
        await list.save().then(()=>res.status(200).json({list}))
        existingUser.list.push(list)
        existingUser.save()
    } else{
            return res.status(404).json({ message: "User not found" });
    }
    } catch (error) {
        console.log("Error in list.js: ",error);
           
    }
})

// Update Task Route (without email check)
router.put("/updateTask/:id", async (req, res) => {
    try {
      const { title, body } = req.body;
  
      const updatedTask = await List.findByIdAndUpdate(
        req.params.id,
        { title, body },
        { new: true } // Returns the updated document
      );
  
      if (!updatedTask) {
        return res.status(404).json({ message: "Task not found" });
      }
  
      res.status(200).json({ message: "Task Updated", task: updatedTask });
    } catch (error) {
      console.error("Error in updateTask route:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
});


//Delete Task
router.delete("/deleteTask/:id", async (req, res) => {
    try {
      const task = await List.findByIdAndDelete(req.params.id);
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      await User.updateMany({ list: req.params.id }, { $pull: { list: req.params.id } });
      res.status(200).json({ message: "Task Deleted" });
    } catch (error) {
      console.error("Error deleting task:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });  

//getTask
router.get("/getTasks/:id", async(req,res)=>{
    const list = await List.find({user: req.params.id}).sort({createdAt:-1})
    if(list.length!==0){
        res.status(200).json({list:list})
    }else{
        res.status(200).json({message: "No Tasks"})
    }
})

export default router 

