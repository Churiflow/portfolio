import React, { useState } from 'react';

function Home({ lang }) {
  // Estado para controlar qué reporte de auditoría está abierto
  const [reporteAbierto, setReporteAbierto] = useState(null);

  const proyectos = [
    {
      titulo: "🚀 Startup / Empresa Propia (En Desarrollo)",
      es: "Plataforma SaaS corporativa de alta disponibilidad. Diseñada bajo Arquitectura Limpia, desacoplada en microservicios y optimizada para despliegues elásticos en la nube.",
      en: "Enterprise SaaS high-availability platform. Designed under Clean Architecture, decoupled into microservices, and optimized for elastic cloud deployments.",
      link: "https://github.com/Churiflow/Root-Engineers", // Apunta a tu repo o el de la empresa
      demo: "https://render.com" // Aquí pondrás tu link de Render cuando lo subamos
    },
    {
      titulo: "TiendaMaster (Full Stack)",
      es: "Aplicación Full Stack (Python/Flask/SQLite) desplegada en Vercel Serverless. Auditada ofensivamente contra SQL Injection, Session Hijacking y robo de credenciales en pago; protegida con criptografía.",
      en: "Full Stack Application (Python/Flask/SQLite) deployed on Vercel Serverless. Offensively audited against SQL Injection, Session Hijacking, and payment data harvesting; protected with cryptography.",
      link: "https://github.com/Churiflow/tienda-flask-pro",
      demo: "https://tienda-flask-pro-1.onrender.com/"
    },
    {
      titulo: "CRM Full Stack",
      es: "Sistema de administración usando React, Node.js y PostgreSQL con control de accesos protegido y pruebas automatizadas.",
      en: "Management system using React, Node.js, and PostgreSQL with protected access control and automated testing.",
      link: "https://github.com/Churiflow/CRM-Full-Stack-"
    },
    {
      titulo: "Auth JWT API",
      es: "Autenticación segura mediante tokens JWT implementada con TypeScript y evaluada con pruebas de Caja Blanca.",
      en: "Secure JWT token authentication implemented with TypeScript and evaluated with White-Box testing.",
      link: "https://github.com/Churiflow/node-auth-jwt-api-rest-typescript"
    }
  ];

  const skillsDev = [
    { name: "React", icon: "react/react-original.svg" },
    { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
    { name: "TypeScript", icon: "typescript/typescript-original.svg" },
    { name: "Python", icon: "python/python-original.svg" },
    { name: "Flask", icon: "flask/flask-original.svg" },
    { name: "PHP", icon: "php/php-original.svg" },
    { name: "JavaScript", icon: "javascript/javascript-original.svg" },
    { name: "Jest", icon: "jest/jest-plain.svg" },
    { name: "Cypress", icon: "cypressio/cypressio-original.svg" }
  ];

  const skillsSec = [
    { name: "Linux", icon: "linux/linux-original.svg" },
    { name: "PostgreSQL", icon: "postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "mongodb/mongodb-original.svg" },
    { name: "SQLite", icon: "sqlite/sqlite-original.svg" },
    { name: "Bash Shell", icon: "bash/bash-original.svg" },
    { name: "JWT Sec", icon: "embeddedhtml5/embeddedhtml5-original.svg" },
    { name: "Crypto", icon: "git/git-original.svg" }
  ];

  // Logs interactivos de tus auditorías locales
  const logsAuditoria = {
    tiendamaster: `[+] TARGET: https://tienda-flask-pro.vercel.app
[+] AUDIT TYPE: Red Team / Offensive Security Test
[!] VULNERABILITY FOUND: SQL Injection Vulnerability on /login (POST)
    -> Payload used: admin' --
    -> Result: Authentication bypass achieved. Session token generated without valid password.
[🛡️] MITIGATION APPLIED:
    -> Implemented Parameterized Queries using SQLAlchemy ORM.
    -> Added Input Sanitization layer regex pattern checking.
[✓] STATUS: SECURED & PATCHED`,

    authapi: `[+] TARGET: Auth JWT API Rest (TypeScript)
[+] AUDIT TYPE: Secure Code Review (White Box Testing)
[!] WEAKNESS FOUND: Weak JWT Signing Secret & Lack of Token Expiration
    -> Risk: High probability of brute-force attacks to forge valid tokens.
[🛡️] MITIGATION APPLIED:
    -> Migrated to strong asymmetric cryptography (RS256) via environment variables.
    -> Enforced strict token expiration (exp: '15m') and secure HTTP-Only cookies.
[✓] STATUS: SECURED & PATCHED`
  };

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
            ? "Full Stack Developer | Security Researcher & QA Automation"
            : "Full Stack Developer | Security Researcher & QA Automation"}
        </p>
        <p className="termux-subtitle">
          churiflow@termux:~# ./audit_app.sh --target=vercel_serverless --exploit=sql_injection
        </p>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects">
        <h2>{lang === "es" ? "🚀 Proyectos e Iniciativas" : "🚀 Projects & Ventures"}</h2>
        <div className="projects-grid">
          {proyectos.map((proy, index) => (
            <div className="card" key={index}>
              <div>
                <h3>{proy.titulo}</h3>
                <p>{lang === "es" ? proy.es : proy.en}</p>
              </div>
              
              <div className="links-container">
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

      {/* NEW INTERACTIVE AUDIT SIMULATOR SECTION */}
      <section id="audit-logs">
        <h2>{lang === "es" ? "🕵️‍♂️ Consola de Auditoría Red Team" : "🕵️‍♂️ Red Team Audit Logs"}</h2>
        <p style={{ color: '#94a3b8', marginBottom: '20px', fontSize: '16px' }}>
          {lang === "es" 
            ? "Haz clic en los proyectos para ver los reportes de penetración y parches de seguridad aplicados localmente:" 
            : "Click on the projects to view penetration testing reports and applied local security patches:"}
        </p>
        
        <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
          <button 
            onClick={() => setReporteAbierto(reporteAbierto === 'tiendamaster' ? null : 'tiendamaster')}
            className="btn-link code-btn" style={{ cursor: 'pointer', padding: '12px' }}
          >
            {reporteAbierto === 'tiendamaster' ? "✖ Cerrar Log TiendaMaster" : "👁 Ver Log TiendaMaster"}
          </button>
          <button 
            onClick={() => setReporteAbierto(reporteAbierto === 'authapi' ? null : 'authapi')}
            className="btn-link code-btn" style={{ cursor: 'pointer', padding: '12px' }}
          >
            {reporteAbierto === 'authapi' ? "✖ Cerrar Log Auth API" : "👁 Ver Log Auth API"}
          </button>
        </div>

        {/* Pantalla de Terminal Interactiva */}
        {reporteAbierto && (
          <pre style={{
            background: '#020617',
            color: '#34d399',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid #10b981',
            fontFamily: 'Courier New, monospace',
            fontSize: '14px',
            overflowX: 'auto',
            whiteSpace: 'pre-wrap',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            {logsAuditoria[reporteAbierto]}
          </pre>
        )}
      </section>

      {/* SKILLS SECTION */}
      <section id="skills">
        <h2>{lang === "es" ? "🛡️ Arsenal Técnico" : "🛡️ Technical Arsenal"}</h2>
        <div className="skills-container">
          <div className="skills-box">
            <h3>Full Stack & Testing</h3>
            <div className="grid-badges">
              {skillsDev.map((s, i) => (
                <div className="skill-badge" key={i}>
                  <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${s.icon}`} alt={s.name} />
                  <span>{s.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="skills-boxSec">
            <h3>SecDevOps & Infrastructure</h3>
            <div className="grid-badges">
              {skillsSec.map((s, i) => (
                <div className="skill-badge" key={i}>
                  <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${s.icon}`} alt={s.name} />
                  <span>{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about">
        <h2>{lang === "es" ? "👨‍💻 Sobre mí" : "👨‍💻 About me"}</h2>
        <p>
          {lang === "es"
            ? "Desarrollador Full Stack enfocado en la resiliencia y seguridad del software y fundador de mi propia iniciativa tecnológica. No solo construyo aplicaciones con JavaScript, PHP y Python; las pongo a prueba mediante metodologías de testing avanzado (Caja Negra/Blanca con Jest y Cypress) y simulaciones de ataques reales (Red Team) para implementar defensas criptográficas robustas antes de llevar el código a producción."
            : "Full Stack Developer focused on software resilience and security, and founder of my own tech venture. I don't just build applications using JavaScript, PHP, and Python; I break them using advanced testing methodologies (Black/White Box with Jest & Cypress) and real-world attack vectors (Red Team) to deploy robust cryptographic mitigations before code hits production."}
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
