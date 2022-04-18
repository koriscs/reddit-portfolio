import React from 'react';
import Header from './components/Header';
import Selections from './components/Selections';
import PostMain from './components/PostMain';
import './App.css';
import {BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Selections />
      <PostMain />
    </div>
    </Router>
  );
}

export default App;
