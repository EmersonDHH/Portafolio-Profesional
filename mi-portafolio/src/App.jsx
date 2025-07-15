import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import TechTools from './components/TechTools'
import ContactForm from './components/Contact'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

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

          <AboutMe />
        </section>

        {/* About Section */}
        <section>
          <Projects/>

        </section>
        
        <section>


          <TechTools />

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
