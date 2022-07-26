import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';


import './App.css';
//Home
import Navbar from './components/includes/Navbar';
import HomePage from './components/pages/HomePage';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Footer from './components/includes/Footer';
import Notifications from './components/pages/Notifications';
import Donate from './components/pages/Donate';
import PharmacyHome from './components/Actors/pharmacy/PharmacyHome';


//Admin
import AdminHeader from './components/Actors/Admin/pages/AdminHeader';
import AdminHome from './components/Actors/Admin/pages/AdminHome';
import AdminCreate from './components/Actors/Admin/pages/AdminCreate';
import AdminDelete from './components/Actors/Admin/pages/AdminDelete';
import AdminUpdate from './components/Actors/Admin/pages/AdminUpdate';
import AdminView from './components/Actors/Admin/pages/AdminView';

//customer

import CustomerFindpet from './components/Actors/customer/pages/CustomerFindpet';
import CustomerDoctorappoint from './components/Actors/customer/pages/CustomerDoctorappoint';
import CustomerPharmacy from './components/Actors/customer/pages/CustomerPharmacy';
import CustomerPettoolstore from './components/Actors/customer/pages/CustomerPettoolstore';
import ProfilePage from './components/Actors/customer/pages/ProfilePage';
import CustomerAdoptRequest from './components/Actors/customer/pages/CustomerAdoptRequest';
import CustomerEditProfile from './components/Actors/customer/pages/CustomerEditProfile';
import Signup from './components/Actors/customer/pages/signup';
import CustomerChangePassword from './components/Actors/customer/pages/CustomerChangePassword';

//Pharmacy
import Prescription from './components/Actors/pharmacy/Prescription';
import PaidPrescription from './components/Actors/pharmacy/PaidPrescription';
import FinalizeOrder from './components/Actors/pharmacy/FinalizeOrder';
import AddStock from './components/Actors/pharmacy/inventory/AddStock';

function App() {
  return (

 //Homepage
  <Router>

      <div>
        <Navbar/>

        <Routes>
        
            <Route exact path='/' element={<HomePage/>} />   
            <Route exact path='/about' element={<AboutUs/>} />  
            <Route exact path='/contact' element={<ContactUs/>} /> 
            <Route exact path='/Notifications' element={<Notifications/>} /> 
            <Route exact path='/donation' element={<Donate/>} />
            <Route exact path='/pharmacy' element={<PharmacyHome/>} />
          
             {/* Admin  */}
            <Route exact path='/AdminHome/Create' element={<AdminCreate />} /> 
            <Route exact path='/AdminHome/Delete' element={<AdminDelete />} />
            <Route exact path='/AdminHome/Update' element={<AdminUpdate />} />
            <Route exact path='/AdminHome/View' element={<AdminView />} />
            <Route exact path='/AdminHome' element={<AdminHome />} />  

            {/* Pharmacy */}
            <Route exact path='/pharmacy/Prescription' element={<Prescription />} />
            <Route exact path='/pharmacy/PaidPrescription' element={<PaidPrescription />} />
            <Route exact path='/pharmacy/FinalizeOrder' element={<FinalizeOrder />} />
            <Route exact path='/pharmacy/inventory/AddStock' element={<AddStock />} />

              {/*Customer */}
              {/* <Route exact path='/' element ={<CustomerFindpet/>} /> */}
              {/* <Route exact path='/' element={<CustomerDoctorappoint/>}/>  */}
              {/* <Route exact path='/' element ={<CustomerPharmacy/>}/> */}
              {/* <Route exact path='/' element ={<CustomerPettoolstore/>}/> */}
              {/* <Route exact path='/' element={<ProfilePage/>}/> */}
              {/* <Route exact path='/' element={<CustomerAdoptRequest/>}/> */}
              {/* <Route exact path='/' element ={<CustomerEditProfile/>}/> */}
              {/* <Route exact path='/' element={<Signup/>} /> */}
              {/* <Route exact path='/' element={<CustomerChangePassword/>}/> */}
        
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
