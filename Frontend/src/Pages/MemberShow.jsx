import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MemberShow = () => {
    const { id } = useParams();
    const [member, setMember] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMember = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get(`http://localhost:3000/member/profile/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setMember(res.data.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching member:", err);
                setLoading(false);
            }
        };

        fetchMember();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!member) return <div>No member found.</div>;

    return (
        <div className="container-member">
            <div className="member-container">
                <div className="member-row">
                    <span className="label">Full Name</span>
                    <span className="value">{member.name}</span>
                </div>
                <div className="member-row">
                    <span className="label">Email</span>
                    <span className="value">{member.email}</span>
                </div>
                <div className="member-row">
                    <span className="label">Phone</span>
                    <span className="value">{member.phone}</span>
                </div>
                <div className="member-row">
                    <span className="label">Address</span>
                    <span className="value">{member.address}</span>
                </div>
            </div>
        </div>
    );
};

export default MemberShow;
