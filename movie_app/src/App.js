import React,{useEffect, useState} from 'react';
import './App.css';
import MovieBox from './MovieBox'

var API_URL = "https://api.themoviedb.org/3/movie/157336?api_key=a23869194e0d7d25294ce4f332ccb7e4";
function App() {
  const [movies,setMovies] = useState('');
 // const example = ["one","two"];
  //setMovies(data.results)
  useEffect(()=>{
    fetch(API_URL).then((res)=>(res.json)).then((data)=>(setMovies(data.results)));
  },[])
  return (
    <div>
      {movies?.map((movies,id)=>(<MovieBox key = {id}/>))}
    </div>
  );
}


export default App;
