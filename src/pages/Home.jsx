import { useState } from "react";

function Home() {
  const [lang, setLang] = useState("es");

  const text = {
    es: {
      title: "Hola, soy Robert 👋",
      subtitle: "Desarrollador Full Stack",
      contact: "Contáctame",
    },
    en: {
      title: "Hi, I'm Robert 👋",
      subtitle: "Full Stack Developer",
      contact: "Contact me",
    },
  };

  return (
    <div className="home">
      {/* selector idioma */}
      <div className="language-switch">
        <button onClick={() => setLang("es")}>ES</button>
        <button onClick={() => setLang("en")}>EN</button>
      </div>

      <h1>{text[lang].title}</h1>
      <h2>{text[lang].subtitle}</h2>

      {/* botones sociales */}
      <div className="social-buttons">
        <a href="https://github.com/Churiflow" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/robert-lopez-ita-b4147a277/" target="_blank">LinkedIn</a>
        <a href="mailto:yavar852@gmail.com">Email</a>
      </div>
    </div>
  );
}

export default Home;
