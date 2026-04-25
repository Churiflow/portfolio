import { useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  const [language, setLanguage] = useState("en")

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <Home language={language} />
      <Projects language={language} />
      <About language={language} />
      <Contact language={language} />
    </>
  )
}

export default App
