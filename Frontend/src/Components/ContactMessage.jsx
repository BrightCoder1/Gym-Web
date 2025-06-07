import axios from "axios";
import { useEffect, useState } from "react";

const ContactMessages = () => {

    const [messages, setMessage] = useState([]);

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await axios.get("http://localhost:3000/message", {
                    withCredentials: true
                });
                setMessage(response.data);
            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };

        fetchMessage();
    }, []);

    const sortedMessages = [...messages].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    return (
        <div className="contact-container">
            <h2 className="contact-date">All Messages</h2>
            {sortedMessages.map((msg, index) => (
                <div className="contact-message" key={index}>
                    <h3 className="contact-name">{msg.name}</h3>
                    <p className="contact-email"><strong>Email:</strong> {msg.email}</p>
                    <p className="contact-date">
                        <strong>Send on:</strong> {new Date(msg.dateSend).toLocaleString()}
                    </p>
                    <p className="contact-text"><strong>Message: </strong>{msg.message}</p>
                </div>
            ))}

        </div>
    );
};

export default ContactMessages;
