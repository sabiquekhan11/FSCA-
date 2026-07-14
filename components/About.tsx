export default function About() {
    return (
        <section id="about" className="section about-section">
            <div className="container about-grid">
                <div className="about-content">
                    <h2 className="section-title">Forging Champions</h2>
                    <h3 className="section-subtitle">Excellence through discipline, technique, and passion.</h3>
                    <p className="about-text">Future Star Cricket Academy provides premier coaching facilities in Mirzapur. Founded by NIS Certified, Ex-Ranji Trophy player Satish Patnaik, we focus on identifying and nurturing youth talent, preparing them for highly competitive All Age Groups and district-level tournaments.</p>
                    <ul className="credentials-list">
                        <li><span className="check-icon">✓</span> Head Coach: Satish Patnaik (NIS Certified, Ex-Ranji Trophy)</li>
                        <li><span className="check-icon">✓</span> Specialized All Age Groups competitive training programs</li>
                        <li><span className="check-icon">✓</span> State-of-the-art turf and synthetic pitches</li>
                        <li><span className="check-icon">✓</span> Individual attention &amp; video analysis</li>
                    </ul>
                </div>
                <div className="about-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800" alt="Satish Patnaik Coaching" className="about-image" />
                    <div className="floating-badge">
                        <span className="badge-stars">★★★★★</span>
                        <span className="badge-text">4.9 Rating</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
