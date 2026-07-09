import './StreamingLinks.css'

const STREAMING_PLATFORMS = [
  {
    name: 'Idlix',
    icon: '⭐',
    getLink: (anime) => `https://www.idlix.com/search?q=${encodeURIComponent(anime.title)}`,
    description: 'Streaming gratis HD (Recommended)',
    type: 'free'
  },
  {
    name: 'Nonton Anime ID',
    icon: '🎬',
    getLink: (anime) => `https://nontonanimeid.com/?s=${encodeURIComponent(anime.title)}`,
    description: 'Anime Subtitle Indonesia Gratis',
    type: 'free'
  },
  {
    name: 'Nimegami',
    icon: '▶️',
    getLink: (anime) => `https://nimegami.com/?s=${encodeURIComponent(anime.title)}`,
    description: 'Platform Anime Indonesia',
    type: 'free'
  },
  {
    name: 'Kuramanime',
    icon: '🌟',
    getLink: (anime) => `https://kuramanime.com/?s=${encodeURIComponent(anime.title)}`,
    description: 'Streaming Anime Gratis',
    type: 'free'
  },
  {
    name: 'Oploverz',
    icon: '📺',
    getLink: (anime) => `https://oploverz.in/?s=${encodeURIComponent(anime.title)}`,
    description: 'Koleksi Anime Lengkap',
    type: 'free'
  },
  {
    name: 'AnimeKu',
    icon: '🎥',
    getLink: (anime) => `https://www.animeku.me/?s=${encodeURIComponent(anime.title)}`,
    description: 'Anime Subtitle Indonesia',
    type: 'free'
  },
  {
    name: 'MyAnimeList',
    icon: '🌐',
    getLink: (anime) => `https://myanimelist.net/anime/${anime.mal_id}`,
    description: 'Info & Komunitas Anime',
    type: 'info'
  }
]

export default function StreamingLinks({ anime }) {
  const freeStreamings = STREAMING_PLATFORMS.filter(p => p.type === 'free')
  const infoLinks = STREAMING_PLATFORMS.filter(p => p.type === 'info')

  return (
    <div className="streaming-links">
      <h3>▶️ Nonton Gratis Di:</h3>
      <div className="streaming-grid">
        {freeStreamings.map((platform) => (
          <a
            key={platform.name}
            href={platform.getLink(anime)}
            target="_blank"
            rel="noopener noreferrer"
            className="streaming-link free"
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

      {infoLinks.length > 0 && (
        <>
          <h3 style={{ marginTop: '25px' }}>ℹ️ Info & Komunitas:</h3>
          <div className="streaming-grid">
            {infoLinks.map((platform) => (
              <a
                key={platform.name}
                href={platform.getLink(anime)}
                target="_blank"
                rel="noopener noreferrer"
                className="streaming-link info"
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
        </>
      )}

      <div className="streaming-note warning">
        <p>⚠️ <strong>Disclaimer:</strong> Beberapa platform mungkin memiliki iklan atau pop-up. Gunakan ad-blocker jika diperlukan. Pastikan menggunakan VPN jika diakses dari region yang membatasi.</p>
      </div>

      <div className="streaming-note info-note">
        <p>💡 <strong>Tips Terbaik:</strong> Cek beberapa platform untuk menemukan yang paling stabil. Jika satu platform down, coba platform lain!</p>
      </div>
    </div>
  )
}
