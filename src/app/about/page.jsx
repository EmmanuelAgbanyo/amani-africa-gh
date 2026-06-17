"use client";

import { useEffect } from 'react';
import { Target } from 'lucide-react';

export default function About() {
  useEffect(() => {
    document.body.classList.add('page-transition');
    
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    
    return () => {
      document.body.classList.remove('page-transition');
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      <section className="section pt-5">
        <div className="container">
          <div className="grid grid-2 items-center" style={{ gap: '4rem' }}>
            <div className="about-text fade-up">
              <h1 className="section-title">Who We Are</h1>
              <div className="divider left"></div>
              <p style={{ fontSize: '1.4rem', fontWeight: 500, color: 'var(--color-primary)', marginBottom: '2rem', lineHeight: 1.6 }}>
                AMANI is a Ghanaian non-governmental organization (NGO) dedicated to mobilizing resources and partnerships to support community development, individual humanitarian support, Chiefs, and Assembly members for sustainable local transformation across Ghana.
              </p>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.15rem' }}>
                With a nationwide presence at the national, regional, district/constituency, and community levels, AMANI works directly with traditional authorities, government institutions, community leaders, civil society organizations, and development partners to identify local challenges and facilitate practical solutions.
              </p>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.15rem' }}>
                Beyond community development, we are committed to supporting vulnerable individuals, promoting civic responsibility, and ensuring that government policies, programs, and opportunities effectively reach local communities through public education.
              </p>
            </div>
            
            <div className="fade-up" style={{ transitionDelay: '0.2s', position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img src="/mission_img.png" alt="Amani Mission - Mobilizing Resources" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2rem', background: 'linear-gradient(to top, rgba(15,23,42,0.9), transparent)', color: '#fff' }}>
                <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>Mobilizing Partnerships</h3>
                <p style={{ opacity: 0.9 }}>Working with traditional authorities and development partners.</p>
              </div>
            </div>
          </div>

          <div className="fade-up" style={{ backgroundColor: 'var(--color-secondary)', color: '#fff', padding: '6rem 0', marginTop: '4rem', borderRadius: '30px', textAlign: 'center', boxShadow: 'var(--shadow-lg)' }}>
            <div className="container">
              <div style={{ width: '80px', height: '80px', margin: '0 auto 2rem', background: 'rgba(234, 88, 12, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                <Target size={40} />
              </div>
              <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '2rem' }}>Our Mission</h2>
              <p style={{ fontSize: '1.5rem', fontStyle: 'italic', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto', color: 'rgba(255,255,255,0.9)' }}>
                To mobilize <strong style={{ color: 'var(--color-primary)', fontWeight: 600 }}>technical, financial, social, logistical, legal, and human resources</strong> to supplement government infrastructural, developmental, and humanitarian efforts at the local level, while facilitating the dissemination of government policies, programs, and opportunities to communities across Ghana.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
