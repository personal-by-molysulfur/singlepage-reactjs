import React from 'react';
import './App.css';
import HeadContent from './components/HeadContent';

function App() {
  return (
    <div className="App">
      <div style={{position:'absolute', zIndex:1, top:'300px', marginLeft:56}}>
       <HeadContent
      
       />
       </div>
      <div style={{position:'absolute', width:'100%'}}>
      <img 
      className="fullimage"
      height={'500px'}
      src={process.env.PUBLIC_URL + 'images/cover-first.jpg'}
     />
      </div>
      <div
      style={{position:'relative', background:'black',width:'100%',height:300, top:500}}
      ></div>
     
    
    </div>
  );
}

export default App;
