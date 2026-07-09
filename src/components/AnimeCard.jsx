import './AnimeCard.css'

export default function AnimeCard({ anime, onSelect }) {
  return (
    <div className="anime-card" onClick={onSelect}>
      <div className="anime-card-image">
        <img
          src={anime.images?.jpg?.image_url || 'https://via.placeholder.com/200x300'}
          alt={anime.title}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/200x300'
          }}
        />
        <div className="anime-card-overlay">
          <button className="detail-btn">Lihat Detail</button>
        </div>
      </div>
      <div className="anime-card-info">
        <h3 title={anime.title}>{anime.title}</h3>
        <p className="anime-year">{anime.year || 'TBA'}</p>
        {anime.score && (
          <div className="anime-score">
            ⭐ {anime.score.toFixed(1)}
          </div>
        )}
      </div>
    </div>
  )
}