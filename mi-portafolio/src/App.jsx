import { useState } from "react";
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import TechTools from './components/TechTools';
import ContactForm from './components/Contact';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ParticlesBackground from "./components/ParticlesBackground";
import Loader from "./components/Loader";
import ScrollTop from "./components/ScrollTop";
import FloatingButtons from "./components/FloatingButtons";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader setLoading={setLoading} />}

      {!loading && (
        <div className="min-h-screen text-white font-sans">
          <ParticlesBackground />

          <Navbar />

          <main>
            <section>
              <Home />
            </section>

            <section>
              <AboutMe />
            </section>

            <section>
              <TechTools />
            </section>

            <section>
              <Projects />
            </section>

            <section>
              <ContactForm />
            </section>
          </main>

          <Footer />

          <FloatingButtons />

        </div>
      )}
    </>
  );
}

export default App;
