import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const AddOfferForm = () => {
    const [offerData, setOfferData] = useState({
        offerName: "",
        lastDate: "",
        contactCall: "",
        contactWhatsapp: "",
        trainer: "",
        email: "",
        registrationStart: "",
        price: "",
        offerPrice: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOfferData({
            ...offerData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isEmpty = Object.values(offerData).some(field => !field.trim());
        if (isEmpty) {
            toast.error("Please fill in all fields.", {
                autoClose: 2000,
                position: "top-center"
            });
            return;
        }

        try {
            const response = await axios.post("http://localhost:3000/offer", offerData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.data.success) {
                toast.success("Offer added successfully!", {
                    autoClose: 2000,
                    position: "top-center"
                });
                setOfferData({
                    offerName: "",
                    lastDate: "",
                    contactCall: "",
                    contactWhatsapp: "",
                    trainer: "",
                    email: "",
                    registrationStart: "",
                    price: "",
                    offerPrice: ""
                });
            }
        } catch (error) {
            toast.error("Error submitting the form.", {
                autoClose: 2000,
                position: "top-center"
            });
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-left">
                <h2>Add New Offer For User.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                <div className="bottom-links">
                    <div className="lang-select">
                        <img src="https://flagcdn.com/w40/us.png" alt="US Flag" />
                        <span>English</span>
                    </div>
                    <div className="footer-links">
                        <a href="#">Terms</a>
                        <a href="#">Plans</a>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
            </div>

            <div className="signup-right">
                <form className="signup-form" onSubmit={handleSubmit}>
                    <h2>Add New Offer</h2>
                    <input
                        type="text"
                        name="offerName"
                        placeholder="Offer Name"
                        onChange={handleChange}
                        value={offerData.offerName}
                    />
                    <span>Last Date</span>
                    <input
                        type="date"
                        name="lastDate"
                        placeholder="Last Date"
                        onChange={handleChange}
                        value={offerData.lastDate}
                    />
                    <input
                        type="text"
                        name="contactCall"
                        placeholder="Contact Call"
                        onChange={handleChange}
                        value={offerData.contactCall}
                    />
                    <input
                        type="text"
                        name="contactWhatsapp"
                        placeholder="Contact WhatsApp"
                        onChange={handleChange}
                        value={offerData.contactWhatsapp}
                    />
                    <input
                        type="text"
                        name="trainer"
                        placeholder="Trainer Name"
                        onChange={handleChange}
                        value={offerData.trainer}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={offerData.email}
                    />
                    <span>Registration Start</span>
                    <input
                        type="date"
                        name="registrationStart"
                        placeholder="Registration Start"
                        onChange={handleChange}
                        value={offerData.registrationStart}
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Original Price"
                        onChange={handleChange}
                        value={offerData.price}
                    />
                    <input
                        type="number"
                        name="offerPrice"
                        placeholder="Offer Price"
                        onChange={handleChange}
                        value={offerData.offerPrice}
                    />
                    <button type="submit" className="submit-btn">Add Offer</button>
                </form>
            </div>
        </div>

    );
};

export default AddOfferForm;
