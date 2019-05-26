import React ,{Component} from 'react';
import "../css/AvatarStyles.css";

class Avatar extends Component{

    render(){
        return (
            <div>
                <div className="avatar-stoke"></div>
                <div className="avatar"></div>
            </div>  
        );
    };
}

export default Avatar;