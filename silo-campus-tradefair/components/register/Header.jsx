import { ArrowBigLeft, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/registeration/Header.scss";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className={`register-header ${open ? "open" : ""}`}>
            {/* BACK */}
            <Link to="/">
                <ArrowBigLeft />
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button className="menu-toggle" onClick={() => setOpen(!open)}>
                {open ? <X /> : <Menu />}
            </button>

            {/* NAV */}
            <nav>
                <ul>
                    <li><Link to="/register/imo-state">Imo State</Link></li>
                    <li><Link to="/register/portharcourt">Port-Harcourt</Link></li>
                    <li><Link to="/register/lagos-state">Lagos State</Link></li>
                </ul>
            </nav>

            {/* LOGO */}
            <img src="/logo.png" alt="logo" />
        </header>
    );
};

export default Header;