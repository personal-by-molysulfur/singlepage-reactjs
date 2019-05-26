import React ,{Component} from 'react';

const colrSvgStyle = {
    color : '#edbf91'
}

class Service extends Component{


    render(){
        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number) =>
            <div className="col">
                <div>
                <i class="fab fa-5x fa-react d-flex justify-content-center" style={colrSvgStyle}></i>
                <h4><p className="d-flex justify-content-center">Example</p></h4>
                </div>
        </div>
        );
        return (
            <div className="row">{listItems}</div>
        );
    };
}

export default Service;