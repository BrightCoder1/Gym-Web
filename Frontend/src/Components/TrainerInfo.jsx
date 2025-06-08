import { useEffect, useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

const TrainerInfo = () => {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/trainers");
                setTrainers(response.data);
            } catch (error) {
                toast.error("Error fetching trainers.", {
                    autoClose: 2000,
                    position: "top-center"
                });
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this trainer?")) return;

        try {
            await axios.delete(`http://localhost:3000/delete/trainer/${id}`);
            setTrainers(prevData => prevData.filter(trainer => trainer._id !== id));
            toast.success("Trainer deleted successfully!", {
                autoClose: 2000,
                position: "top-center"
            });
        } catch (error) {
            console.error("Error deleting trainer", error);
            toast.error("Failed to delete trainer", {
                autoClose: 2000,
                position: "top-center"
            });
        }
    };


    return (
        <>
            <div className="trainer-container top2">
                <ToastContainer className="index" />
                {trainers.map((trainer, index) => (
                    <div className="trainer-card" key={index}>
                        <div className="trainer-info">
                            <h4>{trainer.name}</h4>
                            <p className="trainer-role">
                                Role: Trainer
                            </p>
                            <p className="contact-numbers">
                                📞 {trainer.phone}<br />
                                🟢 WhatsApp: {trainer.phone}
                            </p>
                            <p>Email: {trainer.email}</p>
                            <p>Salary: ₹{trainer.salary}</p>
                            <p>Date of Joining: {trainer.dateOfJoining}</p>
                            <p>Address: {trainer.address}</p>
                            <div className="ed">
                                <button className='dltbtn' onClick={() => handleDelete(trainer._id)} >Delete</button>
                                <a className='editbtn' href={`/edit/trainer/${trainer._id}`}>Edit</a>
                            </div>
                        </div>
                        <div className="trainer-actions">
                            <a href={`tel:${trainer.phone}`}>
                                <FaPhoneAlt className="icon-lg" title="Call" />
                            </a>
                            <a href={`mailto:${trainer.email}`}>
                                <FaEnvelope className="icon-lg" title="Email" />
                            </a>
                            <a href={`https://wa.me/${trainer.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="icon-lg" title="WhatsApp" />
                            </a>

                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TrainerInfo;
