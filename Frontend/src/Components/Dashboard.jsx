const data = [
    { title: "REGISTERED MEMBERS", value: 150, color: "#009688", icon: "💪", href: "/members" },
    { title: "NEW CONTACT", value: 10, color: "#f44336", icon: "🆕", href: "/message" },
    { title: "CLASSES OFFERED", value: 25, color: "#2196F3", icon: "📋", href: "/classes" },
    { title: "TOTAL TRAINERS", value: 8, color: "#FF9800", icon: "🏋️‍♂️", href: "/trainers" },
    { title: "BOOKED CLASSES", value: 60, color: "#FFC107", icon: "📝", href: "/bookings" },
    { title: "MONTHLY REVENUE", value: "$12,500", color: "#673AB7", icon: "💰", href: "/revenue" },
    { title: "Add New Admin", value: "", color: "#1b9c1e", icon: "👦", href: "/new/admin" },
];

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h2>🏋️‍♂️ Gym Dashboard</h2>
            <div className="dashboard-grid">
                {data.map((item, index) => (
                    <a
                        key={index}
                        className="dashboard-card"
                        href={item.href}
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <div className="card-icon" style={{ backgroundColor: item.color }}>
                            <span>{item.icon}</span>
                        </div>
                        <div className="card-content">
                            <p>{item.title}</p>
                            {/* <h3>{item.value}</h3> */}
                        </div>
                    </a>
                ))}
            </div>
            <br />
            {/* <button style={{backgroundColor:"#69bf34", border: "none", padding :"10px 5px", borderRadius:"10px"}} className="btn-logout">Logout</button> */}
        </div>
    );
};

export default Dashboard;
