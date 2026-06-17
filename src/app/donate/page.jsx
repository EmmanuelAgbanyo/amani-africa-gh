"use client";

import { useEffect } from 'react';
import { HeartHandshake, ShieldCheck, Lock } from 'lucide-react';

export default function Donate() {
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
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div className="fade-up" style={{ marginBottom: '4rem' }}>
            <HeartHandshake style={{ width: '80px', height: '80px', color: 'var(--color-primary)', margin: '0 auto 1.5rem' }} />
            <h1 style={{ fontSize: '3.5rem', color: 'var(--color-heading)', marginBottom: '1.5rem' }}>Make an Impact</h1>
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
    </main>
  );
}
