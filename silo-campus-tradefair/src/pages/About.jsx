import AboutSection from "../../components/AboutSection"
import ValueProposition from "../../components/ValueProposition"
import Vision from "../../components/Vision"
import AboutHost from "../../components/AboutHost"

export default function About() {
    return (
        <div>
            <AboutSection showButton={false} />
            <ValueProposition />
            <Vision />
            <AboutHost />
        </div>
    )
}