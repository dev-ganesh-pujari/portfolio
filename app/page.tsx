import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaDownload,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { EXPERTISE, PRINCIPLES, PROJECTS, SKILLS } from "../data/content";

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top">
          Ganesh Pujari<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-cta" href="#contact">
          Let's connect <FaLongArrowAltRight size={16} />
        </a>
      </nav>

      {/* HERO */}
      <section id="top" className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse" /> Available for opportunities
          </div>

          <h1>
            Full Stack Engineer specializing in{" "}
            <em>Angular, React & Node.js.</em>
          </h1>

          <p className="hero-text">
            6+ years of experience building web applications with Angular,
            React, Node.js, TypeScript, PostgreSQL, MongoDB and Azure — with a
            focus on clean architecture, secure APIs and practical performance.
          </p>

          <div className="actions">
            <a className="button primary" href="#projects">
              Explore my work
              <FaLongArrowAltRight size={18} />
            </a>

            <a className="button ghost" href="#contact">
              Get in touch <FaEnvelope size={17} />
            </a>
          </div>

          <div className="quick-stats">
            <div>
              <strong>6+</strong>
              <span>Years experience</span>
            </div>

            <div>
              <strong>Angular + React</strong>
              <span>Frontend expertise</span>
            </div>

            <div>
              <strong> Node.js</strong>
              <span>Backend experience</span>
            </div>
          </div>
        </div>

        <div className="terminal">
          <div className="terminal-bar">
            <span></span>
            <span></span>
            <span></span>
            <b>stack.ts</b>
          </div>

          <pre>{`const STACK = {
  name: "Ganesh Pujari",
  role: "Full Stack Engineer",

  frontend: ["Angular", "React", "TypeScript"],
  backend: ["Node.js", "Express"],
  databases: ["PostgreSQL", "MongoDB"],
  cloud: ["Azure"],

  mindset: [
    "secure by design",
    "performance matters",
    "keep it maintainable"
  ]
}`}</pre>

          <div className="terminal-footer">
            <span>TypeScript</span>
            <span>●</span>
            <span>production-minded</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section shell">
        <div className="section-label">ABOUT</div>

        <div className="about-grid">
          <div>
            <h2>
              I build systems that are{" "}
              <span>clear, secure and useful.</span>
            </h2>
          </div>

          <div className="about-photo">
            <img
              src="/profile.png"
              alt="Ganesh Pujari"
            />
          </div>

          <div className="about-copy">
            <p>
              I’m a full-stack engineer with 6+ years of professional
              experience, primarily working across Angular, React and Node.js.
              I enjoy turning business requirements into maintainable
              applications, designing APIs, improving data access and solving
              production problems.
            </p>

            <p>
              My public portfolio focuses on engineering knowledge, technical
              depth and personal work rather than confidential client projects.
              It is designed to show how I approach architecture, security,
              frontend engineering and backend development without exposing
              proprietary information.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section shell">
        <div className="section-label">TECHNICAL STACK</div>

        <div className="skills-grid">
          {Object.entries(SKILLS).map(([group, items]) => (
            <div className="skill-group" key={group}>
              <h3>{group}</h3>

              <div className="tags">
                {items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ENGINEERING EXPERTISE */}
      <section id="expertise" className="section shell">
        <div className="section-label">ENGINEERING EXPERTISE</div>

        <div className="section-heading">
          <h2>What I like working on.</h2>

          <p>
            Areas where I can go beyond simply writing features and think about
            the system around them.
          </p>
        </div>

        <div className="expertise-grid">
          {EXPERTISE.map(({ icon: Icon, title, text }) => (
            <article className="expertise-card" key={title}>
              <div className="icon-box">
                <Icon size={21} />
              </div>

              <h3>{title}</h3>

              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>


      {/* PROJECTS */}
      <section id="projects" className="section shell">
        <div className="section-label">PROJECTS</div>

        <div className="section-heading">
          <h2>Selected work.</h2>
          <p>
            Client and product names are withheld for confidentiality — these
            reflect real production work, described at the architecture and
            engineering level.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <article className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>

              <ul className="project-bullets">
                {project.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="tags project-tags">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section shell">
        <div className="section-label">EXPERIENCE</div>

        <div className="experience-card">
          <div className="experience-head">
            <div>
              <span className="muted">Application Nexus Webservices, Nashik</span>
              <h2>Full Stack Engineer</h2>
            </div>

            <span className="period">JAN 2020 TO PRESENT</span>
          </div>

          <div className="experience-content">
            <ul>
              <li>Sole developer and infrastructure owner across multiple enterprise production applications: full stack, Azure hosting and CI/CD, with no dedicated DevOps team.</li>
              <li>Cut page load on a legacy enterprise application from 30+ seconds to under 5 seconds (6x) by separating business and application layers and optimizing OData queries.</li>
              <li>Built a GitHub Actions CI/CD pipeline from scratch on Azure, taking releases from manual steps to a consistent 4 to 5 minute cycle.</li>
              <li>Integrated Azure AD B2C, Microsoft Graph API and Dataverse REST APIs for authentication, role-based access control and data synchronization.</li>
              <li>Delivered role-based access and real-time WebSocket features for a platform with 1,000+ users.</li>
              <li>Integrated payment gateways (Authorize.Net, Moneris) behind JWT-secured APIs.</li>
            </ul>

            <div className="note">
              <span>ENGINEERING FOCUS</span>
              <p>
                Architecture, security, performance and maintainability across
                frontend, backend and cloud systems.
              </p>
            </div>
          </div>
        </div>
      </section>

  
      {/* principles */}
      <section className="section shell philosophy">
        <div className="section-label">ENGINEERING PRINCIPLES</div>

        <div className="principles">
          {PRINCIPLES.map((principle, index) => (
            <div key={principle}>
              <span>0{index + 1}</span>
              <p>{principle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact shell">
        <div className="section-label">CONTACT</div>

        <h2>Have an interesting problem?</h2>

        <p>
          I'm open to conversations about full-stack engineering, product
          development and technical opportunities.
        </p>

        <div className="contact-actions">
          <a
            className="button primary"
            href="mailto:ganeshpujari021@gmail.com"
          >
            <FaEnvelope size={18} />
            Email me
          </a>

          <a
            className="button ghost"
            href="https://github.com/ganesh-pujari"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={18} />
            GitHub
          </a>

          <a
            className="button ghost"
            href="https://linkedin.com/in/ganesh-pujari21"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn size={18} />
            LinkedIn
          </a>

          <a className="button ghost" href="/resume.pdf">
            <FaDownload size={17} />
            Resume
          </a>
        </div>
      </section>

      {/* <footer className="footer shell">
        <span>© {new Date().getFullYear()} Ganesh Pujari</span>
        <span>Built with Next.js · TypeScript · Vercel</span>
      </footer> */}
    </main>
  );
}

