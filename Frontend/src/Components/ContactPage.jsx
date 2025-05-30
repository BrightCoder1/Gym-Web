import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  // onchange function for change the value

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;


    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill out all the fields.", {
        autoClose: 2000,
        position: "top-center"
      });
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/contact",
        formData
        , {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if (response.data.success) {
        toast.success(response.data.message, {
          autoClose: 2000,
          position: "top-center"
        })
      }

      setFormData({
        name: "",
        email: "",
        message: ""
      })

    } catch (error) {
      toast.error(error.message, {
        autoClose: 2000,
        position: "top-center"
      });
    }

  }

  return (
    <div className="contact-section">
      <ToastContainer className="index" />
      <div className="contact-left">
        <h4 className="contact-subtitle">CONTACT US</h4>
        <h2 className="contact-title">GET IN TOUCH</h2>
        <div className="contact-item">
          <div className="icon-circle">
            <FaMapMarkerAlt />
          </div>
          <p>333 Middle Winchendon Rd, Rindge, NH 03461</p>
        </div>
        <div className="contact-item">
          <div className="icon-circle">
            <FaPhoneAlt />
          </div>
          <p>125-711-811 &nbsp; | &nbsp; 125-668-886</p>
        </div>
        <div className="contact-item">
          <div className="icon-circle">
            <FaEnvelope />
          </div>
          <p>Support.gymcenter@gmail.com</p>
        </div>
      </div>

      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSubmit} method="post">
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <textarea
            placeholder="Comment"
            rows={5}
            name="message"
            onChange={handleChange}
            value={formData.message}
          ></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;