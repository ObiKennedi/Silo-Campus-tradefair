import { useNavigate } from "react-router-dom"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import "../styles/home/HeroSection.scss"

const HeroSection = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    const navigate = useNavigate()
    return (
        <section className="hero-section" data-aos="fade-up">
            <video
                className="hero-video"
                src="/video.mp4"
                autoPlay
                loop
                muted
            />

            <div className="hero-content">
                <img
                    src="/mantra.png"
                    alt="mantra"
                    className="mantra"
                />
                <p className="tagline">Africa's premier campus tradefair brand</p>
                <button
                    onClick={() => navigate("/events")}
                >See Events</button>
            </div>

            <div className="overlay"></div>
        </section>
    )
}

export default HeroSection