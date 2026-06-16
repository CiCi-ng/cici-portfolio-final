import Link from 'next/link';

export default function ContentInternship() {
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

      {/* HEADER CASE STUDY */}
      <header style={{ marginBottom: '50px' }}>
        <h1 style={{ fontSize: '3.5rem' }}>Content Intern @ Exotic Voyages</h1>
        <h2 style={{ color: 'var(--accent-pink)', fontWeight: '900' }}>CONTENT MARKETING INTERNSHIP</h2>
        <div style={{ background: 'white', border: '3px solid #111', padding: '30px', boxShadow: '8px 8px 0px #111', marginTop: '30px', width: '100%' }}>
          <p style={{ fontWeight: '600', fontSize: '1.1rem', lineHeight: '1.6' }}>
            During my internship, I created travel content for Exotic Voyages across blog, editorial, and social media formats, focusing on luxury travel experiences in Southeast Asia. My work supported brand storytelling, destination-focused content production, and digital publishing for a premium travel audience.
          </p>
        </div>
      </header>

      {/* ======================================================= */}
      {/* KHUNG NỘI DUNG CHÍNH - ĐÃ PHỤC HỒI ĐẦY ĐỦ CONTENT */}
      <div className="bento-grid">
        
        {/* ABOUT EXOTIC VOYAGES */}
        <div className="bento-card span-3-cols" style={{ alignItems: 'flex-start' }}>
          <h3 style={{ borderBottomColor: '#111', color: '#111', alignSelf: 'flex-start' }}>🛥️ ABOUT EXOTIC VOYAGES</h3>
          <p style={{ fontWeight: '500', fontSize: '1.05rem', lineHeight: '1.6' }}>
            <strong>Exotic Voyages</strong> is a luxury tour operator specializing in extraordinary, customized travel to Asia. They focus on creating personal, intimate experiences, designing itineraries based on the traveler’s specific preferences rather than just on popular places.
          </p>
          <p style={{ fontWeight: '500', fontSize: '1.05rem', lineHeight: '1.6' }}>
            The company offers guided tours to destinations across Southeast Asia, including Vietnam, Thailand, Indonesia, Cambodia, and Laos. Exotic Voyages has over 14 years in service, has served over 6,000 travelers, and boasts a 98% satisfaction rate. They are known for their local knowledge and for providing truly unique experiences, which have earned them features in publications such as Forbes and Condé Nast Traveler.
          </p>
        </div>

        {/* THE CHALLENGE & WHAT I OWNED */}
        <div className="bento-card span-3-cols card-dark" style={{ alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div>
              <h3 style={{ borderBottomColor: 'var(--accent-lime)', color: 'var(--accent-lime)', alignSelf: 'flex-start' }}>👨🏼‍💻 THE CHALLENGE</h3>
              <p style={{ fontWeight: '500', fontSize: '1.05rem', lineHeight: '1.6' }}>
                The role required content that could reflect the brand’s premium positioning while maintaining a steady publishing rhythm across digital channels. That meant creating destination-focused content that felt aspirational, useful and aligned with the expectations of a luxury travel agency.
              </p>
            </div>
            <div>
              <h3 style={{ borderBottomColor: 'var(--accent-lime)', color: 'var(--accent-lime)', alignSelf: 'flex-start' }}>🌞 WHAT I OWNED</h3>
              <p style={{ fontWeight: '500', fontSize: '1.05rem', lineHeight: '1.6' }}>
                I supported content production across blog articles, social content, and descriptive web copy, with a focus on Southeast Asia luxury travel. My responsibilities included topic ideation, content writing, brand-aligned storytelling, and destination research for both editorial and promotional content.
              </p>
            </div>
          </div>
        </div>

        {/* WHAT I CHANGED - ĐÃ LỘT BỎ NỀN CHẤM BI (deco-grid-bg) ĐỂ DỄ ĐỌC HƠN */}
        <div className="bento-card span-3-cols" style={{ alignItems: 'flex-start', background: 'white' }}>
          <h3 style={{ borderBottomColor: '#111', color: '#111', alignSelf: 'flex-start' }}>🎨 WHAT I CHANGED</h3>
          <ul style={{ fontWeight: '600', fontSize: '1.05rem', lineHeight: '1.6', paddingLeft: '20px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Editorial Production:</strong> Researched and authored high-quality destination content, ensuring strict alignment with the brand’s luxury positioning in Southeast Asia.</li>
            <li style={{ marginBottom: '10px' }}><strong>Social Media Cadence:</strong> Managed a consistent, high-frequency publishing schedule (1-2 posts/day) across primary platforms to sustain brand visibility and audience engagement.</li>
            <li style={{ marginBottom: '10px' }}><strong>Commercial Copywriting:</strong> Crafted persuasive, descriptive web copy for premium hotel listings and destination pages, translating luxury differentiators into compelling narratives.</li>
          </ul>
        </div>
      </div>
      
      {/* SUCCESS & RESULTS */}
      <h3 style={{ marginTop: '40px', marginBottom: '20px', borderBottomColor: '#111', color: '#111', display: 'inline-block', width: 'fit-content' }}>🌈 How I Measured Success & Results</h3>
      <p style={{ fontWeight: '600', fontSize: '1.1rem', marginBottom: '30px' }}>
        Success in this role was reflected more through output quality, publishing consistency, and alignment with the brand’s premium positioning than through deep performance reporting. The clearest measurable signals are content volume and sustained publishing cadence across blog and social channels.
      </p>

      <div className="bento-grid">
        <div className="bento-card card-accent deco-star-inside">
          <div className="kpi-number">10</div>
          <h4 style={{ color: 'white', marginBottom: '5px' }}>ARTICLES</h4>
          <p style={{ color: 'white', fontSize: '0.9rem', position: 'relative', zIndex: 1 }}>Produced 10 blog posts and magazine-style articles focused on luxury travel in Southeast Asia.</p>
        </div>

        <div className="bento-card card-yellow">
          <div className="kpi-number" style={{ fontSize: '2.5rem' }}>STEADY</div>
          <h4 style={{ marginTop: '10px', marginBottom: '5px' }}>SOCIAL PUBLISHING</h4>
          <p style={{ fontSize: '0.9rem' }}>Supported social publishing with a steady cadence of 1 – 2 posts per day across primary platforms.</p>
        </div>

        <div className="bento-card card-cyan">
          <div className="kpi-number" style={{ fontSize: '2.5rem' }}>PREMIUM</div>
          <h4 style={{ marginBottom: '5px' }}>BRAND VOICE</h4>
          <p style={{ fontSize: '0.9rem' }}>Contributed content that supported the brand’s editorial voice and premium travel positioning.</p>
        </div>
      </div>
      {/* ======================================================= */}


      <h3 style={{ marginTop: '50px', marginBottom: '20px', borderBottomColor: '#111', color: '#111', display: 'inline-block', width: 'fit-content' }}>✍️ SELECTED WORK: ARTICLES</h3>
      <p style={{ fontWeight: '600', fontSize: '1.1rem', marginBottom: '30px' }}>Contributed to brand voice and content volume during a high-output internship term. My role required the strategic creation of engaging luxury travel narratives, notably supporting brand presence and customer acquisition across social and web platforms.</p>

      {/* 4 BÀI VIẾT LẤY THEO LINK THẬT */}
      <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '50px' }}>
        
        <div className="bento-card" style={{ alignItems: 'flex-start', padding: '20px' }}>
          <img src="https://cdn.exoticvoyages.com/uploads/images/crop/850x530/2018/02/floating_market_thailand.jpg" alt="Floating Markets" style={{ width: '100%', borderRadius: '10px', marginBottom: '15px', border: '2px solid #111', height: '150px', objectFit: 'cover' }} />
          <h4 style={{ marginBottom: '15px', fontSize: '1rem', lineHeight: '1.4' }}>TOP 5 AUTHENTIC FLOATING MARKETS IN THAILAND</h4>
          <Link href="https://www.exoticvoyages.com/blog/top-5-authentic-floating-markets-thailand-34805.html" target="_blank" style={{ color: 'var(--accent-blue)', fontWeight: '800', textDecoration: 'none', marginTop: 'auto' }}>Read Article →</Link>
        </div>

        <div className="bento-card" style={{ alignItems: 'flex-start', padding: '20px' }}>
          <img src="https://www.exoticvoyages.com/uploads/images/userfiles/2018/02/Mai-Chau-Ecolodge-1-min.jpg" alt="Romantic Hotels" style={{ width: '100%', borderRadius: '10px', marginBottom: '15px', border: '2px solid #111', height: '150px', objectFit: 'cover' }} />
          <h4 style={{ marginBottom: '15px', fontSize: '1rem', lineHeight: '1.4' }}>10 MOST ROMANTIC HOTELS IN VIETNAM FOR HONEYMOONERS</h4>
          <Link href="https://www.exoticvoyages.com/blog/10-romantic-hotels-vietnam-honeymooners-34835.html" target="_blank" style={{ color: 'var(--accent-blue)', fontWeight: '800', textDecoration: 'none', marginTop: 'auto' }}>Read Article →</Link>
        </div>

        <div className="bento-card" style={{ alignItems: 'flex-start', padding: '20px' }}>
          <img src="https://www.exoticvoyages.com/uploads/images/userfiles/2018/04/avani.jpg" alt="Beach Resorts" style={{ width: '100%', borderRadius: '10px', marginBottom: '15px', border: '2px solid #111', height: '150px', objectFit: 'cover' }} />
          <h4 style={{ marginBottom: '15px', fontSize: '1rem', lineHeight: '1.4' }}>10 EXOTIC BEACH RESORTS IN VIETNAM THAT YOU MUST VISIT</h4>
          <Link href="https://www.exoticvoyages.com/blog/top-10-exotic-beach-resorts-in-vietnam-34914.html" target="_blank" style={{ color: 'var(--accent-blue)', fontWeight: '800', textDecoration: 'none', marginTop: 'auto' }}>Read Article →</Link>
        </div>

        <div className="bento-card" style={{ alignItems: 'flex-start', padding: '20px' }}>
          <img src="https://cdn.exoticvoyages.com/uploads/images/crop/750x450/2018/05/Patara-Elephant-Farm-Chiang-Mai.jpg" alt="Elephant Interactions" style={{ width: '100%', borderRadius: '10px', marginBottom: '15px', border: '2px solid #111', height: '150px', objectFit: 'cover' }} />
          <h4 style={{ marginBottom: '15px', fontSize: '1rem', lineHeight: '1.4' }}>AMAZING ETHICAL ELEPHANT INTERACTIONS IN THAILAND</h4>
          <Link href="https://www.exoticvoyages.com/blog/amazing-ethical-elephant-interactions-in-thailand-34949.html" target="_blank" style={{ color: 'var(--accent-blue)', fontWeight: '800', textDecoration: 'none', marginTop: 'auto' }}>Read Article →</Link>
        </div>

      </div>

      {/* TRAVEL IN STYLE MAGAZINE */}
      <div className="bento-card card-green" style={{ display: 'flex', flexDirection: 'row', gap: '50px', alignItems: 'center', flexWrap: 'wrap', padding: '50px', marginBottom: '50px' }}>
        
        {/* CỘT 1: BÌA TẠP CHÍ */}
        <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
          <img 
            src="/magazine-cover.jpg" 
            alt="Travel in Style Magazine Cover" 
            style={{ width: '100%', maxWidth: '350px', border: '4px solid #111', boxShadow: '10px 10px 0px #111', objectFit: 'cover', background: 'white', transform: 'rotate(-2deg)' }} 
          />
        </div>

        {/* CỘT 2: TEXT VÀ CTA ĐÃ LINK XỊN */}
        <div style={{ flex: '2 1 400px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '15px' }}>📖</div>
          
          <h3 style={{ color: 'var(--accent-lime)', borderBottom: 'none', marginBottom: '15px', fontSize: '2.5rem', textAlign: 'left', lineHeight: '1.2' }}>
            TRAVEL IN STYLE MAGAZINE<br/>(18TH EDITION)
          </h3>
          
          <p style={{ fontSize: '1.15rem', color: 'white', marginBottom: '35px', lineHeight: '1.6', fontWeight: '500' }}>
            A premium editorial asset supporting brand storytelling. I managed content creation, curation, and layout alignment to highlight our luxury travel offerings.
          </p>
          
          <Link 
            href="https://iamcici14.wordpress.com/wp-content/uploads/2025/12/travel-in-style-18th-edition.pdf" 
            target="_blank" 
            className="nav-btn" 
            style={{ background: 'white', color: '#111', width: 'fit-content', padding: '0 40px', fontSize: '1.1rem' }}
          >
            VIEW FULL EDITION
          </Link>
        </div>

      </div>

      {/* WHY IT MATTERED (DƯỚI CÙNG THEO CONTENT CỦA SẾP) */}
      <div className="bento-card span-3-cols card-yellow" style={{ alignItems: 'center', textAlign: 'center', padding: '50px 40px', marginTop: '20px', marginBottom: '50px' }}>
        <h3 style={{ borderBottomColor: '#111', color: '#111', fontSize: '2.5rem', marginBottom: '20px', alignSelf: 'center' }}>🌞 WHY IT MATTERED</h3>
        <p style={{ fontSize: '1.25rem', fontWeight: '800', color: '#111', maxWidth: '850px', margin: '0 auto', lineHeight: '1.6' }}>
          By consistently delivering premium narratives tailored to a high-net-worth audience, I actively supported Exotic Voyages' positioning as a luxury authority. Successfully executing both editorial and promotional content in this experience-led market laid a rigorous, professional foundation for my subsequent career in full-funnel content marketing.
        </p>
      </div>

      {/* CTA BLOCK */}
      <div className="bento-card card-dark deco-lines-inside" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '50px 40px', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ maxWidth: '600px', zIndex: 1 }}>
          <h3 style={{ color: 'var(--accent-lime)', fontSize: '2.5rem', borderBottom: 'none', marginBottom: '10px', alignSelf: 'flex-start' }}>LET'S BUILD TOGETHER</h3>
          <p style={{ fontSize: '1.1rem', color: 'white', fontWeight: '700' }}>Currently targeting roles in Digital Marketing, Lifecycle Marketing, CRM, and Growth. If you're looking for someone who bridges the gap between content and conversion, let's talk.</p>
        </div>
        <div style={{ zIndex: 1 }}>
          <Link href="/contact" className="nav-btn" style={{ background: 'white', width: '220px' }}>GET IN TOUCH</Link>
        </div>
      </div>

    </main>
  );
}