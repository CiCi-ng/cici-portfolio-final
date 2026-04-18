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
            <p><strong>My Ownership:</strong> I supported execution across campaign planning, digital content, paid-media coordination, and inbound enquiry handling. I also worked closely with students, instructors, and parents on course consultation and progress communication.</p>
        </div>

        {/* Execution & Results */}
        <div className="bento-card span-2-cols">
            <h3 style={{ color: '#111' }}>Execution & Impact</h3>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
              <li>Managed content coordination across the website, YouTube, Instagram, and a Facebook page with <strong>125,000+ followers</strong>.</li>
              <li>Supported paid-marketing execution across Google Ads, Facebook Ads, and Cốc Cốc.</li>
              <li>Handled inbound online enquiries and supported course consultation to bridge marketing and student conversion.</li>
              <li>Helped translate annual and monthly marketing plans into execution aligned with school-year objectives.</li>
            </ul>
        </div>

        <div className="bento-card card-green" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ color: 'white' }}>Why It Mattered</h3>
            <p style={{ color: '#ccc', fontSize: '0.9rem' }}>This role built my foundation in full-funnel education marketing, combining acquisition, conversion, and customer-facing communication.</p>
        </div>

      </div>
      <CtaBlock />
    </main>
  );
}