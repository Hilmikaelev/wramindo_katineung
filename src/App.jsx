import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Contact />
            <Footer />

            {/* Floating WhatsApp Button */}
            <a href="https://wa.me/6281234567890?text=Halo%20Warmindo%20Nampol" className="floating-wa" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="WhatsApp" />
            </a>
        </>
    )
}

export default App