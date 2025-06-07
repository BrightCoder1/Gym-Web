import express, { text } from "express";
import dbConnection from "./db/dbConnection.js";
import cors from "cors";
import Contact from "./schema/ContactSchema.js";
import Admin from "./schema/AdminSchema.js";
import nodemailer from "nodemailer";
import Member from "./schema/Member.js";
import Offer from "./schema/AddOffer.js";
import Trainer from "./schema/Trainer.js";

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
            message,
            dateSend: Date.now()
        })

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
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



// create message route
app.get("/message", async (req, res) => {
    try {
        const data = await Contact.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
})


// Member Add Route
app.post("/add/member", async (req, res) => {
    try {
        const { email, password, name, phone, address } = req.body;

        const newMember = await Member({
            email,
            name,
            phone,
            address
        });

        await newMember.save();

        res.status(200).json({
            success: true,
            message: "New Member added Successfully!"
        });

    } catch (error) {
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});



app.get("/members", async (req, res) => {
    try {
        const data = await Member.find({});
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
});


// Add Offer Route
app.post("/add/offer", async (req, res) => {
    try {
        const { offerName, lastDate, contactCall, contactWhatsapp, registerStartDate, trainer, email, price, offerPrice } = req.body;

        const response = new Offer({
            offerName,
            lastDate,
            contactCall,
            contactWhatsapp,
            registerStartDate,
            trainer,
            email,
            price,
            offerPrice
        });

        await response.save();

        res.status(200).json({
            success: true,
            message: "New Offer Added Successfully"
        });
    } catch (error) {
        console.error("Error saving offer:", error);
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
});

app.get("/classes", async (req, res) => {
    try {
        const response = await Offer.find({});
        console.log(response);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
});


app.post("/add/trainer", async (req, res) => {
    try {
        const { name, email, phone, salary, dateOfJoining, address } = req.body;

        // console.log({ name, email, phone, salary, dateOfJoining, address });

        const response = await Trainer.create({
            name, email, phone, salary, dateOfJoining, address
        });

        await response.save();

        res.status(200).json({
            success: true,
            message: "New Offer Added Successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
})


app.get("/trainers", async (req, res) => {
    try {
        const trainers = await Trainer.find({});
        res.status(200).json(trainers);
    } catch (error) {
        console.error("Error fetching trainers:", error);
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
});



// add admin
app.post("/new/admin", async (req, res) => {
    try {
        const { email, password, name, phone, address } = req.body;
        // console.log({ email, password, name, phone, address })

        const response = await Admin.create({
            email,
            password,
            name,
            phone,
            address
        })
        await response.save();

        res.status(200).json({
            success: true,
            message: "Add new Admin Successfully!"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
})


app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Admin.findOne({ email: email });

        if (!user || user.password !== password) {
            return res.status(404).json({
                success: false,
                message: "Invalid Email or Password"
            });
        }

        return res.status(200).json({
            success: true,
            message: "User logged in successfully!"
        });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({
            success: false,
            message: "Server error. Please try again."
        });
    }
});



export default app;