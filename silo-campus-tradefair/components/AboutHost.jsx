import "../styles/home/HostSection.scss";

const HostSection = () => {
    return (
        <section className="host-section">
            <div className="host-container">

                {/* IMAGE */}
                <div className="host-image">
                    <img src="/host.jpg" alt="Shiloh D’Might" />
                </div>

                {/* CONTENT */}
                <div className="host-content">
                    <h2>Shiloh D’Might</h2>
                    <h4>The Visionary Behind Silo Campus Tradefair</h4>

                    <p>
                        At the center of Silo Campus Tradefair is Shiloh D’Might, a dynamic entrepreneur,
                        event host, and youth-focused business leader redefining how brands connect with
                        students across Nigerian campuses.
                    </p>

                    <p>
                        As the CEO and driving force behind the platform, he has built more than an event —
                        he has created a movement that empowers entrepreneurs to thrive within the campus market.
                    </p>

                    <ul>
                        <li>Youth culture and entertainment</li>
                        <li>Strategic business exposure</li>
                        <li>High-conversion selling environments</li>
                    </ul>

                    <blockquote>
                        “Africa’s premier campus tradefair brand — where students don’t just attend, they shop,
                        connect, and experience value.”
                    </blockquote>

                    <p className="closing">
                        Shiloh D’Might isn’t just hosting events — he’s shaping the future of campus commerce in Africa.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default HostSection;