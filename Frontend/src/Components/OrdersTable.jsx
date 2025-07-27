/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';

const OrdersTable = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [paymentInput, setPaymentInput] = useState('');

    useEffect(() => {
        const fetchMember = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get("http://localhost:3000/members", {
                    withCredentials: true,
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                setData(response.data);
                setFilteredData(response.data);
            } catch (error) {
                toast.error("Something went wrong while fetching data!");
            }
        };
        fetchMember();
    }, []);

    const handleSearch = () => {
        const lower = searchTerm.toLowerCase();
        const filtered = data.filter(item =>
            item.name.toLowerCase().includes(lower) ||
            item.email.toLowerCase().includes(lower) ||
            item.phone.toLowerCase().includes(lower)
        );
        setFilteredData(filtered);
    };

    const handleUpdateClick = (index, currentPayment) => {
        setEditIndex(index);
        setPaymentInput(currentPayment || '');
    };

    const handleSavePayment = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await axios.put(`http://localhost:3000/members/${id}/updatePayment`, {
                fess: paymentInput
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            toast.success("Payment updated successfully!");

            const updated = [...filteredData];
            updated[editIndex].fess = paymentInput;
            setFilteredData(updated);
            setEditIndex(null);
        } catch (error) {
            toast.error("Failed to update payment!");
        }
    };

    return (
        <div className="table-container">
            <ToastContainer style={{zIndex:"999999999999999"}}/>
            <div className="search-section" style={{ marginBottom: '15px' }}>
                <input
                    type="text"
                    placeholder="Search by Name, Email, or Phone"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch} style={{ marginLeft: '10px' }}>Search</button>
            </div>

            <table className="orders-table" border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>E-Mail</th>
                        <th>Phone</th>
                        <th>Payment</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map((row, idx) => (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{row.name}</td>
                                <td>{row.email}</td>
                                <td>{row.phone}</td>
                                <td>
                                    {editIndex === idx ? (
                                        <input
                                            type="text"
                                            value={paymentInput}
                                            onChange={(e) => setPaymentInput(e.target.value)}
                                        />
                                    ) : (
                                        <span className="badge green">{row.fess || "NOT"}</span>
                                    )}
                                </td>
                                <td>
                                    {editIndex === idx ? (
                                        <button onClick={() => handleSavePayment(row._id)}>Save</button>
                                    ) : (
                                        <button onClick={() => handleUpdateClick(idx, row.fess)}>Update</button>
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" style={{ textAlign: 'center' }}>No matching records found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersTable;
