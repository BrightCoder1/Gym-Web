import Contact from "../model/ContactSchema.js";
import Member from "../model/Member.js";


export const MemberController = async (req, res) => {
    try {
        const data = await Contact.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}


export const AddMember = async (req, res) => {
    try {
        const { email, name, phone, address } = req.body;

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
}


export const GetMember = async (req, res) => {
    try {
        const data = await Member.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
}

export const MemberProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const memberData = await Member.findById(id);

        if (!memberData) {
            return res.status(404).json({ success: false, message: "Member not found" });
        }

        res.status(200).json({ success: true, data: memberData });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
}


export const MemberGet = async (req, res) => {
    try {
        const { id } = req.params;
        const member = await Member.findById(id);

        if (!member) {
            return res.status(404).json({
                success: false,
                message: "Member not found"
            });
        }

        res.status(200).json(member);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
}


export const MemberEdit = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedMember = await Member.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedMember) {
            return res.status(404).json({
                success: false,
                message: "Member not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Member updated successfully!",
            data: updatedMember
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
}

export const MemberDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMember = await Member.findByIdAndDelete(id);

        if (!deletedMember) {
            return res.status(404).json({ success: false, message: "Member not found" });
        }

        res.status(200).json({
            success: true,
            message: "Member deleted successfully!"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
};

export const LogoutUser = async (req, res) => {
    try {
        res.clearCookie('token');
        return res.status(200).json({ success: true, message: "Logged out successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Logout failed", error: error.message });
    }
};
