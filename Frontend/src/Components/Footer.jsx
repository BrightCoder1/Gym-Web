import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-contact">
                    <FaLocationDot className="icon" />
                    <p>333 Middle Winchendon Rd, Rindge, NH 03461</p>
                </div>
                <div className="footer-contact">
                    <FaPhoneAlt className="icon" />
                    <p>125-711-811 | 125-668-886</p>
                </div>
                <div className="footer-contact">
                    <FaEnvelope className="icon" />
                    <p>Support.gymcenter@gmail.com</p>
                </div>
            </div>

            <div className="footer-middle">
                <div className="footer-col logo-col">
                    <h2><span className="white">GY</span><span className="orange">M</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua endisse ultrices gravida lorem.</p>
                    <div className="social-icons">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaYoutube />
                        <FaInstagram />
                        <FaEnvelope />
                    </div>
                </div>
                <div className="footer-col">
                    <h3>Useful links</h3>
                    <ul>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Classes</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>Support</h3>
                    <ul>
                        <li>Login</li>
                        <li>My account</li>
                        <li>Subscribe</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>Tips & Guides</h3>
                    <p className="guide-title">Physical fitness may help prevent depression, anxiety</p>
                    <p className="meta">3 min read | 20 Comment</p>
                    <p className="guide-title">Fitness: The best exercise to lose belly fat and tone up...</p>
                    <p className="meta">3 min read | 20 Comment</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Copyright ©2025 All rights reserved | This is made with <span className="heart">❤</span> by <span className="brand">Vishal Kumar</span></p>
            </div>
        </footer>
    );
};

export default Footer;
