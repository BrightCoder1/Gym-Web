import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const EditOffer = () => {
    const { id } = useParams();
    console.log({ id });
    const [offerData, setOfferData] = useState({
        offerName: "",
        lastDate: "",
        contactCall: "",
        contactWhatsapp: "",
        trainer: "",
        email: "",
        registerStartDate: "",
        price: "",
        offerPrice: ""
    });

    useEffect(() => {
        const fetchOfferData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:3000/classes/${id}`, {
                    withCredentials: true,
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                console.log("response give:", response);
                setOfferData(response.data);
            } catch (error) {
                console.error("Error fetching offer:", error);
                toast.error(error);
            }
        };
        fetchOfferData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOfferData({
            ...offerData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token');
            const response = await axios.put(`http://localhost:3000/edit/offer/${id}`, offerData, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.data.success) {
                toast.success("Offer updated successfully!", {
                    autoClose: 2000,
                    position: "top-center"
                });
            }
        } catch (error) {
            toast.error("Error updating the offer.", {
                autoClose: 2000,
                position: "top-center"
            });
        }
    };

    return (
        <div className="signup-container">
            <ToastContainer className="index" />
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
                <form className="signup-form" method="post" onSubmit={handleSubmit}>
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
                        name="registerStartDate"
                        placeholder="Registration Start"
                        onChange={handleChange}
                        value={offerData.registerStartDate}
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

export default EditOffer;
