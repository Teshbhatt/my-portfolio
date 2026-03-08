import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Experience", "Projects", "Skills", "Hackathons"];

const PROJECTS = [
  {
    name: "MacNMana — Blockchain Restaurant Reviews",
    desc: "Decentralised restaurant review platform built on-chain. Smart contracts ensure tamper-proof, verified reviews powered by Google Places API integration.",
    tags: ["Solidity", "Blockchain", "Smart Contracts", "Google API", "Web3"],
    team: "Team of 4",
    github: "https://github.com/tsujisalju/mac-n-mana",
  },
  {
    name: "Inventory Management System",
    desc: "Full-featured inventory system for tracking stock levels, managing suppliers, and generating reports — built with PHP and a relational database.",
    tags: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    github: "https://github.com/Teshbhatt/PHP-Invetory-System",
    demo: "#",
    team: "Solo Project",
  },
  {
    name: "Python Inventory System",
    desc: "A simple inventory management system built with Python and text files for local data storage.",
    tags: ["Python", "File I/O", "Object-Oriented Programming"],
    team: "Solo Project",
  },
  {
    name: "Ongoing Mobile Application Development for Car Wash Service",
    desc: "Currently developing a mobile application for a car wash service, focusing on user-friendly design and seamless booking experience.",
    tags: ["Flutter", "Dart", "Mobile Development", "Supabase", "APIs"],
    team: "Solo Project",
  }
];

const SKILLS = [
  {
    label: "Blockchain & Web3",
    items: ["Solidity", "Smart Contracts", "Ethereum", "Web3.js", "Hardhat", "IPFS"],
  },
  {
    label: "Backend & APIs",
    items: ["PHP", "MySQL", "REST APIs", "Google Maps API", "Node.js", "PostgreSQL"],
  },
  {
    label: "Tools & Dev",
    items: ["Git", "GitHub", "VS Code", "Postman", "Linux", "MetaMask", "AI tools (ChatGPT, Gemini, Claude)"],
  },
  {
    label: "Languages",
    items: ["JavaScript", "Python", "PHP", "SQL", "Flutter/Dart", "C#", "Rust", "CLI tools"],
  }
];

const HACKATHONS = [
  {
    name: "DevMatch Hackathon",
    result: "Participant",
    desc: "Competed in a team-based hackathon solving real-world engineering problems under time pressure.",
    icon: "⚡",
  },
  {
    name: "Solana Ideathon",
    result: "Participant",
    desc: "Pitched and prototyped a blockchain-based idea on the Solana ecosystem, exploring DeFi and Web3 use cases.",
    icon: "◎",
  },
  {
    name: "Google Hackathon",
    result: "Participant",
    desc: "Participated in a hackathon organized by Google, working on a team to develop a solution to a real-world problem.",
    icon: "🔍",
  },
];

const EXPERIENCE = [
  {
    period: "2023 – Present",
    role: "Student",
    company: "Asia Pacific University (APU)",
    points: [
      "Building full-stack and blockchain applications as part of team and solo projects.",
      "Developed MacNMana, a decentralised restaurant review dApp using Solidity smart contracts and Google Places API.",
      "Competed in multiple hackathons including DevMatch and Solana Ideathon, delivering working prototypes under tight deadlines.",
    ],
  },
  {
    period: "June 2025 – September 2025",
    role: "Intern Software Engineer",
    company: "AstiosTech Sdn Bhd",
    points: [
      "Built a PHP-based inventory management system for tracking stock, suppliers, and generating business reports.",
      "Designed and implemented relational database schemas using MySQL for data integrity and query performance.",
      "Collaborated with a team of developers, participated in code reviews, and followed agile development practices to deliver a production-ready tool.",
      "Managed GLPI ticketing system for internal IT support, improving response times and issue tracking efficiency for Ministry Of Health (Malaysia), Maybank, Taylors University and Sunway University.",
    ],
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, direction = "up" }) {
  const [ref, inView] = useInView();
  const transforms = { up: "translateY(28px)", right: "translateX(-24px)", left: "translateX(24px)" };
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : transforms[direction],
      transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
  </svg>
);

