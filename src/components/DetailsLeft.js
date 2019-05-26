import React from 'react';
import Content from './Content';

const DetailsLeft = () =>{
    return(
        <div className="row">
        <div className="col col-sm-6"><Content />
        </div>    
        <img className="col col-sm-6 d-flex justify-content-center" 
            src={process.env.PUBLIC_URL + 'example-image.jpg'} width="300" height="300" />
        </div>
    )
}


export default DetailsLeft;