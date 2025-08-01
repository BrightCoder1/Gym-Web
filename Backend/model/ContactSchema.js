import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    dateSend: {
        type: Date,
        required: true
    }
});

const Contact = mongoose.model("Contact", ContactSchema);
export default Contact;