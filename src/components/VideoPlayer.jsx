import { useState } from 'react'
import './VideoPlayer.css'

export default function VideoPlayer({ anime }) {
  const [currentEpisode, setCurrentEpisode] = useState(1)
  const [selectedPlatform, setSelectedPlatform] = useState('idlix')

  const totalEpisodes = anime.episodes || 12

  const getPlayerLink = (episode) => {
    const searchQuery = `${anime.title} episode ${episode}`
    
    switch(selectedPlatform) {
      case 'idlix':
        return `https://www.idlix.com/search?q=${encodeURIComponent(searchQuery)}`
      case 'nonton':
        return `https://nontonanimeid.com/?s=${encodeURIComponent(searchQuery)}`
      case 'nimegami':
        return `https://nimegami.com/?s=${encodeURIComponent(searchQuery)}`
      case 'kuramanime':
        return `https://kuramanime.com/?s=${encodeURIComponent(searchQuery)}`
      default:
        return `https://www.idlix.com/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  const episodeList = Array.from({ length: Math.min(totalEpisodes, 50) }, (_, i) => i + 1)

  return (
    <div className="video-player-container">
      <div className="player-header">
        <h3>🎬 Putar {anime.title}</h3>
        <p>Episode {currentEpisode} dari {totalEpisodes}</p>
      </div>

      <div className="platform-selector">
        <label>Pilih Platform:</label>
        <select 
          value={selectedPlatform} 
          onChange={(e) => setSelectedPlatform(e.target.value)}
          className="platform-select"
        >
          <option value="idlix">⭐ Idlix (Recommended)</option>
          <option value="nonton">🎬 Nonton Anime ID</option>
          <option value="nimegami">▶️ Nimegami</option>
          <option value="kuramanime">🌟 Kuramanime</option>
        </select>
      </div>

      <div className="player-wrapper">
        <div className="player-placeholder">
          <div className="player-content">
            <p style={{ fontSize: '3rem', marginBottom: '10px' }}>▶️</p>
            <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
              {anime.title} - Episode {currentEpisode}
            </p>
            <a 
              href={getPlayerLink(currentEpisode)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="play-button"
            >
              ▶️ Buka di Platform
            </a>
            <p style={{ fontSize: '0.9rem', marginTop: '15px', color: '#ff6b6b' }}>
              Klik tombol di atas untuk membuka video
            </p>
          </div>
        </div>
      </div>

      <div className="episode-controls">
        <button 
          className="episode-btn prev"
          onClick={() => setCurrentEpisode(Math.max(1, currentEpisode - 1))}
          disabled={currentEpisode === 1}
        >
          ⬅️ Sebelumnya
        </button>
        <span className="episode-info">{currentEpisode} / {totalEpisodes}</span>
        <button 
          className="episode-btn next"
          onClick={() => setCurrentEpisode(Math.min(totalEpisodes, currentEpisode + 1))}
          disabled={currentEpisode === totalEpisodes}
        >
          Berikutnya ➡️
        </button>
      </div>

      <div className="episode-list-container">
        <h4>📺 Pilih Episode:</h4>
        <div className="episode-grid">
          {episodeList.map((ep) => (
            <button
              key={ep}
              className={`episode-item ${currentEpisode === ep ? 'active' : ''}`}
              onClick={() => setCurrentEpisode(ep)}
            >
              {ep}
            </button>
          ))}
        </div>
      </div>

      <div className="video-info">
        <p>💡 <strong>Cara Menonton:</strong></p>
        <ul>
          <li>1. Pilih platform streaming yang Anda inginkan</li>
          <li>2. Klik tombol "Buka di Platform" untuk membuka video</li>
          <li>3. Navigasi ke episode yang ingin Anda tonton</li>
          <li>4. Atau gunakan tombol navigasi episode di bawah untuk berpindah antar episode</li>
        </ul>
      </div>
    </div>
  )
}
