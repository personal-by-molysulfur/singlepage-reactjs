import React from 'react';
import Content from './Content';

const DetailsRight = () =>{
    return(
        <div className="row">
            <img className="col col-sm-6 d-flex justify-content-center" 
                src={process.env.PUBLIC_URL + 'example-image.jpg'} width="300" height="300" />
            <div className="col col-sm-6"><Content />
            </div>    
        </div>
    )
}


export default DetailsRight;