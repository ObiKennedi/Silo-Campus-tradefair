import HeroSection from "../../components/HeroSection"
import UppcomingEvents from "../../components/UppcomingEvents"
import AboutSection from "../../components/AboutSection"
import ContactForm from "../../components/ContactForm"
import AboutHost from "../../components/AboutHost"
import ReviewVideo from "../../components/ReviewVideos"

const Home = () => {
    return (
        <div>
            <HeroSection />
            <UppcomingEvents />
            <AboutSection />
            <AboutHost />
            <ReviewVideo />
            <ContactForm />
        </div>
    )
}

export default Home