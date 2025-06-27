import jwt from "jsonwebtoken";
import Admin from "../model/AdminSchema.js";
import dotenv from "dotenv";
dotenv.config();

export const auth = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        const decoded = jwt.verify(token, process.env.KEY).selct("-password");
        const user = await Admin.findById(decoded._id);

        if (!user) {
            return res.status(401).json({ message: "Unauthorized: User (User Not Found)." });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};



// Controller user is Authenticated or not
export const AuthCheck = (req, res) => {
    req.json({
        success: true,
        user: req.user
    })
}