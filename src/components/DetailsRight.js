import React from 'react';
import Content from './Content';

const DetailsRight = () =>{
    return(
        <div className="row">
            <img className="col col-sm-6 d-flex justify-content-center" 
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(33).jpg" width="300" height="300" />
            <div className="col col-sm-6"><Content />
            </div>    
        </div>
    )
}


export default DetailsRight;