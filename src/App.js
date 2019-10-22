import React from 'react';
import './App.css';
import Main from './components/main';
import Navbar from  './components/navbar';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';


function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
