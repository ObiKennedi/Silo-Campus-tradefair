import HeroSection from "../../components/HeroSection"
import UppcomingEvents from "../../components/UppcomingEvents"
import AboutSection from "../../components/AboutSection"
import ContactForm from "../../components/ContactForm"
import AboutHost from "../../components/AboutHost"

const Home = () => {
    return (
        <div>
            <HeroSection />
            <UppcomingEvents />
            <AboutSection />
            <AboutHost />
            <ContactForm />
        </div>
    )
}

export default Home