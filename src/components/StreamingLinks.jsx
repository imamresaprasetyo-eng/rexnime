import './StreamingLinks.css'

const STREAMING_PLATFORMS = [
  {
    name: 'MyAnimeList',
    icon: '🌐',
    getLink: (anime) => `https://myanimelist.net/anime/${anime.mal_id}`,
    description: 'Cek informasi lengkap dan komunitas'
  },
  {
    name: 'Netflix',
    icon: '🎬',
    getLink: (anime) => `https://www.netflix.com/search?q=${encodeURIComponent(anime.title)}`,
    description: 'Tonton di Netflix'
  },
  {
    name: 'Crunchyroll',
    icon: '▶️',
    getLink: (anime) => `https://www.crunchyroll.com/search?q=${encodeURIComponent(anime.title)}`,
    description: 'Streaming anime terlengkap'
  },
  {
    name: 'Anime Planet',
    icon: '🌟',
    getLink: (anime) => `https://www.animeplanet.com/anime/all?title=${encodeURIComponent(anime.title)}`,
    description: 'Platform komunitas anime'
  },
  {
    name: 'IMDb',
    icon: '⭐',
    getLink: (anime) => `https://www.imdb.com/search/title/?title=${encodeURIComponent(anime.title)}`,
    description: 'Rating dan review'
  }
]

export default function StreamingLinks({ anime }) {
  return (
    <div className="streaming-links">
      <h3>▶️ Tonton Anime Ini Di:</h3>
      <div className="streaming-grid">
        {STREAMING_PLATFORMS.map((platform) => (
          <a
            key={platform.name}
            href={platform.getLink(anime)}
            target="_blank"
            rel="noopener noreferrer"
            className="streaming-link"
          >
            <div className="streaming-icon">{platform.icon}</div>
            <div className="streaming-info">
              <h4>{platform.name}</h4>
              <p>{platform.description}</p>
            </div>
            <div className="streaming-arrow">→</div>
          </a>
        ))}
      </div>

      <div className="streaming-note">
        <p>💡 <strong>Tips:</strong> Klik link di atas untuk membuka platform streaming resmi. Beberapa anime mungkin memerlukan langganan atau hanya tersedia di region tertentu.</p>
      </div>
    </div>
  )
}