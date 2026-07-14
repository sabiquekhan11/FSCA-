export default function Reviews() {
    return (
        <section id="reviews" className="section reviews-section">
            <div className="container">
                <div className="reviews-header">
                    <div className="reviews-aggregate">
                        <div className="aggregate-score">4.9</div>
                        <div className="aggregate-stars">★★★★★</div>
                        <div className="aggregate-text">144 Google Reviews</div>
                    </div>
                    <div className="reviews-title-area">
                        <h2 className="section-title">What Our Players Say</h2>
                        <p className="section-desc">Real feedback from students transforming their game.</p>
                    </div>
                </div>
                <div className="reviews-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"The environment here is exceptional. Satish sir focuses deeply on individual technique. My batting has improved drastically since I joined the All Age Groups batch."</p>
                        <div className="review-author">- Janmejay Singh</div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Best academy in Mirzapur for serious players. Vijay sir's batting tips and the daily net practice sessions are incredibly helpful. Highly recommend to everyone."</p>
                        <div className="review-author">- Sahir Ansari</div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Sachin sir pushes our fitness to the next level. The floodlight night sessions give real match experience. The coaches are very dedicated to our success."</p>
                        <div className="review-author">- Anil Kumar Saroj</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
