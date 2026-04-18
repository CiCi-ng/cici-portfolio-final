import Link from 'next/link';

export default function Contact() {
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
      <header style={{ marginBottom: '50px', marginTop: '40px' }}>
        <h1 style={{ fontSize: '4.5rem' }}>GET IN TOUCH</h1>
        <p style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '10px' }}>Let's talk growth, lifecycle, or just grab a virtual coffee.</p>
      </header>

      {/* 2 KHỐI LIÊN HỆ ĐÃ FIX CHUẨN */}
      <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginBottom: '20px' }}>
        
        {/* EMAIL BLOCK */}
        <div className="bento-card card-cyan" style={{ alignItems: 'flex-start', padding: '40px' }}>
          <h3 style={{ borderBottomColor: '#111', color: '#111', alignSelf: 'flex-start', fontSize: '2rem', marginBottom: '20px' }}>EMAIL</h3>
          <p style={{ fontWeight: '600', fontSize: '1.2rem', marginBottom: '30px', color: '#111' }}>
            Drop me a line anytime.
          </p>
          <Link 
            href="mailto:thing1431996@gmail.com" 
            style={{ 
              color: 'var(--accent-blue)', 
              fontWeight: '900', 
              fontSize: '1.2rem', 
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              whiteSpace: 'nowrap'
            }}
          >
            thing1431996@gmail.com ↗
          </Link>
        </div>

        {/* LINKEDIN BLOCK */}
        <div className="bento-card card-accent" style={{ alignItems: 'flex-start', padding: '40px' }}>
          <h3 style={{ borderBottomColor: '#111', color: 'white', alignSelf: 'flex-start', fontSize: '2rem', marginBottom: '20px' }}>LINKEDIN</h3>
          <p style={{ fontWeight: '600', fontSize: '1.2rem', marginBottom: '30px', color: 'white' }}>
            Let's connect professionally.
          </p>
          <Link 
            href="https://www.linkedin.com/in/cicinguyen14/" 
            target="_blank"
            className="nav-btn" 
            style={{ 
              background: 'white', 
              color: '#111', 
              width: 'fit-content', 
              padding: '0 30px',
              fontSize: '1.1rem',
              marginTop: 'auto'
            }}
          >
            CONNECT ↗
          </Link>
        </div>
      </div>

      {/* CONTACT FORM BLOCK - SỰ TRỞ LẠI CỦA NHÀ VUA */}
      <div className="bento-card" style={{ padding: '50px 40px', alignItems: 'flex-start', background: 'white' }}>
        <h3 style={{ borderBottomColor: '#111', color: '#111', fontSize: '2.5rem', marginBottom: '30px', alignSelf: 'flex-start' }}>SEND A MESSAGE</h3>
        
{/* ĐÃ THÊM ACTION VÀ METHOD CHO FORM */}
        <form 
          action="https://formspree.io/f/xaqlrggk" 
          method="POST" 
          className="contact-form"
        >
          <div className="form-group">
            <label htmlFor="name">NAME</label>
            {/* Thêm name="name" để nó biết đây là Tên */}
            <input type="text" id="name" name="name" placeholder="How should I call you?" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            {/* Thêm name="email" */}
            <input type="email" id="email" name="email" placeholder="your@email.com" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">MESSAGE</label>
            {/* Thêm name="message" */}
            <textarea id="message" name="message" rows="5" placeholder="Let's build something great together..." required></textarea>
          </div>
          
          <button type="submit" className="submit-btn" style={{ marginTop: '20px' }}>
            SEND MESSAGE ↗
          </button>
        </form>
        </div>

    </main>
  );
}