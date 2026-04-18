import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bento-nav">
      <Link href="/" className="nav-btn">Home</Link>
      
      {/* Dropdown Container */}
      <div className="nav-dropdown-container">
        <Link href="/#experience" className="nav-btn">Work Experience</Link>
        
        {/* Dropdown List */}
        <div className="nav-dropdown-menu">
          <Link href="/email-marketing-specialist" className="dropdown-item">
            Email Marketing @ Clearer.io
          </Link>
          <Link href="/seo-content-team-lead" className="dropdown-item">
            SEO & Content Lead @ MaNaDr
          </Link>
          <Link href="/content-marketing-specialist" className="dropdown-item">
            Content Specialist @ Boost Commerce
          </Link>
          <Link href="/marketing-academic-services" className="dropdown-item">
            Marketing Services @ IBEST JSC
          </Link>
          <Link href="/content-marketing-internship" className="dropdown-item">
            Content Intern @ Exotic Voyages
          </Link>
        </div>
      </div>
      
      <Link href="/contact" className="nav-btn">Contact</Link>
    </nav>
  );
}