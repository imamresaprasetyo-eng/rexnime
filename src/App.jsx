import { useState, useEffect } from 'react'
import './App.css'
import AnimeGrid from './components/AnimeGrid'
import AnimeDetail from './components/AnimeDetail'
import SearchBar from './components/SearchBar'

function App() {
  const [animeList, setAnimeList] = useState([])
  const [selectedAnime, setSelectedAnime] = useState(null)
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchAnime = async () => {
      setLoading(true)
      try {
        const query = searchQuery ? `&query=${searchQuery}` : ''
        const response = await fetch(
          `https://api.jikan.moe/v4/anime?page=${page}&limit=12${query}`
        )
        const data = await response.json()
        
        if (page === 1) {
          setAnimeList(data.data || [])
        } else {
          setAnimeList(prev => [...prev, ...(data.data || [])])
        }
      } catch (error) {
        console.error('Error fetching anime:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchAnime()
  }, [searchQuery, page])

  useEffect(() => {
    if (!selectedAnime?.mal_id) return

    const fetchDetail = async () => {
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/anime/${selectedAnime.mal_id}/full`
        )
        const data = await response.json()
        setSelectedAnime(data.data)
      } catch (error) {
        console.error('Error fetching detail:', error)
      }
    }

    fetchDetail()
  }, [selectedAnime?.mal_id])

  const handleSearch = (query) => {
    setSearchQuery(query)
    setPage(1)
  }

  const handleLoadMore = () => {
    setPage(prev => prev + 1)
  }

  const handleSelectAnime = (anime) => {
    setSelectedAnime(anime)
  }

  const handleCloseDetail = () => {
    setSelectedAnime(null)
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🎬 Anime Zine</h1>
        <p>Jelajahi ribuan anime favorit kamu</p>
      </header>

      <SearchBar onSearch={handleSearch} />

      {selectedAnime ? (
        <AnimeDetail anime={selectedAnime} onClose={handleCloseDetail} />
      ) : (
        <>
          <AnimeGrid 
            animeList={animeList} 
            onSelectAnime={handleSelectAnime}
            loading={loading}
          />
          {!loading && animeList.length > 0 && (
            <div className="load-more-container">
              <button 
                className="load-more-btn" 
                onClick={handleLoadMore}
              >
                Muat Lebih Banyak
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default App