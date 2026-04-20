import {
    FaInstagram,
    FaTiktok,
    FaFacebook
} from "react-icons/fa";
import "../styles/home/SocialSection.scss";

export default function SocialSection() {
    return (
        <section className="social">
            <div className="container">
                <h2>Follow Us</h2>
                <p>Follow us on social media to stay updated on our next event.</p>
                <div className="socials">
                    <a
                        href="https://www.instagram.com/silocampustradefair?igsh=Mjh6MXB6bjJ2YWZq&utm_source=qr"
                        target="blank"
                    >
                        <FaInstagram size={20} />
                    </a>
                    <a
                        href="https://www.tiktok.com/@silocampustradefair?_r=1&_t=ZS-95bBq3q5Zwt" target="blank"
                    >
                        <FaTiktok size={20} />
                    </a>
                    <a href="https://www.facebook.com/share/1BCYsxVSx4/?mibextid=wwXIfr" target="blank"><FaFacebook size={20} /></a>
                </div>
            </div>
        </section>
    );
}