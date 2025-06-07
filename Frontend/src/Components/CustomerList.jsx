import React, { useState, useEffect } from "react";
import axios from 'axios';

const CustomerList = () => {
    const [customersData, setCustomersData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:3000/members", {
                    withCredentials: true,
                });
                setCustomersData(res.data);
            } catch (error) {
                console.error("Error fetching customers:", error);
            }
        };

        fetchData();
    }, []);

    const filteredCustomers = customersData.filter(cust =>
        cust.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cust.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="customer-container">
            <h2>Customers’ List</h2>
            <p className="breadcrumb">Dashboard / Customers’ List</p>

            <div className="top-bar">
                <button className="new-customer" title="Add Customer">
                    <a className="anchorTag" href="/add/member">+ NEW CUSTOMER</a>
                </button>
                <input
                    type="text"
                    placeholder="🔍 Search..."
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <table className="customer-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>E-Mail</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCustomers.length > 0 ? (
                        filteredCustomers.map((cust, index) => (
                            <tr key={cust._id}>
                                <td>{index + 1}</td>
                                <td>{cust.name}</td>
                                <td>{cust.email}</td>
                                <td>{cust.phone}</td>
                                <td>{cust.address}</td>
                                <td className="actions">
                                    <button title="View">↗️</button>
                                    <button title="Edit">✏️</button>
                                    <button title="Delete">🗑️</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" style={{ textAlign: "center", padding: "20px" }}>
                                No matching customers found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CustomerList;
