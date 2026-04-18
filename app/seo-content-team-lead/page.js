import Link from 'next/link';
import CtaBlock from '../CtaBlock';
export default function SeoContentTeamLead() {
  return (
    <main>
      {/* 👇 DÁN CỤC NAVBAR NÀY VÀO NGAY DƯỚI THẺ <main> 👇 */}
      <nav className="bento-nav">
        <Link href="/" className="nav-btn">HOME</Link>
        <div className="dropdown">
          <button className="nav-btn">WORK EXPERIENCE ▼</button>
          <div className="dropdown-content">
            <Link href="/email-marketing-specialist">Email Marketing @ Clearer.io</Link>
            <Link href="/seo-content-team-lead">SEO & Content Lead @ MaNaDr</Link>
            <Link href="/content-marketing-specialist">Content Specialist @ Boost Commerce</Link>
            <Link href="/marketing-academic-services">Marketing Services @ IBEST JSC</Link>
            <Link href="/content-marketing-internship">Content Intern @ Exotic Voyages</Link>
          </div>
        </div>
        <Link href="/contact" className="nav-btn">CONTACT</Link>
      </nav>

      {/* Header */}
      <div style={{ marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3.5rem' }}>SEO & Content Team Lead</h1>
        <h2>MaNaDr</h2>
      </div>

      <div className="bento-grid">
        
        {/* Testimonial Card */}
        <div className="bento-card span-3-cols card-dark">
            <p style={{ fontSize: '1.2rem', fontStyle: 'italic', lineHeight: '1.8' }}>
              "…She efficiently manages her team remotely while upholding high work quality standards produced while staying consistent and meeting tight deadlines… Any team would be fortunate to have her leadership and SEO expertise."
            </p>
            <p style={{ color: '#2563eb', fontWeight: 'bold', marginTop: '15px' }}>– Berlinda Lau, Former Manager</p>
        </div>

        {/* Context Cards */}
        <div className="bento-card span-2-cols">
            <h3 style={{ color: '#111' }}>About MaNaDr</h3>
            <p>MaNaDr is a healthcare platform serving consumers through digital health services in Singapore. I led SEO and content strategy to improve organic discoverability, strengthen search performance, and scale content operations in a highly competitive B2C environment.</p>
        </div>

        <div className="bento-card card-accent">
            <h3 style={{ color: 'white' }}>SEO Tools</h3>
            <ul style={{ paddingLeft: '20px', lineHeight: '2' }}>
              <li>Ahrefs</li>
              <li>Yoast SEO</li>
              <li>Google Search Console</li>
            </ul>
        </div>

        {/* The Strategy Cards */}
        <div className="bento-card span-3-cols">
            <h3 style={{ color: '#111' }}>The Challenge & My Role</h3>
            <p><strong>The Problem:</strong> MaNaDr needed a more structured approach to organic growth to improve search visibility and expand its reach through content. The task was not only to grow traffic but also to build a stronger SEO content system that could scale sustainably.</p>
            <p><strong>My Ownership:</strong> I led SEO and content strategy for the business, managing a team of 3. My role covered both strategic direction and hands-on execution, including identifying growth opportunities, improving content quality, and making high-impact SEO refinements.</p>
        </div>

        <div className="bento-card span-3-cols card-dark">
            <h3 style={{ color: 'white' }}>What I Changed</h3>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '111' }}>
              <li>Reoriented the content workflow around SEO opportunity sizing, search intent, and ranking feasibility to make planning more strategic and less reactive.</li>
              <li>Prioritized topics based on demands, competitive landscape, and potential upside.</li>
              <li>Treated existing content as a growth lever, using performance signals to decide where to refresh, strengthen, or reposition pages.</li>
              <li>Improved execution quality by tightening content structure, search alignment, and optimization discipline across the team.</li>
              <li>Built a more measurable operating rhythm for organic growth.</li>
            </ul>
        </div>
      </div>

      {/* DEEP DIVE: RESULTS SECTION */}
      <div style={{ marginTop: '60px', marginBottom: '30px' }}>
        <h3 style={{ borderBottom: '2px solid #111', paddingBottom: '10px' }}>Deep Dive: The Results (12 Months)</h3>
        <p style={{ color: '#555' }}>I focused on growth in organic sessions, search visibility, average ranking positions, clicks, and impressions to evaluate whether the content and SEO program were improving discoverability.</p>
      </div>

      <div className="bento-grid">
        
        {/* Massive KPI Cards */}
        <div className="bento-card card-accent span-2-cols">
            <div className="kpi-number" style={{ color: 'white' }}>+195%</div>
            <p style={{ margin: 0, fontWeight: '700', color: 'white', fontSize: '1.2rem' }}>Lift in Organic Sessions</p>
            <p style={{ fontSize: '0.9rem', marginTop: '5px', color: '#e0e0e0' }}>Increased monthly organic sessions from 159K to 469K.</p>
        </div>

        <div className="bento-card">
            <div className="kpi-number">14.2</div>
            <p style={{ margin: 0, fontWeight: '700', color: '#111' }}>Average SERP Position</p>
            <p style={{ fontSize: '0.8rem', marginTop: '5px' }}>Improved from 18.7 (up 4.5 positions / 24% improvement).</p>
        </div>

        <div className="bento-card">
            <div className="kpi-number">11.9M</div>
            <p style={{ margin: 0, fontWeight: '700', color: '#111' }}>Total Clicks</p>
            <p style={{ fontSize: '0.8rem', marginTop: '5px' }}>Generated across search visibility efforts.</p>
        </div>

        <div className="bento-card span-2-cols card-dark">
            <div className="kpi-number">285M</div>
            <p style={{ margin: 0, fontWeight: '700', color: 'white', fontSize: '1.2rem' }}>Total Impressions</p>
            <p style={{ fontSize: '0.9rem', marginTop: '5px', color: '#ccc' }}>Reached through scalable content operation and optimization.</p>
        </div>

        {/* Screenshot of Results */}
        <div className="bento-card span-3-cols" style={{ padding: '20px' }}>
            <img 
              src="/seo-results.png" 
              alt="SEO Search Console Results" 
              style={{ width: '100%', borderRadius: '12px', border: '1px solid #eaeaea' }} 
            />
            <p style={{ fontSize: '0.85rem', color: '#666', textAlign: 'center', marginTop: '15px', fontStyle: 'italic' }}>Performance metrics showing consistent organic growth trajectory over 12 months.</p>
        </div>

        {/* Final Conclusion Summary */}
        <div className="bento-card span-3-cols card-yellow" style={{ textAlign: 'center', padding: '50px 20px' }}>
            <h3 style={{ color: '111' }}>Why It Mattered</h3>
            <p style={{ maxWidth: '800px', margin: '0 auto' }}>This work helped strengthen MaNaDr’s organic visibility and built a more scalable content operation. Rather than relying on one-off content wins, the strategy created a stronger foundation for sustained search growth, broader discoverability, and more efficient acquisition across organic channels.</p>
        </div>

      </div>
      <CtaBlock />
    </main>
  );
}