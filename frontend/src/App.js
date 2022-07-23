import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';


import './App.css';
//Home
import Navbar from './components/includes/Navbar';
import HomePage from './components/pages/HomePage';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Footer from './components/includes/Footer';


//Admin
import AdminHeader from './components/Actors/Admin/pages/AdminHeader';
import AdminHome from './components/Actors/Admin/pages/AdminHome';
import AdminCreate from './components/Actors/Admin/pages/AdminCreate';
import AdminDelete from './components/Actors/Admin/pages/AdminDelete';
import AdminUpdate from './components/Actors/Admin/pages/AdminUpdate';
import Notifications from './components/pages/Notifications';





function App() {
  return (

 //Homepage
  <Router>

      <div>
        <Navbar/>

        <Routes>
            {/* Home */}
            <Route exact path='/' element={<HomePage/>} />
            <Route exact path='/about' element={<AboutUs/>} />
            <Route exact path='/contact' element={<ContactUs/>} />
            <Route exact path='/Notifications' element={<Notifications/>} />

          
            {/* Admin */}
            <Route exact path='/Create' element={<AdminCreate />} />
            <Route exact path='/Delete' element={<AdminDelete />} />
            <Route exact path='/Update' element={<AdminUpdate />} />
            <Route exact path='/AdminHome' element={<AdminHome />} />
        
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
