import React from 'react';
var API_URL_IMAGES = "https://image.tmdb.org/t/p/original"
const MovieBox= ({movie})=>{
    
        return (
          <div>
            <h5>{movie.backdrop_path}</h5>
            <img src={API_URL_IMAGES+movie.backdrop_path} alt="my pix name"/>
          </div>
        );
}
export default MovieBox;