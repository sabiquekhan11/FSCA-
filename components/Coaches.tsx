export default function Coaches() {
    return (
        <section id="coaches" className="section coaches-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Expert Mentors</h2>
                    <p className="section-desc">Learn from the best in the game.</p>
                </div>
                <div className="about-grid">
                    <div className="about-image-wrapper">
                        <img src="images/satish.jpg" alt="Satish Patnaik" className="about-image" style={{ filter: 'grayscale(0%)' }} />
                    </div>
                    <div className="coach-details">
                        <h3 className="coach-name" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>Satish Patnaik</h3>
                        <p className="coach-role" style={{ color: 'var(--text-main)', fontFamily: 'var(--font-heading)', fontSize: '1.25rem', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '1px' }}>Head Coach & Founder (Ex-Ranji Trophy)</p>
                        <p className="about-text" style={{ marginBottom: '1.5rem' }}>With years of first-class cricket experience, Satish Patnaik leads the Future Star Cricket Academy with a vision to transform raw talent into professional cricketers. Having played at the prestigious Ranji Trophy level, he brings invaluable insights into the technical, tactical, and psychological aspects of the game.</p>
                        <p className="about-text">His coaching philosophy revolves around rigorous discipline, meticulous technique correction, and match-simulation training, ensuring that every student is well-prepared for highly competitive district and state-level tournaments.</p>
                        <ul className="credentials-list" style={{ marginTop: '1.5rem' }}>
                            <li><span className="check-icon">✓</span> NIS certified coach</li>
                            <li><span className="check-icon">✓</span> Former Ranji Trophy Player</li>
                            <li><span className="check-icon">✓</span> Expert in Batting Technique & Temperament</li>
                            <li><span className="check-icon">✓</span> Specialized in U-17 Competitive Training</li>
                            <li><span className="check-icon">✓</span> Dedicated Mentor for Aspiring Professionals</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
