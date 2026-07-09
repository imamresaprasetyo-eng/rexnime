import { useState } from 'react'
import './AnimeDetail.css'
import StreamingLinks from './StreamingLinks'

export default function AnimeDetail({ anime, onClose }) {
  const [activeTab, setActiveTab] = useState('info')

  return (
    <div className="anime-detail-overlay" onClick={onClose}>
      <div className="anime-detail" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        
        <div className="anime-detail-content">
          <div className="anime-detail-poster">
            <img
              src={anime.images?.jpg?.image_url || 'https://via.placeholder.com/300x450'}
              alt={anime.title}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x450'
              }}
            />
            {anime.score && (
              <div className="anime-detail-score">
                <div className="score-badge">⭐ {anime.score.toFixed(1)}</div>
              </div>
            )}
          </div>

          <div className="anime-detail-info">
            <h1>{anime.title}</h1>
            {anime.title_english && (
              <p className="anime-detail-subtitle">{anime.title_english}</p>
            )}

            <div className="anime-detail-meta">
              {anime.year && <span className="meta-item">📅 {anime.year}</span>}
              {anime.episodes && <span className="meta-item">🎬 {anime.episodes} Episode</span>}
              {anime.status && <span className="meta-item">✨ {anime.status}</span>}
              {anime.genres && anime.genres.length > 0 && (
                <span className="meta-item">
                  🏷️ {anime.genres.map(g => g.name).join(', ')}
                </span>
              )}
            </div>

            <div className="anime-detail-tabs">
              <button
                className={`tab-btn ${activeTab === 'info' ? 'active' : ''}`}
                onClick={() => setActiveTab('info')}
              >
                📖 Info
              </button>
              <button
                className={`tab-btn ${activeTab === 'streaming' ? 'active' : ''}`}
                onClick={() => setActiveTab('streaming')}
              >
                ▶️ Nonton
              </button>
            </div>

            <div className="anime-detail-content-area">
              {activeTab === 'info' && (
                <div className="tab-content">
                  {anime.synopsis && (
                    <div className="anime-synopsis">
                      <h3>Sinopsis</h3>
                      <p>{anime.synopsis}</p>
                    </div>
                  )}
                  
                  {anime.aired && (
                    <div className="anime-aired">
                      <h3>Ditayangkan</h3>
                      <p>{anime.aired.string || 'Belum diketahui'}</p>
                    </div>
                  )}

                  {anime.studios && anime.studios.length > 0 && (
                    <div className="anime-studios">
                      <h3>Studio Produksi</h3>
                      <p>{anime.studios.map(s => s.name).join(', ')}</p>
                    </div>
                  )}

                  {anime.source && (
                    <div className="anime-source">
                      <h3>Sumber</h3>
                      <p>{anime.source}</p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'streaming' && (
                <StreamingLinks anime={anime} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}