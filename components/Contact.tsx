'use client';
import { useState } from 'react';

export default function Contact() {
    const [buttonText, setButtonText] = useState('Submit Enquiry');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const age = formData.get('age');
        const phone = formData.get('phone');
        const session = formData.get('session');
        const message = formData.get('message');
        
        const whatsappMessage = `Hello Future Star Cricket Academy, I am interested in joining!
        
*Name:* ${name}
*Age:* ${age}
*Phone:* ${phone}
*Preferred Session:* ${session}
*Additional Message:* ${message ? message : 'N/A'}`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/917054540102?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
        
        // Reset form visual state temporarily
        setButtonText('Redirecting...');
        setTimeout(() => {
            setButtonText('Submit Enquiry');
            (e.target as HTMLFormElement).reset();
        }, 2000);
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
                            <input type="text" id="name" name="name" required className="form-control" placeholder="Enter your name" />
                        </div>
                        <div className="form-row">
                            <div className="form-group half">
                                <label htmlFor="age">Age</label>
                                <input type="number" id="age" name="age" required className="form-control" placeholder="e.g. 15" />
                            </div>
                            <div className="form-group half">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" required className="form-control" placeholder="Your contact number" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="session">Preferred Session</label>
                            <select id="session" name="session" className="form-control">
                                <option value="Day Session">Day Session</option>
                                <option value="Night Session">Night Session</option>
                                <option value="Not Sure Yet">Not Sure Yet</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message (Optional)</label>
                            <textarea id="message" name="message" rows={4} className="form-control" placeholder="Tell us about your cricketing experience..."></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">
                            {buttonText}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
