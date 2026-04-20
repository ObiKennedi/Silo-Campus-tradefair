import "../styles/home/ReviewVideos.scss";

const reviewVideos = [
    "9Gha9Q9EZrk",
    "tFQdG2EPAjM",
    "WEPhb_dG5zo",
    "dQw4w9WgXcQ",
    "9Gha9Q9EZrk",
];

const ReviewVideo = () => {
    return (
        <section className="review-section">
            <h1 className="review-title">Review Videos</h1>

            <div className="review-grid">
                {reviewVideos.map((id, index) => (
                    <div key={index} className="video-card">
                        <iframe
                            src={`https://www.youtube.com/embed/${id}`}
                            title="YouTube video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ReviewVideo;