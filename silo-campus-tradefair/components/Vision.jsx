import { useEffect } from "react"
import aos from "aos"
import "aos/dist/aos.css"
import "../styles/home/Vision.scss";

const Vision = () => {
    useEffect(() => {
        aos.init();
    }, []);
    return (
        <section>
            <div className="vision" data-aos="fade-up">
                <div className="vision__content">
                    <div className="vision__content__text">
                        <h2>Our Vision</h2>
                        <p>Our goal is to create a dynamic campus marketplace that connects students with small and medium-scale entrepreneurs, offering affordable products, vibrant experiences, and meaningful opportunities to vibe, shop, and connect.</p>
                        <h2>Our Mission</h2>
                        <p>Our mission is to redefine campus commerce across Africa by building the most vibrant tradefair ecosystem where students can vibe, shop, and connect and where small and medium-scale entrepreneurs gain the exposure, community, and growth they deserve</p>
                    </div>
                    <div className="vision__content__image">
                        <img src="/event1.jpg" alt="Vision" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vision