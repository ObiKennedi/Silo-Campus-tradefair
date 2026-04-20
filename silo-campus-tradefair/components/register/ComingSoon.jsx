import "../../styles/registeration/ComingSoon.scss";

const ComingSoon = ({ state = "this" }) => {
    return (
        <section className="coming-soon">
            <h1>
                Registration for <span>{state}</span> Campus Tradefair 2026 hasn’t begun yet.
            </h1>

            <p>
                We’re getting everything ready behind the scenes. Join our WhatsApp
                community to be the first to know when registration opens.
            </p>

            <a
                href="https://chat.whatsapp.com/J09gZksHxAaH7wv1OuY97I?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
            >
                Join WhatsApp Community
            </a>

            <small>Get instant updates, announcements, and early access.</small>
        </section>
    );
};

export default ComingSoon;