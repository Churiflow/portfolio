import React from 'react';

function Home({ lang }) {
  const proyectos = [
    {
      titulo: "TiendaMaster (Full Stack)",
      es: "Aplicación Full Stack (Python/Flask/SQLite) desplegada en Vercel Serverless. Auditada ofensivamente contra SQL Injection, Session Hijacking y robo de credenciales en pasarela de pago; protegida con criptografía y tokens robustos.",
      en: "Full Stack Application (Python/Flask/SQLite) deployed on Vercel Serverless. Offensively audited against SQL Injection, Session Hijacking, and payment gateway credential harvesting; protected using cryptography and robust tokens.",
      link: "https://github.com/Churiflow/tienda-flask-pro",
      demo: "https://tienda-flask-pro.vercel.app" // Cambia esto por tu URL real de Vercel
    },
    {
      titulo: "CRM Full Stack",
      es: "Sistema de administración usando React, Node.js y PostgreSQL con control de accesos protegido.",
      en: "Management system using React, Node.js, and PostgreSQL with protected access control.",
      link: "https://github.com/Churiflow/CRM-Full-Stack-"
    },
    {
      titulo: "Auth JWT API",
      es: "Autenticación segura mediante tokens JWT implementada con TypeScript. Diseñada bajo estándares criptográficos fuertes.",
      en: "Secure JWT token authentication implemented with TypeScript. Designed under strong cryptographic standards.",
      link: "https://github.com/Churiflow/node-auth-jwt-api-rest-typescript"
    },
    {
      titulo: "Node API REST Mongo",
      es: "API REST escalable utilizando Node.js y MongoDB con sanitización de entradas de datos.",
      en: "Scalable REST API utilizing Node.js and MongoDB with input data sanitization.",
      link: "https://github.com/Churiflow/node_api_rest_mongo"
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section id="home" className="hero">
        <h1>
          {lang === "es" ? "Hola, soy" : "Hi, I'm"}{" "}
          <span>Robert Lopez</span>
        </h1>
        <p>
          {lang === "es"
            ? "Full Stack Developer | Security Researcher & QA Engineer"
            : "Full Stack Developer | Security Researcher & QA Engineer"}
        </p>
        <p className="termux-subtitle">
          churiflow@termux:~# ./audit_app.sh --target=vercel_serverless --exploit=sql_injection
        </p>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects">
        <h2>{lang === "es" ? "🚀 Proyectos Auditados y Desplegados" : "🚀 Audited & Deployed Projects"}</h2>
        <div className="projects-grid">
          {proyectos.map((proy, index) => (
            <div className="card" key={index}>
              <h3>{proy.titulo}</h3>
              <p>{lang === "es" ? proy.es : proy.en}</p>
              
              <div style={{ marginTop: '15px', display: 'flex', gap: '15px' }}>
                <a href={proy.link} target="_blank" rel="noreferrer" className="btn-link code-btn">
                  {lang === "es" ? "Código 💻" : "Code 💻"}
                </a>
                {proy.demo && (
                  <a href={proy.demo} target="_blank" rel="noreferrer" className="btn-link live-btn">
                    {lang === "es" ? "En Vivo 🔒" : "Live 🔒"}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills">
        <h2>{lang === "es" ? "🛡️ Arsenal Técnico y de Auditoría" : "🛡️ Tech Stack & Auditing Arsenal"}</h2>
        <div className="skills-container">
          <div className="skills-box">
            <h3>Full Stack & QA Automation</h3>
            <div className="tags">
              {["React", "Node.js", "TypeScript", "Python", "Flask", "PHP", "JavaScript", "Jest (Backend Testing)", "Cypress (Frontend Testing)", "Caja Blanca / Negra / Gris"].map((s, i) => <span key={i}>{s}</span>)}
            </div>
          </div>
          <div className="skills-boxSec">
            <h3>SecDevOps & Red Team Mindset</h3>
            <div className="tags">
              {["Linux / Parrot OS", "OverTheWire (Bandit)", "SQL Injection Auditing", "Session Hijacking Defense", "Data Harvesting Mitigation", "Cryptography", "JWT Security", "PostgreSQL / SQLite / Mongo"].map((s, i) => <span key={i}>{s}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about">
        <h2>{lang === "es" ? "👨‍💻 Sobre mí" : "👨‍💻 About me"}</h2>
        <p>
          {lang === "es"
            ? "Desarrollador Full Stack enfocado en la resiliencia y seguridad del software. No solo construyo aplicaciones con JavaScript, PHP y Python; las pongo a prueba mediante metodologías de testing avanzado (Caja Negra/Blanca con Jest y Cypress) y simulaciones de ataques reales (Red Team) para implementar defensas criptográficas robustas antes de llevar el código a producción."
            : "Full Stack Developer focused on software resilience and security. I don't just build applications using JavaScript, PHP, and Python; I break them using advanced testing methodologies (Black/White Box with Jest & Cypress) and real-world attack vectors (Red Team) to deploy robust cryptographic mitigations before code hits production."}
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact">
        <h2>{lang === "es" ? "📬 Contacto" : "📬 Contact"}</h2>
        <p>Email: <a href="mailto:yavar852@gmail.com">yavar852@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/robert-lopez-ita-b4147a277" target="_blank" rel="noreferrer">linkedin.com/in/robert-lopez</a></p>
      </section>
    </>
  );
}

export default Home;
