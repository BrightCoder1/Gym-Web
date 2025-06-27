import Admin from "../model/AdminSchema.js";
import jwt from "jsonwebtoken";

export const AdminController = async (req, res) => {
    try {
        const { email, password, name, phone, address } = req.body;

        const response = await Admin.create({
            email,
            password,
            name,
            phone,
            address
        });

        const token = await response.generateToken();
        console.log("Token", token);

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });

        res.status(200).json({
            success: true,
            message: "Added new Admin successfully!",
            token
        });

    } catch (error) {
        console.error("Admin Registration Error:", error);
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
};


export const LoginController = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Admin.findOne({ email: email });

        if (!user || user.password !== password) {
            return res.status(404).json({
                success: false,
                message: "Invalid Email or Password"
            });
        }

        const token = jwt.sign(
            { _id: user._id, email: user.email },
            process.env.KEY,
            { expiresIn: "1d" }
        )
        console.log(token);

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })

        return res.status(200).json({
            success: true,
            message: "User logged in successfully!",
            token,
        });
        
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({
            success: false,
            message: "Server error. Please try again."
        });
    }
}

