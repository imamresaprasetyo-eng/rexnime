import { useState } from 'react'
import './SearchBar.css'

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query)
      setQuery('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Cari kota... (contoh: Jakarta, Bandung, Bali)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-btn">
        🔍 Cari
      </button>
    </form>
  )
}