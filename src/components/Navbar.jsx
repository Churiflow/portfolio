import React from 'react';

function Navbar({ lang, setLang }) {
  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'rgba(3, 7, 18, 0.95)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(56, 189, 248, 0.2)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 20px',
    zIndex: 99999,
    boxSizing: 'border-box'
  };

  const logoStyle = {
    fontWeight: '800',
    fontSize: '18px',
    color: '#38bdf8',
    fontFamily: 'sans-serif'
  };

  const ulStyle = {
    display: 'flex',
    listStyle: 'none',
    gap: '10px',
    alignItems: 'center',
    margin: 0,
    padding: 0
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#94a3b8',
    fontSize: '12px',
    fontWeight: '700',
    textTransform: 'uppercase',
    fontFamily: 'sans-serif'
  };

  const btnStyle = {
    background: 'rgba(56, 189, 248, 0.1)',
    border: '1px solid rgba(56, 189, 248, 0.4)',
    color: '#38bdf8',
    padding: '4px 8px',
    borderRadius: '6px',
    fontWeight: '700',
    fontSize: '11px',
    cursor: 'pointer'
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>Robert.dev</div>
      <ul style={ulStyle}>
        <li><a href="#home" style={linkStyle}>{lang === "es" ? "Inicio" : "Home"}</a></li>
        <li><a href="#projects" style={linkStyle}>{lang === "es" ? "Proyectos" : "Projects"}</a></li>
        <li><a href="#about" style={linkStyle}>{lang === "es" ? "Sobre mí" : "About"}</a></li>
        <li>
          <button style={btnStyle} onClick={() => setLang(lang === "es" ? "en" : "es")}>
            {lang === "es" ? "EN 🇺🇸" : "ES 🇪🇸"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
