import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [lang, setLang] = useState("es");

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <Home lang={lang} />
    </>
  );
}

export default App;
