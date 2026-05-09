import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
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

      {/* HEADER */}
      <header style={{ marginBottom: '50px' }}>
        <h1>CiCi Nguyen</h1>
        <h2>Lifecycle & Growth Marketer</h2>
        <p style={{ maxWidth: '650px', fontWeight: '700' }}>
          I build scalable engines using content, SEO, and email to drive activation, retention, and conversion for SaaS businesses.
        </p>
      </header>

      {/* HERO GRID */}
      <div className="bento-sticker-container">
        <span className="sticker-deco sticker-star-1">*</span>
        <span className="sticker-deco sticker-star-2">*</span>

        <div className="bento-grid">
          
          <div className="bento-card span-2-cols card-dark">
            <h3 style={{ borderBottomColor: 'var(--accent-lime)', color: 'var(--accent-lime)' }}>My Focus</h3>
<ul className="list-disc space-y-4" style={{ marginLeft: '25px' }}>
  <li>
    <strong>Acquisition & Organic Growth:</strong> Building scalable content engines and leading SEO strategies to consistently increase high-intent organic traffic and user acquisition.
  </li>
  <li>
    <strong>Lifecycle & Retention Automation:</strong> Designing targeted, event-driven email flows across onboarding, upgrade, and win-back journeys to maximize trial-to-paid conversions.
  </li>
  <li>
    <strong>Data-Driven Strategy:</strong> Translating user analytics and funnel insights into actionable marketing initiatives that deliver measurable business impact.
  </li>
</ul>
</div> {/* <---- SẾP CHỈ CẦN THÊM ĐÚNG CÁI NÀY VÀO DÒNG 51 */}
          <div className="bento-card" style={{ padding: 0 }}>
            <img src="/cici-profile.jpeg" alt="CiCi" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
          </div>

          <div className="bento-card card-accent deco-star-inside">
            <div className="kpi-number">+195%</div>
            <p style={{ fontWeight: '800', position: 'relative', zIndex: 1 }}>Lift in Organic Sessions</p>
            <p style={{ fontSize: '0.9rem', marginTop: '5px', position: 'relative', zIndex: 1 }}>At MaNaDr via scalable SEO strategy.</p>
          </div>

          <div className="bento-card deco-grid-bg">
            <div className="kpi-number bg-white">+78%</div>
            <p className="bg-white" style={{ fontWeight: '800', marginTop: '10px' }}>Trial-to-Paid Conversion</p>
            <p className="bg-white" style={{ fontSize: '0.9rem', marginTop: '5px' }}>Via targeted email flows at Clearer.io.</p>
          </div>

          <div className="bento-card card-green deco-lines-inside">
            <h4 style={{ color: 'var(--accent-lime)', marginBottom: '10px', position: 'relative', zIndex: 1 }}>Tech Stack</h4>
<ul className="list-disc space-y-2 text-base md:text-lg" style={{ marginLeft: '25px' }}>
  <li>
    <strong>Automation:</strong> Customer.io, ActiveCampaign.
  </li>
  <li>
    <strong>Analytics:</strong> Mixpanel, Posthog, Fullstory, GA.
  </li>
  <li>
    <strong>Development:</strong> HTML/CSS.
  </li>
