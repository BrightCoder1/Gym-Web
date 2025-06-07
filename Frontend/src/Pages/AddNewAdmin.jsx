import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';


const AddNewAdmin = () => {
    const [userdata, setUserData] = useState({
        email: "",
        password: "",
        name: "",
        phone: "",
        confirmPassword: "",
        address: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserData({
            ...userdata,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password, name, phone, confirmPassword, address } = userdata;

        if (!email.trim() || !password.trim() || !name.trim() || !phone.trim() || !confirmPassword.trim() || !address.trim()) {
            toast.error("Please fill out all the fields.", {
                autoClose: 2000,
                position: "top-center"
            });
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match.", {
                autoClose: 2000,
                position: "top-center"
            });
            return;
        }

        try {
            const response = await axios.post("http://localhost:3000/new/admin"
                ,
                userdata,
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            if (response.data.success) {
                toast.success(response.data.message, {
                    autoClose: 2000,
                    position: "top-center"
                });
            }

            // clean the form
            setUserData({
                email: "",
                password: "",
                name: "",
                phone: "",
                confirmPassword: "",
                address: ""
            });
        } catch (error) {
            toast.error(error.message, {
                autoClose: 2000,
                position: "top-center"
            });
        }
    };


    return (
        <div className="signup-container">
            <ToastContainer className="index" />
            <div className="signup-left">
                <h2>Only Admin Can AddNewAdmin.</h2>
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
                    <h2>Add New Admin</h2>
                    <br />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        value={userdata.email}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        onChange={handleChange}
                        value={userdata.password}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        required
                        onChange={handleChange}
                        value={userdata.confirmPassword}
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                        value={userdata.name}
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        required
                        onChange={handleChange}
                        value={userdata.phone}
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        required
                        onChange={handleChange}
                        value={userdata.address}
                    />
                    <button type="submit" className="submit-btn">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default AddNewAdmin;
