import { Currency, Megaphone, Shield, Users } from "lucide-react"
import "../styles/home/ValueProposition.scss";

const ValueProps = [
    {
        icon: <Shield />,
        title: "Security",
        description: "We provide security for both vendors and attendees, so you can focus on what matters most"
    },
    {
        icon: <Users />,
        title: "Community",
        description: "Our tradefairs bring together students, entrepreneurs, and industry leaders to showcase their products and services, network, and share knowledge."
    },
    {
        icon: <Megaphone />,
        title: "Publicity",
        description: "We offer the promotion and exposure of your products and services to thousands of students, visitors and potential customers."
    },
    {
        icon: <Currency />,
        title: "Return on Investment",
        description: "By providing a platform for you to showcase your products and services to thousands of students, visitors and potential customers, we ensure that you get the best return on your investment."
    }
]

const ValueProposition = () => {
    return (
        <section className="value-proposition">
            <h2>Why Choose Silo Campus Tradefair?</h2>
            <div className="value-proposition__content">
                {ValueProps.map((valueProp, index) => (
                    <div
                        key={index}
                        className="value-proposition__content__item"
                    >
                        <div
                            className="value-proposition__content__item__icon"
                        >
                            {valueProp.icon}
                            <h3>{valueProp.title}</h3>
                        </div>
                        <p>{valueProp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ValueProposition