import Link from 'next/link';

export default function ContentMarketingSpecialist() {
  return (
    <main>
   {/* NAVBAR MỚI: DÀN HÀNG NGANG ĐỘC LẬP TỰ ĐỘNG KHÍT KHUNG */}
<nav className="bento-nav" style={{ marginBottom: 0, width: '100%' }}>
  
  <Link href="/" className="nav-btn" style={{ width: '238px' }}>
    HOME
  </Link>
  
  <div className="dropdown" style={{ height: '56px', width: '238px' }}>
    <button className="nav-btn" style={{ width: '100%' }}>
      WORK EXPERIENCE ▼
    </button>
    <div className="dropdown-content" style={{ minWidth: '260px' }}>
      <Link href="/email-marketing-specialist">Email Marketing @ Clearer.io</Link>
      <Link href="/seo-content-team-lead">SEO & Content Lead @ MaNaDr</Link>
      <Link href="/content-marketing-specialist">Content Specialist @ Boost Commerce</Link>
      <Link href="/marketing-academic-services">Marketing Services @ IBEST JSC</Link>
      <Link href="/content-marketing-internship">Content Intern @ Exotic Voyages</Link>
    </div>
  </div>
  
  <Link href="/growth-ops" className="nav-btn" style={{ background: 'var(--accent-lime)', width: '238px' }}>
    SYSTEMS & OPS
  </Link>
  
  <Link href="/contact" className="nav-btn" style={{ width: '238px' }}>
    CONTACT
  </Link>

</nav>

      {/* HEADER CASE STUDY */}
      <header style={{ marginBottom: '50px' }}>
        <h1 style={{ fontSize: '3.5rem' }}>Content Specialist @ Boost Commerce</h1>
        <h2 style={{ color: 'var(--accent-pink)', fontWeight: '900' }}>LIFECYCLE & GROWTH MARKETER</h2>
        <div style={{ background: 'white', border: '3px solid #111', padding: '30px', boxShadow: '8px 8px 0px #111', marginTop: '30px', width: '100%' }}>
           <h3 className="bg-white" style={{ borderBottomColor: '#111', color: '#111', alignSelf: 'flex-start' }}>📝 MY ROLE & STRATEGY</h3>
            <p style={{ fontWeight: '500', fontSize: '1.05rem', lineHeight: '1.6' }}>As a Content Specialist, I developed the organic acquisition and product education engine for Boost Commerce. Rather than producing isolated articles, I built a cohesive content journey—spanning SEO blogs, gated assets, and feature education—to seamlessly connect organic discovery with lead capture for Shopify merchants.
          </p>
        </div>
      </header>

      {/* BENTO GRID: NỘI DUNG CHÍNH */}
      <div className="bento-grid">
        
        {/* ABOUT BOOST COMMERCE */}
        <div className="bento-card span-3-cols" style={{ alignItems: 'flex-start', paddingBottom: '30px' }}>
          <h3 style={{ borderBottomColor: '#111', color: '#111', alignSelf: 'flex-start', fontSize: '1.5rem', marginBottom: '20px' }}>🎇 ABOUT BOOST COMMERCE</h3>
          <p style={{ fontWeight: '500', fontSize: '1.05rem', lineHeight: '1.6' }}>
            <strong>Boost Commerce</strong> is a high-growth SaaS provider specializing in eCommerce product discovery. Trusted by thousands of Shopify stores, their AI Search & Filter app has generated <strong>over $16 billion in sales</strong> for merchants by optimizing product finding, merchandising, and customer experience.
          </p>
        </div>

        {/* WHAT I CHANGED */}
        <div className="bento-card span-3-cols deco-grid-bg" style={{ alignItems: 'flex-start' }}>
          <h3 className="bg-white" style={{ borderBottomColor: '#111', color: '#111', alignSelf: 'flex-start' }}>📝 WHAT I CHANGED</h3>
          <ul style={{ fontWeight: '600', fontSize: '1.05rem', lineHeight: '1.6', paddingLeft: '20px' }}>
            <li className="bg-white" style={{ marginBottom: '10px' }}><strong>Full-Funnel Strategy:</strong> Shifted content execution toward a more intentional funnel role, using blog content for organic discovery and gated assets for lead capture.</li>
            <li className="bg-white" style={{ marginBottom: '10px' }}><strong>Commercial Alignment:</strong> Prioritized topics aligned with merchant pain points and search intent, making content commercially useful rather than purely informational.</li>
            <li className="bg-white" style={{ marginBottom: '10px' }}><strong>Product-Led Education:</strong> Developed gated educational assets around core product capabilities, simplifying complex features for prospects to evaluate.</li>
            <li className="bg-white" style={{ marginBottom: '10px' }}><strong>Journey Cohesion:</strong> Bridged the gap between awareness and consideration, linking top-of-funnel thought leadership directly to product understanding and lead generation.</li>
          </ul>
        </div>
      </div>

      {/* MEASUREMENT & RESULTS */}
      <h3 style={{ marginTop: '40px', marginBottom: '20px', borderBottomColor: '#111', color: '#111', display: 'inline-block', width: 'fit-content' }}>🤖 How I Measured Success & Results</h3>
      <p style={{ fontWeight: '600', fontSize: '1.1rem', marginBottom: '30px' }}>
        I looked at performance through the lens of organic content relevance, lead capture, and content usefulness across the funnel. The clearest measured outcome is ebook download performance, while the broader value of the work was in supporting acquisition, education, and nurture through content.
      </p>
      
      <div className="bento-grid">
        {/* KPI 1 */}
        <div className="bento-card card-accent deco-star-inside">
          <div className="kpi-number">347</div>
          <h4 style={{ color: 'white', marginBottom: '5px' }}>REPORT DOWNLOADS</h4>
          <p style={{ color: 'white', fontSize: '0.9rem', position: 'relative', zIndex: 1 }}>Generated 347 downloads from the Insights of eCommerce Filter & Search 2022 report through cold lead capture.</p>
        </div>

        {/* KPI 2 - ĐÃ ÉP SIZE CHỮ NHỎ LẠI */}
        <div className="bento-card deco-grid-bg">
          <div className="kpi-number bg-white" style={{ fontSize: '2.5rem' }}>FORMATS</div>
          <h4 className="bg-white" style={{ marginTop: '10px', marginBottom: '5px' }}>ORGANIC & GATED</h4>
          <p className="bg-white" style={{ fontSize: '0.9rem' }}>Delivered content across both formats to support discovery, nurture, and evaluation.</p>
        </div>

        {/* KPI 3 - ĐÃ ÉP SIZE CHỮ NHỎ LẠI */}
        <div className="bento-card card-cyan">
          <div className="kpi-number" style={{ fontSize: '2.5rem' }}>EBOOKS</div>
          <h4 style={{ marginBottom: '5px' }}>PRODUCT FOCUS</h4>
          <p style={{ fontSize: '0.9rem' }}>Produced feature-focused ebooks across major product areas, broadening the site’s educational and lead-capture assets.</p>
        </div>
      </div>

      {/* SELECTED WORK - BLOG CONTENT */}
      <h3 style={{ marginTop: '50px', marginBottom: '20px', borderBottomColor: '#111', color: '#111', display: 'inline-block', width: 'fit-content' }}>🗒️ SELECTED WORK: BLOG CONTENT</h3>
      <p style={{ fontWeight: '600', fontSize: '1.1rem', marginBottom: '30px' }}>
        The blog served as the primary organic acquisition engine and thought-leadership hub. My work involved expertly structuring long-form content to rank for high-intent keywords while addressing complex strategic needs.
      </p>

      <div className="bento-grid">
        <div className="bento-card" style={{ alignItems: 'flex-start', padding: '20px' }}>
          <img src="https://cdn.prod.website-files.com/663e17fff238bd97b0a022cd/6670148f7c49fe64687b1ba4_16195bbc3c60287c984b26d8988cdc92.jpeg" alt="Personalization" style={{ width: '100%', border: '2px solid #111', marginBottom: '15px' }} />
          <h4 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>eCommerce Personalization: Top Low-Cost Strategies</h4>
          <Link href="https://blog.boostcommerce.net/posts/ecommerce-personalization-top-low-cost-strategies-for-smbs" target="_blank" style={{ color: 'var(--accent-blue)', fontWeight: '800', textDecoration: 'none' }}>Read Article →</Link>
        </div>

        <div className="bento-card" style={{ alignItems: 'flex-start', padding: '20px' }}>
          <img src="https://cdn.prod.website-files.com/663e17fff238bd97b0a022cd/6670148c9997a29beb7cb6b3_e396fc21a711f6c43b491646e78da378.jpeg" alt="Traffic No Sales" style={{ width: '100%', border: '2px solid #111', marginBottom: '15px' }} />
          <h4 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Great Traffic But No Sales? Here’s What You Need to Change</h4>
          <Link href="https://blog.boostcommerce.net/posts/great-traffic-but-no-sales-best-practices-for-shopify-stores" target="_blank" style={{ color: 'var(--accent-blue)', fontWeight: '800', textDecoration: 'none' }}>Read Article →</Link>
        </div>

        <div className="bento-card" style={{ alignItems: 'flex-start', padding: '20px' }}>
          <img src="https://cdn.prod.website-files.com/663e17fff238bd97b0a022cd/6670146e2dfdc5f7e202f4f0_9d7f269b6799c34f8d91e33ee19f0f42.jpeg" alt="Navigation" style={{ width: '100%', border: '2px solid #111', marginBottom: '15px' }} />
          <h4 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>6 Ways to Build The Best Web Navigation and Site Search</h4>
          <Link href="https://blog.boostcommerce.net/posts/build-best-web-navigation-and-site-search" target="_blank" style={{ color: 'var(--accent-blue)', fontWeight: '800', textDecoration: 'none' }}>Read Article →</Link>
        </div>
      </div>

      {/* SELECTED WORK - EBOOKS */}
      <h3 style={{ marginTop: '50px', marginBottom: '20px', borderBottomColor: '#111', color: '#111', display: 'inline-block', width: 'fit-content' }}>📚 EBOOKS & EDUCATIONAL ASSETS</h3>
      <p style={{ fontWeight: '600', fontSize: '1.1rem', marginBottom: '30px' }}>
        Driving lead acquisition and user retention by producing high-impact, gated resources that leveraged Boost Commerce’s internal data and product expertise.
      </p>

      <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <div className="bento-card card-green" style={{ alignItems: 'center', textAlign: 'center', padding: '20px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🔎</div>
          <p style={{ fontSize: '0.9rem', fontWeight: '800', marginBottom: '15px' }}>AI Search PDF</p>
          <Link href="https://iamcici14.wordpress.com/wp-content/uploads/2025/12/ai-search.pdf" target="_blank" style={{ color: '#fff', fontWeight: '900', textDecoration: 'underline' }}>Download</Link>
        </div>
        <div className="bento-card card-green" style={{ alignItems: 'center', textAlign: 'center', padding: '20px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🧭</div>
          <p style={{ fontSize: '0.9rem', fontWeight: '800', marginBottom: '15px' }}>Navigation & Filters</p>
          <Link href="https://iamcici14.wordpress.com/wp-content/uploads/2025/12/navigation-filters.pdf" target="_blank" style={{ color: '#fff', fontWeight: '900', textDecoration: 'underline' }}>Download</Link>
        </div>
        <div className="bento-card card-green" style={{ alignItems: 'center', textAlign: 'center', padding: '20px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>👁️</div>
          <p style={{ fontSize: '0.9rem', fontWeight: '800', marginBottom: '15px' }}>Visual Merchandising</p>
          <Link href="https://iamcici14.wordpress.com/wp-content/uploads/2025/12/visual-merchandising.pdf" target="_blank" style={{ color: '#fff', fontWeight: '900', textDecoration: 'underline' }}>Download</Link>
        </div>
        <div className="bento-card card-green" style={{ alignItems: 'center', textAlign: 'center', padding: '20px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🛒</div>
          <p style={{ fontSize: '0.9rem', fontWeight: '800', marginBottom: '15px' }}>Product Recommendation</p>
          <Link href="https://iamcici14.wordpress.com/wp-content/uploads/2025/12/product-recommendation.pdf" target="_blank" style={{ color: '#fff', fontWeight: '900', textDecoration: 'underline' }}>Download</Link>
        </div>
      </div>

      {/* THE BOTTOM LINE / WHY IT MATTERED */}
      <div className="bento-card span-3-cols card-yellow" style={{ alignItems: 'center', textAlign: 'center', padding: '50px 40px', marginTop: '50px', marginBottom: '20px' }}>
        <h3 style={{ borderBottomColor: '#111', color: '#111', fontSize: '2.5rem', marginBottom: '20px', alignSelf: 'center' }}>⭐️ WHY IT MATTERED</h3>
        <p style={{ fontSize: '1.25rem', fontWeight: '800', color: '#111', maxWidth: '850px', margin: '0 auto', lineHeight: '1.6' }}>
          By transitioning content from isolated deliverables to a structured funnel, I established a predictable acquisition engine. This strategy not only improved organic discoverability but actively drove customer acquisition—highlighted by capturing 347 high-intent leads from a single industry report—proving content's direct impact on the bottom line.
        </p>
      </div>

      {/* CTA BLOCK */}
      <div className="bento-card span-3-cols card-dark deco-lines-inside" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '50px 40px', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ maxWidth: '600px', zIndex: 1 }}>
          <h3 style={{ color: 'var(--accent-lime)', fontSize: '2.5rem', borderBottom: 'none', marginBottom: '10px', alignSelf: 'flex-start' }}>LET'S BUILD TOGETHER</h3>
          <p style={{ fontSize: '1.1rem', color: 'white' }}>Currently targeting roles in Digital Marketing, Lifecycle Marketing, CRM, and Growth. If you're looking for someone who bridges the gap between content and conversion, let's talk.</p>
        </div>
        <div style={{ zIndex: 1 }}>
          <Link href="/contact" className="nav-btn" style={{ background: 'white', width: '220px' }}>GET IN TOUCH</Link>
        </div>
      </div>

    </main>
  );
}