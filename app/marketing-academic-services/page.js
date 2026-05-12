import Link from 'next/link';
import CtaBlock from '../CtaBlock';
export default function MarketingAcademicServices() {
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
        <h1 style={{ fontSize: '3.5rem' }}>Marketing & Academic Services</h1>
        <h2>IBEST JSC</h2>
      </div>

      <div className="bento-grid">
        
        {/* Context Card */}
        <div className="bento-card span-2-cols card-dark">
            <h3 style={{ color: 'white' }}>About IBEST Vietnam</h3>
            <p style={{ color: '#ccc', lineHeight: '1.8' }}>IBEST Vietnam provides training and preparation for academic English exams, particularly IELTS and TOEIC. The center focuses on providing high-quality, professional instruction to help students achieve IELTS scores ranging from 5.0 to 9.0.</p>
        </div>

        {/* Highlight KPI */}
        <div className="bento-card card-accent">
            <div className="kpi-number" style={{ color: 'white' }}>20%</div>
            <p style={{ margin: 0, fontWeight: '700', color: 'white', fontSize: '1.1rem' }}>Increase in Enrollment</p>
            <p style={{ fontSize: '0.8rem', marginTop: '5px', color: '#e0e0e0' }}>Driven by campaign execution and lead nurturing.</p>
        </div>

        {/* Role & Challenge */}
        <div className="bento-card span-3-cols">
            <h3 style={{ color: '#111' }}>The Challenge & My Role</h3>
            <p><strong>The Context:</strong> It required marketing support across both acquisition and student-facing operations, meaning not only promoting courses but also helping convert enquiries and supporting retention.</p>
            <p><strong>My Ownership:</strong>Executed multi-channel marketing campaigns spanning digital content, paid media, and inbound sales operations. I acted as the bridge between marketing generation and student conversion, directly influencing the center's enrollment targets.</p>
        </div>

        {/* Execution & Results */}
        <div className="bento-card span-2-cols">
            <h3 style={{ color: '#111' }}>Execution & Impact</h3>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
              <li><strong>Omnichannel Community Management:</strong> Coordinated digital content across the website and social platforms, effectively engaging a network of <strong>125,000+ followers</strong>.</li>
              <li><strong>Paid Acquisition Execution:</strong> Managed and optimized digital ad deployments across Google Ads, Facebook Ads, and Cốc Cốc to drive inbound leads.</li>
              <li><strong>Sales Enablement & Conversion:</strong> Handled inbound online enquiries and conducted direct course consultations, successfully bridging the gap between marketing efforts and actual student enrollment.</li>
            </ul>
        </div>

        <div className="bento-card card-green" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ color: 'white' }}>Why It Mattered</h3>
            <p style={{ color: '#ccc', fontSize: '0.9rem' }}>This role proved my ability to operate across the entire marketing funnel. By aligning daily campaign execution with broader business objectives, I not only gained hands-on experience in acquisition and customer-facing communication but also directly contributed to a <strong>20% overall increase in student enrollment</strong>.</p>
        </div>

      </div>
      <CtaBlock />
    </main>
  );
}