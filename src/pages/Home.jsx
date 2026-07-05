import React from 'react';

function Home({ lang }) {

// Lista de tus proyectos reales para iterar limpiamente
  const proyectos = [

    {
      titulo: "TiendaMaster",
      es: "E-commerce Backend robusto desarrollado con Python, Flask y SQLite para gestión de inventario y ventas.",
      en: "Robust E-commerce Backend developed with Python, Flask, and SQLite for inventory and sales management.",
      link: "https://github.com/Churiflow/tienda-flask-pro", // <- Esta es la URL corregida
      demo: "https://tienda-flask-pro-1.onrender.com"
    },
  
    {
      titulo: "CRM Full Stack",
      es: "Sistema de administración de relaciones con clientes usando React, Node.js y PostgreSQL.",
      en: "Customer Relationship Management system using React, Node.js, and PostgreSQL.",
      link: "https://github.com/Churiflow/CRM-Full-Stack-"
    },
    {
      titulo: "Auth JWT API",
      es: "Autenticación segura mediante tokens JWT implementada con TypeScript y Node.js.",
      en: "Secure JWT token authentication implemented with TypeScript and Node.js.",
      link: "https://github.com/Churiflow/node-auth-jwt-api-rest-typescript"
    },
    {
      titulo: "Node API REST Mongo",
      es: "API REST completa y escalable utilizando Node.js y MongoDB.",
      en: "Complete and scalable REST API utilizing Node.js and MongoDB.",
      link: "https://github.com/Churiflow/node_api_rest_mongo"
    }
  ];

  return (
    <>
      <section id="home" className="hero">
        <h1>
          {lang === "es" ? "Hola, soy" : "Hi, I'm"}{" "}
          <span>Robert Lopez</span>
        </h1>
        <p>
          {lang === "es"
            ? "Desarrollador Full Stack | Entusiasta de Ciberseguridad"
            : "Full Stack Developer | Cybersecurity Enthusiast"}
        </p>
      </section>

      <section id="projects">
              <h2>{lang === "es" ? "🚀 Proyectos" : "🚀 Projects"}</h2>
              <div className="projects-grid">
                {proyectos.map((proy, index) => (
                  <div className="card" key={index}>
                    <h3>{proy.titulo}</h3>
                    <p>{lang === "es" ? proy.es : proy.en}</p>
                    
                    {/* SECCIÓN DE ENLACES ADAPTADA */}
                    <div style={{ marginTop: '15px', display: 'flex', gap: '15px' }}>
                      <a 
                        href={proy.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        style={{ color: '#38bdf8', fontWeight: 'bold', textDecoration: 'none' }}
                      >
                        {lang === "es" ? "Código 💻" : "Code 💻"}
                      </a>
                      
                      {/* Si el proyecto tiene demo, React mostrará este enlace automáticamente */}
                      {proy.demo && (
                        <a 
                          href={proy.demo} 
                          target="_blank" 
                          rel="noreferrer" 
                          style={{ color: '#10b981', fontWeight: 'bold', textDecoration: 'none' }}
                        >
                          {lang === "es" ? "En Vivo 🚀" : "Live Demo 🚀"}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>


      <section id="about">
        <h2>{lang === "es" ? "👨‍💻 Sobre mí" : "👨‍💻 About me"}</h2>
        <p>
          {lang === "es"
            ? "Desarrollador Full Stack apasionado por React, Node.js, PostgreSQL y la Ciberseguridad."
            : "Full Stack Developer passionate about React, Node.js, PostgreSQL and Cybersecurity."}
        </p>
      </section>

      <section id="contact">
        <h2>{lang === "es" ? "📬 Contacto" : "📬 Contact"}</h2>
        <p>Email: <a href="mailto:yavar852@gmail.com">yabar852@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/robert-lopez-ita-b4147a277" target="_blank" rel="noreferrer">Ver perfil</a></p>
      </section>
    </>
  );
}

export default Home;
