import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';


import './App.css';

import Navbar from './components/includes/Navbar';
import HomePage from './components/pages/HomePage';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Footer from './components/includes/Footer';

import AdminHeader from './components/Admin/pages/AdminHeader';
import AdminHome from './components/Admin/pages/AdminHome';
import AdminNotifications from './components/Admin/pages/AdminNotifications';
import AdminCreate from './components/Admin/pages/AdminCreate';
import AdminDelete from './components/Admin/pages/AdminDelete';
import AdminUpdate from './components/Admin/pages/AdminUpdate';





function App() {
  return (

 //Homepage
  <Router>

      <div>
        <Navbar/>

        <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route exact path='/about' element={<AboutUs/>} />
            <Route exact path='/Update' element={<ContactUs/>} />
        
        </Routes>

        <Footer/>
        
      </div>
  </Router>
 
 // admin   









  
// customer






//Doctor




//Staff member




  );
}

export default App;
