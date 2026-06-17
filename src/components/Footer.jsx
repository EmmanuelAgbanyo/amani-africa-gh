import Link from 'next/link';

const Facebook = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Twitter = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const Instagram = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Linkedin = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Tiktok = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-container">
              <img src="/amani-logo.jpeg" alt="Amani Africa Logo" className="footer-logo-img" />
              <h2>AMANI<span>Africa</span></h2>
            </div>
            <p>Empowering people, strengthening communities, supporting local development, promoting civic awareness, and creating sustainable partnerships for national development.</p>
          </div>
          <div className="footer-links">
            <h3>Explore</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">Who We Are</Link></li>
              <li><Link href="/how-we-work">How We Work</Link></li>
              <li><Link href="/resources">Resources</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Get in Touch</h3>
            <p>Join us in mobilizing resources for sustainable local transformation.</p>
            <div className="social-links">
              <a href="https://x.com/amaniafricagh?s=11" target="_blank" rel="noopener noreferrer" className="social-icon"><Twitter size={20} /></a>
              <a href="https://www.instagram.com/amaniafrica_gh?igsh=MTR5M3QxaThvcTAzaA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-icon"><Instagram size={20} /></a>
              <a href="https://www.tiktok.com/@amaniafrica?_r=1&_t=ZS-97EMC78GUQn" target="_blank" rel="noopener noreferrer" className="social-icon"><Tiktok size={20} /></a>
              <a href="#" className="social-icon"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 AMANI Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
