import logo from './logo.svg';
import {useState, useEffect} from "react"
import './App.css';

function App() {
  const [loading,setLoading] = useState(true)
  const [movies,setMovies] = useState([]);
  const getMovies = async() => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    const json = await response.json()
    setMovies(json.data.movies)
    setLoading(false)

  }
 
  useEffect( ()=>{
    getMovies()
  } 
  ,[])
  console.log(movies)

  return ( 
    <div className="App">
     {loading ? <h1>Loading...</h1> : <div>{movies.map((movie)=>{
          return <div key={movie.id}>
            <img src = {movie.medium_cover_image}></img>
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul>
              {movie.genres.map(g => 
              <li key = {g}>{g}</li>
              )}
            </ul>
            </div>
     })}</div>}
    </div>
  );
}

export default App;
