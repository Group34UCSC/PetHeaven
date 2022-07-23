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



function App() {
  return (

 //Homepage
  <Router>

      <div>
        <Navbar/>

        <Routes>
            
            {/* <Route exact path='/' element={<HomePage/>} />  */}
            {/* <Route exact path='/about' element={<AboutUs/>} />  */}
            {/* <Route exact path='/contact' element={<ContactUs/>} />  */}
            {/* <Route exact path='/Notifications' element={<Notifications/>} /> */}

          
            {/* Admin 
            <Route exact path='/Create' element={<AdminCreate />} />
            <Route exact path='/Delete' element={<AdminDelete />} />
            <Route exact path='/Update' element={<AdminUpdate />} />
            <Route exact path='/AdminHome' element={<AdminHome />} />  */}
            
              {/*Customer */}
              {/* <Route exact path='/' element ={<CustomerFindpet/>} /> */}
              {/* <Route exact path='/' element={<CustomerDoctorappoint/>}/>  */}
              {/* <Route exact path='/' element ={<CustomerPharmacy/>}/> */}
              {/* <Route exact path='/' element ={<CustomerPettoolstore/>}/> */}
              {/* <Route exact path='/' element={<ProfilePage/>}/> */}
              {/* <Route exact path='/' element={<CustomerAdoptRequest/>}/> */}
              {/* <Route exact path='/' element ={<CustomerEditProfile/>}/> */}
              <Route exact path='/' element={<Signup/>} />
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
