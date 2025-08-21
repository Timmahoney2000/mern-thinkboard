import dotenv from 'dotenv';
dotenv.config();

console.log('DB ENV:', process.env.MONGODB_URI);


import mongoose from "mongoose";
// import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });


export const connectDB = async () => {
    try {
       await mongoose.connect(process.env.MONGODB_URI);

console.log("MongoDB connected successfully")    

} catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
        }
    };