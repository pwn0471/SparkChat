import express from "express";
import dotenv from "dotenv";
import cookiesParser from "cookie-parser";

import authRoute from "./routes/authRoute.js"
import userRoutes from "./routes/userRoutes.js"
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express()

app.use(express.json());
app.use(cookiesParser());

app.use("/api/auth",authRoute);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT 
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
    connectDB();
});