export default function Gallery() {
    return (
        <section id="gallery" className="section bg-alt gallery-section">
            <div className="container">
                <div className="section-header center">
                    <h2 className="section-title">Academy in Action</h2>
                </div>
                <div className="gallery-grid">
                    <div className="gallery-item large">
                        <img src="images/gallery-1.jpg" alt="Future Star Academy Team" />
                    </div>
                    <div className="gallery-item">
                        <img src="images/gallery-2.jpg" alt="Academy Players at Nets" />
                    </div>
                    <div className="gallery-item">
                        <img src="images/gallery-3.jpg" alt="Academy Champions with Trophies" />
                    </div>
                    <div className="gallery-item">
                        <img src="images/gallery-4.png" alt="Academy Students" />
                    </div>
                    <div className="gallery-item">
                        <img src="images/gallery-5.jpg" alt="Fitness and Stretching Session" />
                    </div>
                </div>
            </div>
        </section>
    );
}
