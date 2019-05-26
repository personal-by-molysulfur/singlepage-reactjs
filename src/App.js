import React from 'react';
import './App.css';
import ContentTitle from './components/ContentTitle';
import Avatar from './components/Avatar';
import Content from './components/Content';
import Service from './components/Service';
import ContentCenter from './components/ContentCenter';
import DetailsLeft from './components/DetailsLeft';
import DetailsRight from './components/DetailsRight';
import Footer from './components/Footer';
import ImageColumns from './components/ImageColumns';

const blackScreenStyle ={
  backgroundColor: '#1c1f22',
  padding: '56px',
  color : 'white',
}

const whiteScreenStyle ={
  backgroundColor: '#f5f8fa',
  padding: '56px',
  color : 'black'
}

function App() {
  return (
    <div className="App">
      <section>
        <div className="cover-first"></div>
        <div className="container-fluid">
          <div className=" row d-flex">
            <div className="d-flex justify-content-center col head-title"><ContentTitle /></div>
            <div className="col d-flex justify-content-center head-content" width="100%"><Avatar /></div>
          </div>
          <div className="container">
            <div className="col col-sm-6">
              <Content/>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 p-5">
          <Service />
      </section>
      <section style={whiteScreenStyle}>
        <ContentCenter />
        <ImageColumns />
      </section>
      <section style={blackScreenStyle}>
        <DetailsLeft />
      </section>
      <section style={whiteScreenStyle}>
        <DetailsRight />
      </section>
      <section style={blackScreenStyle}>
        <Footer />
      </section>
    </div>
  );
}

export default App;
