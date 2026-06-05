import React from 'react'
import {useState} from 'react';
import MovieCard from '../components/MovieCard';
import '../css/Home.css'

function HomePage() {
    const [search, setSearch] = useState("");

    const movies = [
        {id:1, title:"The Shawshank Redemption", year:1994}, 
        {id:2, title:"The Godfather", year:1972}, 
        {id:3, title:"The Dark Knight", year:2008}
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert("Searching for: " + search);
    }

  return (
    <div className="home-page">
        <form className="search-form" onSubmit={handleSearch}>
            <input type="text" 
            className="search-input" 
            placeholder="Search movies..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}/>
        </form>
        <button type="submit" className="search-btn" onClick={handleSearch}>Search</button>
        <div className="movie-grid">
            {movies.map(movie => 
             <MovieCard movie={movie} key={movie.id} />)}
        </div>

    </div>
  )
}

export default HomePage