</ul>          
</div>

        </div>
      </div>

      {/* EXPERIENCE */}
      <h3 id="experience" style={{ marginTop: '30px' }}>Experience</h3>
      <div className="bento-grid">
        
        <Link href="/email-marketing-specialist" style={{ textDecoration: 'none', color: 'inherit' }} className="bento-card span-3-cols">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ color: 'var(--accent-blue)', fontWeight: '900' }}>2024 — NOW</span>
            <span style={{ color: 'var(--accent-blue)', fontWeight: '900' }}>Read Case Study →</span>
          </div>
          <h4 style={{ marginBottom: '10px', fontSize: '1.4rem' }}>Email Marketing Specialist @ Clearer.io</h4>
          <p>Managed end-to-end lifecycle email flows (onboarding, win-back, upgrades) for Boost AI Search & Discovery app, driving a +78% increase in trial-to-paid conversions.</p>
        </Link>

        <Link href="/seo-content-team-lead" style={{ textDecoration: 'none', color: 'inherit' }} className="bento-card span-3-cols">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ color: 'var(--accent-blue)', fontWeight: '900' }}>2022 — 2025</span>
            <span style={{ color: 'var(--accent-blue)', fontWeight: '900' }}>Read Case Study →</span>
          </div>
          <h4 style={{ marginBottom: '10px', fontSize: '1.4rem' }}>SEO Consultant & Content Lead @ MaNaDr</h4>
          <p>Directed SEO strategy and managed a 3-person team for a B2C healthcare platform, scaling monthly organic sessions by +195% (from 159K to 469K).</p>
        </Link>

        <Link href="/content-marketing-specialist" style={{ textDecoration: 'none', color: 'inherit' }} className="bento-card span-3-cols">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ color: 'var(--accent-blue)', fontWeight: '900' }}>2021 — 2023</span>
            <span style={{ color: 'var(--accent-blue)', fontWeight: '900' }}>Read Case Study →</span>
          </div>
          <h4 style={{ marginBottom: '10px', fontSize: '1.4rem' }}>Content Specialist @ Boost Commerce</h4>
          <p>Developed high-impact gated content and educational resources for Shopify merchants, driving lead acquisition including 347 cold leads from a single industry report.</p>
        </Link>

        <Link href="/marketing-academic-services" style={{ textDecoration: 'none', color: 'inherit' }} className="bento-card span-3-cols">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ color: 'var(--accent-blue)', fontWeight: '900' }}>2018 — 2020</span>
            <span style={{ color: 'var(--accent-blue)', fontWeight: '900' }}>Read Case Study →</span>
          </div>
          <h4 style={{ marginBottom: '10px', fontSize: '1.4rem' }}>Marketing & Academic Services @ IBEST JSC</h4>
          <p>Executed full-funnel marketing campaigns and managed digital content across a 125K+ follower network, driving a 20% increase in student enrollment.</p>
        </Link>

        <Link href="/content-marketing-internship" style={{ textDecoration: 'none', color: 'inherit' }} className="bento-card span-3-cols">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ color: 'var(--accent-blue)', fontWeight: '900' }}>2018</span>
            <span style={{ color: 'var(--accent-blue)', fontWeight: '900' }}>Read Case Study →</span>
          </div>
          <h4 style={{ marginBottom: '10px', fontSize: '1.4rem' }}>Content Marketing Internship @ Exotic Voyages</h4>
          <p>Created blog, editorial, and social content for a luxury travel brand specializing in Southeast Asia.</p>
        </Link>

      </div>

      {/* EDUCATION */}
      <h3 style={{ marginTop: '30px' }}>Education</h3>
      <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
        
        <div className="bento-card card-yellow" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="tape-black" style={{ top: '-5px', left: '-30px', transform: 'rotate(-35deg)' }}></div>
          <div className="floating-icon" style={{ top: '20px', right: '30px' }}>🎓</div>
          <p style={{ color: 'var(--accent-pink)', fontWeight: '900', marginBottom: '10px' }}>2024 — 2026</p>
          <h4 style={{ fontSize: '2rem', lineHeight: '1.2', marginBottom: '10px', zIndex: 2, position: 'relative' }}>MASTER OF ARTS <br/> (MARKETING)</h4>
          <p style={{ zIndex: 2, position: 'relative', fontWeight: '700' }}>IU Internationale Hochschule</p>
        </div>

        <div className="bento-card card-cyan deco-grid-bg" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="tape-black" style={{ bottom: '10px', right: '-35px', transform: 'rotate(-45deg)' }}></div>
          <div style={{ transform: 'rotate(-2deg)', marginBottom: '15px' }}>
            <p className="bg-white" style={{ background: 'var(--accent-pink)', color: 'white', padding: '8px 15px', border: '3px solid #111', fontWeight: '900', boxShadow: '4px 4px 0px #111' }}>2015 — 2018</p>
          </div>
          <div style={{ transform: 'rotate(3deg)', marginBottom: '15px' }}>
            <h4 className="bg-white" style={{ background: 'white', padding: '12px 20px', border: '3px solid #111', boxShadow: '6px 6px 0px #111' }}>BACHELOR OF <br/> COMMUNICATIONS</h4>
          </div>
          <div style={{ transform: 'rotate(-3deg)' }}>
            <p className="bg-white" style={{ background: 'var(--accent-lime)', color: '#111', padding: '8px 15px', border: '3px solid #111', fontWeight: '900', boxShadow: '4px 4px 0px #111' }}>RMIT University</p>
          </div>
        </div>

      </div>

