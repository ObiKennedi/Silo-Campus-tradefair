import CampusCard from "./CampusCards"
import "../../styles/registeration/CampusSection.scss"

const ImoCardProps = [
    {
        campus: "Federal University of Technology",
        date: "2nd - 4th June, 2026",
        time: "9:00 AM Daily",
        venue: "Old seet head Futo roundabout"
    },
    {
        campus: "Federal Polytechnic, Nekede",
        date: "9th - 11th June, 2026",
        time: "9:00 AM Daily",
        venue: "Fuel pump field, beside school main gate"
    },
    {
        campus: "Imo state University (IMSU)",
        date: "24th - 26th June, 2026",
        time: "9:00 AM Daily",
        venue: "New NDDC field beside IMSU mast",
    }
]

const PhCampusProps = [
    {
        campus: "Captain Elechi Amadi Polytechnic",
        date: "July 15th - 17th, 2026",
        time: "9:00 AM Daily",
        venue: "Volleyball field, at the school gate"
    },
    {
        campus: "University of Portharcourt",
        date: "July 29th - 30th, 2026",
        time: "9:00 AM Daily",
        venue: "Open field, opposite old convocation arena"
    },
]

const LagosCampusProps = [
    {
        campus: "University of Lagos",
        date: "August, 2026",
        time: "9:00 AM Daily",
        venue: "Akoka, Yaba, Lagos State"
    },
    {
        campus: "Lagos State University",
        date: "August, 2026",
        time: "9:00 AM Daily",
        venue: "Ojo, Lagos State"
    },
    {
        campus: "Yaba College of Technology",
        date: "August, 2026",
        time: "9:00 AM Daily",
        venue: "Yaba, Lagos State"
    }
]

const ImoCampusSection = () => {
    return (
        <section className="campus-section">
            {ImoCardProps.map((card, index) => (
                <CampusCard
                    campus={card.campus}
                    date={card.date}
                    time={card.time}
                    venue={card.venue}
                />
            ))}
        </section>
    )
}

const PhCampusSection = () => {
    return (
        <section className="campus-section">
            {PhCampusProps.map((card, index) => (
                <CampusCard
                    campus={card.campus}
                    date={card.date}
                    time={card.time}
                    venue={card.venue}
                />
            ))}
        </section>
    )
}

const LagosCampusSection = () => {
    return (
        <section className="campus-section">
            {LagosCampusProps.map((card, index) => (
                <CampusCard
                    campus={card.campus}
                    date={card.date}
                    time={card.time}
                    venue={card.venue}
                />
            ))}
        </section>
    )
}

export { ImoCampusSection, PhCampusSection, LagosCampusSection }
