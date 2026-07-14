import React from 'react';

export default function Hostel() {
    return (
        <section id="hostel" className="section hostel-section">
            <div className="container">
                <div className="section-header center">
                    <h2 className="section-title">🏠 Hostel</h2>
                </div>
                
                <div className="about-grid" style={{ marginBottom: '3rem' }}>
                    <div className="about-content" style={{ order: 2 }}>
                        <p className="about-text" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                            Our Cricket Academy offers well-maintained accommodation for outstation students who wish to stay on campus while pursuing professional cricket training. The hostel is designed to provide a safe, comfortable, and disciplined environment that supports both academic and athletic development.
                        </p>
                        <p className="about-text" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                            Students enjoy highly nutritious, athlete-focused meals prepared daily to maintain peak physical condition. Furthermore, the entire campus is strictly monitored by dedicated wardens and 24/7 security personnel to guarantee a peaceful, focused, and secure setting for every aspiring cricketer.
                        </p>
                    </div>
                    
                    <div className="about-image-wrapper" style={{ order: 1 }}>
                        <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800" alt="Hostel Accommodation" className="about-image" />
                        <div className="floating-badge">
                            <span className="badge-stars">★★★★★</span>
                            <span className="badge-text">Safe & Secure</span>
                        </div>
                    </div>
                </div>

                {/* Premium CTA Card */}
                <div style={{ 
                    background: 'linear-gradient(135deg, var(--bg-alt) 0%, var(--bg-main) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '3rem 2rem',
                    textAlign: 'center',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}>
                    <h3 style={{ color: 'var(--text-light)', fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
                        Need Hostel Accommodation?
                    </h3>
                    <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                        Stay comfortably while focusing on your cricket journey.
                    </p>
                    <a 
                        href="https://wa.me/917054540102?text=Hello%20Future%20Star%20Cricket%20Academy,%20I%20would%20like%20to%20request%20information%20about%20your%20hostel%20accommodation." 
                        target="_blank" 
                        rel="noreferrer"
                        className="btn btn-primary btn-large"
                    >
                        Request Hostel Information
                    </a>
                </div>
            </div>
        </section>
    );
}
