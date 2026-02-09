import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express()


app.get("/",(req,res)=>{
    res.send("hello page is working");
});

const PORT = process.env.PORT 
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
});