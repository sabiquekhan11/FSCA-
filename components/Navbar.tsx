'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsActive(false);

    return (
        <nav
            className="navbar"
            id="navbar"
            style={{
                padding: scrolled ? '0.5rem 0' : '1rem 0',
                backgroundColor: scrolled ? 'rgba(8, 13, 26, 0.98)' : 'rgba(8, 13, 26, 0.95)'
            }}
        >
            <div className="container nav-container">
                <Link href="#" className="logo">
                    <img src="/logo.png" alt="Future Star Cricket Academy" className="logo-img" />
                </Link>
                <ul className={`nav-links ${isActive ? 'active' : ''}`}>
                    <li><Link href="#home" onClick={closeMenu}>Home</Link></li>
                    <li><Link href="#about" onClick={closeMenu}>About</Link></li>
                    <li><Link href="#facilities" onClick={closeMenu}>Facilities</Link></li>
                    <li><Link href="#coaches" onClick={closeMenu}>Coaches</Link></li>
                    <li><Link href="#reviews" onClick={closeMenu}>Reviews</Link></li>
                    <li><Link href="#contact" onClick={closeMenu}>Contact</Link></li>
                </ul>
                <div className="nav-actions">
                    <Link href="#contact" className="btn btn-primary">Join Now</Link>
                    <button
                        className="hamburger"
                        id="hamburger"
                        aria-label="Menu"
                        onClick={() => setIsActive(!isActive)}
                    >
                        <span className="bar" style={{ transform: isActive ? 'translateY(7px) rotate(45deg)' : 'none' }}></span>
                        <span className="bar" style={{ opacity: isActive ? 0 : 1 }}></span>
                        <span className="bar" style={{ transform: isActive ? 'translateY(-7px) rotate(-45deg)' : 'none' }}></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
