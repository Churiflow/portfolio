function Home() {
  return (
    <>
      <section id="home" className="hero">
        <h1>
          Hola, soy <span>Robert Lopez</span>
        </h1>
        <p>Full Stack Developer | Cybersecurity Enthusiast</p>
      </section>

      <section id="projects">
        <h2>🚀 Proyectos</h2>

        <div className="projects-grid">
          <a href="https://github.com/Churiflow/node_api_rest_mongo" target="_blank">
            <div className="card">
              <h3>Node API REST Mongo</h3>
              <p>API REST con Node.js y MongoDB</p>
            </div>
          </a>

          <a href="https://github.com/Churiflow/node-auth-jwt-api-rest-typescript" target="_blank">
            <div className="card">
              <h3>Auth JWT API</h3>
              <p>Autenticación JWT con TypeScript</p>
            </div>
          </a>

          <a href="https://github.com/Churiflow/CRM-Full-Stack-" target="_blank">
            <div className="card">
              <h3>CRM Full Stack</h3>
              <p>React + Node + PostgreSQL</p>
            </div>
          </a>
        </div>
      </section>

      <section id="about">
        <h2>👨‍💻 Sobre mí</h2>
        <p>
          Desarrollador Full Stack apasionado por React, Node.js,
          PostgreSQL y la Ciberseguridad.
        </p>
      </section>

      <section id="contact">
        <h2>📬 Contacto</h2>
        <p>Email: yavar852@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/robert-lopez-ita-b4147a277</p>
      </section>
    </>
  );
}

export default Home;
