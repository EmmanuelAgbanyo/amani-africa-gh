"use client";

import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight, MapPin, Search, ClipboardCheck, Handshake, Users, Activity, FileText } from 'lucide-react';

const ReadMore = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
      <div 
        style={{
          maxHeight: isExpanded ? '1500px' : '90px',
          overflow: 'hidden',
          transition: 'max-height 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'relative'
        }}
      >
        {children}
        
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.9) 90%)',
          opacity: isExpanded ? 0 : 1,
          transition: 'opacity 0.4s ease',
          pointerEvents: 'none'
        }} />
      </div>
      
      <div style={{ 
        marginTop: isExpanded ? '1.5rem' : '0.5rem', 
        position: 'relative', 
        zIndex: 10, 
        transition: 'all 0.5s ease',
        display: 'flex',
        justifyContent: 'flex-start'
      }}>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: 'rgba(255, 255, 255, 0.5)',
            color: 'var(--color-primary)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            padding: '0.5rem 1.2rem',
            borderRadius: '20px',
            fontSize: '0.9rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'var(--color-primary)';
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.borderColor = 'var(--color-primary)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)';
            e.currentTarget.style.color = 'var(--color-primary)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
          }}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
          {isExpanded ? <ChevronUp size={16} /> : <ArrowRight size={16} />}
        </button>
      </div>
    </div>
  );
};

