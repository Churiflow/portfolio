function Home({ lang }) {
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
          <a href="https://github.com/Churiflow/node_api_rest_mongo" target="_blank">
            <div className="card">
              <h3>Node API REST Mongo</h3>
              <p>{lang === "es" ? "API REST con Node.js y MongoDB" : "REST API with Node.js and MongoDB"}</p>
            </div>
          </a>

          <a href="https://github.com/Churiflow/node-auth-jwt-api-rest-typescript" target="_blank">
            <div className="card">
              <h3>Auth JWT API</h3>
              <p>{lang === "es" ? "Autenticación JWT con TypeScript" : "JWT Authentication with TypeScript"}</p>
            </div>
          </a>

          <a href="https://github.com/Churiflow/CRM-Full-Stack-" target="_blank">
            <div className="card">
              <h3>CRM Full Stack</h3>
              <p>{lang === "es" ? "React + Node + PostgreSQL" : "React + Node + PostgreSQL"}</p>
            </div>
          </a>
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
        <p>Email: robertlopezita@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/robert-lopez-ita-b4147a277</p>
      </section>
    </>
  );
}

export default Home;
