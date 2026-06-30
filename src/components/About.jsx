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

                    <div className="vision-mission">
                        <div className="vision">
                            <h3>Visi</h3>
                            <p>Menjadi pelopor Warmindo modern yang mengutamakan kualitas rasa, kenyamanan, dan kebersamaan di setiap mangkuknya.</p>
                        </div>
                        <div className="mission">
                            <h3>Misi</h3>
                            <ul>
                                <li>Menyajikan variasi hidangan dengan bahan utama berkualitas.</li>
                                <li>Memberikan pelayanan yang ramah, cepat, dan berkesan.</li>
                                <li>Menciptakan ruang kumpul yang nyaman bagi semua kalangan.</li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="why-us-title">Kenapa Memilih Kami?</h3>
                    <ul className="about-features">
                        <li>🍜 <strong>Topping Melimpah</strong> - Dari keju mozarella hingga kornet dan telur setengah matang.</li>
                        <li>🌶️ <strong>Level Pedas Bebas Pilih</strong> - Sesuaikan kepedasan dengan selera Anda.</li>
                        <li>🏡 <strong>Tempat Nyaman</strong> - Cocok untuk nongkrong bareng teman, nugas, atau sekadar healing.</li>
                        <li>📶 <strong>Gratis Wi-Fi</strong> - Internet kencang bikin nongkrong makin betah.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About