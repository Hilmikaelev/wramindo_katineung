import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const menuItems = [
    { id: 1, name: "Indomie Nyemek Spesial", price: "Rp 15.000", desc: "Mie nyemek wangi dengan telur, sosis, dan kuah kental gurih.", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=400" },
    { id: 2, name: "Magelangan", price: "Rp 15.000", desc: "Nasi goreng campur mie dengan sayuran, telur, bawang goreng, dan bumbu khas Warmindo.", image: "/magelangan.jpg" },
    { id: 3, name: "Indomie Kuah Susu Keju", price: "Rp 18.000", desc: "Sensasi creamy dari kuah susu dipadu keju cheddar meleleh.", image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&q=80&w=400" },
    { id: 4, name: "Indomie Seblak Mercon", price: "Rp 16.000", desc: "Pedas nagih! Dilengkapi kerupuk seblak, bakso, dan sosis.", image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=400" },
    { id: 5, name: "Es Teh Manis Jumbo", price: "Rp 5.000", desc: "Teh melati porsi besar pelepas dahaga.", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=400" },
    { id: 6, name: "Es Kopi Susu Aren", price: "Rp 12.000", desc: "Kopi susu kekinian dengan gula aren asli.", image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80&w=400" },
    { id: 7, name: "Indomie Kuah Soto", price: "Rp 12.000", desc: "Indomie soto segar dengan tambahan jeruk nipis.", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=400" },
    { id: 8, name: "Indomie Goreng Rendang", price: "Rp 14.000", desc: "Rasa rendang pedas nendang favorit semua orang.", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=400" },
    { id: 9, name: "Susu Soda Gembira", price: "Rp 10.000", desc: "Soda segar dicampur susu dan sirup cocopandan.", image: "https://images.unsplash.com/photo-1629239841026-6cd5f939b4f0?auto=format&fit=crop&q=80&w=400" },
    { id: 10, name: "Kerupuk Pangsit", price: "Rp 3.000", desc: "Cemilan pangsit goreng teman setia makan mie.", image: "https://images.unsplash.com/photo-1599321955726-e048426594af?auto=format&fit=crop&q=80&w=400" }
];

app.get('/api/menu', (req, res) => {
    res.json(menuItems);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
