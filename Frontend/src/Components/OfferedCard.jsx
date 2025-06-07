import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const OfferedCard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/classes", {
                    withCredentials: true,
                });
                setData(response.data);
            } catch (error) {
                console.error("Error fetching offers:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="center">
            <h1 className='center-h1'>Latest Offered</h1>
            <div className="trainer-container">
                <a href="/add/offer" className='offer'>Add Offer</a>
                {data.map((offer, index) => (
                    <div className="trainer-card" key={index}>
                        <div className="trainer-info">
                            <h4>Offer Name: {offer.offerName}</h4>
                            <p className="trainer-role">Last Date: {offer.lastDate}</p>
                            <p className="contact-numbers">
                                Contact Call: {offer.contactCall} <FaPhoneAlt /><br />
                                Contact WhatsApp: {offer.contactWhatsapp} <FaWhatsapp />
                            </p>
                            <p className="trainer-role">Trainer: {offer.trainer}</p>
                            <p className="trainer-role">Email: {offer.email} <FaEnvelope /></p>
                            <p className="trainer-role">Registration Start: {offer.registerStartDate}</p>
                            <p className="trainer-role">Price: ₹{offer.price}</p>
                            <p className="trainer-role">Offer Price: ₹{offer.offerPrice}</p>
                            <div className="ed">
                                <a href="#">Delete</a>
                                <a href="#">Edit</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OfferedCard;
