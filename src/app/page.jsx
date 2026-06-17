"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Globe2, Handshake, HeartHandshake, Users, MapPin, Target } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    document.body.classList.add('home-page', 'page-transition');
    
    // Scroll Reveal & Number Counter
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Number Counter Animation
          if (entry.target.classList.contains('stat-number') && !entry.target.dataset.counted) {
            entry.target.dataset.counted = true;
            const target = parseInt(entry.target.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
              current += step;
              if (current < target) {
                entry.target.innerText = Math.ceil(current) + (entry.target.getAttribute('data-suffix') || '');
                requestAnimationFrame(updateCounter);
              } else {
                entry.target.innerText = target + (entry.target.getAttribute('data-suffix') || '');
              }
            };
            updateCounter();
          }
          
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-up, .stat-number').forEach(el => observer.observe(el));
    
    return () => {
      document.body.classList.remove('home-page', 'page-transition');
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      <header className="hero" style={{
        position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', backgroundImage: "url('/hero_bg.png')", backgroundSize: 'cover', backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="hero-overlay" style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.5))',
          backdropFilter: 'blur(2px)'
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="hero-content fade-up glass-panel-dark animate-float" style={{ 
            maxWidth: '900px', padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)', margin: '0 auto', 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}>
            <h1 className="hero-title" style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '1.5rem', color: '#fff', 
              textShadow: '0 4px 20px rgba(0,0,0,0.5)', lineHeight: 1.1, wordBreak: 'break-word'
            }}>
              Sustainable Local <span className="text-gradient">Transformation</span>
            </h1>
            <p className="hero-text" style={{ 
              fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', marginBottom: '3rem', color: 'rgba(255,255,255,0.9)', 
              maxWidth: '800px', margin: '0 auto 3rem' 
            }}>
              Mobilizing resources and partnerships to support community development, humanitarian efforts, and local leaders across Ghana.
            </p>
            <div className="hero-buttons" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/about" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
                Discover Our Impact <ArrowRight size={20} />
              </Link>
              <Link href="/how-we-work" className="btn btn-outline glass-panel" style={{ color: '#fff', borderColor: 'transparent', padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
                How We Work
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Impact Stats Section */}
      <section className="container" style={{ position: 'relative', zIndex: 20, marginTop: '-60px' }}>
        <div className="glass-panel impact-stats-panel" style={{ backgroundColor: '#fff', borderTop: '4px solid var(--color-primary)' }}>
          <div className="grid grid-3 text-center">
            <div className="fade-up" style={{ transitionDelay: '0.1s' }}>
              <Users size={40} style={{ color: 'var(--color-primary)', margin: '0 auto 1rem' }} />
              <div className="stat-number" data-target="50" data-suffix="+" style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-heading)', lineHeight: 1 }}>0</div>
              <div style={{ color: 'var(--color-text)', fontWeight: 500, marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Communities Reached</div>
            </div>
            <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
              <Target size={40} style={{ color: 'var(--color-primary)', margin: '0 auto 1rem' }} />
              <div className="stat-number" data-target="120" data-suffix="+" style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-heading)', lineHeight: 1 }}>0</div>
              <div style={{ color: 'var(--color-text)', fontWeight: 500, marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Projects Completed</div>
            </div>
            <div className="fade-up" style={{ transitionDelay: '0.3s' }}>
              <MapPin size={40} style={{ color: 'var(--color-primary)', margin: '0 auto 1rem' }} />
              <div className="stat-number" data-target="16" style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-heading)', lineHeight: 1 }}>0</div>
              <div style={{ color: 'var(--color-text)', fontWeight: 500, marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Regions Active</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact In Action Gallery */}
      <section className="container gallery-section">
        <div className="text-center fade-up" style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">Impact In Action</h2>
          <div className="divider"></div>
        </div>
        
        <div className="picture-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          <div className="picture-card fade-up" style={{ transitionDelay: '0.1s' }}>
            <div className="picture-bg" style={{ backgroundImage: "url('/impact-1.jpg')" }}></div>
            <div className="picture-overlay"></div>
            <div className="picture-content">
              <h3 className="picture-title">Community Empowerment</h3>
              <p className="picture-desc">Fostering strong relationships and building the capacity of local leaders to drive sustainable development.</p>
            </div>
          </div>
          
          <div className="picture-card fade-up" style={{ transitionDelay: '0.2s' }}>
            <div className="picture-bg" style={{ backgroundImage: "url('/impact-2.jpg')" }}></div>
            <div className="picture-overlay"></div>
            <div className="picture-content">
              <h3 className="picture-title">Sustainable Livelihoods</h3>
              <p className="picture-desc">Equipping individuals with the skills and support needed to thrive and uplift their families.</p>
            </div>
          </div>
          
          <div className="picture-card fade-up" style={{ transitionDelay: '0.3s' }}>
            <div className="picture-bg" style={{ backgroundImage: "url('/impact-3.jpg')" }}></div>
            <div className="picture-overlay"></div>
            <div className="picture-content">
              <h3 className="picture-title">Local Partnerships</h3>
              <p className="picture-desc">Working hand-in-hand with communities to identify needs and implement effective solutions.</p>
            </div>
          </div>

          <div className="picture-card fade-up" style={{ transitionDelay: '0.4s' }}>
            <div className="picture-bg" style={{ backgroundImage: "url('/impact-4.jpg')" }}></div>
            <div className="picture-overlay"></div>
            <div className="picture-content">
              <h3 className="picture-title">Agriculture & Growth</h3>
              <p className="picture-desc">Promoting agricultural development and food security through hands-on community farming projects.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="container feature-section" style={{ padding: '8rem 0' }}>
        <div className="text-center fade-up" style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">Our Core Pillars</h2>
          <div className="divider"></div>
        </div>
        
        <div className="grid grid-3">
          <Link href="/about" className="card fade-up" style={{ transitionDelay: '0.1s', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '80px', height: '80px', background: 'var(--color-surface)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', marginBottom: '2rem', transition: 'all var(--transition-fast)' }} className="icon-wrapper">
              <Globe2 size={40} />
            </div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.8rem' }}>Who We Are</h3>
            <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>A Ghanaian NGO dedicated to empowering people and strengthening communities through strategic partnerships.</p>
          </Link>
          <Link href="/resources" className="card fade-up" style={{ transitionDelay: '0.2s', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '80px', height: '80px', background: 'var(--color-surface)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', marginBottom: '2rem', transition: 'all var(--transition-fast)' }} className="icon-wrapper">
              <Handshake size={40} />
            </div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.8rem' }}>Resource Mobilization</h3>
            <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>Securing financial, technical, and logistical resources through crowdfunding, advocacy, and collaborations.</p>
          </Link>
          <Link href="/donate" className="card fade-up" style={{ transitionDelay: '0.3s', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '80px', height: '80px', background: 'var(--color-surface)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', marginBottom: '2rem', transition: 'all var(--transition-fast)' }} className="icon-wrapper">
              <HeartHandshake size={40} />
            </div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.8rem' }}>Make an Impact</h3>
            <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>Support specific communities using unique reference codes to directly fund local development initiatives.</p>
          </Link>
        </div>
      </section>
      
      {/* Global CSS style injection for hover effects specific to this page without creating a new file */}
      <style dangerouslySetInnerHTML={{__html: `
        .card:hover .icon-wrapper { background: var(--color-primary) !important; color: white !important; transform: scale(1.1); }
      `}} />
    </main>
  );
}
