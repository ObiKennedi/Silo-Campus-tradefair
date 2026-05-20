import EventsCard from "./EventsCard"
import '../styles/home/UpcomingEvents.scss';
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

const UppcomingEvents = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <section className="upcoming-events" data-aos="fade-up">
            <h1 className="upcoming-events__title">UPCOMING TRADEFAIR</h1>
            <div className="events-container">
                <EventsCard
                    image="/event1.png"
                    title="Imo State Campus' Tradefair"
                    route="/register/imo-state"
                    campuses={[
                        {
                            name: "Federal Polytechnic Nekede",
                            date: "June 9th - 11th, 2026",
                            address: "Nekede, Imo State"
                        },
                        {
                            name: "Imo State University",
                            date: "June 23rd - 24th, 2026",
                            address: "123 University Rd, Owerri, Imo State"
                        },
                        {
                            name: "Federal University of Technology",
                            date: "July 1st - 3rd, 2026",
                            address: "Owerri, Imo State"
                        },
                        {
                            name: "Alvan Ikoku University of Education",
                            date: "July 9th - 11th, 2026",
                            address: "Owerri, Imo State"
                        }
                    ]}
                />
                <EventsCard
                    image="/event2.jpg"
                    title="Portharcourt Campus' Tradefair"
                    route="/register/portharcourt"
                    campuses={[
                        {
                            name: "Captain Elechi Amadi Polytechnic",
                            date: "July 15th - 17th, 2026",
                            address: "Rumuola, Portharcourt, Rivers State"
                        },
                        {
                            name: "University of Portharcourt",
                            date: "July 29th - 30th, 2026",
                            address: "Choba, Portharcourt, Rivers State"
                        },
                    ]}
                />
                <EventsCard
                    image="/event3.jpg"
                    title="Lagos State Campus' Tradefair"
                    route="/register/lagos"
                    campuses={[
                        {
                            name: "University of Lagos",
                            date: "August, 2026",
                            address: "Akoka, Yaba, Lagos State"
                        },
                        {
                            name: "Lagos State University",
                            date: "August, 2026",
                            address: "Ojo, Lagos State"
                        },
                    ]}
                />
            </div>
        </section>
    )
}

export default UppcomingEvents