import mongoose from "mongoose";


const TrainerModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    dateOfJoining: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})


const Trainer = mongoose.model("Trainer", TrainerModel);

export default Trainer;