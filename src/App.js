//  Imported Modules
import React from 'react';

//  Components
import Header from './components/header/Header';
import Jumbotron from './components/jumbotron/Jumbotron';
import Gallery from './components/gallery/Gallery';
import Footer from './components/footer/Footer';

//  Styling
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
