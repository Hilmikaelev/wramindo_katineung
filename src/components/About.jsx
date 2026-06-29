import "../styles/about.css"

function About() {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-text">
                    <h2>Profil Warmindoku Katineunks</h2>
                    <p>
                        Berdiri sejak 2015, <strong>Warmindoku Katineunks</strong> hadir untuk memberikan pengalaman makan Indomie yang berbeda.
                        Kami percaya bahwa semangkuk mie instan bisa menjadi hidangan mewah jika diracik dengan cinta dan bahan-bahan berkualitas.
                    </p>
                    <ul className="about-features">
                        <li>🍜 <strong>Topping Melimpah</strong> - Dari keju mozarella hingga kornet dan telur setengah matang.</li>
                        <li>🌶️ <strong>Level Pedas Bebas Pilih</strong> - Sesuaikan tingkat kepedasan dengan selera Anda.</li>
                        <li>🏡 <strong>Tempat Nyaman</strong> - Cocok untuk nongkrong bareng teman, nugas, atau sekadar healing.</li>
                        <li>📶 <strong>Gratis Wi-Fi</strong> - Internet kencang bikin nongkrong makin betah.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About