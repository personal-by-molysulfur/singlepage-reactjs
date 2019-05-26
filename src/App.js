import React from 'react';
import './App.css';
import HeadContent from './components/HeadContent';
import Avatar from './components/Avatar';

function App() {
  return (
    <div className="App">
      <section style={{top:-250}}>
        <div className="cover-first"></div>
        <div className="container-fluid">
          <div className=" row d-flex">
            <div className="p-0 d-flex justify-content-center col head-title"><HeadContent></HeadContent></div>
            <div className="col d-flex justify-content-center head-content" width="100%"><Avatar></Avatar></div>
          </div>
          <div className=" row d-flex">
            <p>asdasdasd</p>
          </div>
        </div>
      </section>
     
      <div style={{position:'relative', background:'black',width:'100%',height:300, top:500}} />
    
    </div>
  );
}

export default App;