function OrgNode({ title, subtitle, details, delay, colorType }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Assign subtle gradients to make the cards "colored glass"
  let bgGradient = 'rgba(255, 255, 255, 0.6)';
  let borderColor = 'rgba(255, 255, 255, 0.8)';
  if (colorType === 'orange') {
    bgGradient = 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(234,88,12,0.05) 100%)';
    borderColor = 'rgba(234,88,12,0.2)';
  } else if (colorType === 'blue') {
    bgGradient = 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(10,17,40,0.05) 100%)';
    borderColor = 'rgba(10,17,40,0.1)';
  }

  return (
    <div className="fade-up" style={{ transitionDelay: delay, width: '100%' }}>
      <div 
        style={{
          background: bgGradient,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${borderColor}`,
          borderRadius: '24px',
          padding: '2.5rem',
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: isExpanded ? '0 30px 60px rgba(31, 38, 135, 0.1)' : '0 8px 32px rgba(31, 38, 135, 0.05)',
          position: 'relative',
          overflow: 'hidden'
        }}
        onClick={() => setIsExpanded(!isExpanded)}
        onMouseOver={(e) => {
          if (!isExpanded) {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(31, 38, 135, 0.08)';
          }
        }}
        onMouseOut={(e) => {
          if (!isExpanded) {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(31, 38, 135, 0.05)';
          }
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px', background: 'var(--color-primary)', opacity: isExpanded ? 1 : 0.2, transition: 'all 0.4s' }}></div>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-heading)', marginBottom: '0.4rem', letterSpacing: '-0.5px' }}>{title}</div>
            <div style={{ color: 'var(--color-text)', fontSize: '1.1rem', opacity: 0.8 }}>{subtitle}</div>
          </div>
          <div style={{ 
            width: '45px', height: '45px', borderRadius: '50%', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: isExpanded ? 'var(--color-primary)' : 'rgba(255,255,255,0.8)', 
            color: isExpanded ? '#fff' : 'var(--color-heading)', 
            transition: 'all 0.3s',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
          }}>
            <ChevronDown size={20} style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.4s' }} />
          </div>
        </div>
        
        <div style={{
          maxHeight: isExpanded ? '500px' : '0',
          overflow: 'hidden',
          opacity: isExpanded ? 1 : 0,
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          marginTop: isExpanded ? '2rem' : '0',
          paddingTop: isExpanded ? '2rem' : '0',
          borderTop: isExpanded ? '1px solid rgba(255,255,255,0.4)' : 'none',
          color: 'var(--color-text)',
          fontSize: '1.05rem',
          lineHeight: 1.7
        }}>
          {details}
        </div>
      </div>
    </div>
  );
}

function ApproachStep({ number, title, content, icon: Icon, delay, actionText, onAction }) {
  return (
    <div className="fade-up corporate-step" style={{ transitionDelay: delay, marginBottom: '2rem' }}>
      <div style={{ 
        background: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255, 255, 255, 0.8)',
        borderRadius: '24px',
        padding: '3rem',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.05)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.4s ease',
      }}
      className="glass-step-card"
      >
        {/* Subtle decorative glow inside the card */}
        <div style={{
          position: 'absolute',
          top: '-50px', left: '-50px',
          width: '150px', height: '150px',
          background: 'radial-gradient(circle, rgba(234,88,12,0.1) 0%, transparent 70%)',
          borderRadius: '50%', zIndex: 0,
          pointerEvents: 'none'
        }}></div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'minmax(80px, auto) 1fr', 
          gap: '2.5rem',
          position: 'relative',
          zIndex: 1
        }}>
          
          {/* Number & Icon Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              fontSize: '4rem',
              fontWeight: 800,
              color: 'transparent',
              WebkitTextStroke: '2px rgba(10,17,40,0.1)',
              lineHeight: 1,
              fontFamily: 'var(--font-family-heading)',
            }}>
              0{number}
            </div>
            <div style={{ 
              width: '56px', height: '56px', 
              background: 'rgba(255,255,255,0.9)', color: 'var(--color-primary)', 
              borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 10px 25px rgba(234,88,12,0.15)',
              border: '1px solid rgba(255,255,255,1)'
            }}>
              <Icon size={28} />
            </div>
          </div>

          {/* Content Area */}
          <div>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--color-heading)', margin: '0 0 1rem 0', letterSpacing: '-0.02em' }}>{title}</h3>
            
            <ReadMore>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-text)', margin: 0 }}>
                {content}
              </p>
            </ReadMore>
            
            {actionText && (
              <button 
                onClick={onAction}
                style={{
                  background: 'var(--color-heading)',
                  color: '#fff',
                  border: 'none',
                  padding: '0.8rem 1.8rem',
                  borderRadius: '50px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  transition: 'all 0.3s ease',
                  marginTop: '0.5rem',
                  boxShadow: '0 10px 20px rgba(10,17,40,0.2)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'var(--color-primary)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(234, 88, 12, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'var(--color-heading)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(10,17,40,0.2)';
                }}
              >
                {actionText} <ArrowRight size={16} />
              </button>
            )}
          </div>
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
    };
  }, []);

  return (
    <main style={{ paddingBottom: '6rem', position: 'relative', backgroundColor: '#fdfdfd' }}>
      
      {/* Immersive Light Glass Background */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: 'none',
        background: '#fdfdfd', overflow: 'hidden'
      }}>
        {/* Abstract soft color orbs to give the glass something to blur */}
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(234,88,12,0.04) 0%, transparent 60%)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', top: '40%', right: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(10,17,40,0.03) 0%, transparent 60%)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '20%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(234,88,12,0.03) 0%, transparent 60%)', borderRadius: '50%' }}></div>
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Clean Corporate Hero */}
        <section className="pt-5" style={{ paddingBottom: '4rem' }}>
          <div className="container">
            <div className="fade-up text-center" style={{ paddingTop: '8rem', maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ 
                display: 'inline-block',
                background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.8)',
                color: 'var(--color-primary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', 
                marginBottom: '1.5rem', fontSize: '0.85rem', padding: '0.6rem 1.5rem', borderRadius: '50px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
              }}>
                Methodology
              </div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem', color: 'var(--color-heading)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Our Framework for <br/> <span style={{ color: 'var(--color-primary)' }}>Sustainable Impact</span>
              </h1>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.7, color: 'var(--color-text)', opacity: 0.8 }}>
                Through structured collaboration and strategic partnerships with government, corporate entities, and local communities, AMANI executes development interventions via a rigorous seven-step approach.
              </p>
            </div>
          </div>
        </section>

        {/* Glassmorphic 7-Step List */}
        <section className="section" style={{ paddingTop: '2rem' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            
            <div style={{ position: 'relative' }}>
              {/* Subtle connecting line behind cards */}
              <div style={{ position: 'absolute', left: '60px', top: '50px', bottom: '50px', width: '2px', background: 'linear-gradient(to bottom, rgba(10,17,40,0.1), rgba(234,88,12,0.1))', zIndex: 0 }} className="hidden-mobile"></div>
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <ApproachStep 
                  delay="0.1s"
                  number="1"
                  title="Establish Physical Presence"
                  icon={MapPin}
                  content="AMANI begins by appointing qualified applicants to Executive positions of Amani Regional and District/Constituency Development Councils, and Trustees to the AMANI Community Development Trusts in each subscribed community (Electoral Area). These executives are selected based on criteria including residency, integrity, community knowledge & integration, and commitment to development. The Executive and the trustees are officially introduced to their respective local authorities including Traditional leaders, District/Municipal Chief Executive, Member of Parliament, police commanders, Assembly Member, and other community leaders. This step ensures that necessary credence and recognition is extended to Amani executives by their respective local authorities across the country. The Executives are to carry-out the activities involved in 2nd to the 7th steps below."
                  actionText="Requirements & Application"
                  onAction={() => alert("Application Form coming soon!")}
                />

                <ApproachStep 
                  delay="0.1s"
                  number="2"
                  title="Conduct Needs Assessment"
                  icon={Search}
                  content="With physical presence established, AMANI undertakes comprehensive community needs assessments and research to identify humanitarian and infrastructural gaps. This involves stakeholder consultations, household surveys, focus group discussions, and key informant interviews with Chiefs, Assembly Members, religious leaders, youth groups, women groups, farmers, traders, and vulnerable persons. The research covers all sectors including agriculture, education, health, WASH, infrastructure, environment, enterprise development, and humanitarian welfare. The findings provide an evidence-based understanding of the community's priority challenges and developmental aspirations."
                />

                <ApproachStep 
                  delay="0.1s"
                  number="3"
                  title="Diagnose & Design Interventions"
                  icon={ClipboardCheck}
                  content="AMANI diagnoses the research findings to identify root causes, prioritize needs, and develop appropriate intervention models. The diagnosis considers community capacity, available resources, stakeholder interests, and government policy alignment and national development priorities. These are done in collaboration with the Chief, local authorities, Assembly Member, and relevant government agencies for review, input, and formal approval. This collaborative approval process ensures community ownership, institutional legitimacy, and alignment with local government development plans."
                />

                <ApproachStep 
                  delay="0.1s"
                  number="4"
                  title="Mobilize Resources"
                  icon={Handshake}
                  content="Following intervention design and approval, AMANI mobilizes the required resources through multiple channels including, lobbying, facilitation, fundraising, crowdfunding, advertisement, media campaigns, partnerships, collaborations, networking, institutional representation, public engagement and facilitation, and negotiation and community member's contributions - both home and diaspora. Each community is assigned a 5-digit Community Reference Code (CRC) system enables donors to direct contributions to specific communities. Resource mobilization also includes technical expertise from professionals, logistical support from partners, legal assistance for compliance, social mobilization of volunteers, and human resources through Community member's participation and the engagement of qualified implementers. All resources are mobilized transparently and recorded for accountability purposes."
                  actionText="View Community CRC"
                  onAction={() => alert("CRC Viewer coming soon!")}
                />

                <ApproachStep 
                  delay="0.1s"
                  number="5"
                  title="Engage Qualified Partners"
                  icon={Users}
                  content="AMANI engages qualified Local Project and Programme Implementation Partners (LPIPs) who have registered with AMANI to execute approved interventions. These partners include registered NGOs, professionals, technocrats, artisans, social workers, community development practitioners, and sector specialists. LPIPs are registered based on competence, experience, and demonstrated capacity to deliver capacity quality results. Implementation is carried out in collaboration with Assembly Members, traditional authorities, local governance structures, and community leaders. AMANI ensures that implementing partners adhere to approved designs, budgets, and timelines while maintaining community engagement throughout the process."
                  actionText="Register as a PIP"
                  onAction={() => alert("PIP Registration Form coming soon!")}
                />

                <ApproachStep 
                  delay="0.1s"
                  number="6"
                  title="Monitor & Evaluate Impact"
                  icon={Activity}
                  content="AMANI Community Development Trust maintains continuous monitoring and evaluation systems throughout the implementation process. This involves tracking inputs (resources deployed), outputs (activities completed), outcomes (immediate results), and impact (long-term changes). Monitoring includes site visits, progress reviews, beneficiary interviews, and performance assessments. The evaluation measures the effectiveness, efficiency, relevance, and sustainability of interventions. Findings inform adjustments and improvements during implementation. Completion of projects is certified by Chiefs and local authorities before final financial disbursement, ensuring accountability at every stage."
                />

                <ApproachStep 
                  delay="0.1s"
                  number="7"
                  title="Report to Stakeholders"
                  icon={FileText}
                  content="AMANI provides comprehensive reports to all stakeholders including donors, Chiefs, government agencies, development partners, and community members. Reporting is conducted through multiple channels: real-time project dashboards, digital impact reports, SMS/WhatsApp alerts, radio accountability hours, community notice boards, town-hall durbars, printed fact sheets, annual development accountability festival, physical verification visits, and public transparency pages. Reports include financial statements, records of donations received, project implementation updates, community impact reports, and photographic evidence. This multi-channel reporting ensures transparency, builds donor confidence, and maintains stakeholder trust in AMANI's operations. Quarterly cash donation report containing donor name and amount is sent to chiefs and local authority in each community."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Clean Glassmorphic Architecture Section */}
        <section className="section">
          
          <div className="container">
            <div className="text-center fade-up" style={{ marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--color-heading)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Operational Hierarchy</h2>
              <p style={{ color: 'var(--color-text)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', opacity: 0.8 }}>Clear, structured governance from the national to the community level.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto 5rem' }}>
              <OrgNode 
                delay="0.1s"
                title="National Level"
                subtitle="Amani National Executive Board"
                colorType="blue"
                details={
                  <>
                    <p>The highest governing body of AMANI Africa. Responsible for overarching strategy, national policy alignment, and major resource allocation across the country.</p>
                    <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                      <li><strong style={{ color: 'var(--color-heading)' }}>Strategy:</strong> Strategic national partnerships</li>
                      <li><strong style={{ color: 'var(--color-heading)' }}>Advocacy:</strong> High-level advocacy and lobbying</li>
                      <li><strong style={{ color: 'var(--color-heading)' }}>Management:</strong> Nationwide campaign management</li>
                    </ul>
                  </>
                }
              />
              
              <OrgNode 
                delay="0.1s"
                title="Regional Level"
                subtitle="Regional Development Council"
                colorType="default"
                details={
                  <>
                    <p>Oversees operations and coordinates resources for all districts within a specific region.</p>
                    <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                      <li><strong style={{ color: 'var(--color-heading)' }}>Resources:</strong> Regional resource mobilization</li>
                      <li><strong style={{ color: 'var(--color-heading)' }}>Engagement:</strong> Engaging regional stakeholders</li>
                      <li><strong style={{ color: 'var(--color-heading)' }}>Oversight:</strong> Monitoring district-level interventions</li>
                    </ul>
                  </>
                }
              />

              <OrgNode 
                delay="0.1s"
                title="District / Constituency"
                subtitle="District Development Council"
                colorType="default"
                details={
                  <>
                    <p>Acts as the bridge between regional strategies and community execution. Focuses on specific constituency needs.</p>
                    <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                      <li><strong style={{ color: 'var(--color-heading)' }}>Analysis:</strong> Identifying district-wide challenges</li>
                      <li><strong style={{ color: 'var(--color-heading)' }}>Coordination:</strong> Coordinating with local Assembly Members</li>
                      <li><strong style={{ color: 'var(--color-heading)' }}>Execution:</strong> Facilitating development interventions</li>
                    </ul>
                  </>
                }
              />

              <OrgNode 
                delay="0.1s"
                title="Community Level"
                subtitle="Community Development Trust"
                colorType="orange"
                details={
                  <>
                    <p>The grassroots foundation of AMANI. Works directly with the people to implement change.</p>
                    <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                      <li><strong style={{ color: 'var(--color-heading)' }}>Local Needs:</strong> Identifying specific community challenges</li>
                      <li><strong style={{ color: 'var(--color-heading)' }}>Education:</strong> Promoting civic education directly to citizens</li>
                      <li><strong style={{ color: 'var(--color-heading)' }}>Integrity:</strong> Ensuring local accountability</li>
                    </ul>
                  </>
                }
              />
            </div>

            <div className="fade-up" style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
              <div style={{ 
                padding: '1.5rem', borderRadius: '32px', 
                background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.8)', 
                boxShadow: '0 20px 40px rgba(31, 38, 135, 0.05)' 
              }}>
                <img src="/amani-organogram.jpeg" alt="Official Amani Organogram" style={{ width: '100%', height: 'auto', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)' }} />
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* Global CSS style injection for clean corporate responsiveness */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .corporate-step > div {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .corporate-step > div > div:first-child {
            flex-direction: row !important;
            justify-content: flex-start;
          }
          .hidden-mobile { display: none !important; }
        }
        .glass-step-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(31, 38, 135, 0.08) !important;
          border-color: rgba(234, 88, 12, 0.3) !important;
        }
      `}} />
    </main>
  );
}
