import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaDownload,
  FaLongArrowAltRight,
  FaServer,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaTachometerAlt,
  FaLayerGroup,
} from "react-icons/fa";

const skills = {
  "Frontend — Core": [
    "Angular",
    "React",
    "TypeScript",
    "JavaScript",
    "RxJS",
    "NgRx",
    "HTML",
    "CSS",
  ],
  "Backend — Core": [
    "Node.js",
    "Express.js",
    "REST APIs",
    "Authentication",
    "JWT",
    "Refresh Tokens",
  ],
  Data: [
    "PostgreSQL",
    "MongoDB",
    "Dataverse",
    "SQL",
    "Database Design",
  ],
  "Cloud & Delivery": [
    "Azure",
    "Azure Blob Storage",
    "Docker",
    "GitHub Actions",
    "CI/CD",
    "Nginx",
  ],

};

const expertise = [
  {
    icon: FaLayerGroup,
    title: "Frontend Architecture",
    text: "Component-driven Angular and React applications with TypeScript, RxJS, state management and maintainable UI architecture.",
  },
  {
    icon: FaServer,
    title: "Backend Engineering",
    text: "REST APIs with Node.js and Express, validation, error handling, pagination and service design.",
  },
  {
    icon: FaShieldAlt,
    title: "Security",
    text: "JWT access tokens, refresh-token rotation, token revocation, password hashing and authorization.",
  },
  {
    icon: FaDatabase,
    title: "Data & APIs",
    text: "PostgreSQL, MongoDB and Dataverse with a focus on query design, indexing and reliable integrations.",
  },
  {
    icon: FaCloud,
    title: "Cloud & Delivery",
    text: "Azure services, private blob access, SAS URLs, GitHub workflows and deployment practices.",
  },
  {
    icon: FaTachometerAlt,
    title: "Performance",
    text: "API optimization, caching strategies, database tuning, pagination and reducing unnecessary network work.",
  },
];

const principles = [
  "Prefer simple architecture that can evolve.",
  "Make security part of the design, not an afterthought.",
  "Measure performance before optimizing it.",
  "Keep business logic testable and isolated.",
];

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
              Explore my work <FaLongArrowAltRight size={18} />
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

          <pre>{`const stack = {
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
}; `}</pre>

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

      {/* WHAT I DO */}
      <section id="what-i-do" className="section shell">
        <div className="section-label">WHAT I DO</div>

        <div className="expertise-grid">
          <article className="expertise-card">
            <div className="icon-box">
              <FaLayerGroup size={21} />
            </div>

            <h3>Frontend Engineering</h3>

            <p>
              Angular and React applications with TypeScript, reusable
              components, RxJS, state management and clean UI architecture.
            </p>
          </article>

          <article className="expertise-card">
            <div className="icon-box">
              <FaServer size={21} />
            </div>

            <h3>Backend Engineering</h3>

            <p>
              Node.js and Express APIs with authentication, validation, error
              handling, pagination and maintainable service design.
            </p>
          </article>

          <article className="expertise-card">
            <div className="icon-box">
              <FaDatabase size={21} />
            </div>

            <h3>Data & Integrations</h3>

            <p>
              PostgreSQL, MongoDB and Dataverse with practical database design,
              query optimization and API integration.
            </p>
          </article>

          <article className="expertise-card">
            <div className="icon-box">
              <FaShieldAlt size={21} />
            </div>

            <h3>Security</h3>

            <p>
              JWT authentication, refresh-token rotation, authorization,
              password hashing and secure file-access patterns.
            </p>
          </article>

          <article className="expertise-card">
            <div className="icon-box">
              <FaCloud size={21} />
            </div>

            <h3>Cloud & Delivery</h3>

            <p>
              Azure services, blob storage, SAS URLs, GitHub workflows, CI/CD
              and deployment practices.
            </p>
          </article>

          <article className="expertise-card">
            <div className="icon-box">
              <FaTachometerAlt size={21} />
            </div>

            <h3>Performance</h3>

            <p>
              API optimization, caching, database tuning, pagination and
              reducing unnecessary frontend and network work.
            </p>
          </article>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section shell">
        <div className="section-label">TECHNICAL STACK</div>

        <div className="skills-grid">
          {Object.entries(skills).map(([group, items]) => (
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
          {expertise.map(({ icon: Icon, title, text }) => (
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

      {/* EXPERIENCE */}
      <section id="experience" className="section shell">
        <div className="section-label">EXPERIENCE</div>

        <div className="experience-card">
          <div className="experience-head">
            <div>
              <span className="muted">Professional experience</span>
              <h2>Full Stack Development</h2>
            </div>

            <span className="period">6+ YEARS</span>
          </div>

          <div className="experience-content">
            <ul>
              <li>
                Developing full-stack web applications using Angular, React,
                Node.js, TypeScript and REST APIs.
              </li>

              <li>
                Working with PostgreSQL, MongoDB and Dataverse for application
                data and integrations.
              </li>

              <li>
                Implementing authentication, refresh-token flows,
                authorization and secure file-access patterns.
              </li>

              <li>
                Working with Azure services and GitHub-based development and
                delivery workflows.
              </li>

              <li>
                Improving API and database performance through query
                optimization, pagination and caching techniques.
              </li>
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
          {principles.map((principle, index) => (
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

