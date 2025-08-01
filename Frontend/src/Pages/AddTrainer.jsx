import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';


const AddTrainer = () => {
    const [trainerData, setTrainerData] = useState({
        name: "",
        email: "",
        phone: "",
        salary: "",
        dateOfJoining: "",
        address: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTrainerData({
            ...trainerData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isEmpty = Object.values(trainerData).some(field => !field.trim());
        if (isEmpty) {
            toast.error("Please fill in all fields.", {
                autoClose: 2000,
                position: "top-center"
            });
            return;
        }

        try {
            const token = localStorage.getItem('token'); 

            const response = await axios.post(
                "http://localhost:3000/add/trainer",
                trainerData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`, 
                    }
                }
            );

            console.log(response);
            if (response.data.success) {
                toast.success("Trainer added successfully!", {
                    autoClose: 2000,
                    position: "top-center"
                });
                setTrainerData({
                    name: "",
                    email: "",
                    phone: "",
                    salary: "",
                    dateOfJoining: "",
                    address: ""
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
            <ToastContainer className="index" />
            <div className="signup-left">
                <h2>Add New Trainer</h2>
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
                    <h2>Add New Trainer</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Trainer Name"
                        onChange={handleChange}
                        value={trainerData.name}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={trainerData.email}
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        onChange={handleChange}
                        value={trainerData.phone}
                    />
                    <input
                        type="text"
                        name="salary"
                        placeholder="Salary"
                        onChange={handleChange}
                        value={trainerData.salary}
                    />
                    <span>Date of Joining</span>
                    <input
                        type="date"
                        name="dateOfJoining"
                        onChange={handleChange}
                        value={trainerData.dateOfJoining}
                    />
                    <textarea
                        name="address"
                        placeholder="Address"
                        onChange={handleChange}
                        value={trainerData.address}
                    ></textarea>
                    <button type="submit" className="submit-btn">Add Trainer</button>
                </form>
            </div>
        </div>
    );
};

export default AddTrainer;
