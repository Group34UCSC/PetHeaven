import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';


import './App.css';
import Create from './components/Admin/pages/Create';
import Delete from './components/Admin/pages/Delete';
import Header from './components/Admin/pages/Header';

import Home from './components/Admin/pages/Home';
import Notifications from './components/Admin/pages/Notifications';

function App() {
  return (
 // admin   
<Router>
<div>
   <Header />
 
      <Routes>
      <Route exact path='/Create' element={<Create />} />
      <Route exact path='/Delete' element={<Delete />} />
      <Route exact path='/Notifications' element={<Notifications />} />
      <Route exact path='/' element={<Home />} />
      </Routes>
   
</div>
</Router>


  
// customer






//Doctor




//Staff member




  );
}

export default App;
