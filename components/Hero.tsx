import Link from 'next/link';

export default function Hero() {
    return (
        <header id="home" className="hero">
            <div className="hero-bg"></div>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">
                    <span className="block">FUTURE STAR</span>
                    <span className="block text-accent">CRICKET</span>
                    <span className="block">ACADEMY</span>
                </h1>
                <p className="hero-tagline">Elite youth training under Ex-Ranji Trophy player Satish Patnaik. Shape your cricketing future in Mirzapur.</p>
                <div className="hero-cta">
                    <a href="https://wa.me/917054540102?text=Hello%20Future%20Star%20Cricket%20Academy,%20I%20would%20like%20to%20start%20my%20cricket%20journey%20with%20you." className="btn btn-primary btn-large" target="_blank" rel="noreferrer">Start Your Journey</a>
                    <Link href="#contact" className="btn btn-outline btn-large">Send Enquiry</Link>
                </div>
                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-value">4.9<span className="star">★</span></span>
                        <span className="stat-label">144 Google Reviews</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">6</span>
                        <span className="stat-label">Match Pitches</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">2</span>
                        <span className="stat-label">Shifts (Day & Night)</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
