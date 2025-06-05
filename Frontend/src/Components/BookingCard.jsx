import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const bookings = [
    {
        name: "Vishal Kumar",
        duration: "30 days",
        phone: "9999999999",
        whatsapp: "1234567891",
        trainer: "XYZ",
        email: "vs0359@gmail.com",
        regDate: "12-04-2025",
        lastDate: "12-05-2025",
        payment: "10000 paid ✅"
    },
    {
        name: "Anjali Singh",
        duration: "15 days",
        phone: "8888888888",
        whatsapp: "1122334455",
        trainer: "ABC",
        email: "anjali.singh@example.com",
        regDate: "01-06-2025",
        lastDate: "16-06-2025",
        payment: "5000 pending ❌"
    },
    {
        name: "Rahul Verma",
        duration: "60 days",
        phone: "7777777777",
        whatsapp: "9988776655",
        trainer: "PQR",
        email: "rahul.v@example.com",
        regDate: "15-05-2025",
        lastDate: "15-07-2025",
        payment: "12000 paid ✅"
    }
];

const BookingCard = () => {
    return (
        <div className="center">
            <h1 className="center-h1">All Booking</h1>
            <div className="trainer-container">
                {bookings.map((booking, index) => (
                    <div className="trainer-card" key={index}>
                        <div className="trainer-info">
                            <h4>Name: {booking.name}</h4>
                            <p className="trainer-role">Duration: {booking.duration}</p>
                            <p className="contact-numbers">
                                {booking.phone} 📞<br />
                                WhatsApp: {booking.whatsapp} 🟢
                            </p>
                            <p className="trainer-role">Trainer: {booking.trainer}</p>
                            <p className="trainer-role">Email: {booking.email}</p>
                            <p className="trainer-role">Registration Date: {booking.regDate}</p>
                            <p className="trainer-role">Last Date: {booking.lastDate}</p>
                            <p className="trainer-role">Payment: {booking.payment}</p>
                        </div>
                        <div className="trainer-actions">
                            <a href={`tel:${booking.phone}`}>
                                <FaPhoneAlt className="icon-lg" title="Call" />
                            </a>
                            <a href={`mailto:${booking.email}`}>
                                <FaEnvelope className="icon-lg" title="Email" />
                            </a>
                            <a href={`https://wa.me/${booking.whatsapp}`} target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="icon-lg" title="WhatsApp" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookingCard;
