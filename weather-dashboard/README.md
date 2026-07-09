# Weather Dashboard 🌤️

Web app untuk melihat prakiraan cuaca real-time menggunakan API OpenWeatherMap (publik dan gratis).

## ✨ Fitur

✅ **Cuaca Real-time** - Suhu, kelembaban, kecepatan angin, tekanan, visibilitas
✅ **Prakiraan 5 Hari** - Prediksi cuaca untuk 5 hari ke depan
✅ **Geolocation** - Otomatis deteksi lokasi Anda
✅ **Search Kota** - Cari cuaca kota manapun di dunia
✅ **Toggle Unit** - Ubah antara Celsius (°C) dan Fahrenheit (°F)
✅ **Responsive Design** - Jalan sempurna di desktop, tablet, smartphone
✅ **Modern UI** - Desain gradien dengan glassmorphism effect

## 🚀 Cara Menjalankan

### Requirement
- Node.js versi 18 ke atas
- npm atau yarn

### Instalasi

1. Masuk ke folder weather-dashboard:
   ```bash
   cd weather-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Jalankan development server:
   ```bash
   npm run dev
   ```

4. Buka browser: `http://localhost:5173`

## 🔧 Build untuk Production

```bash
npm run build
```

Hasil build ada di folder `dist/`

## 📦 Teknologi yang Digunakan

- **React 18** - UI Framework
- **Vite** - Build tool & dev server
- **OpenWeatherMap API** - Data cuaca (gratis)
- **CSS3** - Styling dengan efek modern (glassmorphism)
- **Geolocation API** - Deteksi lokasi pengguna

## 🌐 API yang Digunakan

**OpenWeatherMap** (Gratis, tidak perlu key yang kompleks)
- Current Weather API
- 5 Day / 3 Hour Forecast API

API Key sudah built-in untuk demo. Untuk production, buat API key sendiri di: https://openweathermap.org/api

## 🎯 Fitur Detail

### Current Weather
- 🌡️ Suhu aktual dan "feels like"
- 💧 Kelembaban
- 💨 Kecepatan dan arah angin
- 🔽 Tekanan udara
- 👁️ Jarak visibilitas
- 🎯 Kondisi cuaca real-time

### Forecast
- 📅 Prakiraan 5 hari ke depan
- 📈📉 Suhu max/min per hari
- 🌧️ Tipe cuaca per hari
- 💧 Tingkat kelembaban

### User Features
- 🔍 Search kota di seluruh dunia
- 📍 Auto-detect lokasi pengguna
- 🌡️ Toggle Celsius ↔️ Fahrenheit
- 📱 Responsive untuk semua ukuran layar

## 🚀 Deploy Online (Gratis)

### Vercel
1. Push code ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Import repository
4. Set root directory ke `weather-dashboard`
5. Deploy!

### Netlify
1. Push code ke GitHub
2. Buka [netlify.com](https://netlify.com)
3. Connect GitHub
4. Set build directory ke `weather-dashboard`
5. Deploy!

## 📝 File Structure

```
weather-dashboard/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    └── components/
        ├── SearchBar.jsx
        ├── SearchBar.css
        ├── CurrentWeather.jsx
        ├── CurrentWeather.css
        ├── Forecast.jsx
        └── Forecast.css
```

## 🎨 Design

- Gradient background: Purple to Violet
- Glassmorphism cards dengan backdrop-filter blur
- Emoji icons untuk visual yang menarik
- Color scheme: Light text on dark gradient
- Smooth transitions dan hover effects

## 📞 Support

Buat issue di repository jika ada pertanyaan atau laporan bug.

---

**Selamat menggunakan Weather Dashboard! 🌤️☀️🌧️**