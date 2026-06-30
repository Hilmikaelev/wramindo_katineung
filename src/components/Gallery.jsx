import "../styles/gallery.css"

function Gallery() {
    const images = [
        "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600335835697-7c70cbf69e7d?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop"
    ];

    return (
        <section id="gallery" className="gallery">
            <h2>Galeri Kami</h2>
            <p className="gallery-subtitle">Momen kebersamaan dan sajian terbaik di Warmindoku Katineunks</p>
            <div className="gallery-grid">
                {images.map((src, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={src} alt={`Galeri ${index + 1}`} loading="lazy" />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Gallery
