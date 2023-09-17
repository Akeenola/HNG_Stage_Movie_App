import React from 'react';
// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
const Header =()=>{
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="d-flex justify-content-center
                align-items-center w-100 
                text-uppercase p-3 header">
                    <i className="fas fa fa-video"></i>&nbsp,&nbsp;
                    The Movie Central
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;
library.add(fab, fas, far)