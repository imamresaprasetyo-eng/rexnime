import AnimeCard from './AnimeCard'
import './AnimeGrid.css'

export default function AnimeGrid({ animeList, onSelectAnime, loading }) {
  if (loading && animeList.length === 0) {
    return <div className="loading">⏳ Sedang memuat anime...</div>
  }

  if (animeList.length === 0) {
    return <div className="loading">Tidak ada anime ditemukan 😢</div>
  }

  return (
    <div className="anime-grid">
      {animeList.map((anime) => (
        <AnimeCard
          key={anime.mal_id}
          anime={anime}
          onSelect={() => onSelectAnime(anime)}
        />
      ))}
    </div>
  )
}