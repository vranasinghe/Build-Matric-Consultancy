import React, { useState, useEffect, useRef } from 'react';

/**
 * MatTrix - Single-File React Component
 * 
 * A complete, standalone React version of the MatTrix Construction & Architecture website.
 * Contains all UI components, interactive states (counter animations, accordion, dynamic header),
 * and embedded responsive design system in a single plug-and-play React file.
 */

const STYLES = `
/* Global Reset & Design Tokens */
:root {
  --color-primary: #121820;
  --color-accent: #0f172a;
  --color-dark: #090d12;
  --color-light: #f8fafc;
  --color-gray-100: #f1f5f9;
  --color-gray-200: #e2e8f0;
  --color-gray-400: #94a3b8;
  --color-gray-600: #475569;
  --color-gray-800: #1e293b;
  --font-main: 'Inter', system-ui, -apple-system, sans-serif;
  --font-heading: 'Outfit', system-ui, -apple-system, sans-serif;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --shadow-sm: 0 4px 6px -1px rgba(0,0,0,0.05);
  --shadow-md: 0 10px 15px -3px rgba(0,0,0,0.1);
  --shadow-lg: 0 20px 25px -5px rgba(0,0,0,0.15);
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
}

.mattrix-root * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.mattrix-root {
  font-family: var(--font-main);
  color: var(--color-gray-800);
  background-color: #ffffff;
  line-height: 1.6;
  width: 100%;
  overflow-x: hidden;
}

.mattrix-container {
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
}

/* Typography & Common UI */
.mattrix-tag {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--color-gray-400);
  margin-bottom: 12px;
  text-transform: uppercase;
}

.mattrix-title {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  color: var(--color-primary);
  margin-bottom: 24px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #ffffff;
  color: var(--color-primary);
  padding: 14px 32px;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
  border: none;
  cursor: pointer;
}
.btn-primary:hover {
  background: #e2e8f0;
  transform: translateY(-2px);
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #fff;
  padding: 14px 32px;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
  background: transparent;
  cursor: pointer;
}
.btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #fff;
}

.btn-dark {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--color-primary);
  color: #fff;
  padding: 12px 28px;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
  border: none;
  cursor: pointer;
}
.btn-dark:hover {
  background: #334155;
  transform: translateY(-2px);
}

/* Navbar */
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 20px 0;
  transition: var(--transition);
}
.nav-bar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 12px 0;
  box-shadow: var(--shadow-sm);
}
.nav-wrap {
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
  transition: var(--transition);
}
.nav-bar.scrolled .nav-logo {
  color: var(--color-primary);
}
.logo-icon {
  font-size: 1.4rem;
  color: #fff;
}
.nav-bar.scrolled .logo-icon {
  color: var(--color-primary);
}
.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
}
.nav-link {
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  font-size: 0.95rem;
  text-decoration: none;
  transition: var(--transition);
}
.nav-bar.scrolled .nav-link {
  color: var(--color-gray-600);
}
.nav-link:hover, .nav-bar.scrolled .nav-link:hover {
  color: #38bdf8;
}
.btn-contact {
  background: #ffffff;
  color: var(--color-primary);
  padding: 10px 24px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: var(--transition);
}
.nav-bar.scrolled .btn-contact {
  background: var(--color-primary);
  color: #fff;
}

/* Mobile Toggle */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
}
.bar {
  width: 24px;
  height: 2px;
  background: #fff;
  transition: var(--transition);
}
.nav-bar.scrolled .bar {
  background: var(--color-primary);
}

/* Hero */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  color: #fff;
  padding: 140px 0 80px;
}
.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(18,24,32,0.85) 0%, rgba(9,13,18,0.92) 100%);
}
.hero-content {
  position: relative;
  z-index: 2;
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
}
.hero-tagline {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 3px;
  color: var(--color-gray-400);
  margin-bottom: 16px;
}
.hero-title {
  font-family: var(--font-heading);
  font-size: 5rem;
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -1px;
  margin-bottom: 24px;
}
.hero-subtitle {
  font-size: 1.1rem;
  max-width: 650px;
  color: var(--color-gray-200);
  margin-bottom: 40px;
  line-height: 1.7;
}
.hero-btns {
  display: flex;
  gap: 16px;
}

/* Stats */
.stats {
  background: #ffffff;
  padding: 60px 0;
  border-bottom: 1px solid var(--color-gray-100);
}
.stats-grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.stat-item {
  text-align: center;
  flex: 1;
}
.stat-number {
  font-family: var(--font-heading);
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1;
}
.stat-suffix {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-gray-600);
}
.stat-label {
  font-size: 0.95rem;
  color: var(--color-gray-600);
  font-weight: 500;
  margin-top: 8px;
}
.stat-divider {
  width: 1px;
  height: 50px;
  background: var(--color-gray-200);
}

/* About */
.about {
  padding: 100px 0;
}
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.about-text {
  color: var(--color-gray-600);
  font-size: 1.05rem;
  margin-bottom: 32px;
}
.about-features {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.about-feature {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.feature-icon {
  font-size: 1.8rem;
  background: var(--color-gray-100);
  padding: 12px;
  border-radius: 12px;
}
.about-img-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 20px;
}
.about-img-grid img {
  width: 100%;
  border-radius: var(--radius-md);
  object-fit: cover;
  box-shadow: var(--shadow-md);
}

/* Services */
.services {
  position: relative;
  padding: 100px 0;
  color: #fff;
  background: var(--color-primary);
}
.services-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.15;
}
.services-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.services-grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 50px;
}
.service-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 36px 28px;
  border-radius: var(--radius-md);
  backdrop-filter: blur(10px);
  transition: var(--transition);
}
.service-card:hover {
  transform: translateY(-5px);
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.2);
}
.service-icon {
  margin-bottom: 20px;
  color: #38bdf8;
}
.service-card h3 {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  margin-bottom: 12px;
}
.service-card p {
  color: var(--color-gray-400);
  font-size: 0.95rem;
}

/* Projects */
.projects {
  padding: 100px 0;
  background: var(--color-light);
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
.project-card {
  position: relative;
  height: 350px;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}
.project-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.project-card:hover img {
  transform: scale(1.08);
}
.project-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%);
  display: flex;
  align-items: flex-end;
  padding: 24px;
  color: #fff;
}
.project-info h3 {
  font-family: var(--font-heading);
  font-size: 1.3rem;
}
.proj-cat {
  font-size: 0.85rem;
  color: var(--color-gray-400);
}

/* FAQ */
.faq {
  padding: 100px 0;
}
.faq-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
}
.faq-item {
  border-bottom: 1px solid var(--color-gray-200);
  padding: 20px 0;
}
.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--color-primary);
  text-align: left;
  cursor: pointer;
}
.faq-answer {
  margin-top: 12px;
  color: var(--color-gray-600);
  font-size: 0.95rem;
}

/* CTA */
.cta {
  position: relative;
  padding: 100px 0;
  color: #fff;
  text-align: center;
  background: var(--color-dark);
}
.cta-content h2 {
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 16px;
}
.cta-content p {
  font-size: 1.1rem;
  color: var(--color-gray-400);
  margin-bottom: 32px;
}

/* Footer */
.footer {
  background: var(--color-dark);
  color: var(--color-gray-400);
  padding: 60px 0 30px;
  border-top: 1px solid rgba(255,255,255,0.05);
}
.footer-grid {
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 40px;
}
.footer-brand .nav-logo {
  color: #fff;
  margin-bottom: 16px;
}
.footer-col h4 {
  color: #fff;
  font-family: var(--font-heading);
  font-size: 0.9rem;
  letter-spacing: 1px;
  margin-bottom: 20px;
}
.footer-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer-col a {
  color: var(--color-gray-400);
  text-decoration: none;
  font-size: 0.9rem;
  transition: var(--transition);
}
.footer-col a:hover {
  color: #fff;
}
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255,255,255,0.05);
  font-size: 0.85rem;
}

/* Responsive */
@media (max-width: 992px) {
  .hero-title { font-size: 3.5rem; }
  .about-grid, .faq-grid { grid-template-columns: 1fr; }
  .stats-grid { flex-direction: column; gap: 30px; }
  .stat-divider { display: none; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    background: #fff;
    flex-direction: column;
    padding: 30px;
    box-shadow: var(--shadow-md);
    display: none;
  }
  .nav-links.open { display: flex; }
  .nav-link { color: var(--color-primary) !important; }
  .hamburger { display: flex; }
}
`;

