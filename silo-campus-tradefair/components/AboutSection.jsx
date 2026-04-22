import "../styles/home/AboutSection.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

const AboutSection = ({ showButton = true }) => {
    const navigate = useNavigate();
    useEffect(() => {
        aos.init();
    }, []);
    return (
        <section>
            <div className={`about-section ${!showButton && "padding-top"}`} data-aos="fade-up">
                <div className="about-section__image">
                    <img src="/event1.jpg" alt="About" />
                </div>
                <div className="about-section__content">
                    <div className="about-section__content__text">
                        <h2 className="about-section__title">About Us</h2>
                        <div>
                            <h4>Bridging the gap between students and the market, one tradefair at a time.</h4>
                            <p>We are a physical marketplace event hosted across university campuses, where vendors (especially small and medium-scale entrepreneurs) come to sell directly to students. We have successfully hosted over 7 different tradefair’s across major campuses in Nigeria 🇳🇬 such as : university of Porthacourt , Institute of management and technology and imo state university</p>
                            <p>We have helped over 300 businesses multiply their sales and increased their customer base.</p>
                            <p>Silo campus tradefair isn’t just a tradefair brand —it’s the Africa’s premier campus tradefair</p>
                        </div>
                    </div>
                    {showButton && (
                        <button
                            onClick={() => navigate("/about")}
                            className="about-section__button"
                        >
                            Learn More
                        </button>
                    )}
                </div>
            </div>
        </section>
    )
}

export default AboutSection