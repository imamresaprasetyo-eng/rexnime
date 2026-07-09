import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'

const API_KEY = 'e1cf49b12c3a42a63e0e4aba452da221'

function App() {
  const [city, setCity] = useState('Jakarta')
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [unit, setUnit] = useState('metric') // metric = Celsius, imperial = Fahrenheit

  const fetchWeather = async (cityName) => {
    setLoading(true)
    setError(null)
    try {
      // Current weather
      const currentResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=${unit}&lang=id`
      )
      
      if (!currentResponse.ok) {
        throw new Error('Kota tidak ditemukan')
      }
      
      const currentData = await currentResponse.json()
      setCurrentWeather(currentData)
      setCity(currentData.name)

      // Forecast
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=${unit}&lang=id`
      )
      const forecastData = await forecastResponse.json()
      setForecast(forecastData)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // Get user location on mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          fetchWeatherByCoords(latitude, longitude)
        },
        () => {
          // If geolocation fails, fetch default city
          fetchWeather('Jakarta')
        }
      )
    } else {
      fetchWeather('Jakarta')
    }
  }, [])

  const fetchWeatherByCoords = async (lat, lon) => {
    setLoading(true)
    setError(null)
    try {
      const currentResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${unit}&lang=id`
      )
      const currentData = await currentResponse.json()
      setCurrentWeather(currentData)
      setCity(currentData.name)

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${unit}&lang=id`
      )
      const forecastData = await forecastResponse.json()
      setForecast(forecastData)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (cityName) => {
    fetchWeather(cityName)
  }

  const toggleUnit = () => {
    const newUnit = unit === 'metric' ? 'imperial' : 'metric'
    setUnit(newUnit)
    fetchWeather(city)
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🌤️ Weather Dashboard</h1>
        <p>Prakiraan cuaca real-time untuk kota di seluruh dunia</p>
      </header>

      <div className="controls">
        <SearchBar onSearch={handleSearch} />
        <button className="unit-toggle" onClick={toggleUnit}>
          {unit === 'metric' ? '°F' : '°C'}
        </button>
      </div>

      {loading && (
        <div className="loading">
          <p>⏳ Sedang memuat data cuaca...</p>
        </div>
      )}

      {error && (
        <div className="error">
          <p>❌ Error: {error}</p>
          <p>Coba cari kota lain atau periksa koneksi internet Anda</p>
        </div>
      )}

      {currentWeather && !loading && (
        <>
          <CurrentWeather weather={currentWeather} unit={unit} />
          {forecast && <Forecast forecast={forecast} unit={unit} />}
        </>
      )}
    </div>
  )
}

export default App