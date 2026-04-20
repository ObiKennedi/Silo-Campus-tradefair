import CampusCard from "./CampusCards"
import "../../styles/registeration/CampusSection.scss"

const ImoCardProps = [
    {
        campus: "Federal University of Technology Owerri",
        date: "2nd - 5th June, 2026",
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
        date: "3rd - 5th June, 2026",
        time: "9:00 AM Daily",
        venue: "New NDDC field beside IMSU mast",
    }
]

const PhCampusProps = [
    {
        campus: "University of Portharcourt",
        date: "July 8th - 10th, 2026",
        time: "9:00 AM Daily",
        venue: "Choba, Portharcourt, Rivers State"
    },
    {
        campus: "Ignatius Ajuru University of Education",
        date: "July 14th - 16th, 2026",
        time: "9:00 AM Daily",
        venue: "Rumuolumeni, Portharcourt, Rivers State"
    },
    {
        campus: "Captain Elechi Amadi Polytechnic",
        date: "July 21st - 23rd, 2026",
        time: "9:00 AM Daily",
        venue: "Rumuola, Portharcourt, Rivers State"
    }
]

const LagosCampusProps = [
    {
        campus: "University of Lagos",
        date: "August 11th - 13th, 2026",
        time: "9:00 AM Daily",
        venue: "Akoka, Yaba, Lagos State"
    },
    {
        campus: "Lagos State University",
        date: "August 18th - 20th, 2026",
        time: "9:00 AM Daily",
        venue: "Ojo, Lagos State"
    },
    {
        campus: "Yaba College of Technology",
        date: "August 25th - 27th, 2026",
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
