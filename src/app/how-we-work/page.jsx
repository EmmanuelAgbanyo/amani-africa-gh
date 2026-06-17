"use client";

import { useEffect, useState } from 'react';
import { ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';

function OrgNode({ title, subtitle, details, delay }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="org-node fade-up" style={{ transitionDelay: delay }}>
      <div 
        className={`org-card ${isExpanded ? 'expanded' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-heading)', marginBottom: '0.25rem', letterSpacing: '-0.5px' }}>{title}</div>
            <div className="org-subtitle">{subtitle}</div>
          </div>
          <div style={{ background: 'rgba(234, 88, 12, 0.1)', padding: '10px', borderRadius: '50%', display: 'flex' }}>
            <ChevronDown className="expand-icon" size={24} />
          </div>
        </div>
        <div className="org-details">
          {details}
        </div>
      </div>
    </div>
  );
}

export default function HowWeWork() {
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
    <main style={{ paddingBottom: '4rem' }}>
      <section className="section pt-5" style={{ background: 'linear-gradient(to bottom, #f8fafc, #ffffff)' }}>
        <div className="container">
          <div className="fade-up text-center" style={{ padding: '2rem 0 4rem' }}>
            <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(234,88,12,0.1)', color: 'var(--color-primary)', borderRadius: '50px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Our Structure</div>
            <h1 className="section-title" style={{ fontSize: '4rem' }}>How We Work</h1>
            <p className="section-subtitle" style={{ fontSize: '1.4rem' }}>A structured nationwide network with executives at the Regional, District/Constituency, and Community levels.</p>
          </div>

          <div className="fade-up" style={{ margin: '0 auto 6rem', textAlign: 'center', maxWidth: '1000px' }}>
            <div className="glass-panel" style={{ padding: '1rem', background: '#fff', borderRadius: '24px', boxShadow: 'var(--shadow-xl)' }}>
              <img src="/amani-organogram.jpeg" alt="Official Amani Organogram" style={{ width: '100%', height: 'auto', borderRadius: '16px' }} />
            </div>
          </div>

          <div className="text-center fade-up" style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Interactive Architecture</h2>
            <p style={{ opacity: 0.8, fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto 0' }}>Explore our operational hierarchy. Click to reveal detailed functions.</p>
          </div>

          <div className="org-tree">
            <OrgNode 
              delay="0.1s"
              title="National Level"
              subtitle="Amani National Executive Board"
              details={
                <>
                  <p>The highest governing body of AMANI Africa. Responsible for overarching strategy, national policy alignment, and major resource allocation across the country.</p>
                  <ul>
                    <li>Strategic national partnerships</li>
                    <li>High-level advocacy and lobbying</li>
                    <li>Nationwide campaign management</li>
                  </ul>
                </>
              }
            />
            
            <OrgNode 
              delay="0.2s"
              title="Regional Level"
              subtitle="Regional Development Council"
              details={
                <>
                  <p>Oversees operations and coordinates resources for all districts within a specific region.</p>
                  <ul>
                    <li>Regional resource mobilization</li>
                    <li>Engaging regional stakeholders</li>
                    <li>Monitoring district-level interventions</li>
                  </ul>
                </>
              }
            />

            <OrgNode 
              delay="0.3s"
              title="District / Constituency"
              subtitle="District Development Council"
              details={
                <>
                  <p>Acts as the bridge between regional strategies and community execution. Focuses on specific constituency needs.</p>
                  <ul>
                    <li>Identifying district-wide challenges</li>
                    <li>Coordinating with local Assembly Members</li>
                    <li>Facilitating development interventions</li>
                  </ul>
                </>
              }
            />

            <OrgNode 
              delay="0.4s"
              title="Community Level"
              subtitle="Community Development Trust"
              details={
                <>
                  <p>The grassroots foundation of AMANI. Works directly with the people to implement change.</p>
                  <ul>
                    <li>Identifying specific community challenges</li>
                    <li>Promoting civic education directly to citizens</li>
                    <li>Ensuring local accountability</li>
                  </ul>
                </>
              }
            />
          </div>

          <div className="fade-up" style={{ textAlign: 'center', margin: '4rem 0 8rem' }}>
            <button className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }} onClick={() => alert('Lead Your Community form coming soon!')}>
              Lead Your Community <ArrowRight size={20} />
            </button>
          </div>

          <div className="fade-up">
            <div className="text-center" style={{ marginBottom: '4rem' }}>
              <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(234,88,12,0.1)', color: 'var(--color-primary)', borderRadius: '50px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Duties</div>
              <h2 style={{ fontSize: '3rem' }}>Executive Responsibilities</h2>
            </div>
            
            <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
              {[
                "Identifying community and individual challenges",
                "Engaging stakeholders and local authorities",
                "Mobilizing resources and partnerships",
                "Promoting civic education and public awareness",
                "Facilitating development and humanitarian interventions",
                "Monitoring projects and ensuring accountability"
              ].map((resp, i) => (
                <div key={i} className="glass-panel" style={{ 
                  background: '#fff', padding: '2rem', display: 'flex', gap: '1.2rem', alignItems: 'flex-start',
                  transition: 'transform var(--transition-fast)', cursor: 'default'
                }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(234,88,12,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle2 size={20} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <div style={{ fontSize: '1.2rem', color: 'var(--color-heading)', fontWeight: 600, lineHeight: 1.4 }}>{resp}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up animated-gradient-bg" style={{ 
            color: '#fff', padding: '5rem 4rem', borderRadius: '32px', 
            marginTop: '8rem', display: 'grid', gridTemplateColumns: '1fr', gap: '3rem',
            alignItems: 'center', position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-xl)'
          }}>
            <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
              <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', color: '#fff', borderRadius: '50px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Partnerships</div>
              <h3 style={{ color: '#fff', fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>Project Implementation Partners</h3>
              <p style={{ fontSize: '1.3rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto 2rem' }}>
                Once resources are mobilized, projects are allocated to registered PIPs led by Assembly Members, Chiefs, Traditional Authorities, and other stakeholders.
              </p>
              <div className="glass-panel" style={{ background: 'rgba(0,0,0,0.2)', padding: '2rem', borderRadius: '20px', maxWidth: '800px', margin: '0 auto 3rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <strong style={{ display: 'block', fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-primary-light)' }}>Who can be a P.I.P?</strong>
                <span style={{ fontSize: '1.1rem' }}>NGOs, Associations, Institutions, Artisans, Professionals, Social workers, and Individuals.</span>
              </div>
              <button className="btn" style={{ 
                background: '#fff', color: 'var(--color-primary-dark)', padding: '1.2rem 3rem', 
                fontSize: '1.1rem', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' 
              }} onClick={() => alert('PIP Registration form coming soon!')}>
                Register as a PIP <ArrowRight size={20} />
              </button>
            </div>
            
            {/* Decorative background elements */}
            <div style={{ position: 'absolute', top: '-50%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)', borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(234,88,12,0.4) 0%, transparent 70%)', borderRadius: '50%' }}></div>
          </div>

        </div>
      </section>
    </main>
  );
}
