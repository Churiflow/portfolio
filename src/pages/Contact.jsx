function Contact({ language }) {

  const content = {
    en: {
      title: "Contact",
      text: "Interested in working together? Send me an email:",
      email: "yourmail@email.com"
    },
    es: {
      title: "Contacto",
      text: "¿Te interesa trabajar conmigo? Envíame un email:",
      email: "yourmail@email.com"
    }
  }

  const t = content[language]

  return (
    <section style={styles.section}>
      <h1>{t.title}</h1>
      <p>{t.text}</p>
      <h3 style={styles.email}>{t.email}</h3>
    </section>
  )
}

const styles = {
  section: { padding: "40px" },
  email: { marginTop: "10px", color: "#38bdf8" }
}

export default Contact
