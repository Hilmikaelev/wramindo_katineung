import "../styles/contact.css"

function Contact() {
    return (
        <section id="location" className="contact">
            <h2>Lokasi & Kontak</h2>
            <div className="contact-container">
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.4747758715125!2d109.27271137566873!3d-7.412588173003373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655ec98b630707%3A0x5a9596036227c442!2sBurjo%20Katineunks!5e0!3m2!1sid!2sid!4v1776669843865!5m2!1sid!2sid"
                        width="100%"
                        height="300"
                        style={{ border: 0, borderRadius: '12px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lokasi Warmindo">
                    </iframe>
                </div>
                <div className="contact-info">
                    <h3>Kunjungi Kami</h3>
                    <p>Perum GTSI, Jl. Gatramas Raya No.N, RW.1, Tegalmulya, Ledug, Kec. Kembaran, Kabupaten Banyumas, Jawa Tengah 53182u</p>
                    <p>Buka Setiap Hari: 24 Jam</p>

                    <div className="whatsapp-box">
                        <p>Mau pesan atau reservasi tempat?</p>
                        <a href="https://wa.me/6281234567890?text=Halo%20Warmindo%20Nampol,%20saya%20mau%20pesan" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                            💬 Hubungi WhatsApp Kami
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact 