import React from 'react';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';

import Admin from './components/Admin/Admin';
import './App.css';
import Header from './components/Admin/Header';
import Create from './components/Admin/Create';

function App() {
  return (
   <div>
    <Header />
    <Create />
   </div>
  );
}

export default App;
