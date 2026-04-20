import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsAppFloat.scss";

const WhatsappFloat = () => {
    const phone = "2349063508366";

    const message = "Hello, I’d like to make an enquiry about Silo Campus Tradefair.";

    const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={link}
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaWhatsapp />
        </a>
    );
};

export default WhatsappFloat;