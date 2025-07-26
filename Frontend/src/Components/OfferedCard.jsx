import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const OfferedCard = () => {
    const [data, setData] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get("http://localhost:3000/classes", {
                    withCredentials: true,
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setData(response.data);
            } catch (error) {
                console.error("Error fetching offers:", error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this offer?")) return;

        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:3000/delete/${id}`, {
                withCredentials: true,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setData(prevData => prevData.filter(offer => offer._id !== id));
        } catch (error) {
            console.error("Error deleting offer:", error);
        }
    };

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
                                <button className='dltbtn' onClick={() => handleDelete(offer._id)}>Delete</button>
                                <a className='editbtn' href={`/edit/offer/${offer._id}`}>Edit</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OfferedCard;
