import express from "express";
import dotenv from "dotenv";
import cookiesParser from "cookie-parser";
import cors from "cors";

import authRoute from "./routes/authRoute.js"
import userRoutes from "./routes/userRoutes.js"
import chatRoutes from "./routes/chatRoutes.js"
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express()

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true  // allow frontend to send cookies
}));

app.use(express.json());
app.use(cookiesParser());

app.use("/api/auth",authRoute);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT 
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
    connectDB();
});