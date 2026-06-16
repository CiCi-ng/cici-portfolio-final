import Link from 'next/link';

export default function CtaBlock() {
  return (
    <div className="bento-card span-3-cols card-dark deco-lines-inside" style={{ 
      display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', 
      padding: '50px 40px', marginTop: '60px', flexWrap: 'wrap', gap: '30px'
    }}>
      <div style={{ textAlign: 'left', maxWidth: '600px' }}>
        <h3 style={{ color: 'var(--accent-lime)', fontSize: '2.5rem', margin: '0 0 10px 0', borderBottom: 'none' }}>Let's Build Together</h3>
        <p style={{ color: 'white', fontSize: '1.1rem', margin: '0', lineHeight: '1.6' }}>
          Currently targeting roles in Digital Marketing, Lifecycle Marketing, CRM, and Growth. If you're looking for someone who bridges the gap between content and conversion, let's talk.
        </p>
      </div>
      <div>
        <Link href="/contact" className="agency-btn" style={{ fontSize: '1.2rem', padding: '16px 36px' }}>
          Get In Touch
        </Link>
      </div>
    </div>
  );
}