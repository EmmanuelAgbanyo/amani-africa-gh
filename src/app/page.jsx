"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Globe2, Handshake, HeartHandshake, Users, MapPin, Target, ArrowUpRight } from 'lucide-react';

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
      {/* Corporate Split-Screen Hero */}
      <header className="hero" style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', 
        background: 'var(--color-background)', position: 'relative', overflow: 'hidden'
      }}>
        {/* Abstract Background Elements */}
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(234,88,12,0.05) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(10,17,40,0.05) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '120px' }}>
          <div className="grid grid-2 items-center" style={{ gap: '4rem', alignItems: 'center' }}>
            
            {/* Text Side */}
            <div className="fade-up" style={{ paddingRight: '2rem' }}>
              <div style={{ display: 'inline-block', padding: '0.6rem 1.5rem', background: 'rgba(234,88,12,0.1)', color: 'var(--color-primary)', borderRadius: '50px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '2rem', fontSize: '0.9rem', border: '1px solid rgba(234,88,12,0.2)' }}>
                Empowering Communities
              </div>
              <h1 style={{ 
                fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1.5rem', color: 'var(--color-heading)', 
                lineHeight: 1.05, wordBreak: 'break-word', letterSpacing: '-0.04em', fontFamily: 'var(--font-family-heading)', fontWeight: 800
              }}>
                Sustainable <br />
                Local <span className="text-gradient" style={{ display: 'inline-block' }}>Transformation</span>
              </h1>
              <p style={{ 
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', marginBottom: '3rem', color: 'var(--color-text)', 
                maxWidth: '600px', lineHeight: 1.8 
              }}>
                Mobilizing critical resources and forging strategic partnerships to support community development, humanitarian efforts, and empower local leaders across Ghana.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <Link href="/about" className="btn btn-primary">
                  Discover Our Impact <ArrowRight size={20} />
                </Link>
                <Link href="/how-we-work" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(15,23,42,0.2)' }}>
                  How We Work <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>

            {/* Image Side (High-End Collage) */}
            <div className="fade-up" style={{ transitionDelay: '0.2s', position: 'relative' }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', borderRadius: '32px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <img src="/hero_bg.png" alt="Amani Community Impact" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                
                {/* Glass Overlay on Image */}
                <div style={{
                  position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem',
                  background: 'rgba(10, 17, 40, 0.7)', backdropFilter: 'blur(16px)',
                  padding: '1.5rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff', display: 'flex', alignItems: 'center', gap: '1.5rem'
                }}>
                  <div style={{ width: '50px', height: '50px', background: 'var(--color-primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <HeartHandshake size={24} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '1.2rem', marginBottom: '0.2rem' }}>Building Resilient Futures</div>
                    <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Together with local authorities.</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Accent */}
              <div style={{ position: 'absolute', top: '10%', right: '-20px', width: '80px', height: '80px', background: 'var(--color-primary)', borderRadius: '50%', zIndex: -1, opacity: 0.5, filter: 'blur(20px)' }}></div>
            </div>

          </div>
        </div>
      </header>

      {/* Corporate Impact Stats Section */}
      <section className="container" style={{ position: 'relative', zIndex: 20, marginTop: '-40px' }}>
        <div className="glass-panel impact-stats-panel" style={{ backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.05)', boxShadow: 'var(--shadow-lg)' }}>
          <div className="grid grid-3 text-center">
            <div className="fade-up" style={{ transitionDelay: '0.1s' }}>
              <Users size={32} style={{ color: 'var(--color-primary)', margin: '0 auto 1.5rem' }} />
              <div className="stat-number" data-target="50" data-suffix="+" style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-heading)', lineHeight: 1, fontFamily: 'var(--font-family-heading)' }}>0</div>
              <div style={{ color: 'var(--color-text)', fontWeight: 600, marginTop: '1rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.9rem' }}>Communities Reached</div>
            </div>
            <div className="fade-up" style={{ transitionDelay: '0.2s', position: 'relative' }}>
              {/* Vertical dividers for large screens */}
              <div style={{ position: 'absolute', left: '-10%', top: '10%', height: '80%', width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.1), transparent)' }} className="hidden-mobile"></div>
              <div style={{ position: 'absolute', right: '-10%', top: '10%', height: '80%', width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.1), transparent)' }} className="hidden-mobile"></div>
              
              <Target size={32} style={{ color: 'var(--color-primary)', margin: '0 auto 1.5rem' }} />
              <div className="stat-number" data-target="120" data-suffix="+" style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-heading)', lineHeight: 1, fontFamily: 'var(--font-family-heading)' }}>0</div>
              <div style={{ color: 'var(--color-text)', fontWeight: 600, marginTop: '1rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.9rem' }}>Projects Completed</div>
            </div>
            <div className="fade-up" style={{ transitionDelay: '0.3s' }}>
              <MapPin size={32} style={{ color: 'var(--color-primary)', margin: '0 auto 1.5rem' }} />
              <div className="stat-number" data-target="16" style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-heading)', lineHeight: 1, fontFamily: 'var(--font-family-heading)' }}>0</div>
              <div style={{ color: 'var(--color-text)', fontWeight: 600, marginTop: '1rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.9rem' }}>Regions Active</div>
            </div>
          </div>
        </div>
      </section>

      {/* Spectacular Bento Grid for Core Pillars */}
      <section className="container feature-section section">
        <div className="text-center fade-up" style={{ marginBottom: '5rem' }}>
          <h2 className="section-title">Discover AMANI</h2>
          <p className="section-subtitle">Explore the foundational elements driving our approach to sustainable national development.</p>
        </div>
        
        <div className="bento-grid fade-up" style={{ transitionDelay: '0.1s' }}>
          
          {/* Main Spectacular How We Work Card */}
          <Link href="/how-we-work" className="bento-card bento-large bento-interactive group">
            <div className="bento-bg-accent"></div>
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '70px', height: '70px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', marginBottom: '2rem' }}>
                  <Target size={36} />
                </div>
                <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '1rem', lineHeight: 1.1 }}>How We Work</h3>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.15rem', maxWidth: '400px', lineHeight: 1.6 }}>
                  Our award-winning 7-step approach to community development. See how we identify, design, and execute high-impact interventions.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginTop: '3rem', width: 'max-content' }} className="bento-link">
                <span style={{ borderBottom: '2px solid rgba(255,255,255,0.3)', paddingBottom: '4px' }}>Read More</span> 
                <div className="arrow-circle"><ArrowRight size={18} /></div>
              </div>
            </div>
          </Link>

          {/* Right Side Column */}
          <div className="bento-col">
            
            {/* Who We Are */}
            <Link href="/about" className="bento-card bento-medium">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ width: '56px', height: '56px', background: 'rgba(234, 88, 12, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                  <Globe2 size={28} />
                </div>
                <div className="corner-arrow"><ArrowUpRight size={24} /></div>
              </div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>Who We Are</h3>
              <p style={{ opacity: 0.8, fontSize: '1rem', lineHeight: 1.6, flex: 1 }}>
                A Ghanaian NGO dedicated to empowering people through strategic multi-sectoral partnerships.
              </p>
            </Link>

            {/* Bottom Row inside Right Col */}
            <Link href="/donate" className="bento-card bento-dark">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '0.5rem' }}>
                <div className="bento-small-icon" style={{ marginBottom: 0 }}><HeartHandshake size={28} /></div>
                <h3 style={{ fontSize: '1.8rem', color: '#fff', margin: 0 }}>Donate</h3>
              </div>
              <p style={{ opacity: 0.8, fontSize: '1rem', color: 'rgba(255,255,255,0.8)', marginTop: '0.5rem' }}>
                Mobilize resources & fund local initiatives.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Global CSS style injection for Bento Grid to impress the user */}
      <style dangerouslySetInnerHTML={{__html: `
        .bento-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 992px) {
          .bento-grid {
            grid-template-columns: 1.2fr 1fr;
            min-height: 500px;
          }
        }
        .bento-col { display: flex; flex-direction: column; gap: 1.5rem; }
        .bento-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; flex: 1; }
        
        .bento-card {
          border-radius: 32px; padding: 2.5rem; position: relative; overflow: hidden;
          text-decoration: none; display: flex; flex-direction: column; justify-content: space-between;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(0,0,0,0.04);
        }
        .bento-large {
          background: var(--color-primary); padding: 4rem 3rem;
          box-shadow: 0 20px 40px rgba(234, 88, 12, 0.2);
        }
        .bento-large:hover { transform: translateY(-10px) scale(1.02); box-shadow: 0 30px 60px rgba(234, 88, 12, 0.3); }
        .bento-bg-accent {
          position: absolute; top: 0; right: 0; width: 150%; height: 150%;
          background: radial-gradient(circle at top right, rgba(255,255,255,0.2) 0%, transparent 60%);
          transition: transform 0.8s ease; transform-origin: top right;
        }
        .bento-large:hover .bento-bg-accent { transform: scale(1.2); }
        
        .arrow-circle {
          width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.2);
          display: flex; alignItems: center; justify-content: center; transition: all 0.3s;
        }
        .bento-large:hover .arrow-circle { background: #fff; color: var(--color-primary); transform: translateX(10px) rotate(-45deg); }
        
        .bento-medium { background: #fff; box-shadow: var(--shadow-sm); flex: 1; }
        .bento-medium:hover { box-shadow: var(--shadow-md); transform: translateY(-5px); border-color: rgba(234, 88, 12, 0.2); }
        .corner-arrow {
          width: 45px; height: 45px; border-radius: 50%; border: 1px solid rgba(0,0,0,0.1);
          display: flex; align-items: center; justify-content: center; color: var(--color-text);
          transition: all 0.4s;
        }
        .bento-medium:hover .corner-arrow { background: var(--color-primary); color: #fff; border-color: var(--color-primary); transform: rotate(45deg); }
        
        .bento-small { background: #fff; box-shadow: var(--shadow-sm); padding: 2rem; }
        .bento-small:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); border-color: rgba(234, 88, 12, 0.2); }
        .bento-dark { background: var(--color-secondary); color: #fff; border-color: rgba(255,255,255,0.1); }
        .bento-dark:hover { background: var(--color-secondary-light); border-color: var(--color-primary); box-shadow: 0 15px 30px rgba(10,17,40,0.3); }
        
        .bento-small-icon {
          width: 45px; height: 45px; border-radius: 12px; margin-bottom: 1.5rem;
          display: flex; align-items: center; justify-content: center;
        }
        .bento-small .bento-small-icon { background: rgba(234, 88, 12, 0.1); color: var(--color-primary); }
        .bento-dark .bento-small-icon { background: rgba(255, 255, 255, 0.1); color: #fff; }
        
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .bento-row { grid-template-columns: 1fr; }
        }
      `}} />

      {/* Cinematic Impact In Action Gallery */}
      <section className="gallery-section bg-surface">
        <div className="container">
          <div className="text-center fade-up" style={{ marginBottom: '5rem' }}>
            <h2 className="section-title">Impact In Action</h2>
            <div className="divider"></div>
          </div>
          
          <div className="picture-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
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
        </div>
      </section>

      {/* Global CSS style injection for specific page responsive tweaks without cluttering globals.css */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
      `}} />
    </main>
  );
}
