'use client';
import { useState } from 'react';

export default function Contact() {
    const [buttonText, setButtonText] = useState('Submit Enquiry');
    const [disabled, setDisabled] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setButtonText('Sending...');
        setDisabled(true);

        // Mock API call
        setTimeout(() => {
            setButtonText('Enquiry Sent!');
            setSuccess(true);
            (e.target as HTMLFormElement).reset();

            setTimeout(() => {
                setButtonText('Submit Enquiry');
                setDisabled(false);
                setSuccess(false);
            }, 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="section bg-alt contact-section">
            <div className="container contact-grid">
                <div className="contact-info">
                    <h2 className="section-title">Join The Academy</h2>
                    <p className="contact-desc">Ready to take your game to the next level? Reach out to us for admission details.</p>
                    
                    <div className="info-block">
                        <h5 className="info-label">Location</h5>
                        <p className="info-value">Angarh Rd, near Food Mania,<br />Avas Vikas Colony,<br />Mirzapur, UP 231001</p>
                    </div>
                    <div className="info-block">
                        <h5 className="info-label">Phone</h5>
                        <p className="info-value"><a href="tel:07054540102">070545 40102</a></p>
                    </div>
                    <div className="info-block">
                        <h5 className="info-label">Timings</h5>
                        <p className="info-value">3:00 PM onwards<br />(Day & Night Sessions)</p>
                    </div>
                </div>
                <div className="contact-form-container">
                    <form className="contact-form" id="enrollForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" required className="form-control" placeholder="Enter your name" />
                        </div>
                        <div className="form-row">
                            <div className="form-group half">
                                <label htmlFor="age">Age</label>
                                <input type="number" id="age" required className="form-control" placeholder="e.g. 15" />
                            </div>
                            <div className="form-group half">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" required className="form-control" placeholder="Your contact number" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="session">Preferred Session</label>
                            <select id="session" className="form-control">
                                <option value="day">Day Session</option>
                                <option value="night">Night Session</option>
                                <option value="undecided">Not Sure Yet</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message (Optional)</label>
                            <textarea id="message" rows={4} className="form-control" placeholder="Tell us about your cricketing experience..."></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-primary btn-block" 
                            disabled={disabled}
                            style={success ? { backgroundColor: 'var(--accent-secondary)' } : {}}
                        >
                            {buttonText}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
