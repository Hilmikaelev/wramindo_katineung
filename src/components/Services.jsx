import { useContext, useState } from 'react';
import { MenuContext } from '../context/MenuContext.jsx';
import "../styles/services.css"

function Services() {
    const { menuItems, loading, error } = useContext(MenuContext);
    const [showAll, setShowAll] = useState(false);

    if (loading) {
        return (
            <section id="menu" className="services">
                <h2>Katalog Menu Favorit</h2>
                <p className="menu-subtitle">Pilihan menu terbaik yang wajib Anda coba di Warmindoku Katineunks</p>
                <div className="service-container">
                    <p style={{ textAlign: 'center', width: '100%' }}>Loading menu...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="menu" className="services">
                <h2>Katalog Menu Favorit</h2>
                <p className="menu-subtitle">Pilihan menu terbaik yang wajib Anda coba di Warmindoku Katineunks</p>
                <div className="service-container">
                    <p style={{ textAlign: 'center', width: '100%', color: 'red' }}>Error: {error}</p>
                </div>
            </section>
        );
    }

    return (
        <section id="menu" className="services">
            <h2>Katalog Menu Favorit</h2>
            <p className="menu-subtitle">Pilihan menu terbaik yang wajib Anda coba di Warmindoku Katineunks</p>
            <div className="service-container">
                {(showAll ? menuItems : menuItems.slice(0, 6)).map((item, index) => (
                    <div className="card" key={index}>
                        {item.image && <img src={item.image} alt={item.name} className="menu-image" />}
                        <h3>{item.name}</h3>
                        <p className="price">{item.price}</p>
                    </div>
                ))}
            </div>
            {menuItems.length > 6 && !showAll && (
                <button onClick={() => setShowAll(true)} style={{ marginTop: '3rem', padding: '12px 30px', fontSize: '1.1rem', cursor: 'pointer', borderRadius: '50px', border: 'none', backgroundColor: 'var(--primary, #e3350d)', color: 'white', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(227, 53, 13, 0.3)', transition: 'all 0.3s ease' }}>
                    Selengkapnya
                </button>
            )}
            {showAll && (
                <button onClick={() => setShowAll(false)} style={{ marginTop: '3rem', padding: '12px 30px', fontSize: '1.1rem', cursor: 'pointer', borderRadius: '50px', border: 'none', backgroundColor: '#555', color: 'white', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', transition: 'all 0.3s ease' }}>
                    Sembunyikan
                </button>
            )}

            <div className="wa-order-cta" style={{ marginTop: '4rem', background: 'var(--primary)', padding: '3rem 2rem', borderRadius: '15px', color: 'white', textAlign: 'center', boxShadow: '0 10px 30px rgba(227, 53, 13, 0.3)' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Lapar? Langsung Pesan!</h3>
                <p style={{ margin: '1rem 0', fontSize: '1.1rem', opacity: 0.9 }}>Tidak perlu aplikasi ojol! Anda bisa langsung memesan menu favorit kami dengan cepat dan mudah melalui WhatsApp.</p>
                <a href="https://wa.me/6283182489324?text=Halo%20Warmindo%20Katineunks,%20saya%20mau%20pesan" target="_blank" rel="noopener noreferrer" className="btn-wa-order" style={{ display: 'inline-block', backgroundColor: '#25D366', color: 'white', padding: '15px 30px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', marginTop: '1.5rem', transition: 'transform 0.3s' }}>
                    <span style={{ marginRight: '10px' }}>📱</span> Pesan via WhatsApp
                </a>
            </div>
        </section>
    )
}

export default Services