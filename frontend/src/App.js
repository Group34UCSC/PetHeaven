import React from 'react';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';


import './App.css';
import Header from './components/Admin/pages/Header';
import Create from './components/Admin/pages/Create';
import Home from './components/Admin/pages/Home';

function App() {
  return (
   <div>
    <Header />
    <Home />
   </div>
  );
}

export default App;
