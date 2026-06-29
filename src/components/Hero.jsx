import "../styles/hero.css"

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1>Sajian Indomie Juara di Dukuhwaluh</h1>
                <p>Tempat nongkrong asik dengan aneka pilihan menu Indomie kekinian, topping melimpah, dan racikan bumbu rahasia yang bikin nagih!</p>
                <div className="hero-buttons">
                    <a href="#menu" className="btn-primary">Lihat Menu</a>
                    <a href="#location" className="btn-secondary">Kunjungi Kami</a>
                </div>
            </div>
        </section>
    )
}

export default Hero