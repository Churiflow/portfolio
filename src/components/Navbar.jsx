function Navbar({ language, setLanguage }) {

  const content = {
    en: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact"
    },
    es: {
      home: "Inicio",
      projects: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto"
    }
  }

  const t = content[language]

  return (
    <nav style={styles.nav}>
      <h2>Robert Dev</h2>

      <div style={styles.links}>
        <a href="#">{t.home}</a>
        <a href="#">{t.projects}</a>
        <a href="#">{t.about}</a>
        <a href="#">{t.contact}</a>
      </div>

      <div style={styles.right}>
        {/* BOTONES SOCIALES */}
        <a href="https://github.com/Churiflow" target="_blank">
          <button style={styles.social}>GitHub</button>
        </a>

        {/* ⚠️ luego pondremos tu LinkedIn */}
        <button style={styles.social}>LinkedIn</button>

        {/* ⚠️ cambia por tu email real */}
        <a href="mailto:yavar852@gmail.com">
          <button style={styles.social}>Email</button>
        </a>

        {/* SWITCH IDIOMA */}
        <button
          style={styles.lang}
          onClick={() => setLanguage(language === "en" ? "es" : "en")}
        >
          {language === "en" ? "ES" : "EN"}
        </button>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#0f172a",
    alignItems: "center",
    flexWrap: "wrap"
  },
  links: {
    display: "flex",
    gap: "15px"
  },
  right: {
    display: "flex",
    gap: "10px",
    alignItems: "center"
  },
  social: {
    padding: "6px 10px",
    borderRadius: "6px",
    border: "none",
    background: "#38bdf8",
    cursor: "pointer"
  },
  lang: {
    padding: "6px 10px",
    borderRadius: "6px",
    border: "none",
    background: "#22c55e",
    cursor: "pointer"
  }
}

export default Navbar
