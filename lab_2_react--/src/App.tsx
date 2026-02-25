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
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 font-sans text-slate-600 flex justify-center selection:bg-blue-100">
      <div className="w-full max-w-5xl">
        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
          <Header />

          <div className="p-8 lg:p-12">
            <section className="mb-12">
              <Summary />
            </section>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
              {/* Ліва колонка */}
              <div className="md:col-span-4 space-y-12">
                <section>
                  <Education />
                </section>
                <section>
                  <Skills />
                </section>
                <section>
                  <Interests />
                </section>
              </div>

              {/* Права колонка */}
              <div className="md:col-span-8 space-y-12">
                <section>
                  <Experience />
                </section>
                <section>
                  <Projects />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
