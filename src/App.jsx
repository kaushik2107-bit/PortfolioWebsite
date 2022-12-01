import Navbar from "./components/Navbar/index"
import Main from "./components/Main/index"
import Expertise from "./components/Expertise/index"
import Testimonials from "./components/Testimonials/index"
import Skills from "./components/Skills/index"
import Footer from "./components/Footer/index"
import Loading from "./components/LoadingScreen/index"
import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Resume from "./components/Resume/index"
import Projects from "./components/Projects/index"
import Contact from "./components/Contact/index"

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div className="App w-[100vw] h-[100vh] bg-[#222222] overflow-scroll">
      {
        loading ?
          <Loading props={loading}/>
        :
          <Routes>
            <Route exact path='/' element={
              <>
                <Navbar option={1}/>
                <Main />
                <Expertise />
                <Skills />
                <Footer />
              </>
            }
            />
            <Route exact path="/resume" element={
              <>
                <Resume />
              </>
            }
            />
            <Route exact path="/projects" element={
              <>
                <Projects />
              </>
            }
            />
            <Route exact path="/contact" element={
              <>
                <Contact />
              </>
            }
            />
          </Routes>
      }
    </div>
  )
}

export default App
