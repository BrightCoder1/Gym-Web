import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';

const EditMember = () => {
    const {id} = useParams();
    const [userdata, setUserData] = useState({
        email: "",
        password: "",
        name: "",
        phone: "",
        confirmPassword: "",
        address: ""
    });

    useEffect(() => {
        const fetchMemberData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/member/${id}`, {
                    withCredentials: true
                });
                setUserData(response.data); 
            } catch (error) {
                toast.error(error.message, {
                    autoClose: 2000,
                    position: "top-center"
                });
            }
        };

        fetchMemberData(); 
    }, [id]); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userdata,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`http://localhost:3000/edit/member/${id}`,
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
            <ToastContainer className="index"/>
            <div className="signup-left">
                <h2>Only Admin Can Add Member.</h2>
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
                    <h2>Edit Member</h2>
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
                    <button type="submit" className="submit-btn">Update</button>
                </form>
            </div>
        </div>
    );
};

export default EditMember;
