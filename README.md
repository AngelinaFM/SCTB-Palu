# 🌍 SCTB PALU

## Smart City Technology for Disaster Mitigation & Social Monitoring

SCTB (Smart City Technology for Disaster Mitigation & Social Monitoring) merupakan platform berbasis web yang dikembangkan untuk mendukung mitigasi bencana gempa bumi, analisis kebutuhan masyarakat pascabencana, serta edukasi kesiapsiagaan melalui simulasi evakuasi interaktif.

Proyek ini dikembangkan sebagai implementasi dan integrasi dari beberapa mata kuliah, yaitu:

* Smart City Technology
* Mitigasi Bencana
* Analisis Jejaring Sosial
* Metaverse Terdesentralisasi

---

## 📌 Latar Belakang

Kota Palu merupakan wilayah yang memiliki tingkat kerawanan tinggi terhadap bencana gempa bumi dan tsunami. Setelah terjadinya bencana, pemerintah membutuhkan informasi yang cepat dan akurat terkait kondisi masyarakat serta kebutuhan prioritas di setiap wilayah terdampak.

SCTB hadir sebagai solusi digital yang mengintegrasikan:

* Monitoring informasi gempa bumi
* Analisis kebutuhan masyarakat berdasarkan data media sosial
* Visualisasi data pendukung pengambilan keputusan
* Simulasi evakuasi bencana berbasis dunia virtual

---

## 🎯 Tujuan Sistem

1. Menyediakan informasi gempa bumi secara cepat dan mudah dipahami.
2. Membantu pemerintah dalam menganalisis kebutuhan masyarakat pascabencana.
3. Menampilkan visualisasi data kebutuhan masyarakat dalam bentuk grafik dan laporan.
4. Meningkatkan kesadaran dan kesiapsiagaan masyarakat melalui simulasi evakuasi gempa.
5. Mendukung konsep Smart City dalam pengelolaan risiko bencana.

---

## 🚀 Fitur Utama

### 🌍 Monitoring Gempa

Menampilkan informasi gempa bumi terkini seperti:

* Magnitude
* Lokasi/Wilayah
* Kedalaman
* Potensi dampak

### 🗺️ Peta Sebaran Gempa

Visualisasi lokasi kejadian gempa pada peta interaktif menggunakan Leaflet.

### 📊 Analisis Sosial Masyarakat

Menampilkan hasil analisis kebutuhan masyarakat berdasarkan data media sosial yang telah dikelompokkan berdasarkan topik, seperti:

* Logistik
* Medis
* Evakuasi
* Infrastruktur
* Bantuan Sosial

### 🔔 Notifikasi Real-Time

Fitur notifikasi otomatis ketika terdapat informasi gempa terbaru.

### 🎮 Simulasi Evakuasi Gempa

Integrasi dengan game simulasi evakuasi gempa berbasis Roblox yang bertujuan untuk memberikan edukasi mitigasi bencana kepada masyarakat secara interaktif.

---

## 🏗️ Teknologi yang Digunakan

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Leaflet
* React Toastify
* Recharts

### Backend

* Golang
* Gin Framework
* REST API

### Simulation Platform

* Roblox Studio

---

## 📂 Struktur Project

```bash
src/
│
├── components/
│   ├── Gempa.jsx
│   ├── MapGempa.jsx
│   ├── Analisis.jsx
│   ├── Statistik.jsx
│   └── SimulationSection.jsx
│
├── assets/
│   ├── audio/
│   └── images/
│
├── App.jsx
└── main.jsx
```

---

## 🖥️ Instalasi

Clone repository:

```bash
git clone https://github.com/username/sctb-palu.git
```

Masuk ke folder project:

```bash
cd sctb-palu
```

Install dependency:

```bash
npm install
```

Jalankan aplikasi:

```bash
npm run dev
```

Aplikasi akan berjalan pada:

```bash
http://localhost:5173
```

---

## 🎓 Implementasi Mata Kuliah

| Mata Kuliah                 | Implementasi                                    |
| --------------------------- | ----------------------------------------------- |
| Smart City Technology       | Dashboard monitoring dan visualisasi data kota  |
| Mitigasi Bencana            | Monitoring gempa dan simulasi evakuasi          |
| Analisis Jejaring Sosial    | Analisis kebutuhan masyarakat dari media sosial |
| Metaverse Terdesentralisasi | Simulasi evakuasi berbasis Roblox               |

---

## 👨‍💻 Tim Pengembang
| Backend Developer  | Briant Juan Hamonangan_F55123030 |
| Frontend Developer | Angelina Febriani Madesen_F55123084 |
---

## 📜 Lisensi

Project ini dikembangkan untuk kebutuhan akademik dan penelitian pada Program Studi Teknik Informatika.
