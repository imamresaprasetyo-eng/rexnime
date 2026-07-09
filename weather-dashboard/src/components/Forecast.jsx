import './Forecast.css'

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

const groupForecastByDay = (list) => {
  const grouped = {}
  list.forEach(item => {
    const date = new Date(item.dt * 1000)
    const day = date.toLocaleDateString('id-ID', { weekday: 'long', month: 'short', day: 'numeric' })
    if (!grouped[day]) {
      grouped[day] = []
    }
    grouped[day].push(item)
  })
  return grouped
}

export default function Forecast({ forecast, unit }) {
  const unitSymbol = unit === 'metric' ? '°C' : '°F'
  const groupedForecast = groupForecastByDay(forecast.list)
  const days = Object.keys(groupedForecast).slice(0, 5)

  return (
    <div className="forecast-container">
      <h3>📅 Prakiraan 5 Hari</h3>
      <div className="forecast-grid">
        {days.map((day) => {
          const dayForecasts = groupedForecast[day]
          const midpoint = Math.floor(dayForecasts.length / 2)
          const item = dayForecasts[midpoint]
          const icon = getWeatherIcon(item.weather[0].main)
          const tempMax = Math.round(item.main.temp_max)
          const tempMin = Math.round(item.main.temp_min)

          return (
            <div key={day} className="forecast-card">
              <p className="forecast-day">{day}</p>
              <div className="forecast-icon">{icon}</div>
              <p className="forecast-description">{item.weather[0].main}</p>
              <div className="forecast-temps">
                <span className="temp-max">📈 {tempMax}{unitSymbol}</span>
                <span className="temp-min">📉 {tempMin}{unitSymbol}</span>
              </div>
              <div className="forecast-humidity">💧 {item.main.humidity}%</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}