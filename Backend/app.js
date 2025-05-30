import express from "express";
import dbConnection from "./db/dbConnection.js";
import cors from "cors";
import Contact from "./schema/ContactSchema.js";


const app = express();

dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));

// app.get("/", (req, res) => {
//     res.status(200).send("Hello");
// })

// create contact route
app.post("/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const data = await Contact({
            name,
            email,
            message
        })
        const datatest = await data.save();
        console.log(datatest);

        res.status(200).json({
            success: true,
            message: "Form submit Successfully!..."
        })

    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Invernale Server Error!...."
        })
    }
})

export default app;