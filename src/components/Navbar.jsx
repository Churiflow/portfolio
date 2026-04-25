function Navbar({ language, setLanguage }) {
  return (
    <nav style={styles.nav}>
      <h2>Robert Dev</h2>

      <div style={styles.links}>
        <button onClick={() => setLanguage("en")}>EN</button>
        <button onClick={() => setLanguage("es")}>ES</button>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    background: "#111",
    color: "white"
  },
  links: {
    display: "flex",
    gap: "10px"
  }
}

export default Navbar
