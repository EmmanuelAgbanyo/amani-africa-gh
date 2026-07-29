"use client";

import { useEffect, useState } from 'react';
import { Target, Eye, Activity, Users, Building2, ChevronDown, ChevronUp } from 'lucide-react';

const ReadMore = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div style={{ position: 'relative', marginBottom: '2rem' }}>
      <div 
        style={{
          maxHeight: isExpanded ? '5000px' : '220px',
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
          height: '140px',
          background: 'linear-gradient(to bottom, transparent, var(--color-background) 90%)',
          opacity: isExpanded ? 0 : 1,
          transition: 'opacity 0.4s ease',
          pointerEvents: 'none'
        }} />
      </div>
      
      <div style={{ 
        marginTop: isExpanded ? '2rem' : '-2rem', 
        position: 'relative', 
        zIndex: 10, 
        transition: 'all 0.5s ease',
        display: 'flex',
        justifyContent: 'flex-start'
      }}>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: 'rgba(234, 88, 12, 0.1)',
            color: 'var(--color-primary)',
            border: '1px solid rgba(234, 88, 12, 0.2)',
            padding: '0.6rem 1.5rem',
            borderRadius: '20px',
            fontSize: '0.95rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'var(--color-primary)';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(234, 88, 12, 0.1)';
            e.currentTarget.style.color = 'var(--color-primary)';
          }}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>
    </div>
  );
};

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
          
          {/* Who We Are Hero */}
          <div className="grid grid-2 items-center" style={{ gap: '4rem', marginBottom: '5rem' }}>
            <div className="about-text fade-up">
              <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Who We Are</h1>
              <div className="divider left"></div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                About Amani
              </h2>
              <ReadMore>
                <p style={{ marginBottom: '1.5rem', fontSize: '1.15rem', lineHeight: 1.8 }}>
                  AMANI is a Ghanaian, nationwide, community-based, membership-led, and non-partisan non-governmental organization (NGO) established to facilitate integrated community development, social transformation, and humanitarian support through a multidisciplinary and multispectral approach. 
                </p>
                <p style={{ marginBottom: '1.5rem', fontSize: '1.15rem', lineHeight: 1.8 }}>
                  The Foundation serves as a community development platform that identifies critical challenges, designs practical intervention frameworks, mobilizes the necessary resources, and coordinates stakeholders to address the needs of local communities.
                </p>
              </ReadMore>
            </div>
            
            <div className="fade-up" style={{ transitionDelay: '0.2s', position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img src="/mission_img.png" alt="Amani Mission - Mobilizing Resources" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2.5rem', background: 'linear-gradient(to top, rgba(15,23,42,0.95), rgba(15,23,42,0.6), transparent)', color: '#fff' }}>
                <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '0.5rem' }}>Community First</h3>
                <p style={{ opacity: 0.9, fontSize: '1.1rem' }}>Empowering grassroots initiatives across Ghana.</p>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-2" style={{ gap: '2rem', marginBottom: '5rem' }}>
            <div className="fade-up" style={{ backgroundColor: 'var(--color-secondary)', color: '#fff', padding: '3.5rem', borderRadius: '30px', boxShadow: 'var(--shadow-lg)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.05, transform: 'scale(3)' }}>
                <Target size={150} color="#fff" />
              </div>
              <div style={{ width: '70px', height: '70px', marginBottom: '2rem', background: 'rgba(234, 88, 12, 0.15)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                <Target size={35} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '2.2rem', marginBottom: '1.5rem' }}>Our Mission</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.9)' }}>
                To facilitate integrated and sustainable community development by identifying grassroots challenges, designing practical intervention frameworks, mobilizing accountable voluntary resources, and coordinating stakeholders across all sectors to address the needs of local communities in partnership with traditional authorities, government institutions, NGOs, and development partners.
              </p>
            </div>

            <div className="fade-up" style={{ transitionDelay: '0.2s', backgroundColor: 'var(--color-surface)', border: '1px solid rgba(0,0,0,0.05)', padding: '3.5rem', borderRadius: '30px', boxShadow: 'var(--shadow-md)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.03, transform: 'scale(3)' }}>
                <Eye size={150} color="var(--color-secondary)" />
              </div>
              <div style={{ width: '70px', height: '70px', marginBottom: '2rem', background: 'rgba(234, 88, 12, 0.1)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                <Eye size={35} />
              </div>
              <h3 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Our Vision</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-text)' }}>
                To build empowered, resilient, and self-sustaining communities through accountable resource mobilization, inclusive partnerships, and community-centered development interventions.
              </p>
            </div>
          </div>

          {/* What We Do & How We Work */}
          <div className="grid grid-2" style={{ gap: '4rem', marginBottom: '5rem' }}>
            <div className="fade-up">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ padding: '0.8rem', background: 'var(--color-surface)', borderRadius: '15px' }}>
                  <Activity size={28} color="var(--color-primary)" />
                </div>
                <h3 style={{ fontSize: '2rem', margin: 0 }}>What We Do</h3>
              </div>
              <ReadMore>
                <p style={{ marginBottom: '1.2rem', lineHeight: 1.8, fontSize: '1.05rem' }}>
                  AMANI undertakes community needs assessments and gap research across a broad range of sectors, including, health, education, humanitarian, civic advocacy, dissemination information, public education, local tourism, local trade and enterprise, farmer and fishing, sustainable environment, sanitation, water, market access, skills development, and community dispute resolution. 
                </p>
                <p style={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
                  Through these assessments, the Foundation identifies pressing community needs and develops strategic intervention models tailored to local priorities and circumstances to serve as a supplementary support to government effort.
                </p>
              </ReadMore>
            </div>

            <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ padding: '0.8rem', background: 'var(--color-surface)', borderRadius: '15px' }}>
                  <Users size={28} color="var(--color-primary)" />
                </div>
                <h3 style={{ fontSize: '2rem', margin: 0 }}>How We Work</h3>
              </div>
              <ReadMore>
                <p style={{ marginBottom: '1.2rem', lineHeight: 1.8, fontSize: '1.05rem' }}>
                  As a coordinating and resource-mobilization institution, the Foundation’s role is mobilizing financial, technical, logistical, human, legal and institutional resources, to supplementary local government effort through community participation, lobbying, facilitation, fundraising, crowdfunding, advertisement, media campaigns, partnerships, collaborations, networking, institutional representation, public engagement and facilitation, and negotiation.
                </p>
                <p style={{ marginBottom: '1.2rem', lineHeight: 1.8, fontSize: '1.05rem' }}>
                  Intervention implementation is done through our local projection implementation partners who have registered with us. AMANI maintains a structured network of registered non-governmental organizations, professionals, technocrats, artisans, existing philanthropic workers, community development practitioners, and other sector specialists who are engaged to implement approved interventions. Infrastructural intervention support is carried out with the approval and standards of the necessary state institution while humanitarian supports are directly implemented all in collaboration with Assembly Members, traditional authorities, local governance structures, community leaders, and relevant public and private sector institutions;
                </p>
                <p style={{ marginBottom: '1.2rem', lineHeight: 1.8, fontSize: '1.05rem' }}>
                  All programmes, projects, and interventions undertaken within the AMANI framework are executed under the Foundation's monitoring, supervision, coordination, quality assurance, and accountability systems to ensure compliance with approved objectives, efficient resource utilization, transparency, measurable impact, and sustainable outcomes. Through this framework, AMANI harmonize communities, development partners, technical experts, government institutions, resource providers, traditional authorities and implementing organizations at the local communities.
                </p>
                <p style={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
                  In addition, AMANI promotes active citizen participation and community ownership of development initiatives by ensuring that government policies, public services, social intervention programmes, and economic opportunities receive the intended attention, access, engagement, and utilization at the grassroots level. The Foundation is therefore committed to strengthening collaboration among communities, stakeholders, and development actors to foster inclusive, sustainable, and community-driven development across Ghana.
                </p>
              </ReadMore>
            </div>
          </div>

          {/* Structure and Branches */}
          <div className="fade-up" style={{ backgroundColor: 'var(--color-surface)', padding: '4rem', borderRadius: '30px', boxShadow: 'var(--shadow-sm)' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'inline-flex', padding: '1rem', background: '#fff', borderRadius: '50%', boxShadow: 'var(--shadow-sm)', marginBottom: '1.5rem' }}>
                <Building2 size={35} color="var(--color-primary)" />
              </div>
              <h3 style={{ fontSize: '2.5rem' }}>Our Structure and Branches</h3>
              <div className="divider" style={{ margin: '1rem auto' }}></div>
            </div>
            
            <div className="grid grid-2" style={{ gap: '4rem' }}>
              <div>
                <ReadMore>
                  <p style={{ marginBottom: '1.2rem', lineHeight: 1.8, fontSize: '1.05rem' }}>
                    AMANI is a registered organisation licensed by the Non Profit Secretariat under Department of Social Welfare. Amani National Secretariat in Accra is the Headquarters of the organisation. Amani has established a development bodies (Local Branches) in each Region, District/Constituency and Community; that is Amani Regional Development Council (ARDC), Amani District/Constituency Development Council (ACDC), and Amani Community Development Trust (ACDT) in each Community (Electoral Area and Sector areas) across the Ghana.
                  </p>
                  <p style={{ marginBottom: '1.2rem', lineHeight: 1.8, fontSize: '1.05rem' }}>
                    Each body has executives appointed to lead the branch. Each Regional and District/Constituency Development Council has a dedicated bank account at GCB Bank PLC in its name signed by 3 of its executives. Each of the three (3) local branches (ARDC, ACDC and ACDT) has unique 5-Digits Community Reference Code (CRC) to receive donations in-kind and cash. 
                  </p>
                  <p style={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
                    Donors will enter or write the CRC as reference against every donation to indicate which local community they wish to received their donation. Quarterly donor list containing name and amount of each donor is submitted to every palace, assembly-member and local authorities to know the total amount accumulated for the community’s development.
                  </p>
                </ReadMore>
              </div>
              
              <div style={{ background: '#fff', padding: '3rem', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: 'var(--shadow-md)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '0', left: '0', width: '4px', height: '100%', background: 'var(--color-primary)', borderTopLeftRadius: '24px', borderBottomLeftRadius: '24px' }}></div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-heading)' }}>Powers of Local Branches</h4>
                <p style={{ marginBottom: '1.5rem', color: 'var(--color-text)', opacity: 0.8, fontSize: '0.95rem' }}>With written approval from National, each Local Branch, through its Executives, has the power to:</p>
                <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0' }}>
                  {[
                    "Own and manage property in its name",
                    "Mobilize funds through donations, fundraising, etc.",
                    "Enter into contracts and agreements with 3rd parties and stakeholders",
                    "Undertake business activities for income towards Amani’s objectives",
                    "Recruit volunteers and social workers",
                    "Borrow funds and provide security over assets; and",
                    "Continue operations regardless of changes in leadership."
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', lineHeight: 1.5 }}>
                      <div style={{ minWidth: '8px', width: '8px', height: '8px', background: 'var(--color-primary)', borderRadius: '50%', marginTop: '0.4rem' }}></div>
                      <span style={{ fontSize: '1.05rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
