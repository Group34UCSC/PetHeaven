import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';


import './App.css';
//Home
import Navbar from './components/includes/Navbar';
import HomePage from './components/pages/HomePage';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Footer from './components/includes/Footer';
import PharmacyHome from './components/Actors/pharmacy/PharmacyHome';

//Admin
import AdminHeader from './components/Actors/Admin/pages/AdminHeader';
import AdminHome from './components/Actors/Admin/pages/AdminHome';
import AdminCreate from './components/Actors/Admin/pages/AdminCreate';
import AdminDelete from './components/Actors/Admin/pages/AdminDelete';
import AdminUpdate from './components/Actors/Admin/pages/AdminUpdate';
import Notifications from './components/pages/Notifications';


//Pharmacy
import Prescription from './components/Actors/pharmacy/Prescription';
import PaidPrescription from './components/Actors/pharmacy/PaidPrescription';
import FinalizeOrder from './components/Actors/pharmacy/FinalizeOrder';

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
            <Route exact path='/test' element={<PharmacyHome/>} />
            
          
            {/* Admin */}
            <Route exact path='/Create' element={<AdminCreate />} />
            <Route exact path='/Delete' element={<AdminDelete />} />
            <Route exact path='/Update' element={<AdminUpdate />} />
            <Route exact path='/AdminHome' element={<AdminHome />} />

            {/* Pharmacy */}
            <Route exact path='/pharmacy/Prescription' element={<Prescription />} />
            <Route exact path='/pharmacy/PaidPrescription' element={<PaidPrescription />} />
            <Route exact path='/pharmacy/FinalizeOrder' element={<FinalizeOrder />} />

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