{/* PROFESSIONAL CERTIFICATES */}
      <h3 style={{ fontSize: '2.5rem', marginBottom: '30px', marginTop: '60px', borderBottom: '5px solid #111', display: 'inline-block', paddingBottom: '10px' }}>PROFESSIONAL CERTIFICATES</h3>
      <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '50px' }}>
        
        {/* Card 1 */}
        <Link href="https://skillshop.credential.net/07b9a349-9971-4b1d-bfa8-5de6e077cfaf#acc.c6pUBvSY" target="_blank" className="bento-card card-accent" style={{ alignItems: 'flex-start', padding: '30px', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
          <h4 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '20px', lineHeight: '1.4' }}>ADVANCED GOOGLE ANALYTICS</h4>
          <p style={{ color: 'var(--accent-lime)', fontWeight: '900', fontSize: '1.1rem', marginTop: 'auto' }}>GOOGLE</p>
        </Link>

        {/* Card 2 */}
        <Link href="https://www.coursera.org/account/accomplishments/verify/0N53FN7KEI7V" target="_blank" className="bento-card" style={{ alignItems: 'flex-start', padding: '30px', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
          <h4 style={{ color: '#111', fontSize: '1.25rem', marginBottom: '20px', lineHeight: '1.4' }}>THE STRATEGY OF CONTENT MARKETING</h4>
          <p style={{ color: 'var(--accent-blue)', fontWeight: '900', fontSize: '1.1rem', marginTop: 'auto' }}>THE UNIVERSITY OF CALIFORNIA, DAVIS</p>
        </Link>

        {/* Card 3 */}
        <Link href="https://app-na2.hubspot.com/academy/achievements/xz6tpr1b/en/1/cici-nguyen/seo" target="_blank" className="bento-card card-dark" style={{ alignItems: 'flex-start', padding: '30px', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
          <h4 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '20px', lineHeight: '1.4' }}>SEO FUNDAMENTALS</h4>
          <p style={{ color: 'var(--accent-lime)', fontWeight: '900', fontSize: '1.1rem', marginTop: 'auto' }}>HUBSPOT ACADEMY</p>
        </Link>

        {/* Card 4 */}
        <Link href="https://www.coursera.org/account/accomplishments/verify/H9QR8TI7NTL5" target="_blank" className="bento-card card-green" style={{ alignItems: 'flex-start', padding: '30px', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
          <h4 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '20px', lineHeight: '1.4' }}>THINK OUTSIDE THE INBOX: EMAIL MARKETING</h4>
          <p style={{ color: 'var(--accent-lime)', fontWeight: '900', fontSize: '1.1rem', marginTop: 'auto' }}>GOOGLE</p>
        </Link>

        {/* Card 5 (IBM) - ĐÃ FIX VIỀN VÀ CĂN LỀ */}
        <Link href="https://www.coursera.org/account/accomplishments/verify/KMPGLHYCVRYN" target="_blank" className="bento-card deco-grid-bg" style={{ alignItems: 'flex-start', padding: '30px', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
          <h4 className="bg-white" style={{ color: '#111', fontSize: '1.25rem', lineHeight: '1.4', padding: '5px 10px', marginBottom: '20px' }}>INTRODUCTION TO WEB DEVELOPMENT WITH HTML, CSS, JAVASCRIPT</h4>
          <p className="background: 'white'" style={{ color: 'var(--accent-blue)', fontWeight: '900', fontSize: '1.1rem', marginTop: 'auto', padding: '5px 10px' }}>IBM</p>
        </Link>

        {/* Card 6 */}
        <Link href="https://www.credly.com/badges/33b18265-359a-4520-83d5-376cb31cb18c/linked_in_profile" target="_blank" className="bento-card" style={{ alignItems: 'flex-start', padding: '30px', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
          <h4 style={{ color: '#111', fontSize: '1.25rem', marginBottom: '20px', lineHeight: '1.4' }}>DATA ANALYTICS PROFESSIONAL CERTIFICATE</h4>
          <p style={{ color: 'var(--accent-blue)', fontWeight: '900', fontSize: '1.1rem', marginTop: 'auto' }}>GOOGLE</p>
        </Link>

      </div>
                  
      {/* CTA BLOCK */}
      <div className="bento-card span-3-cols card-dark deco-lines-inside" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '50px 40px', marginTop: '40px', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ maxWidth: '600px', zIndex: 1 }}>
          <h3 style={{ color: 'var(--accent-lime)', fontSize: '2.5rem', borderBottom: 'none', marginBottom: '10px' }}>Let's Build Together</h3>
          <p style={{ fontSize: '1.1rem' }}>Currently targeting roles in Lifecycle Marketing, CRM, and Growth. If you're looking for someone who bridges the gap between content and conversion, let's talk.</p>
        </div>
        <div style={{ zIndex: 1 }}>
          <Link href="/contact" className="agency-btn" style={{ fontSize: '1.2rem', padding: '15px 30px', background: 'white' }}>GET IN TOUCH</Link>
        </div>
      </div>

    </main>
  );
}