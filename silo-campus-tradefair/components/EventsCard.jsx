import { useNavigate } from "react-router-dom"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import '../styles/home/EventsCard.scss';

const EventsCard = ({ image, title, campuses, route }) => {
    const navigate = useNavigate()

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div className="event-card" data-aos="fade-up">
            <div className="event-card__image-container">
                <img
                    src={image}
                    alt={title}
                    className="event-card__image"
                />
            </div>

            <div className="event-card__content">
                <h2 className="event-card__title">{title}</h2>

                <div className="event-card__locations">
                    {campuses.map((item, index) => (
                        <div key={index} className="campus-info">
                            <h3 className="campus-info__name">{item.name}</h3>
                            <div className="campus-info__details">
                                <span className="date">{item.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="event-card__button"
                    onClick={() => navigate(route)}
                >
                    Apply to Exhibit
                </button>
            </div>
        </div>
    );
};

export default EventsCard;