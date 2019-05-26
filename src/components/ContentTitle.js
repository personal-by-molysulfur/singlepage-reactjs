import React from 'react';
import "../css/ContentTitleStyles.css";

const ContentTitle = () =>{
        return (
        <div> 
            <div id="head-title" className="backgroundStyle">
                <h1><p className="headStyle">Lorem Ipsum</p></h1>
                <hr className="dividerStyle"/>    
                <h3><p className="content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                </p></h3>
                </div>
        </div>  
    );
};

export default ContentTitle;