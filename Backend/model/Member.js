import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    fess: {
        type: String
    }
});

const Member = mongoose.model('Member', MemberSchema);

export default Member;