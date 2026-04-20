import { Calendar, MapPin, Clock } from "lucide-react"
import "../../styles/registeration/CampusCard.scss"

const CampusCard = ({ campus, venue, date, time }) => {
    return (
        <div className="campus-card">
            <h2 className="campus-card-title">{campus}</h2>
            <p className="campus-card-venue"><MapPin />{venue}</p>
            <p className="campus-card-date"><Calendar />{date}</p>
            <p className="campus-card-time"><Clock />{time}</p>
        </div>
    )
}

export default CampusCard