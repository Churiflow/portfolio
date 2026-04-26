import { useState } from "react";

function Navbar() {
  const [lang, setLang] = useState("es");

  const toggleLang = () => {
    setLang(lang === "es" ? "en" : "es");
  };

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Robert.dev</h2>

      <div className="nav-links">
        <button onClick={() => scrollTo("home")}>
          {lang === "es" ? "Inicio" : "Home"}
        </button>
        <button onClick={() => scrollTo("projects")}>
          {lang === "es" ? "Proyectos" : "Projects"}
        </button>
        <button onClick={() => scrollTo("about")}>
          {lang === "es" ? "Sobre mí" : "About"}
        </button>
        <button onClick={() => scrollTo("contact")}>
          {lang === "es" ? "Contacto" : "Contact"}
        </button>

        <button className="lang-btn" onClick={toggleLang}>
          {lang === "es" ? "EN 🇺🇸" : "ES 🇨🇱"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
