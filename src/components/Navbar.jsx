import { useState } from "react"
import "../styles/navbar.css"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="navbar">
            <div className="logo">🍜 Warmindoku Katineunks</div>
            <nav className={menuOpen ? "nav-links active" : "nav-links"}>
                <a href="#home" onClick={() => setMenuOpen(false)}>Beranda</a>
                <a href="#about" onClick={() => setMenuOpen(false)}>Profil</a>
                <a href="#menu" onClick={() => setMenuOpen(false)}>Katalog Menu</a>
                <a href="#location" onClick={() => setMenuOpen(false)}>Lokasi</a>
            </nav>
            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? "✕" : "☰"}
            </div>
        </header>
    )
}

export default Navbar