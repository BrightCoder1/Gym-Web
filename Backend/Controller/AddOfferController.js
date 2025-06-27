import Offer from "../model/AddOffer.js";

export const AddOfferController = async (req, res) => {
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
}


export const EditOffer = async (req, res) => {
    const { id } = req.params;
    console.log({ id });
    const updateFields = req.body;

    console.log(updateFields);

    try {
        const updatedOffer = await Offer.findByIdAndUpdate(id, updateFields, { new: true });
        res.status(200).json({
            success: true,
            message: 'Offer updated successfully',
            data: updatedOffer
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating offer',
            error: error.message
        });
    }
}


export const DeleteOffer = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedOffer = await Offer.findByIdAndDelete(id);

        if (!deletedOffer) {
            return res.status(404).json({ success: false, message: "Offer not found" });
        }

        res.status(200).json({ success: true, message: "Offer deleted successfully" });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting offer',
            error: error.message
        });
    }
}


export const OfferFind = async (req, res) => {
    try {
        const response = await Offer.find({});
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
}


export const OfferFindByID = async (req, res) => {
    try {
        const { id } = req.params;
        const offer = await Offer.findById(id);
        if (!offer) {
            return res.status(404).json({ success: false, message: "Offer not found" });
        }
        res.status(200).json(offer);
    } catch (error) {
        console.error("Error fetching offer:", error);
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
}