"use client";

import { useEffect } from 'react';
import { HeartHandshake, ShieldCheck, Lock, Users, TrendingUp, Landmark, Handshake, Megaphone, Building2, Presentation, Network, Share2 } from 'lucide-react';

export default function Donate() {
  useEffect(() => {
    document.body.classList.add('bg-surface', 'page-transition');
    
    const style = document.createElement('style');
    style.innerHTML = `
      .resources-grid { display: grid; gap: 2rem; margin-top: 4rem; }
      @media (min-width: 600px) { .resources-grid { grid-template-columns: repeat(2, 1fr); } }
      @media (min-width: 1024px) { .resources-grid { grid-template-columns: repeat(3, 1fr); } }
      .r-icon-box { width: 70px; height: 70px; margin: 0 auto 1.5rem; background: var(--color-surface); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--color-primary); transition: all var(--transition-fast); }
      .r-card:hover .r-icon-box { background: var(--color-primary); color: #fff; transform: scale(1.1); }
    `;
    document.head.appendChild(style);
    
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
      document.body.classList.remove('bg-surface', 'page-transition');
      document.head.removeChild(style);
      observer.disconnect();
    };
  }, []);

  const resources = [
    { icon: <Users size={32} />, title: "Crowdfunding", desc: "Mobilizing small contributions from a large number of people to support specific projects.", delay: "0.1s" },
    { icon: <TrendingUp size={32} />, title: "Fundraising", desc: "Targeted events designed to generate substantial financial support for core missions.", delay: "0.2s" },
    { icon: <Landmark size={32} />, title: "Lobbying & Advocacy", desc: "Influencing policy makers and securing institutional backing for community needs.", delay: "0.3s" },
    { icon: <Handshake size={32} />, title: "Strategic Partnerships", desc: "Forming strong alliances with NGOs, businesses, and government bodies.", delay: "0.4s" },
    { icon: <Megaphone size={32} />, title: "Public Campaigns", desc: "Advertising and awareness campaigns to draw attention to pressing challenges.", delay: "0.5s" },
    { icon: <Building2 size={32} />, title: "Corporate Engagement", desc: "Collaborating with philanthropic organizations and corporate CSR programs.", delay: "0.6s" },
    { icon: <Presentation size={32} />, title: "Facilitation & Rep.", desc: "Representing community interests at higher levels to ensure local voices are heard.", delay: "0.7s" },
    { icon: <Network size={32} />, title: "Community Participation", desc: "Leveraging local human resources and traditional authorities to drive projects.", delay: "0.8s" },
    { icon: <Share2 size={32} />, title: "Networking", desc: "Engaging stakeholders across all sectors to create a robust web of support.", delay: "0.9s" }
  ];

  return (
    <main>
      <section className="section pt-5">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div className="fade-up" style={{ marginBottom: '4rem' }}>
            <HeartHandshake style={{ width: '80px', height: '80px', color: 'var(--color-primary)', margin: '0 auto 1.5rem' }} />
            <h1 style={{ fontSize: '3.5rem', color: 'var(--color-heading)', marginBottom: '1.5rem' }}>Donate & Mobilize</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text)' }}>Your support drives sustainable local transformation across Ghana. Every donation directly impacts the communities that need it most.</p>
          </div>
          
          <div className="card fade-up" style={{ transitionDelay: '0.1s', border: '2px dashed var(--color-primary)', background: '#fff', padding: '3rem', marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>Community Reference Codes</h3>
            <p style={{ fontSize: '1.1rem' }}>For financial resource mobilisation, each subscribed community is given a unique reference code. Please specify this code during donation to ensure your funds directly impact your chosen community.</p>
            <p style={{ marginTop: '1rem', fontSize: '0.95rem', opacity: 0.8 }}>The list of codes are available on all our official media handles.</p>
          </div>
          
          <div className="fade-up" style={{ transitionDelay: '0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', background: 'var(--color-surface)', padding: '1.5rem', borderRadius: '12px', marginBottom: '3rem' }}>
            <ShieldCheck size={32} style={{ color: '#10b981' }} />
            <p style={{ margin: 0, textAlign: 'left' }}><strong>Transparency Promise:</strong> Quarterly donor reports are shared with the local authorities of each subscribed community.</p>
          </div>

          <div className="fade-up" style={{ transitionDelay: '0.3s' }}>
            <button className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1.2rem 3rem' }} onClick={() => alert('Secure Donation portal coming soon!')}>
              Donate Securely Now <Lock size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Merged Resources Section */}
      <section className="section" style={{ background: '#fafafa', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div className="text-center fade-up">
            <h2 className="section-title">Resource Mobilization</h2>
            <div className="divider"></div>
            <p className="section-subtitle">Beyond financial donations, AMANI secures technical, logistical, legal, social, and human resources through these strategic mechanisms.</p>
          </div>

          <div className="resources-grid">
            {resources.map((res, index) => (
              <div key={index} className="card r-card fade-up" style={{ transitionDelay: res.delay, padding: '3rem 2rem', textAlign: 'center', background: '#fff' }}>
                <div className="r-icon-box">{res.icon}</div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--color-heading)' }}>{res.title}</h3>
                <p style={{ fontSize: '1rem', color: 'var(--color-text)' }}>{res.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
