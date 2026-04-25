function Projects({ language }) {

  const content = {
    en: {
      title: "Projects",
      projects: [
        {
          name: "Node REST API (MongoDB)",
          desc: "REST API with CRUD operations using Node.js and MongoDB.",
          github: "https://github.com/Churiflow/node_api_rest_mongo"
        },
        {
          name: "JWT Auth API (TypeScript)",
          desc: "Authentication API with JWT using Node.js and TypeScript.",
          github: "https://github.com/Churiflow/node-auth-jwt-api-rest-typescript"
        },
        {
          name: "Full Stack Web App",
          desc: "Full stack application with frontend and backend integration.",
          github: "https://github.com/Churiflow/FullSctakProjecto"
        },
        {
          name: "Auto Paint Workshop Website",
          desc: "Business website with contact form and responsive design.",
          github: "https://github.com/Churiflow/taller-autopintura"
        },
        {
          name: "Inventory App",
          desc: "Inventory management system for products and stock.",
          github: "https://github.com/Churiflow/Inventario--App"
        },
        {
          name: "CRM Full Stack",
          desc: "Customer relationship management full stack app.",
          github: "https://github.com/Churiflow/CRM-Full-Stack-"
        },
        {
          name: "Event Manager App",
          desc: "Event planning and management web application.",
          github: "https://github.com/Churiflow/event-manager-app"
        }
      ]
    },
    es: {
      title: "Proyectos",
      projects: [
        {
          name: "API REST Node (MongoDB)",
          desc: "API REST con operaciones CRUD usando Node.js y MongoDB.",
          github: "https://github.com/Churiflow/node_api_rest_mongo"
        },
        {
          name: "API Autenticación JWT (TypeScript)",
          desc: "API de autenticación con JWT usando Node.js y TypeScript.",
          github: "https://github.com/Churiflow/node-auth-jwt-api-rest-typescript"
        },
        {
          name: "Aplicación Full Stack",
          desc: "Aplicación full stack con integración frontend y backend.",
          github: "https://github.com/Churiflow/FullSctakProjecto"
        },
        {
          name: "Web Taller de Pintura",
          desc: "Sitio web empresarial con formulario de contacto responsive.",
          github: "https://github.com/Churiflow/taller-autopintura"
        },
        {
          name: "App Inventario",
          desc: "Sistema de gestión de inventario y productos.",
          github: "https://github.com/Churiflow/Inventario--App"
        },
        {
          name: "CRM Full Stack",
          desc: "Aplicación CRM full stack para gestión de clientes.",
          github: "https://github.com/Churiflow/CRM-Full-Stack-"
        },
        {
          name: "Gestor de Eventos",
          desc: "Aplicación web para planificación de eventos.",
          github: "https://github.com/Churiflow/event-manager-app"
        }
      ]
    }
  }

  const t = content[language]

  return (
    <section style={styles.section}>
      <h1>{t.title}</h1>

      <div style={styles.grid}>
        {t.projects.map((project, i) => (
          <div key={i} style={styles.card}>
            <h2>{project.name}</h2>
            <p>{project.desc}</p>

            <a href={project.github} target="_blank">
              <button style={styles.btn}>GitHub</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: { padding: "40px" },
  grid: { display: "grid", gap: "20px", marginTop: "20px" },
  card: { background: "#1e293b", padding: "20px", borderRadius: "12px" },
  btn: {
    marginTop: "10px",
    padding: "8px 14px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
}

export default Projects
