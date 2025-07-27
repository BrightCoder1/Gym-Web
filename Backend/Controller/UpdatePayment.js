import Member from "../model/Member.js";

export const UpdatePayment = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const updateFess = await Member.findByIdAndUpdate(id, data, { new: true });

        if (!updateFess) {
            return res.status(404).json({
                success: false,
                message: "Member not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Member updated successfully!",
            data: updateFess
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
};
