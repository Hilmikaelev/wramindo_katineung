import { useState } from 'react';
import "../styles/faq.css"

function FAQ() {
    const faqs = [
        {
            question: "Buka jam berapa?",
            answer: "Kami buka setiap hari 24 jam. Libur hanya saat hari raya idul fitri dan idul adha."
        },
        {
            question: "Bisa pesan menggunakan WhatsApp?",
            answer: "Tentu! Anda bisa langsung memesan menu favorit melalui tombol WhatsApp kami. Kami melayani pesan antar untuk area terdekat tanpa harus menggunakan aplikasi ojol pihak ketiga."
        },
        {
            question: "Ada area merokok?",
            answer: "Ya, kami menyediakan area merokok yang sangat nyaman."
        },
        {
            question: "Apakah tersedia tempat untuk nugas/kerja?",
            answer: "Pasti! Banyak pelanggan yang datang untuk bekerja atau nugas karena kami menyediakan area dengan banyak colokan listrik dan gratis Wi-Fi berkecepatan tinggi."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq">
            <h2>Tanya Jawab</h2>
            <p className="faq-subtitle">Pertanyaan yang sering diajukan tentang Warmindoku Katineunks</p>
            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div
                        className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        key={index}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq-question">
                            <h3>{faq.question}</h3>
                            <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
                        </div>
                        <div className="faq-answer">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FAQ
