import './CurrentWeather.css'

const getWeatherIcon = (main) => {
  switch (main) {
    case 'Clear':
      return '☀️'
    case 'Clouds':
      return '☁️'
    case 'Rain':
    case 'Drizzle':
      return '🌧️'
    case 'Thunderstorm':
      return '⛈️'
    case 'Snow':
      return '❄️'
    case 'Mist':
    case 'Smoke':
    case 'Haze':
    case 'Dust':
    case 'Fog':
    case 'Sand':
    case 'Ash':
    case 'Squall':
    case 'Tornado':
      return '🌫️'
    default:
      return '🌤️'
  }
}

export default function CurrentWeather({ weather, unit }) {
  const temp = Math.round(weather.main.temp)
  const feelsLike = Math.round(weather.main.feels_like)
  const unitSymbol = unit === 'metric' ? '°C' : '°F'
  const windUnit = unit === 'metric' ? 'm/s' : 'mph'
  const icon = getWeatherIcon(weather.weather[0].main)

  return (
    <div className="current-weather">
      <div className="weather-main">
        <div className="weather-icon-large">{icon}</div>
        <div className="weather-info-main">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p className="weather-description">{weather.weather[0].description}</p>
          <div className="temperature">
            <span className="temp-value">{temp}</span>
            <span className="temp-unit">{unitSymbol}</span>
          </div>
          <p className="feels-like">Terasa seperti {feelsLike}{unitSymbol}</p>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-card">
          <div className="detail-icon">💧</div>
          <div className="detail-content">
            <p className="detail-label">Kelembaban</p>
            <p className="detail-value">{weather.main.humidity}%</p>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-icon">💨</div>
          <div className="detail-content">
            <p className="detail-label">Kecepatan Angin</p>
            <p className="detail-value">{weather.wind.speed} {windUnit}</p>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-icon">🎯</div>
          <div className="detail-content">
            <p className="detail-label">Arah Angin</p>
            <p className="detail-value">{weather.wind.deg || 'N/A'}°</p>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-icon">🔽</div>
          <div className="detail-content">
            <p className="detail-label">Tekanan</p>
            <p className="detail-value">{weather.main.pressure} hPa</p>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-icon">👁️</div>
          <div className="detail-content">
            <p className="detail-label">Visibilitas</p>
            <p className="detail-value">{(weather.visibility / 1000).toFixed(1)} km</p>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-icon">🌞</div>
          <div className="detail-content">
            <p className="detail-label">Indeks UV</p>
            <p className="detail-value">N/A</p>
          </div>
        </div>
      </div>
    </div>
  )
}