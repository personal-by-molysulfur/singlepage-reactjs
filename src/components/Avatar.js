import React ,{Component} from 'react';
import logo from '../logo.svg';
import "../css/AvatarStyles.css";

class Avatar extends Component{

    render(){
        return (
            <div>
                <div className="avatar-stoke"></div>
                <div className="avatar">
                    <img src={logo} width="250px" height="250px" />
                </div>
            </div>  
        );
    };
}

export default Avatar;