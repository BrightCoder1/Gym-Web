import Trainer from "../model/Trainer.js";

export const TrainerController = async (req, res) => {
    try {
        const { name, email, phone, salary, dateOfJoining, address } = req.body;

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
}


export const UpdateTrainer = async (req, res) => {
    try {
        const { id } = req.params;
        console.log({ id });
        const updateFields = req.body;

        try {
            const updateTrainer = await Trainer.findByIdAndUpdate(
                id,
                updateFields,
                {
                    new: true
                }
            );

            res.status(200).json({
                success: true,
                message: "Update Successfully!",
                data: updateTrainer
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error updating offer',
                error: error.message
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
}


export const DeleteTrainer = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTrainer = await Trainer.findByIdAndDelete(id);

        if (!deletedTrainer) {
            return res.status(404).json({ success: false, message: "Trainer not found" });
        }

        res.status(200).json({
            success: true,
            message: "Trainer deleted successfully!"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
}

export const GetTrainer = async (req, res) => {
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
}

export const GetTrainerById = async (req, res) => {
    try {
        const { id } = req.params;

        const trainer = await Trainer.findById(id);

        if (!trainer) {
            return res.status(404).json({ success: false, message: "Offer not found" });

        }

        res.status(200).json(trainer);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        })
    }
}