// eslint-disable-next-line no-unused-vars
const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setBlink(b => !b), 530);
    return () => clearInterval(t);
  }, []);

  const c = {
    bg: dark ? "#0e0e0e" : "#f7f7f5",
    text: dark ? "#ededed" : "#111111",
    muted: dark ? "#888" : "#666",
    border: dark ? "#262626" : "#e5e5e5",
    accent: "#1a56db",
    pill: dark ? "#1e1e1e" : "#f0f0ee",
    pillText: dark ? "#ccc" : "#444",
    navBg: dark ? "rgba(14,14,14,0.88)" : "rgba(247,247,245,0.88)",
    cardBg: dark ? "#141414" : "#ffffff",
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const style = {
    page: {
      background: c.bg,
      color: c.text,
      fontFamily: "'DM Sans', sans-serif",
      minHeight: "100vh",
      transition: "background 0.3s, color 0.3s",
      overflowX: "hidden",
    },
    nav: {
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 999,
      background: scrolled ? c.navBg : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? `1px solid ${c.border}` : "none",
      transition: "all 0.3s",
      padding: "0 24px",
    },
    navInner: {
      maxWidth: 960,
      margin: "0 auto",
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    logo: {
      fontFamily: "'DM Mono', monospace",
      fontSize: 14,
      fontWeight: 500,
      color: c.accent,
      border: `1px solid ${c.accent}`,
      padding: "4px 10px",
      borderRadius: 4,
      letterSpacing: 1,
      cursor: "default",
    },
    navLinks: {
      display: "flex",
      gap: 32,
      alignItems: "center",
    },
    navLink: {
      fontSize: 14,
      color: c.muted,
      cursor: "pointer",
      fontWeight: 400,
      letterSpacing: "0.3px",
      transition: "color 0.2s",
      background: "none",
      border: "none",
      padding: 0,
    },
    section: {
      maxWidth: 860,
      margin: "0 auto",
      padding: "100px 24px",
    },
    sectionLabel: {
      fontSize: 11,
      letterSpacing: "3px",
      textTransform: "uppercase",
      color: c.accent,
      fontWeight: 600,
      marginBottom: 20,
    },
    h2: {
      fontSize: 36,
      fontWeight: 700,
      letterSpacing: "-0.5px",
      marginBottom: 48,
      color: c.text,
    },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Serif+Display&family=DM+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        a { text-decoration: none; }
        ::selection { background: #1a56db33; }

        .nav-link:hover { color: #1a56db !important; }
        .pill-skill:hover { background: #1a56db !important; color: #fff !important; border-color: #1a56db !important; }
        .project-card { transition: transform 0.25s, box-shadow 0.25s; }
        .project-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.14); }
        .project-card:hover .card-accent { opacity: 1; }
        .card-accent { transition: opacity 0.2s; opacity: 0; }
        .btn-primary:hover { background: #1440b0 !important; }
        .btn-outline:hover { background: #1a56db !important; color: #fff !important; }
        .icon-link:hover { color: #1a56db !important; }
        .menu-btn:hover { color: #1a56db !important; }

        @media (max-width: 680px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .hero-title { font-size: 44px !important; }
          .hero-sub { font-size: 18px !important; }
          .about-grid { flex-direction: column !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .stats-row { flex-wrap: wrap !important; }
          .cta-row { flex-direction: column !important; gap: 12px !important; }
        }

        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes chevronBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        .chevron-bounce { animation: chevronBounce 1.6s ease-in-out infinite; }
      `}</style>

      <div style={style.page}>
        {/* NAV */}
        <nav style={style.nav}>
          <div style={style.navInner}>
            <div style={style.logo}>TeshBhatt</div>

            {/* Desktop links */}
            <div className="desktop-nav" style={style.navLinks}>
              {NAV_LINKS.map(l => (
                <button key={l} className="nav-link" style={style.navLink} onClick={() => scrollTo(l.toLowerCase())}>
                  {l}
                </button>
              ))}
              <button
                onClick={() => setDark(!dark)}
                style={{ background: "none", border: "none", cursor: "pointer", color: c.muted, display: "flex", padding: 4 }}
                aria-label="Toggle dark mode"
              >
                {dark ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>

            {/* Mobile */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <button onClick={() => setDark(!dark)} style={{ background: "none", border: "none", cursor: "pointer", color: c.muted, display: "flex" }}>
                {dark ? <SunIcon /> : <MoonIcon />}
              </button>
              <button
                className="mobile-menu-btn menu-btn"
                style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: c.muted, fontSize: 22, flexDirection: "column", gap: 5, padding: 4 }}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
              >
                <span style={{ display: "block", width: 22, height: 2, background: "currentColor", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
                <span style={{ display: "block", width: 22, height: 2, background: "currentColor", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
                <span style={{ display: "block", width: 22, height: 2, background: "currentColor", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {menuOpen && (
            <div style={{ background: c.navBg, backdropFilter: "blur(14px)", borderTop: `1px solid ${c.border}`, padding: "16px 24px 24px" }}>
              {NAV_LINKS.map(l => (
                <button key={l} onClick={() => scrollTo(l.toLowerCase())} style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", padding: "12px 0", fontSize: 16, color: c.text, cursor: "pointer", borderBottom: `1px solid ${c.border}` }}>
                  {l}
                </button>
              ))}
            </div>
          )}
        </nav>

        {/* HERO */}
        <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 24px", maxWidth: 860, margin: "0 auto", position: "relative" }}>
          <FadeIn delay={0.1}>
            <div style={{ fontSize: 12, letterSpacing: "4px", textTransform: "uppercase", color: c.accent, fontWeight: 600, marginBottom: 20 }}>
              Backend &amp; Mobile Engineer
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1
              className="hero-title"
              style={{ fontFamily: "'DM Serif Display', serif", fontSize: 68, lineHeight: 1.08, letterSpacing: "-1.5px", color: c.text, marginBottom: 24, fontWeight: 400 }}
            >
              Hi, I'm Tesh
              <span style={{ color: c.accent, opacity: blink ? 1 : 0, transition: "opacity 0.1s" }}>.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p className="hero-sub" style={{ fontSize: 20, color: c.muted, lineHeight: 1.65, maxWidth: 560, marginBottom: 40, fontWeight: 300 }}>
              I build reliable APIs, scalable backend systems, and polished mobile experiences that users trust.
            </p>
          </FadeIn>
          <FadeIn delay={0.48}>
            <div className="cta-row" style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <button
                className="btn-primary"
                onClick={() => scrollTo("projects")}
                style={{ padding: "13px 28px", background: c.accent, color: "#fff", border: "none", borderRadius: 6, fontSize: 14, fontWeight: 600, cursor: "pointer", letterSpacing: "0.3px", transition: "background 0.2s", fontFamily: "'DM Sans', sans-serif" }}
              >
                View My Work
              </button>
              <a
                href="TeshwindevSinghCV.pdf"
                download={"Tesh_CV.pdf"}
                className="btn-outline"
                style={{ padding: "12px 28px", background: "transparent", color: c.accent, border: `1.5px solid ${c.accent}`, borderRadius: 6, fontSize: 14, fontWeight: 600, cursor: "pointer", letterSpacing: "0.3px", transition: "all 0.2s", fontFamily: "'DM Sans', sans-serif" }}
              >
                Download CV
              
              </a>
            </div>
          </FadeIn>

          {/* Scroll hint */}
          <div className="chevron-bounce" style={{ position: "absolute", bottom: 40, left: 0, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 6 }}>
            <span style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: c.muted }}>scroll</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c.muted} strokeWidth="2" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
        </section>

       {/* ABOUT */}
<section id="about" style={{ ...style.section, borderTop: `1px solid ${c.border}` }}>
  <FadeIn><div style={style.sectionLabel}>About</div></FadeIn>

  <div className="about-grid" style={{ display: "flex", gap: 60, alignItems: "flex-start" }}>

    {/* LEFT COLUMN — text */}
    <div style={{ flex: "1 1 58%" }}>
      <FadeIn delay={0.1}>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: c.muted, marginBottom: 20 }}>
I'm a Software Engineer with a focus on backend systems and blockchain development. I've built full-stack web applications, designed smart contracts on Ethereum, and shipped production-ready tools — both independently and as part of collaborative teams.        </p>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: c.muted, marginBottom: 20 }}>
I'm drawn to the world of crypto and blockchain — which is what drew me to Web3. Whether it's writing tamper-proof smart contracts in Solidity or architecting a clean PHP backend or even researching on upcoming crypto projects, I care about code that is reliable, readable, and built to last.        </p>
      </FadeIn>
      <FadeIn delay={0.3}>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: c.muted, marginBottom: 36 }}>
 Outside of engineering, I enjoy reading books, working on machinery, playing sports, exploring new technologies, crypto projects and constantly learning.        </p>
      </FadeIn>
      <FadeIn delay={0.4}>
        <div className="stats-row" style={{ display: "flex", gap: 12 }}>
          {["2+ Projects", "2 Hackathons", "Blockchain & Web", "Open to Work ✓"].map((s, i) => (
            <div key={i} style={{ border: `1px solid ${c.border}`, borderRadius: 6, padding: "8px 14px", fontSize: 12, fontWeight: 500, color: i === 3 ? c.accent : c.muted, whiteSpace: "nowrap" }}>
              {s}
            </div>
          ))}
        </div>
      </FadeIn>
    </div>  {/* ← LEFT COLUMN CLOSES HERE */}

    {/* RIGHT COLUMN — image, outside and after the left div */}
    <FadeIn delay={0.2} direction="left">
      <img
        src="/ProfPic.jpeg"
        alt="Teshwindev Singh"
        style={{
          flexShrink: 0,
          width: 200,
          height: 240,
          objectFit: "cover",
          objectPosition: "center top",
          borderRadius: 10,
          border: `1px solid ${c.border}`,
          display: "block",
        }}
      />
    </FadeIn>

  </div>  {/* ← FLEX ROW CLOSES HERE */}
</section>

        {/* EXPERIENCE */}
        <section id="experience" style={{ ...style.section, borderTop: `1px solid ${c.border}` }}>
          <FadeIn><div style={style.sectionLabel}>Experience</div></FadeIn>
          <div style={{ position: "relative", paddingLeft: 28 }}>
            {/* vertical line */}
            <div style={{ position: "absolute", left: 7, top: 8, bottom: 8, width: 1, background: c.border }} />
            {EXPERIENCE.map((exp, i) => (
              <FadeIn key={i} delay={i * 0.12} direction="right">
                <div style={{ position: "relative", marginBottom: 52 }}>
                  {/* dot */}
                  <div style={{ position: "absolute", left: -25, top: 6, width: 10, height: 10, borderRadius: "50%", background: c.accent, border: `2px solid ${c.bg}`, boxShadow: `0 0 0 2px ${c.accent}` }} />
                  <div style={{ fontSize: 11, letterSpacing: "2px", color: c.accent, textTransform: "uppercase", marginBottom: 6, fontWeight: 600 }}>
                    {exp.period}
                  </div>
                  <div style={{ fontSize: 19, fontWeight: 700, color: c.text, marginBottom: 2 }}>{exp.role}</div>
                  <div style={{ fontSize: 14, color: c.muted, marginBottom: 14 }}>{exp.company}</div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {exp.points.map((pt, pi) => (
                      <li key={pi} style={{ fontSize: 14, color: c.muted, lineHeight: 1.7, paddingLeft: 16, position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, color: c.accent }}>–</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ ...style.section, borderTop: `1px solid ${c.border}` }}>
          <FadeIn><div style={style.sectionLabel}>Projects</div></FadeIn>
          <FadeIn delay={0.05}><h2 style={{ ...style.h2, fontSize: 28 }}>Selected Work</h2></FadeIn>
          <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {PROJECTS.map((p, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="project-card" style={{ background: c.cardBg, border: `1px solid ${c.border}`, borderRadius: 10, padding: 24, position: "relative", overflow: "hidden" }}>
                  {/* accent top border on hover */}
                  <div className="card-accent" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: c.accent, borderRadius: "10px 10px 0 0" }} />
                  <div style={{ fontSize: 16, fontWeight: 700, color: c.text, marginBottom: 6, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    {p.name}
                    {p.team && <span style={{ fontSize: 10, background: c.accent + "22", color: c.accent, border: `1px solid ${c.accent}44`, borderRadius: 4, padding: "2px 8px", fontWeight: 600, letterSpacing: "0.5px" }}>{p.team}</span>}
                  </div>
                  <p style={{ fontSize: 13.5, color: c.muted, lineHeight: 1.6, marginBottom: 16 }}>{p.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                    {p.tags.map(t => (
                      <span key={t} style={{ fontSize: 11, background: c.pill, color: c.pillText, border: `1px solid ${c.border}`, borderRadius: 4, padding: "3px 8px", fontWeight: 500 }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 14 }}>
                    { <a href={p.github} className="icon-link" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: c.muted, fontWeight: 500, transition: "color 0.2s" }} aria-label="GitHub">
                      <GitHubIcon /> GitHub
                    </a>  }
                    {/* <a href={p.demo} className="icon-link" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: c.muted, fontWeight: 500, transition: "color 0.2s" }} aria-label="Live Demo">
                      <ExternalIcon /> Live Demo
                    </a> */}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" style={{ ...style.section, borderTop: `1px solid ${c.border}` }}>
          <FadeIn><div style={style.sectionLabel}>Skills</div></FadeIn>
          <FadeIn delay={0.05}><h2 style={{ ...style.h2, fontSize: 28 }}>Tech Stack</h2></FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            {SKILLS.map((group, gi) => (
              <FadeIn key={gi} delay={gi * 0.1}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: c.muted, marginBottom: 14 }}>
                    {group.label}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {group.items.map(skill => (
                      <span
                        key={skill}
                        className="pill-skill"
                        style={{ fontSize: 13, border: `1px solid ${c.border}`, borderRadius: 6, padding: "6px 14px", color: c.muted, cursor: "default", transition: "all 0.18s", fontWeight: 400 }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* HACKATHONS */}
        <section id="hackathons" style={{ ...style.section, borderTop: `1px solid ${c.border}` }}>
          <FadeIn><div style={style.sectionLabel}>Hackathons</div></FadeIn>
          <FadeIn delay={0.05}><h2 style={{ ...style.h2, fontSize: 28 }}>Competitions</h2></FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {HACKATHONS.map((h, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ background: c.cardBg, border: `1px solid ${c.border}`, borderRadius: 10, padding: "20px 24px", display: "flex", alignItems: "flex-start", gap: 20 }}>
                  <div style={{ fontSize: 28, flexShrink: 0, marginTop: 2 }}>{h.icon}</div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                      <div style={{ fontSize: 16, fontWeight: 700, color: c.text }}>{h.name}</div>
                      <span style={{ fontSize: 10, background: c.accent + "22", color: c.accent, border: `1px solid ${c.accent}44`, borderRadius: 4, padding: "2px 8px", fontWeight: 600, letterSpacing: "0.5px" }}>{h.result}</span>
                    </div>
                    <p style={{ fontSize: 14, color: c.muted, lineHeight: 1.7 }}>{h.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: dark ? "#090909" : "#111", borderTop: `1px solid ${dark ? "#1a1a1a" : "#222"}`, padding: "48px 24px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: "#fff", marginBottom: 6, fontWeight: 400 }}>
              Teshwindev Singh
            </div>
            <div style={{ fontSize: 12, letterSpacing: "3px", textTransform: "uppercase", color: "#555", marginBottom: 28 }}>
              Backend &amp; Mobile Engineer
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 28 }}>
              {[
                { icon: <GitHubIcon />, label: "GitHub", href: "https://github.com/Teshbhatt" },
                { icon: <LinkedInIcon />, label: "LinkedIn", href: "https://www.linkedin.com/in/teshwindev-singh-736512249" },
                { icon: <MailIcon />, label: "Email", href: "mailto:teshwindev@gmail.com?subject=Hello from your portfolio" },
              ].map(({ icon, label, href }) => (
                <a key={label} href={href} className="icon-link" style={{ color: "#555", display: "flex", alignItems: "center", transition: "color 0.2s" }} aria-label={label}>
                  {icon}
                </a>
              ))}
            </div>
            <div style={{ fontSize: 12, color: "#3a3a3a" }}>
              Built by Teshwindev Singh · 2025
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}