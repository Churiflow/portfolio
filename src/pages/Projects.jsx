function Projects({ language }) {

  const content = {
    en: {
      title: "Projects",
      projects: [
        {
          name: "User Management System",
          desc: "Fullstack app with authentication and admin dashboard.",
        },
        {
          name: "Booking Web App",
          desc: "Reservation system built with Python Flask.",
        },
        {
          name: "Task Manager App",
          desc: "Modern task management app (in progress).",
        }
      ]
    },
    es: {
      title: "Proyectos",
      projects: [
        {
          name: "Sistema de Gestión de Usuarios",
          desc: "Aplicación fullstack con autenticación y panel admin.",
        },
        {
          name: "App de Reservas",
          desc: "Sistema de reservas creado con Python Flask.",
        },
        {
          name: "App Gestor de Tareas",
          desc: "Aplicación moderna de tareas (en progreso).",
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

            <div style={styles.buttons}>
              <button style={styles.btn}>Live Demo</button>
              <button style={styles.btn}>GitHub</button>
            </div>
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
  buttons: { display: "flex", gap: "10px", marginTop: "10px" },
  btn: {
    padding: "8px 14px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
}

export default Projects
