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
                            <p>Silo campus trade is a movement across tertiary institutions in Nigeria, aimed at bridging the gap between students and the market. We host tradefairs that bring together students, entrepreneurs, and industry leaders to showcase their products and services, network, and share knowledge.
                            </p>
                            <p>Our tradefairs are designed to provide a platform for small and medium scale entrepreneurs to showcase their products and services to thousands of students, visitors and potential customers.</p>
                            <p>We also give students an opportunity to purchase products and services at affordable prices, network with entrepreneurs and industry leaders, and share knowledge and ideas.</p>
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