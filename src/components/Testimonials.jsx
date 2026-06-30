import "../styles/testimonials.css"

function Testimonials() {
    const reviews = [
        {
            name: "Budi Santoso",
            text: "Wah gila sih, porsi indomienya pas, topping wajarnya juga nggak pelit. Tempatnya cozy abis buat nongkrong malem-malem.",
            rating: 5,
            role: "Mahasiswa"
        },
        {
            name: "Ayu Lestari",
            text: "Sering banget ngerjain tugas di sini karena Wi-Fi kenceng. Minumannya juga segar, favorit aku es kembang desa!",
            rating: 5,
            role: "Freelancer"
        },
        {
            name: "Rizky Firmansyah",
            text: "Sambalnya mantap betul! Buat pecinta pedas wajib cobain Mie Nampol Spesial level 3. Pas di dompet pelajar.",
            rating: 4,
            role: "Pelajar"
        }
    ];

    const generateStars = (num) => {
        return "⭐".repeat(num);
    }

    return (
        <section id="testimonials" className="testimonials">
            <h2>Apa Kata Mereka?</h2>
            <p className="testimonials-subtitle">Ulasan pelanggan setia Warmindoku Katineunks</p>
            <div className="testimonial-container">
                {reviews.map((review, idx) => (
                    <div className="testimonial-card" key={idx}>
                        <div className="stars">{generateStars(review.rating)}</div>
                        <p className="review-text">"{review.text}"</p>
                        <div className="reviewer">
                            <div className="reviewer-avatar">
                                {review.name.charAt(0)}
                            </div>
                            <div className="reviewer-info">
                                <h4>{review.name}</h4>
                                <span>{review.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Testimonials
