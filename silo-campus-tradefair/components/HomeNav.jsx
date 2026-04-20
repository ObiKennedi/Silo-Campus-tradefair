import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import "../styles/home/HomeNav.scss"

const Header = () => {
    const [scrollY, setScrollY] = useState(0);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    const navigate = useNavigate()

    return (
        <header
            className={`home-header 
            ${scrollY > 0 ? "scrolled" : ""} 
            ${open ? "open" : ""}   
            `}
        >
            <img
                src="/long-logo.png"
                alt="logo"
                className="logo"
                onClick={() => navigate("/")}
            />
            <div className="mobile-nav">
                <button onClick={() => setOpen(!open)}>
                    {open ? <X /> : <Menu />}
                </button>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header