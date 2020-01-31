import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      <div id="wrapper">
        <div id="info">
          <div id="info-content">
            <h1><strong><Link to='login' style={{ textDecoration: 'none' }}>Welcome to the Wild Circus</Link></strong></h1>
            <p>A site where you can vote on your favorite shows & artists</p>
          </div>
        </div>
      </div>
      <div className="menu">
        <Link to='/'>Home</Link>
        <Link to='artist'>Artists Ranking</Link>
        <Link to='performance'>Shows Ranking</Link>
      </div>
    </div>
  );
}

export default App;
