import Link from 'next/link';

export default function EmailMarketingCaseStudy() {
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
        <h1 style={{ fontSize: '3.5rem' }}>Email Marketing @ Clearer.io</h1>
        <h2 style={{ color: 'var(--accent-pink)', fontWeight: '900' }}>LIFECYCLE & GROWTH MARKETER | 2024 - NOW</h2>
        <div style={{ background: 'white', border: '3px solid #111', padding: '30px', boxShadow: '8px 8px 0px #111', marginTop: '30px', width: '100%' }}>
          <p style={{ fontWeight: '600', fontSize: '1.1rem', fontStyle: 'italic', lineHeight: '1.6' }}>
            "CiCi has a strong instinct for focusing on metrics that truly matter…shifts our focus toward activation and trial-to-paid conversion instead…She consistently looked for ways to learn, test new ideas, and connect her work more directly to product adoption and revenue impact."
          </p>
          <p style={{ fontWeight: '900', marginTop: '15px', color: 'var(--accent-blue)' }}>– Henry Brown, Former Manager</p>
        </div>
      </header>

      {/* BENTO GRID: NỘI DUNG CASE STUDY */}
      <div className="bento-grid">
        
        {/* ABOUT CLEARER.IO */}
        <div className="bento-card span-2-cols" style={{ alignItems: 'flex-start' }}>
          <h3 style={{ borderBottomColor: '#111', color: '#111', alignSelf: 'flex-start' }}>🌈 ABOUT CLEARER.IO</h3>
          <p style={{ fontWeight: '500', fontSize: '1.05rem', lineHeight: '1.6' }}>
            <strong>clearer.io</strong> is an eCommerce enablement platform that provides a suite of cutting-edge software solutions to online merchants, specializing in search, discovery, and conversion optimization (including the <strong>Boost AI Search & Discovery</strong> app).
            <br/><br/>
            I worked on lifecycle email for Boost AI Search & Discovery, one of the company’s key products.
          </p>
        </div>

        {/* ⚙️ EMAIL SERVICE PROVIDERS */}
        <div className="bento-card" style={{ alignItems: 'center', background: '#f9f9f9', justifyContent: 'flex-start' }}>
          <h3 style={{ borderBottomColor: '#111', color: '#111', fontSize: '1.1rem', textAlign: 'center' }}>⚙️ ESPs USED</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', marginTop: '10px' }}>
            <img 
              src="https://focuslab-cms.imgix.net/coverImages/Intro.svg?ar=16%3A9&auto=format&crop=focalpoint&fit=crop&fp-debug=false&fp-x=0.5&fp-y=0.5&ixlib=php-3.1.0&q=100&width=1216&s=9f3e7ccaf44e533e23f03b2a56e5f8c5" 
              alt="Customer.io" 
              style={{ width: '100%', height: '80px', border: '3px solid #111', boxShadow: '4px 4px 0px #111', objectFit: 'cover' }} 
            />
            <img 
              src="https://storage.googleapis.com/swipe-insight/content/images/article_images/tool_7582446987.webp" 
              alt="ActiveCampaign" 
              style={{ width: '100%', height: '80px', border: '3px solid #111', boxShadow: '4px 4px 0px #111', objectFit: 'cover' }} 
            />
          </div>
        </div>

        {/* THE CHALLENGE */}
        <div className="bento-card card-dark span-3-cols" style={{ alignItems: 'flex-start' }}>
          <h3 style={{ borderBottomColor: 'var(--accent-lime)', color: 'var(--accent-lime)', alignSelf: 'flex-start' }}>🔥 THE CHALLENGE</h3>
          <p style={{ fontWeight: '500', fontSize: '1.05rem', lineHeight: '1.6' }}>
            <strong>Vanity Metrics vs. Business Impact:</strong> Previous email communications relied heavily on surface metrics (opens/clicks), failing to track actual product adoption, paid conversions, or churn recovery. The challenge was to transform email from a communication tool into a <strong>measurable growth engine</strong>.
          </p>
        </div>

        {/* WHAT I OWNED */}
        <div className="bento-card span-3-cols" style={{ alignItems: 'flex-start' }}>
          <h3 style={{ borderBottomColor: '#111', color: '#111', alignSelf: 'flex-start' }}>★ WHAT I OWNED</h3>
          <p style={{ fontWeight: '500', fontSize: '1.05rem', lineHeight: '1.6' }}>
            I owned the strategy and optimization of key lifecycle email flows in <strong>Customer.io</strong>, including onboarding, churn/win-back, and upgrade-triggered communications. My job covered flow logic, email copy, segmentation review, performance tracking, and ongoing optimization. I also partnered with product and customer success teams to make onboarding, win-back, and upgrade messaging more relevant to actual user behavior, product usage, and account status changes.
          </p>
        </div>

        {/* WHAT I CHANGED */}
       <div className="bento-card span-3-cols" style={{ backgroundColor: '#F97316', color: '#000000' }}>
  
  <h3 className="font-black text-2xl uppercase mb-4" style={{ borderBottom: '4px solid #000000', paddingBottom: '10px' }}>
    👩🏼‍💻 WHAT I CHANGED
  </h3>

  <ul className="list-disc space-y-4 text-base md:text-lg font-medium" style={{ marginLeft: '25px' }}>
    
    <li>
      <strong>Strategic Pivot:</strong> Shifted performance focus from surface engagement metrics to bottom-line outcomes (activation, paid upgrades).
    </li>

    <li>
      <strong>Onboarding Optimization:</strong> Continuously A/B tested subject lines, copy, CTAs, and flow logic to maximize trial adoption.
    </li>

    <li>
      <strong>Churn Mitigation:</strong> Designed and launched a dedicated automated win-back flow to re-engage and recover lost users.
    </li>

    <li>
      <strong>Expansion Revenue:</strong> Implemented trigger-based upgrade flows for merchants exceeding plan limits to capture immediate upsell opportunities.
    </li>

  </ul>
</div>

      {/* MEASUREMENT & RESULTS */}
      <div style={{ gridColumn: '1 / -1', width: '100%', margin: '2rem 0' }}>
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'flex-start' }}>
    
    {/* Cột trái: Tiêu đề */}
    <div style={{ flex: '1 1 300px' }}>
      <h3 className="font-black text-2xl uppercase m-0 inline-block" style={{ borderBottom: '4px solid #000', paddingBottom: '8px' }}>
        ★ HOW I MEASURED SUCCESS & RESULTS
      </h3>
    </div>

    {/* Cột phải: Đoạn văn */}
    <div style={{ flex: '2 1 400px' }} className="text-base md:text-lg font-medium leading-relaxed">
      <p style={{ margin: 0 }}>
        I focused on activation, paid conversion, reconversion, and upgrade conversion, while using open and click rates as supporting indicators rather than the main definition of success.
      </p>
    </div>

  </div>
