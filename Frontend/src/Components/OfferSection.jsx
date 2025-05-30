import React from 'react';

const offers = [
    {
        category: 'STRENGTH',
        title: 'WEIGHTLIFTING',
        img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        category: 'CARDIO',
        title: 'INDOOR CYCLING',
        img: 'https://images.unsplash.com/photo-1532384555668-bc0c32a17ffd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        category: 'STRENGTH',
        title: 'KETTLEBELL POWER',
        img: 'https://images.unsplash.com/photo-1567598317136-3cd762432241?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        category: 'CARDIO',
        title: 'INDOOR CYCLING',
        img: 'https://images.unsplash.com/photo-1554344728-77cf90d9ed26?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        category: 'TRAINING',
        title: 'BOXING',
        img: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        category: 'CARDIO',
        title: 'INDOOR CYCLING',
        img: 'https://images.unsplash.com/photo-1532384555668-bc0c32a17ffd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        category: 'STRENGTH',
        title: 'KETTLEBELL POWER',
        img: 'https://images.unsplash.com/photo-1567598317136-3cd762432241?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        category: 'CARDIO',
        title: 'INDOOR CYCLING',
        img: 'https://images.unsplash.com/photo-1554344728-77cf90d9ed26?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }
];

function OfferSection() {
    return (
        <div className="offer-container">
            <h2 className="offer-title">WHAT WE CAN OFFER</h2>
            <div className="offer-grid">
                {offers.map((offer, index) => (
                    <div className="offer-card" key={index}>
                        <img src={offer.img} alt={offer.title} />
                        <div className="offer-info">
                            <p className="offer-category">{offer.category}</p>
                            <h4 className="offer-heading">{offer.title}</h4>
                            <div className="arrow-btn">›</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OfferSection;
