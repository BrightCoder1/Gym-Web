import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectionURL = process.env.URL;

const dbConnection =async () =>{
    try {
        await mongoose.connect(connectionURL);
        console.log("Database Connection True.....");
    } catch (error) {
        console.log("Error", error);
        return error;
    }
}

export default dbConnection;