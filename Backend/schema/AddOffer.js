import mongoose from "mongoose";

const AddOfferSchema = new mongoose.Schema({
    offerName: {
        type: String,
        required: true
    },
    lastDate: {
        type: String,
        required: true
    },
    contactCall: {
        type: String,
        required: true
    },
    contactWhatsapp: {
        type: String,
        required: true
    },
    trainer: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    registerStartDate: {  // Corrected typo here
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    offerPrice: {
        type: String,
        required: true
    },
});

const Offer = mongoose.model("Offer", AddOfferSchema);

export default Offer;
