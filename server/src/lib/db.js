import mongoose from "mongoose";

export const connectDB = async() =>{
    try{
        const conn = await mongoose.connect(process.env.MOGNO_URI);
        console.log(`MongoDB is connected : ${conn.connection.host}`);
    }catch(error){
        console.log("failed to connect db",error);
        process.exit(1);
    }
    
}