"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link href="/" className="logo">
          <img src="/amani-logo.jpeg" alt="Amani Africa Logo" className="logo-img" />
          AMANI<span>Africa</span>
        </Link>
        <div className="nav-links">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>Who We Are</Link>
          <Link href="/how-we-work" className={`nav-link ${pathname === '/how-we-work' ? 'active' : ''}`}>How We Work</Link>
          <Link href="/resources" className={`nav-link ${pathname === '/resources' ? 'active' : ''}`}>Resources</Link>
          <Link href="/donate" className="btn btn-primary">Donate Now</Link>
        </div>
        <button 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <Link href="/" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link href="/about" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Who We Are</Link>
        <Link href="/how-we-work" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>How We Work</Link>
        <Link href="/resources" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Resources</Link>
        <Link href="/donate" className="btn btn-primary mt-2" onClick={() => setMobileMenuOpen(false)}>Donate Now</Link>
      </div>
    </nav>
  );
}