export default function MatTrixSingleFile() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  // Counter State
  const [counts, setCounts] = useState({ stat1: 0, stat2: 0, stat3: 0, stat4: 0 });
  const statsRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const targets = { stat1: 150, stat2: 210, stat3: 9, stat4: 18 };
          const steps = 50;
          let step = 0;
          const interval = setInterval(() => {
            step++;
            const progress = step / steps;
            setCounts({
              stat1: Math.floor(targets.stat1 * progress),
              stat2: Math.floor(targets.stat2 * progress),
              stat3: Math.floor(targets.stat3 * progress),
              stat4: Math.floor(targets.stat4 * progress),
            });
            if (step >= steps) {
              setCounts(targets);
              clearInterval(interval);
            }
          }, 40);
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Lodh Codename Vikas",
      cat: "Residential Complex",
      loc: "Mumbai, India",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Innovation Tower",
      cat: "Commercial / Office Space",
      loc: "Bengaluru, India",
      img: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Building Excellence",
      cat: "Mixed-use Development",
      loc: "Dubai, UAE",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Skyline Residency",
      cat: "Luxury Apartments",
      loc: "Mumbai, India",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const faqs = [
    { q: "What types of construction projects do you handle?", a: "We handle commercial towers, residential complexes, industrial facilities, and mixed-use developments." },
    { q: "How long does a typical construction project take?", a: "Project timelines depend on scale, typically 12 to 36 months. We establish clear milestone schedules during planning." },
    { q: "Do you offer design-build services?", a: "Yes, we provide complete end-to-end design-build services under a single contract." },
    { q: "What safety measures do you follow?", a: "We strictly adhere to international building and safety standards with regular site audits." }
  ];

  return (
    <div className="mattrix-root">
      <style>{STYLES}</style>

      {/* Navigation */}
      <nav className={`nav-bar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-wrap">
          <a href="#home" className="nav-logo">
            <span className="logo-icon">⬡</span>
            <span>Mat<strong>Trix</strong></span>
          </a>
          <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <li><a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</a></li>
            <li><a href="#services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
            <li><a href="#faq" className="nav-link" onClick={() => setMobileMenuOpen(false)}>FAQ</a></li>
          </ul>
          <a href="#contact" className="btn-contact">Contact Us</a>
          <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Hero Skyline" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <p className="hero-tagline">BUILDING EXCELLENCE, DELIVERING TRUST</p>
          <h1 className="hero-title">BUILT<br />TOGETHER</h1>
          <p className="hero-subtitle">
            Starting from the 1800s, as the intricacy of structures continued to evolve, architecture transitioned into a multi-disciplinary field. We blend creativity, precision, and innovation to deliver world-class projects.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#about" className="btn-outline">Learn More</a>
          </div>
        </div>
      </section>

      {/* Counter Stats Section */}
      <section className="stats" ref={statsRef}>
        <div className="mattrix-container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">{counts.stat1}</span>
              <span className="stat-suffix">+</span>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">{counts.stat2}</span>
              <span className="stat-suffix">+</span>
              <p className="stat-label">Happy Clients</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">{counts.stat3}</span>
              <p className="stat-label">Countries Served</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">{counts.stat4}</span>
              <span className="stat-suffix">+</span>
              <p className="stat-label">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="mattrix-container">
          <div className="about-grid">
            <div>
              <p className="mattrix-tag">ABOUT US</p>
              <h2 className="mattrix-title">WE BUILD FOUNDATIONS FOR FUTURE BUSINESSES</h2>
              <p className="about-text">
                With a legacy of innovation and an experienced team, we transform your vision into structures that stand the test of time. Quality, safety, and client success drive everything we do.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="feature-icon">🏗️</div>
                  <div>
                    <h4>Robust Engineering</h4>
                    <p>Engineered for safety, stability, and long-term durability.</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="feature-icon">🎯</div>
                  <div>
                    <h4>Client Mission</h4>
                    <p>Creating lasting value for clients, partners, and communities.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-img-grid">
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop" alt="Blueprint design" />
              <img src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=2070&auto=format&fit=crop" alt="Glass Skyscraper" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="services-bg">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Services Background" />
        </div>
        <div className="mattrix-container">
          <p className="mattrix-tag">OUR COMMITMENT</p>
          <h2 className="mattrix-title" style={{ color: '#fff' }}>FROM CONCEPT TO COMPLETION</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3>Safety & Quality</h3>
              <p>Adhering to strict international standards and quality assurance on every build.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⏱️</div>
              <h3>On-Time Delivery</h3>
              <p>Punctual schedules ensuring project completion within defined target windows.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌱</div>
              <h3>Sustainable Build</h3>
              <p>Eco-friendly techniques and sustainable materials for long-term ecological balance.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🤝</div>
              <h3>Client Partnership</h3>
              <p>Transparent communication and collaborative partnership from day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="projects" id="projects">
        <div className="mattrix-container">
          <p className="mattrix-tag">PORTFOLIO</p>
          <h2 className="mattrix-title">FEATURED PROJECTS</h2>
          <div className="projects-grid">
            {projects.map((proj, idx) => (
              <div className="project-card" key={idx}>
                <img src={proj.img} alt={proj.title} />
                <div className="project-overlay">
                  <div className="project-info">
                    <h3>{proj.title}</h3>
                    <p className="proj-cat">{proj.cat} • {proj.loc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="faq" id="faq">
        <div className="mattrix-container">
          <div className="faq-grid">
            <div>
              <p className="mattrix-tag">SUPPORT</p>
              <h2 className="mattrix-title">FREQUENTLY ASKED QUESTIONS</h2>
              <p style={{ color: 'var(--color-gray-600)', marginBottom: '24px' }}>
                Clear answers to common inquiries regarding construction timelines, contracts, and quality standards.
              </p>
              <a href="#contact" className="btn-dark">Get in Touch →</a>
            </div>
            <div>
              {faqs.map((faq, idx) => (
                <div className="faq-item" key={idx}>
                  <button className="faq-question" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                    <span>{faq.q}</span>
                    <span>{openFaq === idx ? '−' : '+'}</span>
                  </button>
                  {openFaq === idx && <p className="faq-answer">{faq.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta" id="contact">
        <div className="mattrix-container">
          <div className="cta-content">
            <h2>READY TO BUILD YOUR NEXT VISION?</h2>
            <p>Reach out to our experts and discover how we turn ideas into reality.</p>
            <a href="mailto:info@mattrix.com" className="btn-primary">Contact Our Team →</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="mattrix-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#home" className="nav-logo">
                <span className="logo-icon">⬡</span>
                <span>Mat<strong>Trix</strong></span>
              </a>
              <p>103 Innovation Street<br />Bengaluru, Karnataka 560001</p>
            </div>
            <div className="footer-col">
              <h4>COMPANY</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Portfolio</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>SERVICES</h4>
              <ul>
                <li><a href="#services">Architecture</a></li>
                <li><a href="#services">Construction</a></li>
                <li><a href="#services">Consulting</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>CONNECT</h4>
              <ul>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} MatTrix Construction Ltd. All rights reserved.</p>
            <div>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a> | <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
