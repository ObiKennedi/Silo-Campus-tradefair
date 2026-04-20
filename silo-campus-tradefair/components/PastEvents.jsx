import ImageGallery from "./ImageGallery"
import ReviewVideo from "./ReviewVideos"
import "../styles/home/PastEvents.scss"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

const PastEvents = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        <section className="past-events" data-aos="fade-up" data-aos-delay="200">
            <h1>Past Events</h1>
            <div className="past-events-container">
                <h2 data-aos="fade-up" data-aos-delay="200">Events gallery</h2>
                <div className="past-event" data-aos="fade-up" data-aos-delay="200">
                    <ImageGallery />
                    <ReviewVideo />
                </div>
            </div>
        </section>
    )
}

export default PastEvents