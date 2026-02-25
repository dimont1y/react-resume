import './App.css'
import Header from './components/Header'
import Summary from './components/Summary'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Interests from './components/Interests'

function App() {
  return (
    <div className="min-h-screen bg-black py-10 px-4 font-sans text-black flex justify-center">
      <div className="w-full max-w-[850px] bg-white pb-16 shadow-2xl">
        <Header />

        <div className="mx-8 lg:mx-12 border-l border-r border-t border-dashed border-black mt-2">
          <div className="flex flex-col md:flex-row border-b border-dashed border-black text-sm">
            <div className="w-full md:w-1/3 py-1.5 px-2 text-center border-b md:border-b-0 md:border-r border-dashed border-black">
              <a href="tel:+380993235480" className="hover:underline">+380993235480</a>
            </div>
            <div className="w-full md:w-1/3 py-1.5 px-2 text-center border-b md:border-b-0 md:border-r border-dashed border-black break-words">
              <a href="mailto:dima1990gor@gmail.com" className="hover:underline">dima1990gor@gmail.com</a>
            </div>
            <div className="w-full md:w-1/3 py-1.5 px-2 text-center">
              Lviv, Ukraine
            </div>
          </div>

          <div className="border-b border-dashed border-black p-2 bg-white">
            <h2 className="text-lg font-bold">Summary</h2>
          </div>
          <div className="border-b border-dashed border-black p-3 bg-white text-sm">
            <Summary />
          </div>

          <div className="flex flex-col md:flex-row bg-white border-b border-dashed border-black">
            {/* LEFT COLUMN */}
            <div className="w-full md:w-[32%] md:border-r border-dashed border-black flex flex-col">
              <div className="p-2 border-b border-dashed border-black">
                <h2 className="text-lg font-bold">Education</h2>
              </div>
              <div className="p-3 border-b border-dashed border-black">
                <Education />
              </div>

              <div className="p-2 border-b border-dashed border-black">
                <h2 className="text-lg font-bold">Skills</h2>
              </div>
              <div className="p-3 border-b border-dashed border-black">
                <Skills />
              </div>

              <div className="p-2 border-b border-dashed border-black">
                <h2 className="text-lg font-bold">Interests</h2>
              </div>
              <div className="p-3">
                <Interests />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="w-full md:w-[68%] flex flex-col">
              <div className="p-2 border-b border-dashed border-black bg-white">
                <h2 className="text-lg font-bold">Experience</h2>
              </div>
              <div className="p-3 border-b border-dashed border-black">
                <Experience />
              </div>

              <div className="p-2 border-b border-dashed border-black bg-white">
                <h2 className="text-lg font-bold">Projects</h2>
              </div>
              <div className="p-3">
                <Projects />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
