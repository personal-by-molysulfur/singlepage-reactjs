import React from 'react';

const ImageColumns = () =>{
    return(
        <div className="row d-flex justify-content-center">
            <img className="col-2 p-2" height="300px" src={process.env.PUBLIC_URL + 'example-image.jpg'}/>
            <img className="col-2 p-2" height="300px" src={process.env.PUBLIC_URL + 'example-image.jpg'}/>
            <img className="col-2 p-2" height="300px" src={process.env.PUBLIC_URL + 'example-image.jpg'}/>
            <img className="col-2 p-2" height="300px" src={process.env.PUBLIC_URL + 'example-image.jpg'}/>
        </div>
    );
}

export default ImageColumns;