import express, { text } from "express";
import dbConnection from "./db/dbConnection.js";
import cors from "cors";
import Contact from "./schema/ContactSchema.js";
import Admin from "./schema/AdminSchema.js";
import nodemailer from "nodemailer";

const app = express();

dbConnection();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,     // Your Gmail address
                pass: process.env.PASS  // App password or Gmail password
            }
        });

        // Email to Admin
        const adminMail = {
            from: email,
            to: process.env.EMAIL,
            subject: `Contact from ${name} by Gym.com contact form`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        // Confirmation email to user
        const userMail = {
            from: process.env.EMAIL,
            to: email,
            subject: "Your Email has been recive.",
            text: `Hi ${name},\n\nThanks for contacting us! We've received your message and our team will respond soon.\n\n- Gym Trainer`
        };

        // Send both emails
        await transporter.sendMail(adminMail);
        await transporter.sendMail(userMail);

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


app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    // console.log({email, password})
    const dataFetch = await Admin.find({ email: email });
    console.log(dataFetch);

});
export default app;