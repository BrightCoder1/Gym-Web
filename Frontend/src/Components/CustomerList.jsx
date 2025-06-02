import React, { useState } from "react";

const customersData = [
    { id: 1, name: "Alyvia Kelley", email: "a.kelley@gmail.com", status: "Approved", dob: "06/18/1978", joiningDate: "01/15/2023" },
    { id: 2, name: "Jaiden Nixon", email: "jaiden.n@gmail.com", status: "Approved", dob: "09/30/1963", joiningDate: "03/01/2023" },
    { id: 3, name: "Ace Foley", email: "ace.fo@yahoo.com", status: "Blocked", dob: "12/09/1985", joiningDate: "02/10/2023" },
    { id: 4, name: "Nikolai Schmidt", email: "nikolai.schmidt1964@outlook.com", status: "Rejected", dob: "03/22/1956", joiningDate: "11/12/2022" },
    { id: 5, name: "Clayton Charles", email: "me@clayton.com", status: "Approved", dob: "10/14/1971", joiningDate: "05/06/2023" }
];

const getStatusColor = (status) => {
    switch (status) {
        case "Approved": return "green";
        case "Blocked": return "gray";
        case "Rejected": return "red";
        default: return "gray";
    }
};

const CustomerList = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredCustomers = customersData.filter(cust =>
        cust.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cust.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="customer-container">
            <h2>Customers’ List</h2>
            <p className="breadcrumb">Dashboard / Customers’ List</p>

            <div className="top-bar">
                <button className="new-customer">+ NEW CUSTOMER</button>
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
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Status</th>
                        <th>E-Mail</th>
                        <th>Date of Birth</th>
                        <th>Joining Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCustomers.length > 0 ? (
                        filteredCustomers.map((cust, index) => (
                            <tr key={cust.id}>
                                <td>{index + 1}</td>
                                <td>{cust.name}</td>
                                <td>
                                    <span
                                        className="status-dot"
                                        style={{
                                            display: "inline-block",
                                            width: "10px",
                                            height: "10px",
                                            borderRadius: "50%",
                                            backgroundColor: getStatusColor(cust.status),
                                            marginRight: "6px"
                                        }}
                                    ></span>
                                    {cust.status}
                                </td>
                                <td>{cust.email}</td>
                                <td>{cust.dob}</td>
                                <td>{cust.joiningDate}</td>
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
