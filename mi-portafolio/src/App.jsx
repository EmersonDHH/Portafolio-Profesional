import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import TechTools from './components/TechTools'
import ContactForm from './components/Contact'


function App() {
  return (
    <div className="min-h-screen text-white font-sans">
      <Navbar />

      <main className="">
        {/* Home Section */}
        <section>

          <Home />
        </section>

        <section>

          <TechTools />
        </section>

        {/* About Section */}
        <section
          id="sobreMi"
          className="py-16 px-4 md:px-6 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
          <p className="text-lg text-[#B3B3B3] leading-relaxed">
            {/* Tu biografía breve */}
          </p>
        </section>
        {/* Projects Section */}
        <section
          id="proyectos"
          className="py-16 px-4 md:px-6 max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Aquí irán las tarjetas de proyecto */}
          </div>
        </section>

        <ContactForm />

        {/* Contact Section */}
        <section>

        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
