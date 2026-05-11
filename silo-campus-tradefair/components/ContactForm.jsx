import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/home/ContactForm.scss";

const ContactForm = () => {
    return (
        <section className="contact-section">
            <div className="contact-info">
                <h2>Contact Us</h2>
                <div className="info-links">
                    <p>
                        <a href="mailto:contact@silocampustradefair.com">
                            <Mail /> contact@silocampustradefair.com
                        </a>
                    </p>
                    <p>
                        <a href="tel:+2349063508366">
                            <Phone /> +234 906 350 8366
                        </a>
                    </p>
                    <p>
                        <a href="#">
                            <MapPin />Owerri, Imo State, Nigeria
                        </a>
                    </p>
                    <p>
                        <a target="blank" href="https://wa.me/message/WYBLOU6MJNFOC1">
                            <FaWhatsapp /> +234 906 350 8366
                        </a>
                    </p>
                </div>
                <div className="whatsapp-community">
                    <h3>Join our whatsapp community</h3>
                    <a target="blank" href="https://chat.whatsapp.com/CCgX5UgAEKJLQqYpuLR8BX?mode=gi_t">
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;