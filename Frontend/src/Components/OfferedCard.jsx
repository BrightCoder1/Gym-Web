import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const OfferedCard = () => {
    return (
        <div className="center">
            <h1 className='center-h1'>Latest Offered</h1>
            <div className="trainer-container">
                <a href="add/offer" className='offer'>Add Offer</a>
                <div className="trainer-card">
                    <div className="trainer-info">
                        <h4>Offer Name: XYZ</h4>
                        <p className="trainer-role">
                            Last Date : 10-06-2025
                        </p>
                        <p className="contact-numbers">
                            Contact Call: 9999999999 📞<br />
                            Contact WhatsApp: 1234567891 🟢
                        </p>
                        <p className="trainer-role">
                            Trainer: XYZ
                        </p>
                        <p className="trainer-role">
                            Email: vs0359@gmail.com
                        </p>
                        <p className="trainer-role">
                            Registration Start: 01-06-2025
                        </p>
                        <p className="trainer-role">
                            Price: 5000
                        </p>
                        <p className="trainer-role">
                            Offer Price: 1000
                        </p>
                        <div className="ed">
                            <a href="#">
                                Delete
                            </a>
                            <a href="#">
                                Edit
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OfferedCard;