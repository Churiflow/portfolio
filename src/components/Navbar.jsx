function NavBar() {

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    })
  }

  return (
    <nav className="navbar">
      <h2>Robert Dev</h2>

      <ul>
        <li onClick={() => scrollTo("home")}>Home</li>
        <li onClick={() => scrollTo("projects")}>Projects</li>
        <li onClick={() => scrollTo("about")}>About</li>
        <li onClick={() => scrollTo("contact")}>Contact</li>
      </ul>
    </nav>
  )
}

export default NavBar
