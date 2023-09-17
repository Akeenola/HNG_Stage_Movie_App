import React,{useEffect,useState} from 'react';

import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Filter';
import SearchBox from './Search';


//var API_URL = "https://api.themoviedb.org/3/movie/157336?api_key=a23869194e0d7d25294ce4f332ccb7e4";
const API_URL_POPULAR = "https://api.themoviedb.org/3/movie/popular?api_key=a23869194e0d7d25294ce4f332ccb7e4";
//const API_URL_SEARCH ="https://api.themoviedb.org/3/search/movie?api_key=a23869194e0d7d25294ce4f332ccb7e4";
function App() {
  const [movies,setMovies] = useState(true);
  const [filtered, setFiltered] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);
    
  //const example = ["one","two"]
  async function getMovies() {
    const res = await fetch(API_URL_POPULAR);
    const data = await res.json();
    for(var j in data){
      console.log("The value> ",data[j]);
    }
    console.log(data);
    
      setMovies(data.results);
      setFiltered(data.results)
  }
  
  useEffect(()=>{
    getMovies();
    

  },[])
  
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
    
   
    <div className='container'>
      <div className='grid'>
      <Filter show = {movies} popular={filtered} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
          {Array.isArray(movies)?movies.map((moviesReq,id)=>
            (<MovieBox key = {id}{...moviesReq}/>)):(<h1>Not Showing movies</h1>)}
      </div>
      
    </div>

    
    
    </>
    
  );
}


export default App;
