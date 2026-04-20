import { FaTiktok, FaFacebook, FaInstagram } from "react-icons/fa";
import "../styles/Footer.scss";

const sponsors = [
    { name: "Icy groove", logo: "/Sponsor/brand1.jpg" },
    { name: "Kivo", logo: "/Sponsor/brand2.jpg" },
    { name: "Evans Industries", logo: "/Sponsor/brand3.jpg" }
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-sponsors">
                <h4>Past Sponsors</h4>

                <div className="sponsor-track">
                    {[...sponsors, ...sponsors].map((s, i) => (
                        <div key={i} className="sponsor-item">
                            <img src={s.logo} alt={s.name} />
                            <span>{s.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            {/* TOP */}
            <div className="footer-top">
                {/* LOGO */}
                <div className="footer-brand">
                    <img src="/logo.png" alt="Silo Logo" />
                    <p>Africa's premier Campus Tradefair brand</p>
                </div>

                {/* QUICK LINKS */}
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/events">Events</a>
                    <a href="/contact">Contact</a>
                </div>

                {/* SOCIALS */}
                <div className="footer-socials">
                    <h4>Follow Us</h4>
                    <div className="icons">
                        <a href="https://www.instagram.com/silocampustradefair?igsh=Mjh6MXB6bjJ2YWZq&utm_source=qr" target="blank"><FaInstagram /></a>
                        <a href="https://www.facebook.com/share/1BCYsxVSx4/?mibextid=wwXIfr" target="blank"><FaFacebook /></a>
                        <a href="https://www.tiktok.com/@silocampustradefair?_r=1&_t=ZS-95bBq3q5Zwt" target="blank"><FaTiktok /></a>
                    </div>
                </div>
            </div>

            {/* SPONSORS LOOP */}

            {/* BOTTOM */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Silo Campus Tradefair</p>
            </div>
        </footer>
    );
};

export default Footer;