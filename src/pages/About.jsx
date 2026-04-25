function About({ language }) {

  const content = {
    en: {
      title: "About Me",
      text: "Junior Full Stack Developer passionate about building web applications using React, Node.js,PHP and  Python  . I enjoy learning cybersecurity and improving code security."
    },
    es: {
      title: "Sobre mí",
      text: "Desarrollador Full Stack Junior apasionado por crear aplicaciones web con React, Node.js, PHP  y Python. Me gusta la ciberseguridad y mejorar la seguridad del código."
    }
  }

  const t = content[language]

  return (
    <section style={styles.section}>
      <h1>{t.title}</h1>
      <p style={styles.text}>{t.text}</p>
    </section>
  )
}

const styles = {
  section: { padding: "40px" },
  text: { marginTop: "15px", lineHeight: "1.6" }
}

export default About
