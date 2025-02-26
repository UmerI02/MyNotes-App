import express from "express"
import dotenv from "dotenv"
import {connectDB} from "./lib/db.js";
import auth from './routes/auth.js'
import list from './routes/list.js'
import cookieParser from "cookie-parser";
import cors from 'cors'

dotenv.config()
const app = express();
app.use(cors())
app.use(express.json()); // Middleware to parse JSON
app.use(express.urlencoded({ extended: true })); // Middleware to parse form data

app.use(cookieParser());
const PORT_NUM = process.env.PORT_NUM;

app.use("/api/v1", auth)
app.use("/api/v2", list)
app.listen(PORT_NUM, ()=>{
    console.log(`Listening on port:${PORT_NUM}`);
    connectDB()
})

app.get("/",(req,res)=>{
    res.send("Hello");
});
