import Admin from "../schema/AdminSchema.js";

export const AdminController = async (req, res) => {
    try {
        const { email, password, name, phone, address } = req.body;

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
}


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
}