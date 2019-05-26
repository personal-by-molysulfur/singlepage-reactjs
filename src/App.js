import React from 'react';
import './App.css';
import HeadContent from './components/HeadContent';
import Avatar from './components/Avatar';
import Content from './components/Content';
import Service from './components/Service';
import ContentCenter from './components/ContentCenter';
import DetailsLeft from './components/DetailsLeft';
import DetailsRight from './components/DetailsRight';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <section>
        <div className="cover-first"></div>
        <div className="container-fluid">
          <div className=" row d-flex">
            <div className="p-0 d-flex justify-content-center col head-title"><HeadContent></HeadContent></div>
            <div className="col d-flex justify-content-center head-content" width="100%"><Avatar></Avatar></div>
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
      <section className="mt-5 p-5" style={{backgroundColor:'#f5f8fa'}}>
        <ContentCenter />
        <Service />
      </section>
      <section className="p-5" style={{backgroundColor:'#1c1f22'}}>
        <DetailsLeft />
      </section>
      <section className="p-5" style={{backgroundColor:'#f5f8fa'}}>
        <DetailsRight />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
