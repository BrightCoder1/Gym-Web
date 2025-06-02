import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const trainers = [
    {
        name: "Caesar Vance",
        role: "Gym Trainer",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        phone: "+91 9876543210",
        whatsapp: "+91 9876543210"
    },
    {
        name: "Kevin Spacey",
        role: "Gym Trainer",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        phone: "+91 9123456789",
        whatsapp: "+91 9123456789"
    },
    {
        name: "Ralph Waters",
        role: "Gym Trainer",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        phone: "+91 9988776655",
        whatsapp: "+91 9988776655"
    },
    {
        name: "Jimmy Chang",
        role: "Gym Trainer",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
        phone: "+91 8899776655",
        whatsapp: "+91 8899776655"
    },
    {
        name: "Lois Hughes",
        role: "Gym Trainer",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
        phone: "+91 7766554433",
        whatsapp: "+91 7766554433"
    },
    {
        name: "Noelle Harper",
        role: "Gym Trainer",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
        phone: "+91 6655443322",
        whatsapp: "+91 6655443322"
    },
    {
        name: "Sasha Grey",
        role: "Gym Trainer",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
        phone: "+91 9871112223",
        whatsapp: "+91 9871112223"
    },
    {
        name: "Marcus Lee",
        role: "Gym Trainer",
        image: "https://randomuser.me/api/portraits/men/9.jpg",
        phone: "+91 9765432100",
        whatsapp: "+91 9765432100"
    }
];

const TrainerInfo = () => {
    return (
        <div className="trainer-container">
            {trainers
                // Uncomment this line to show only gym trainers
                // .filter(trainer => trainer.role.toLowerCase().includes("gym"))
                .map((trainer, index) => (
                    <div className="trainer-card" key={index}>
                        <img src={trainer.image} alt={trainer.name} className="trainer-img" />
                        <div className="trainer-info">
                            <h4>{trainer.name}</h4>
                            <p className={`trainer-role ${trainer.role.toLowerCase().includes("gym") ? "gym-role" : ""}`}>
                                {trainer.role}
                            </p>
                            <p className="contact-numbers">
                                📞 {trainer.phone}<br />
                                🟢 WhatsApp: {trainer.whatsapp}
                            </p>
                        </div>
                        <div className="trainer-actions">
                            <a href={`tel:${trainer.phone}`}>
                                <FaPhoneAlt className="icon-lg" title="Call" />
                            </a>
                            <a href={`mailto:${trainer.name.replace(" ", "").toLowerCase()}@example.com`}>
                                <FaEnvelope className="icon-lg" title="Email" />
                            </a>
                            <a href={`https://wa.me/${trainer.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="icon-lg" title="WhatsApp" />
                            </a>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default TrainerInfo;
