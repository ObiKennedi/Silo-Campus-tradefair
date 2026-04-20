import "../../styles/registeration/VendorNote.scss";

const VendorNote = () => {
    return (
        <section className="vendor-note">
            <h2>How to Attract Customers to Your Stand</h2>

            <p className="intro">
                To get the best results from the tradefair, here are a few proven tips:
            </p>

            <ul>
                <li>
                    <strong>Choose the right products:</strong>
                    <span>
                        Focus on items that are relevant and useful to students. If it fits
                        their lifestyle or solves a need, it will sell faster.
                    </span>
                </li>

                <li>
                    <strong>Offer small freebies:</strong>
                    <span>
                        Giving out small freebies (no matter how simple) helps attract
                        attention and draw people to your stand.
                    </span>
                </li>

                <li>
                    <strong>Price strategically:</strong>
                    <span>
                        The student market is different from the general market. Ensure your
                        pricing is student-friendly and competitive.
                    </span>
                </li>
            </ul>
        </section>
    );
};

export default VendorNote;