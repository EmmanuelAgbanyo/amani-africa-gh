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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`premium-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="premium-nav-container">
          
          {/* Logo Section */}
          <Link href="/" className="premium-logo">
            <img src="/amani-logo.jpeg" alt="Amani Africa Logo" className="logo-img" />
            <div className="logo-text">
              <span className="logo-main">AMANI</span>
              <span className="logo-sub">Africa</span>
            </div>
          </Link>
          
          {/* Desktop Links */}
          <div className="premium-nav-links">
            <Link href="/" className={`premium-nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link href="/about" className={`premium-nav-link ${pathname === '/about' ? 'active' : ''}`}>Who We Are</Link>
            <Link href="/how-we-work" className={`premium-nav-link ${pathname === '/how-we-work' ? 'active' : ''}`}>How We Work</Link>
            
            <Link href="/donate" className="premium-donate-btn">
              Donate Now
              <div className="btn-glow"></div>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className={`premium-mobile-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="hamburger-line top"></div>
            <div className="hamburger-line middle"></div>
            <div className="hamburger-line bottom"></div>
          </button>
        </div>

        {/* Mobile Fullscreen Glass Menu */}
        <div className={`premium-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <Link href="/" className={`mobile-nav-link ${pathname === '/' ? 'active' : ''}`} style={{ transitionDelay: mobileMenuOpen ? '0.1s' : '0s' }} onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/about" className={`mobile-nav-link ${pathname === '/about' ? 'active' : ''}`} style={{ transitionDelay: mobileMenuOpen ? '0.15s' : '0s' }} onClick={() => setMobileMenuOpen(false)}>Who We Are</Link>
            <Link href="/how-we-work" className={`mobile-nav-link ${pathname === '/how-we-work' ? 'active' : ''}`} style={{ transitionDelay: mobileMenuOpen ? '0.2s' : '0s' }} onClick={() => setMobileMenuOpen(false)}>How We Work</Link>
            <div style={{ marginTop: '2rem', opacity: mobileMenuOpen ? 1 : 0, transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)', transition: `all 0.5s ease ${mobileMenuOpen ? '0.3s' : '0s'}` }}>
              <Link href="/donate" className="premium-donate-btn mobile-only" onClick={() => setMobileMenuOpen(false)}>
                Donate
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <style dangerouslySetInnerHTML={{__html: `
        /* Premium Navbar Root */
        .premium-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.5rem 2rem;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .premium-navbar.scrolled {
          padding: 1rem 2rem;
        }

        .premium-nav-container {
          position: relative;
          z-index: 1010;
          max-width: 1200px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 1rem 0.5rem 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .premium-navbar.scrolled .premium-nav-container {
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(255, 255, 255, 0.9);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.06);
        }

        /* Logo Styling */
        .premium-logo {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          text-decoration: none;
          z-index: 1001; /* Keep above mobile menu */
          position: relative;
        }
        .premium-logo .logo-img {
          height: 38px;
          width: auto;
          border-radius: 8px;
        }
        .premium-logo .logo-text {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }
        .premium-logo .logo-main {
          font-family: var(--font-family-heading);
          font-weight: 800;
          font-size: 1.4rem;
          color: var(--color-heading);
          letter-spacing: -0.02em;
        }
        .premium-logo .logo-sub {
          font-family: var(--font-family-heading);
          font-weight: 500;
          font-size: 1.1rem;
          color: var(--color-primary);
        }

        /* Desktop Nav Links */
        .premium-nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .premium-nav-link {
          position: relative;
          color: var(--color-text);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
          transition: color 0.3s ease;
          padding: 0.5rem 0;
        }
        .premium-nav-link:hover, .premium-nav-link.active {
          color: var(--color-heading);
        }

        /* The Premium Animated Underline */
        .premium-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 20px;
          height: 3px;
          background: var(--color-primary);
          border-radius: 2px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .premium-nav-link:hover::after, .premium-nav-link.active::after {
          transform: translateX(-50%) scaleX(1);
        }

        /* Premium Donate Button */
        .premium-donate-btn {
          position: relative;
          background: var(--color-heading);
          color: #fff;
          padding: 0.7rem 1.8rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          overflow: hidden;
          transition: all 0.3s ease;
          display: inline-block;
          border: 1px solid transparent;
        }
        .premium-donate-btn:hover {
          background: var(--color-primary);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(234, 88, 12, 0.2);
        }
        /* Button Glow Sweep Effect */
        .btn-glow {
          position: absolute;
          top: 0; left: -100%;
          width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
          transform: skewX(-25deg);
          transition: all 0.7s ease;
        }
        .premium-donate-btn:hover .btn-glow {
          left: 150%;
        }

        /* Mobile Hamburger */
        .premium-mobile-btn {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 20px;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 1001;
        }
        .hamburger-line {
          width: 100%;
          height: 2px;
          background: var(--color-heading);
          border-radius: 2px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .premium-mobile-btn.active .hamburger-line.top {
          transform: translateY(9px) rotate(45deg);
        }
        .premium-mobile-btn.active .hamburger-line.middle {
          opacity: 0;
          transform: translateX(20px);
        }
        .premium-mobile-btn.active .hamburger-line.bottom {
          transform: translateY(-9px) rotate(-45deg);
        }

        /* Mobile Menu Container */
        .premium-mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          visibility: hidden;
        }
        .premium-mobile-menu.open {
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        }
        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          width: 100%;
          padding: 2rem;
        }

        .mobile-nav-link {
          font-family: var(--font-family-heading);
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--color-heading);
          text-decoration: none;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          letter-spacing: -0.02em;
        }
        .mobile-nav-link:hover, .mobile-nav-link.active {
          color: var(--color-primary);
        }
        .premium-mobile-menu.open .mobile-nav-link {
          opacity: 1;
          transform: translateY(0);
        }

        .mobile-only {
          font-size: 1.1rem;
          padding: 1rem 2.5rem;
        }

        /* Responsive Breakpoints */
        @media (max-width: 992px) {
          .premium-nav-links {
            display: none;
          }
          .premium-mobile-btn {
            display: flex;
          }
          .premium-navbar {
            padding: 1rem;
          }
          .premium-navbar.scrolled {
            padding: 0.5rem 1rem;
          }
          .premium-nav-container {
            padding: 0.8rem 1.5rem;
          }
        }
      `}} />
    </>
  );
}
