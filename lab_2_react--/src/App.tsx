import './App.css'
import Header from './components/Header'
import Summary from './components/Summary'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Interests from './components/Interests'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Summary />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Interests />
      </main>
      <Footer />
    </>
  )
}

export default App
