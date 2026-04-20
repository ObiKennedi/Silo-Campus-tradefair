import UppcomingEvents from "../../components/UppcomingEvents"
import "../../styles/home/Events.scss"
import PastEvents from "../../components/PastEvents"

const Events = () => {
    return (
        <div className="events-page">
            <UppcomingEvents />
            <PastEvents />
        </div>
    )
}

export default Events