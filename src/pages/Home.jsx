import { useState } from "react";

function Home() {
  const [lang, setLang] = useState("es");

  const text = {
    es: {
      title: "Hola, soy Robert 👋",
      subtitle: "Desarrollador Full Stack",
    },
    en: {
      title: "Hi, I'm Robert 👋",
      subtitle: "Full Stack Developer",
    },
  };

  return (
    <div className="home">

      {/* Selector idioma */}
      <div className="language-switch">
        <button onClick={() => setLang("es")}>ES</button>
        <button onClick={() => setLang("en")}>EN</button>
      </div>

      <h1>{text[lang].title}</h1>
      <h2>{text[lang].subtitle}</h2>

      {/* Botones sociales */}
      <div className="social-buttons">
        <a href="https://github.com/Churiflow" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/robert-lopez-ita-b4147a277/" target="_blank">LinkedIn</a>
        <a href="mailto:tuemail@gmail.com">Email</a>
      </div>

    </div>
  );
}

export default Home;
