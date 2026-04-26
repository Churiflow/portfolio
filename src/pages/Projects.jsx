function Projects() {
  return (
    <section id="projects" className="projects">

      <h2>My Projects</h2>

      <div className="cards">

        <div className="card">
          <h3>Barber App (Flask)</h3>
          <p>Web app with booking system and admin panel.</p>
          <a href="https://github.com/TUUSER/barber-app" target="_blank">
            View Project
          </a>
        </div>

        <div className="card">
          <h3>User Admin React + Node</h3>
          <p>CRUD users with PostgreSQL.</p>
          <a href="https://github.com/TUUSER/admin-users" target="_blank">
            View Project
          </a>
        </div>

        <div className="card">
          <h3>React Shopping Cart</h3>
          <p>Ecommerce cart with state management.</p>
          <a href="https://github.com/TUUSER/react-cart" target="_blank">
            View Project
          </a>
        </div>

      </div>

    </section>
  )
}

export default Projects
