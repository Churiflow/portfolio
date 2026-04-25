function Home({ language }) {

  const content = {
    en: {
      title: "Hi, I'm Robert 👋",
      role: "Full Stack Developer",
      desc: "I build modern web applications using React, Node.js , Python and PHP .",
      btn: "View my projects"
    },
    es: {
      title: "Hola, soy Robert 👋",
      role: "Desarrollador Full Stack",
      desc: "Construyo aplicaciones web modernas con React, Node.js , Python y PHP .",
      btn: "Ver mis proyectos"
    }
  }

  const t = content[language]

  return (
    <section style={styles.hero}>
      <div>
        <h1>{t.title}</h1>
        <h2>{t.role}</h2>
        <p>{t.desc}</p>
        <button style={styles.button}>{t.btn}</button>
      </div>
    </section>
  )
}

const styles = {
  hero: {
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    padding: "40px"
  },
  button: {
    marginTop: "20px",
    padding: "12px 20px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer"
  }
}

export default Home
