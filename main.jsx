import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const services = [
  ["01", "Raiding", "I help projects execute organized raids quickly and efficiently."],
  ["02", "Promotion", "I help projects increase visibility and reach through strategic promotion."],
  ["03", "Shilling", "I create consistent buzz and engagement around projects across Web3 communities."],
  ["04", "Ambassador", "I represent projects, spread their message, and connect them with the wider Web3 audience."],
  ["05", "Community Management", "I help keep communities active, organized, and engaged."],
  ["06", "Web Development", "I build clean, functional websites and digital experiences for Web3 projects."],
  ["07", "Growth Strategy", "I develop practical strategies to improve visibility, engagement, and community growth."],
  ["08", "Marketing", "I help projects reach the right audience through creative and targeted marketing."]
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      }),
      { threshold: 0.12 }
    );
    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <div className="noise" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <header className="nav-wrap">
        <nav className="nav container">
          <a href="#home" className="brand" onClick={closeMenu}>𝐅<span>🅾️</span>𝐔𝐙</a>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>What I Do</a>
            <a href="#work" onClick={closeMenu}>Experience</a>
            <a href="#journey" onClick={closeMenu}>Journey</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Work With Me</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy reveal">
            <div className="eyebrow"><i></i> AVAILABLE FOR WEB3 PROJECTS</div>
            <h1>From Attention<br />to <em>Impact.</em></h1>
            <p>I help Web3 projects grow through visibility, community, promotion, marketing, and digital development.</p>
            <div className="hero-actions">
              <a className="btn primary" href="#contact">Work With Me <span>↗</span></a>
              <a className="btn ghost" href="https://x.com/The_Only_Fouz" target="_blank" rel="noreferrer">DM Me On X <span>↗</span></a>
            </div>
            <div className="hero-meta">
              <span>RAIDER</span><b>•</b><span>SHILLER</span><b>•</b><span>AMBASSADOR</span><b>•</b><span>GROWTH</span>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="visual-grid"></div>
            <div className="image-ring"></div>
            <img src="/fouz.jpg" alt="FOUZ Web3 profile artwork" />
            <div className="floating-card card-top">
              <span className="dot"></span>
              <div><strong>WEB3</strong><small>BUILD • GROW • CONNECT</small></div>
            </div>
            <div className="floating-card card-bottom">
              <strong>𝐅🅾️𝐔𝐙</strong>
              <small>GROWTH STRATEGIST</small>
            </div>
          </div>
        </section>

        <section id="about" className="section container">
          <div className="section-head reveal">
            <span>01 — ABOUT ME</span>
            <h2>Web3 enthusiast.<br /><em>Builder. Growth-focused.</em></h2>
          </div>
          <div className="about-grid">
            <div className="about-number reveal">01<span>/</span>05</div>
            <div className="about-copy reveal">
              <p className="large">I'm FOUZ, a Web3 enthusiast focused on helping projects make things easier, get noticed, and build stronger communities.</p>
              <p>I work across promotion, community management, marketing, growth strategy, and development. I'm constantly learning, connecting with people, and looking for practical ways to create value in the Web3 space.</p>
            </div>
          </div>
        </section>

        <section id="services" className="section container services-section">
          <div className="section-head reveal">
            <span>02 — WHAT I DO</span>
            <h2>Skills that turn<br /><em>ideas into momentum.</em></h2>
          </div>
          <div className="services-grid">
            {services.map(([num, title, text]) => (
              <article className="service-card reveal" key={title}>
                <span className="service-num">{num}</span>
                <div className="service-arrow">↗</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="work-section">
          <div className="container work-inner reveal">
            <div>
              <span className="section-label">03 — EXPERIENCE</span>
              <h2>See what I've<br /><em>been working on.</em></h2>
              <p>Explore my Proof of Work and get a look at my Web3 activities, raids, campaigns, contributions, and experience.</p>
            </div>
            <a className="circle-btn" href="https://t.me/+su4UUbOdoptiZTZk" target="_blank" rel="noreferrer">
              <span>VIEW PROOF<br />OF WORK</span><b>↗</b>
            </a>
          </div>
        </section>

        <section id="journey" className="section container journey">
          <div className="section-head reveal">
            <span>04 — THE JOURNEY</span>
            <h2>Started small.<br /><em>Building bigger.</em></h2>
          </div>
          <div className="journey-line reveal">
            <div className="journey-point"><span>START</span><i></i></div>
            <div className="journey-content">
              <p>I started my Web3 journey from the ground up, learning, experimenting, connecting, and taking every opportunity to improve.</p>
              <p>What started small has grown into a journey filled with new skills, experiences, collaborations, and bigger ambitions.</p>
              <strong>I'm still learning. Still building. Still growing. <em>And I'm only getting started.</em></strong>
            </div>
            <div className="journey-point end"><span>NEXT</span><i></i></div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-inner reveal">
            <div>
              <span className="section-label">05 — LET'S WORK</span>
              <h2>Have a Web3<br /><em>project?</em></h2>
              <p>Whether you need promotion, raiding, shilling, ambassadorship, community management, marketing, growth strategy, or web development, let's build something.</p>
            </div>
            <div className="contact-actions">
              <a className="big-link" href="https://x.com/The_Only_Fouz" target="_blank" rel="noreferrer">DM ME ON X <span>↗</span></a>
              <a className="big-link" href="https://t.me/fouz_001" target="_blank" rel="noreferrer">MESSAGE ON TELEGRAM <span>↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <div className="footer-brand">
          <strong>𝐅<span>🅾️</span>𝐔𝐙</strong>
          <span>Web3 • Growth • Community • Development</span>
        </div>
        <div className="footer-socials">
          <a href="https://x.com/The_Only_Fouz" target="_blank" rel="noreferrer">X ↗</a>
          <a href="https://t.me/fouz_001" target="_blank" rel="noreferrer">Telegram ↗</a>
        </div>
        <span className="copyright">© 2026 FOUZ</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