</div>
      
      {/* Lưới 2x2 cho 4 cục kết quả - ĐÃ FIX ẢNH HIỂN THỊ FULL 100% */}
      <div className="bento-grid span-3-cols" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
        
        {/* RESULT 1: ACTIVATION */}
        <div className="bento-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', background: 'var(--accent-pink)' }}>
          {/* 👇 ĐIỀN LINK ẢNH CỦA SẾP VÀO ĐÂY 👇 */}
          <img src="onboarding-metrics.png" alt="Activation Rate Dashboard" style={{ width: '100%', height: '250px', objectFit: 'contain', borderBottom: '3px solid #111', background: 'white' }} />
          <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div className="kpi-number" style={{ fontSize: '3rem', margin: 0, lineHeight: 1, color: 'white' }}>20.5%</div>
            <h4 style={{ color: 'white', marginTop: '15px', marginBottom: '10px' }}>ACTIVATION RATE</h4>
            <p style={{ color: 'white', fontSize: '1rem', lineHeight: '1.6', fontWeight: '500' }}>Reached <strong>1,908 users</strong> in onboarding. Achieved 20.5% Boost Core activation rate, measured by users completing core setup milestones indicating initial product value.</p>
          </div>
        </div>

        {/* RESULT 2: PAID CONVERSION */}
        <div className="bento-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', background: 'white' }}>
          {/* 👇 ĐIỀN LINK ẢNH CỦA SẾP VÀO ĐÂY 👇 */}
          <img src="conversion-1.png" alt="Paid Conversion Chart" style={{ width: '100%', height: '250px', objectFit: 'contain', borderBottom: '3px solid #111', background: 'white' }} />
          <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column', background: '#15803d'}}>
            <div className="kpi-number" style={{ fontSize: '3rem', margin: 0, lineHeight: 1, color: '#111' }}>+78%</div>
            <h4 style={{ color: '#111', marginTop: '15px', marginBottom: '10px' }}>PAID CONVERSION</h4>
            <p style={{ color: '#111', fontSize: '1rem', lineHeight: '1.6', fontWeight: '500' }}>Improved trial-to-paid conversion from <strong>9.1% to 16.2%</strong> in 3 months after onboarding flow optimization.</p>
          </div>
        </div>

        {/* RESULT 3: RECOVERY */}
        <div className="bento-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', background: 'var(--accent-cyan)' }}>
          {/* 👇 ĐIỀN LINK ẢNH CỦA SẾP VÀO ĐÂY 👇 */}
          <img src="recovery.png" alt="Recovery Rate Dashboard" style={{ width: '100%', height: '250px', objectFit: 'contain', borderBottom: '3px solid #111', background: 'white' }} />
          <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column',  background: '#ccff00'}}>
            <div className="kpi-number" style={{ fontSize: '3rem', margin: 0, lineHeight: 1, color: '#111' }}>5.5%</div>
            <h4 style={{ color: '#111', marginTop: '15px', marginBottom: '10px' }}>RECOVERY RATE</h4>
            <p style={{ color: '#111', fontSize: '1rem', lineHeight: '1.6', fontWeight: '500' }}>Reached <strong>11,697 churned users</strong> and recovered about <strong>635 users</strong> through the churn recovery flow.</p>
          </div>
        </div>

        {/* RESULT 4: EXPANSION */}
        <div className="bento-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', background: 'var(--accent-green)' }}>
          {/* 👇 ĐIỀN LINK ẢNH CỦA SẾP VÀO ĐÂY 👇 */}
          <img src="expansion.png" alt="Expansion Rate Dashboard" style={{ width: '100%', height: '250px', objectFit: 'contain', borderBottom: '3px solid #111', background: 'white' }} />
          <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column', background: '#a855f7'}}>
            <div className="kpi-number" style={{ fontSize: '3rem', margin: 0, lineHeight: 1, color: 'white' }}>3.7%</div>
            <h4 style={{ color: 'var(--accent-lime)', marginTop: '15px', marginBottom: '10px' }}>EXPANSION (UPGRADE CONVERSION)</h4>
            <p style={{ color: 'white', fontSize: '1rem', lineHeight: '1.6', fontWeight: '500' }}>Helped capture immediate upsell opportunities from merchants exceeding their current plan limits via reliable transactional triggers.</p>
          </div>
        </div>

      </div>

      {/* THE BOTTOM LINE */}
      <div className="bento-card span-3-cols card-yellow" style={{ alignItems: 'center', textAlign: 'center', padding: '50px 40px', marginTop: '40px', marginBottom: '20px' }}>
        <h3 style={{ borderBottomColor: '#111', color: '#111', fontSize: '2.5rem', marginBottom: '20px', alignSelf: 'center' }}>🌈 WHY IT MATTERED</h3>
        <p style={{ fontSize: '1.25rem', fontWeight: '800', color: '#111', maxWidth: '850px', margin: '0 auto', lineHeight: '1.6' }}>
          By shifting the focus to product adoption and revenue metrics, I successfully transformed lifecycle emails into a primary growth channel. This strategic pivot directly supported user activation (<strong>+20.5%</strong>), accelerated paid subscription growth (<strong>+78% conversion lift</strong>), recovered lost accounts, and unlocked new expansion revenue.
        </p>
      </div>

      {/* CTA BLOCK */}
      <div className="bento-card span-3-cols card-dark deco-lines-inside" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '50px 40px', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ maxWidth: '600px', zIndex: 1 }}>
          <h3 style={{ color: 'var(--accent-lime)', fontSize: '2.5rem', borderBottom: 'none', marginBottom: '10px', alignSelf: 'flex-start' }}>LET'S BUILD TOGETHER</h3>
          <p style={{ fontSize: '1.1rem', color: 'white' }}>Currently targeting roles in Lifecycle Marketing, CRM, and Growth. If you're looking for someone who bridges the gap between content and conversion, let's talk.</p>
        </div>
        <div style={{ zIndex: 1 }}>
          <Link href="/contact" className="nav-btn" style={{ background: 'white', width: '220px' }}>GET IN TOUCH</Link>
        </div>
      </div>
</div>
    </main>
  );
}