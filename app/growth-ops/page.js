import Link from 'next/link';

export default function GrowthOps() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
      
      {/* NAVBAR CHUẨN: DÀN HÀNG NGANG ĐỘC LẬP TỰ ĐỘNG KHÍT KHUNG */}
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

      {/* HEADER PAGE */}
      <header>
        <h1 style={{ fontSize: '3.5rem' }}>Growth Ops & Automation</h1>
        <h2 style={{ color: 'var(--accent-pink)', fontWeight: '900' }}>THE MARKETING LAB</h2>
        {/* Nền Neon Lục Nhạt rực rỡ cho Header */}
        <div style={{ background: '#e0fa7b', border: '3px solid #111', padding: '30px', boxShadow: '8px 8px 0px #111', marginTop: '30px', width: '100%' }}>
          <p style={{ fontWeight: '600', fontSize: '1.1rem', lineHeight: '1.6', margin: 0 }}>
            Behind every high-converting campaign is a scalable system. This is a breakdown of how I build growth infrastructure—leveraging AI frameworks, behavioral tracking dashboards, and systematic A/B testing matrixes to drive predictable revenue.
          </p>
        </div>
      </header>

      {/* ======================================================= */}
      {/* PILLAR 1: AI CONTENT ENGINE (CLAUDE PROJECTS WORKFLOW) */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h3 style={{ borderBottomColor: '#111', color: '#111', display: 'inline-block', margin: '0 0 20px 0' }}>
            🤖 The AI Content Machine (Claude Projects)
          </h3>
          <p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>
            How I turned Claude Projects into a high-output blog production system for <strong>Boost Commerce</strong> — cutting production time by 60% with zero brand dilution.
          </p>
        </div>

        <div className="bento-grid" style={{ marginBottom: 0 }}>
          
          {/* CARD 1: THE WORKFLOW PIPELINE - Nền Hồng Phấn */}
          <div className="bento-card span-2-cols" style={{ alignItems: 'flex-start', background: '#ffe6ea' }}>
            <h4 style={{ color: 'var(--accent-pink)', marginBottom: '15px' }}>⚙️ From Prompt to Pipeline</h4>
            <p style={{ marginBottom: '15px' }}>
              Instead of treating AI as a one-off copywriter, I built a continuous production system inside a <strong>Claude Project</strong> workspace. By anchoring the LLM with permanent knowledge assets, we eliminated context drift entirely.
            </p>
            <p style={{ margin: 0, fontWeight: '600', fontSize: '0.95rem' }}>
              🔄 The Pipeline: Context Injection (SEO Brief + Matrix) ➔ Multi-Variant Generation ➔ Built-in Self-Correction Pass ➔ Human Polish.
            </p>
          </div>

          {/* CARD 2: THE CORE METRICS */}
          <div className="bento-card card-dark" style={{ alignItems: 'center', textAlign: 'center' }}>
            <div className="kpi-number" style={{ color: 'var(--accent-lime)' }}>-60%</div>
            <h4>Production Time</h4>
            <p style={{ fontSize: '0.85rem', color: 'white', marginTop: '10px' }}>
              By automating the brand audit and jargon-scrubbing phases, we completely removed heavy downstream rewrite cycles.
            </p>
          </div>

          {/* CARD 3: BRAND KNOWLEDGE FILES PREPARED */}
          <div className="bento-card span-1-cols card-cyan" style={{ alignItems: 'flex-start' }}>
            <h4 style={{ marginBottom: '12px', color: '#111' }}>🗂️ Knowledge Files Prepared</h4>
            <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><code>brand-dna-matrix.md</code>: Style guide containing strict constraints (sentences &lt; 15 words, active voice).</li>
              <li><strong>High-Performing Benchmarks</strong>: 3-5 top live blog posts to train voice by real examples.</li>
              <li><strong>Internal Glossary</strong>: Index of content pillars, product categories, and Shopify merchant segments.</li>
            </ul>
          </div>

          {/* CARD 4: THE DYNAMIC SEO BRIEF MATRIX - Nền Tím Nhạt */}
          <div className="bento-card span-2-cols" style={{ alignItems: 'flex-start', background: '#e0e7ff' }}>
            <h4 style={{ color: 'var(--accent-blue)', marginBottom: '15px' }}>🎯 The Dynamic SEO Brief Matrix</h4>
            <p style={{ marginBottom: '10px', fontSize: '0.95rem' }}>
              To drive intentional organic traffic instead of generic text generation, every per-post request injects a strict structural data brief:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', width: '100%', fontSize: '0.85rem', fontWeight: '600' }}>
              <div style={{ border: '2px solid #111', padding: '8px', background: 'var(--accent-lime)', boxShadow: '2px 2px 0px #111' }}>🔑 Target Keyword Optimization</div>
              <div style={{ border: '2px solid #111', padding: '8px', background: 'var(--accent-pink)', boxShadow: '2px 2px 0px #111', color: 'white' }}>👥 Funnel Stage & Audience Segments</div>
              <div style={{ border: '2px solid #111', padding: '8px', background: 'var(--accent-yellow)', boxShadow: '2px 2px 0px #111' }}>🔍 Intent Alignment (Info vs. Commercial)</div>
              <div style={{ border: '2px solid #111', padding: '8px', background: '#e0e0e0', boxShadow: '2px 2px 0px #111' }}>📋 3-6 Non-Negotiable Subtopics</div>
              <div style={{ border: '2px solid #111', padding: '8px', background: '#fff', boxShadow: '2px 2px 0px #111', gridColumn: 'span 2' }}>📊 Competitor Benchmarks (Articles to Outperform) + Word Count Limits</div>
            </div>
          </div>

          {/* CARD 5: THE 4-PART PROMPTING ARCHITECTURE */}
          <div className="bento-card span-3-cols card-yellow" style={{ alignItems: 'flex-start' }}>
            <h4 style={{ color: '#111', marginBottom: '15px' }}>🧪 The Reusable 4-Part Prompt Architecture</h4>
            <p style={{ marginBottom: '10px', fontSize: '0.9rem', color: '#111' }}>
              This exact template runs inside the Claude Project workspace. The SEO Brief is swapped dynamically per campaign:
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', background: 'rgba(255,255,255,0.7)', borderLeft: '4px solid #111', padding: '12px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#111', lineHeight: '1.4', marginBottom: '10px' }}>
              <div><strong>1. Persona & Context:</strong> "Act as a B2B CRM content strategist for Boost Commerce..."</div>
              <div><strong>2. Brand DNA Guardrails:</strong> "Enforce brand-dna-matrix.md. Kill fluffy AI terms (delve, streamline, revolutionary). No hyphens (-) or em-dashes (—) allowed in punctuation placeholders."</div>
              <div><strong>3. Dynamic SEO Content Brief:</strong> [Injecting Target Keyword, Audience Segment, Search Intent, Must-Cover Subtopics, Competitor Benchmarks, Word Count Target].</div>
              <div style={{ borderTop: '1px dashed #111', paddingTop: '8px', marginTop: '4px' }}>
                <strong>4. 🛑 The Self-Correction Pass (The AI Critic Layer):</strong> <br/>
                <em>"Silently review your draft against the Matrix. Score jargon density. Check if any sentence exceeds 15 words. Count hyphens; if greater than zero, rewrite using clean human punctuation before showing final output."</em>
              </div>
            </div>

            {/* ẢNH 1: BẰNG CHỨNG CLAUDE SELF-CRITIC LOG */}
            <div style={{ marginTop: '20px', width: '100%' }}>
              <img 
                src="/ai-critic-proof.png" 
                alt="Claude Self-Correction Analytics Proof" 
                style={{ 
                  border: '3px solid #111', 
                  boxShadow: '6px 6px 0px #111', 
                  borderRadius: '4px', 
                  width: '100%',
                  display: 'block'
                }} 
              />
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================= */}
      {/* PILLAR 2: AI-POWERED EMAIL ANALYTICS (CLAUDE PROJECTS) */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h3 style={{ borderBottomColor: '#111', color: '#111', display: 'inline-block', margin: '0 0 20px 0' }}>
            📊 AI-Powered Email Analytics Dashboard
          </h3>
          <p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>
            I use Claude Projects as an automated "Data Analyst" to process raw lifecycle exports. This system separates actual human behavior from bot traffic and ties email metrics directly to downstream revenue.
          </p>
        </div>

        <div className="bento-grid" style={{ marginBottom: 0 }}>
          
          {/* SETUP BOX */}
          <div className="bento-card span-1-cols card-cyan" style={{ alignItems: 'flex-start' }}>
            <h4 style={{ marginBottom: '15px', color: '#111' }}>⚙️ The 1-Time Setup</h4>
            <p style={{ fontSize: '0.95rem', color: '#111', marginBottom: '10px' }}>
              I created a dedicated "Email Performance HQ" Project in Claude. It contains:
            </p>
            <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '0.9rem', color: '#111', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Historical campaign CSV exports.</li>
              <li>Pricing tiers and paid plan data for subscription revenue mapping.</li>
              <li>A fixed Custom Instructions rule-set.</li>
            </ul>
          </div>

          {/* CUSTOM INSTRUCTIONS PROMPT */}
          <div className="bento-card span-2-cols card-dark" style={{ alignItems: 'flex-start' }}>
            <h4 style={{ color: 'var(--accent-pink)', marginBottom: '15px' }}>📋 The Core Analytical Prompt</h4>
            <p style={{ marginBottom: '10px', fontSize: '0.9rem' }}>
              This permanent instruction set guarantees consistent formatting without re-prompting:
            </p>
            <div style={{ background: '#11151c', color: '#d8f7ff', padding: '15px', fontFamily: 'monospace', fontSize: '0.85rem', borderRadius: '4px', border: '1px solid #333', width: '100%', lineHeight: '1.5' }}>
              <span style={{ color: 'var(--accent-pink)', fontWeight: '800', display: 'block', marginBottom: '5px' }}>SYSTEM INSTRUCTION:</span>
              1. Remove opens/clicks from link-scanning bots (Apple MPP). Keep only verified human traffic.<br/>
              2. Calculate: Human Open Rate, CTOR, Conversion Rate, Unsub & Bounce Rates.<br/>
              3. Map Conversion Rate to Revenue Impact based on the specific paid plan tiers users upgraded to.<br/>
              4. Compare vs. previous period (delta %). Flag Unsub/Spam risk if &gt; 0.3% / 0.1%.
            </div>
          </div>

          {/* THE 4-STEP WORKFLOW - Nền Xanh Lục Bảo Nhạt */}
          <div className="bento-card span-3-cols" style={{ background: '#dcfce7' }}>
            <h4 style={{ color: '#111', marginBottom: '20px' }}>🪜 The Weekly Workflow</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
              <div>
                <h5 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>1. DATA UPLOAD</h5>
                <p style={{ fontSize: '0.85rem', marginTop: '5px' }}>Drop the weekly campaign CSV directly into the Project chat.</p>
              </div>
              <div>
                <h5 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>2. SHORT PROMPT</h5>
                <p style={{ fontSize: '0.85rem', marginTop: '5px' }}>"Here is the June 25th export. Compare vs last week."</p>
              </div>
              <div>
                <h5 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>3. AUTO FILTERING</h5>
                <p style={{ fontSize: '0.85rem', marginTop: '5px' }}>Claude separates human vs. bot traffic and calculates the 7 core metrics.</p>
              </div>
              <div>
                <h5 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>4. ARTIFACT EXPORT</h5>
                <p style={{ fontSize: '0.85rem', marginTop: '5px' }}>Claude outputs a visual dashboard artifact for the weekly stakeholder report.</p>
              </div>
            </div>
          </div>

          {/* DASHBOARD OUTPUT PREVIEW */}
          <div className="bento-card span-3-cols card-yellow" style={{ alignItems: 'flex-start' }}>
            <h4 style={{ color: '#111', marginBottom: '15px' }}>📈 Weekly Artifact Output Example</h4>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', width: '100%', marginBottom: '20px' }}>
              {/* Box 1: Nền Vàng Sáng */}
              <div style={{ background: '#fef08a', padding: '15px', border: '2px solid #111', boxShadow: '4px 4px 0px #111' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#666', textTransform: 'uppercase' }}>Human Open Rate</div>
                <div style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', margin: '5px 0' }}>38.2%</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--green)', fontWeight: '800' }}>▲ 2.1 pts</div>
              </div>
              {/* Box 2: Nền Hồng Đậm Hơn */}
              <div style={{ background: '#fecdd3', padding: '15px', border: '2px solid #111', boxShadow: '4px 4px 0px #111' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#666', textTransform: 'uppercase' }}>Open → Click (CTOR)</div>
                <div style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', margin: '5px 0' }}>16.7%</div>
                <div style={{ fontSize: '0.8rem', color: '#111', fontWeight: '800' }}>▼ 0.3 pts</div>
              </div>
              {/* Box 3: Nền Xanh Dương Sáng */}
              <div style={{ background: '#bfdbfe', padding: '15px', border: '2px solid #111', boxShadow: '4px 4px 0px #111' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#666', textTransform: 'uppercase' }}>Conversion Rate</div>
                <div style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', margin: '5px 0' }}>2.1%</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--green)', fontWeight: '800' }}>▲ 0.4 pts</div>
              </div>
              {/* Box 4: Nền Trắng Cổ Điển để nổi bật Revenue */}
              <div style={{ background: '#ffffff', padding: '15px', border: '2px solid #111', boxShadow: '4px 4px 0px #111' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#666', textTransform: 'uppercase' }}>Revenue Impact</div>
                <div style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', margin: '5px 0', color: 'var(--accent-pink)' }}>$12,580</div>
                <div style={{ fontSize: '0.8rem', color: '#111', fontWeight: '800' }}>148 upgrades × $85/mo</div>
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.6)', padding: '15px', borderLeft: '4px solid #111', width: '100%', marginBottom: '10px' }}>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#111', fontWeight: '700' }}>
                🚨 Automated Risk Flagging: Hard bounce rate exceeded 0.3% threshold (Actual: 0.42%). Claude automatically recommended reviewing the "Inactive 90+ days" segment prior to the next send.
              </p>
            </div>

            {/* ẢNH 2: BẰNG CHỨNG EMAIL PERFORMANCE DASHBOARD */}
            <div style={{ marginTop: '20px', width: '100%' }}>
              <img 
                src="/email-analytics-dashboard.png" 
                alt="Email Analytics Performance Dashboard Proof" 
                style={{ 
                  border: '3px solid #111', 
                  boxShadow: '6px 6px 0px #111', 
                  borderRadius: '4px', 
                  width: '100%',
                  display: 'block'
                }} 
              />
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================= */}
      {/* PILLAR 3: AI-POWERED A/B TESTING ENGINE */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h3 style={{ borderBottomColor: '#111', color: '#111', display: 'inline-block', margin: '0 0 20px 0' }}>
            🧪 The AI-Powered A/B Testing Engine
          </h3>
          <p style={{ fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>
            I use Claude as a "co-pilot" for experiment design: from generating psychological hypotheses and writing controlled variants, to calculating statistical significance before deploying winning paths.
          </p>
        </div>

        <div className="bento-grid" style={{ marginBottom: 0 }}>
          
          {/* THE PROMPT FRAMEWORK - Nền Cam Đào */}
          <div className="bento-card span-2-cols" style={{ alignItems: 'flex-start', background: '#ffedd5' }}>
            <h4 style={{ color: 'var(--accent-blue)', marginBottom: '15px' }}>🤖 The Experiment Design Prompt</h4>
            <p style={{ marginBottom: '10px', fontSize: '0.9rem' }}>
              Instead of random testing, every experiment is structured around a strict 3-tier framework:
            </p>
            
            <div style={{ background: '#11151c', color: '#fff7d8', padding: '15px', fontFamily: 'monospace', fontSize: '0.85rem', borderRadius: '4px', border: '1px solid #333', width: '100%', lineHeight: '1.5' }}>
              <span style={{ color: 'var(--accent-yellow)', fontWeight: '800', display: 'block', marginBottom: '5px' }}>PROMPT TEMPLATE:</span>
              1. Propose 1 variant pair for Psychological Framing (Loss-Aversion vs Aspirational Gain). Write the copy for both.<br/>
              2. Keep layout, subject line, and CTA identical across both variants to control confounding variables.<br/>
              3. State the specific hypothesis (If/Then) and define primary/secondary tracking metrics.<br/>
              4. Calculate the required sample size to reach 95% statistical significance based on the current 4.2% baseline conversion.
            </div>
          </div>

          {/* DATA CONFIDENCE CARD */}
          <div className="bento-card card-yellow" style={{ alignItems: 'center', textAlign: 'center' }}>
            <div className="kpi-number" style={{ fontSize: '3.5rem' }}>95%+</div>
            <h4 style={{ textTransform: 'uppercase', marginBottom: '10px' }}>Confidence Required</h4>
            <p style={{ fontSize: '0.85rem', color: '#111', marginTop: '5px', lineHeight: '1.4' }}>
              Claude calculates sample size and p-values first. No variant goes live to the entire list until it crosses the 95% significance threshold.
            </p>
          </div>

          {/* THE 4-STEP PIPELINE - Nền Xanh Lơ Nhạt */}
          <div className="bento-card span-3-cols" style={{ background: '#cffafe' }}>
            <h4 style={{ color: '#111', marginBottom: '20px' }}>🪜 The 4-Step Experiment Pipeline</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
              <div>
                <h5 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>1. HYPOTHESIS</h5>
                <p style={{ fontSize: '0.85rem', marginTop: '5px' }}>Claude analyzes baseline data and proposes tests across 3 layers: psychology, layout, or velocity.</p>
              </div>
              <div>
                <h5 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>2. CONTROLLED COPY</h5>
                <p style={{ fontSize: '0.85rem', marginTop: '5px' }}>Writing parallel variants where only the specific test variable changes, ensuring clean data.</p>
              </div>
              <div>
                <h5 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>3. SAMPLE SIZING</h5>
                <p style={{ fontSize: '0.85rem', marginTop: '5px' }}>Calculating the exact audience size required to hit significance before touching Customer.io.</p>
              </div>
              <div>
                <h5 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>4. REROUTING DECISION</h5>
                <p style={{ fontSize: '0.85rem', marginTop: '5px' }}>Raw results are fed back into Claude to evaluate confidence intervals before deploying the winner.</p>
              </div>
            </div>
          </div>

          {/* EXPERIMENT MATRIX TABLE - Nền Tím Hồng Phấn */}
          <div className="bento-card span-3-cols" style={{ alignItems: 'flex-start', background: '#fce7f3' }}>
            <h4 style={{ color: 'var(--accent-blue)', marginBottom: '15px' }}>📐 The 3-Tier Testing Matrix</h4>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', textAlign: 'left', background: 'white', border: '2px solid #111', marginBottom: '10px' }}>
              <thead>
                <tr>
                  <th style={{ background: 'var(--accent-blue)', color: 'white', padding: '12px', borderBottom: '2px solid #111', borderRight: '1px solid #111' }}>Testing Layer</th>
                  <th style={{ background: 'var(--accent-blue)', color: 'white', padding: '12px', borderBottom: '2px solid #111', borderRight: '1px solid #111' }}>Variant A (Control)</th>
                  <th style={{ background: 'var(--accent-blue)', color: 'white', padding: '12px', borderBottom: '2px solid #111', borderRight: '1px solid #111' }}>Variant B (Test)</th>
                  <th style={{ background: 'var(--accent-blue)', color: 'white', padding: '12px', borderBottom: '2px solid #111' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '12px', borderBottom: '1px solid #111', borderRight: '1px solid #111', fontWeight: '800', color: 'var(--accent-blue)' }}>Psychological Framing</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #111', borderRight: '1px solid #111', fontWeight: '600' }}>Loss-Aversion</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #111', borderRight: '1px solid #111', fontWeight: '600' }}>Aspirational Gain</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #111' }}><span style={{ background: 'var(--accent-yellow)', padding: '4px 10px', borderRadius: '15px', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', border: '1px solid #111' }}>Running</span></td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', borderBottom: '1px solid #111', borderRight: '1px solid #111', fontWeight: '800', color: 'var(--accent-blue)' }}>Layout Framing</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #111', borderRight: '1px solid #111', fontWeight: '600' }}>Personal Plain-text</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #111', borderRight: '1px solid #111', fontWeight: '600' }}>Neo-brutalist HTML block</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #111' }}><span style={{ background: 'var(--accent-lime)', padding: '4px 10px', borderRadius: '15px', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', border: '1px solid #111' }}>95% Reached</span></td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', borderRight: '1px solid #111', fontWeight: '800', color: 'var(--accent-blue)' }}>Trigger Velocity</td>
                  <td style={{ padding: '12px', borderRight: '1px solid #111', fontWeight: '600' }}>Immediate Nudge</td>
                  <td style={{ padding: '12px', borderRight: '1px solid #111', fontWeight: '600' }}>6-hour Behavioral Delay</td>
                  <td style={{ padding: '12px' }}><span style={{ background: '#eee', padding: '4px 10px', borderRadius: '15px', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', border: '1px solid #111' }}>Planned</span></td>
                </tr>
              </tbody>
            </table>

            {/* ẢNH 3: BẰNG CHỨNG SAMPLE SIZE CALCULATION */}
            <div style={{ marginTop: '20px', width: '100%' }}>
              <img 
                src="/ab-testing-sample-size.png" 
                alt="A/B Testing Statistical Sample Size Calculation Proof" 
                style={{ 
                  border: '3px solid #111', 
                  boxShadow: '6px 6px 0px #111', 
                  borderRadius: '4px', 
                  width: '100%',
                  display: 'block'
                }} 
              />
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================= */}
      {/* FOOTER CTA BLOCK */}
      <div className="bento-card card-dark deco-lines-inside" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '50px 40px', flexWrap: 'wrap', gap: '30px' }}>
        <div style={{ maxWidth: '600px', zIndex: 1 }}>
          <h3 style={{ color: 'var(--accent-lime)', fontSize: '2.5rem', borderBottom: 'none', margin: '0 0 10px 0', alignSelf: 'flex-start' }}>LET'S BUILD TOGETHER</h3>
          <p style={{ fontSize: '1.1rem', color: 'white', fontWeight: '700', margin: 0 }}>Currently targeting roles in Lifecycle Marketing, CRM, and Growth. If you're looking for someone who bridges the gap between content and conversion, let's talk.</p>
        </div>
        <div style={{ zIndex: 1 }}>
          <Link href="/contact" className="nav-btn" style={{ background: 'white', width: '220px' }}>GET IN TOUCH</Link>
        </div>
      </div>

    </main>
  );
}