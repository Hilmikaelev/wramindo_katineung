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
        </section>
    )
}

export default Services 