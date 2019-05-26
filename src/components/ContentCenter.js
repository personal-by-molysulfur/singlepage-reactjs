import React ,{Component} from 'react';

class ContentCenter extends Component{
    render(){
        return (
            <div id="head-title">
                <h3 className="text-center"><p>Lorem Ipsum</p></h3>   
                <h5 className="text-center" style={{width:'50%',margin:'auto'}}><p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p></h5>
            </div>
        );
    };
} 

export default ContentCenter;