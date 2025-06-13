import express from "express";
import dbConnection from "./db/dbConnection.js";
import cors from "cors";
import router from "./Routes/route.js";
import cookieParser from "cookie-parser";

const app = express();

dbConnection();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));
app.use(cookieParser());
app.use("/", router);


export default app;