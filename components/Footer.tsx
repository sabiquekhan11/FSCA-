import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <Link href="#" className="logo">
                        <img src="/logo.png" alt="Future Star Cricket Academy" className="logo-img" />
                    </Link>
                    <p className="footer-tagline">Building the future stars of Indian cricket from Mirzapur.</p>
                    <div className="footer-rating">
                        <span className="stars">★★★★★</span>
                        <span>4.9 Rating (144 Reviews)</span>
                    </div>
                </div>
                <div className="footer-links-group">
                    <h5 className="footer-heading">Quick Links</h5>
                    <ul className="footer-links">
                        <li><Link href="#home">Home</Link></li>
                        <li><Link href="#about">About</Link></li>
                        <li><Link href="#facilities">Facilities</Link></li>
                        <li><Link href="#hostel">Hostel</Link></li>
                    </ul>
                </div>
                <div className="footer-links-group">
                    <h5 className="footer-heading">More</h5>
                    <ul className="footer-links">
                        <li><Link href="#coaches">Coaches</Link></li>
                        <li><Link href="#reviews">Reviews</Link></li>
                        <li><Link href="#contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="container footer-bottom">
                <p>&copy; 2026 Future Star Cricket Academy. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
