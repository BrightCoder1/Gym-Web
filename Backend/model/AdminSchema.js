import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
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
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});

AdminSchema.methods.generateToken = async function () {
    const token = jwt.sign(
        { _id: this._id.toString() },
        process.env.KEY
    );
    this.tokens = this.tokens.concat({ token });
    await this.save();
    return token;
};


const Admin = mongoose.model("Admin", AdminSchema);

export default Admin;