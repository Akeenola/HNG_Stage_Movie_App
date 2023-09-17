import React, { useState } from 'react';
import {Modal,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
var API_URL_IMAGES = "https://image.tmdb.org/t/p/original"
const MovieBox= ({title,poster_path,vote_average,release_date,overview})=>{
const [show,setShow] = useState(false) ;
const handleShow=()=>setShow(true);
const handleClose=()=>setShow(false);
        return (
          <div className='image-container d-flex justify-content-start m-3'>
            <div className="card-body">
                <h1 id='command'>{title}</h1>
                <img className="card-img-top"style={{innerWidth:"4em"}} 
                          src={API_URL_IMAGES+poster_path} alt="my pix name"/>
                <div className="card-body">
                    
                    
                    <button type='button' className='btn btn-primary' onClick={handleShow}>View Movie</button>
                    <Modal show = {show} onHide={handleClose} style={{opacity:1}}>
                      <Modal.Header closeButtton>
                        <Modal.Body>
                        
                        <h1>{title}</h1>
                        <h4>IMdb:{vote_average}</h4>
                        <h5>Release Date:{release_date}</h5>
                        <br></br>
                        <h6>Overview</h6>
                        <h6>{overview}</h6>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}></Button>
                        </Modal.Footer>
                      </Modal.Header>
                    </Modal>
                </div>
            </div>
            
            
          </div>
        );
}
export default MovieBox;

