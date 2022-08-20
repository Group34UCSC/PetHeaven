import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import {withCookies} from 'react-cookie';
import jwt_decode from 'jwt-decode';

import './App.css';
//Home
import Navbar from './components/includes/Navbar';
import HomePage from './components/pages/HomePage';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Footer from './components/includes/Footer';
import Notifications from './components/pages/Notifications';
import Donate from './components/pages/Donate';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';


import PharmacyHome from './components/Actors/pharmacy/PharmacyHome';
import PetToolStoreHome from './components/Actors/petstore/pages/PetToolStoreHome';

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
import CustomerDoctormessages from './components/Actors/customer/pages/CustomerDoctormessages';
import Customerpharmacypage from './components/Actors/customer/pages/Customerpharmacypage';
import Customerpettoolstorepage from './components/Actors/customer/pages/Customerpettoolstorepage';


//Pharmacy
import Prescription from './components/Actors/pharmacy/Prescription';
import PaidPrescription from './components/Actors/pharmacy/PaidPrescription';
import FinalizeOrder from './components/Actors/pharmacy/FinalizeOrder';
import AddStock from './components/Actors/pharmacy/inventory/AddStock';
import ViewInventory from './components/Actors/pharmacy/inventory/ViewInventory';
import ViewInquiry from './components/Actors/pharmacy/inquiries/ViewInquiry';

// Pet Tool Store
import AddEquipmentStock from './components/Actors/petstore/inventory/AddEquipmentStock';
import ViewPetToolInventory from './components/Actors/petstore/inventory/ViewPetToolInventory';
import PostAdvertisement from './components/Actors/petstore/pages/PostAdvertisement';
import EditAdvertisement from './components/Actors/petstore/pages/EditAdvertisement';
import MoreDetails from './components/Actors/petstore/pages/MoreDetails';


//Doctor
import DoctorHome from './components/Actors/doctor/pages/DoctorHome';
import DoctorViewPetHistory from './components/Actors/doctor/pages/DoctorViewPetHistory';




// function App() {
class App extends Component{

 render(){
  let sessionToken = sessionStorage.getItem("token");
  console.log("Appjs",sessionToken);
  // const {cookies} = this.props;
  
  // console.log(cookies.get('auth-token'));
  // const verify_token = cookies.get('auth-token');

  // if(verify_token)
  // {
  //   const users = jwt_decode(verify_token);

  //   window.loggedUserType = users.type;
  //   window.loggedUserId = users.id;
  // }
  // else
  // {
  //   window.loggedUserType = null;
  //   window.loggedUserId = null;
  // }

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
            <Route exact path='/PetToolStore' element={<PetToolStoreHome/>} />

            <Route exact path='/SignUp' element={<SignUp/>} />
            <Route exact path='/SignIn' element={<SignIn/>} />
            
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
            <Route exact path='/pharmacy/inventory/ViewInventory' element={<ViewInventory />} />
            <Route exact path='/pharmacy/inquiries/ViewInquiry' element={<ViewInquiry />} />


            {/* Pet Tool Store */}
            <Route exact path='/petstore/inventory/AddEquipmentStock' element={<AddEquipmentStock/>} />
            <Route exact path='/petstore/inventory/ViewPetToolInventory' element={<ViewPetToolInventory />} />
            <Route exact path='/petstore/addNewEquipment' element={<PostAdvertisement />} />
            <Route exact path='/petstore/EditAdvertisement' element={<EditAdvertisement />} />
            <Route exact path='/petstore/advertisement/MoreDetails' element={<MoreDetails />} />
            
            
              {/*Customer */}
              <Route exact path='/findapet/findpharmacy/pharmacystore' element={<Customerpharmacypage/>} />
              <Route exact path='/findapet/findpettoolstore/petstore' element={<Customerpettoolstorepage/>} />
              <Route exact path='/findapet/messages' element={<CustomerDoctormessages/>}/>
              <Route exact path='/findapet' element ={<CustomerFindpet/>} />
              <Route exact path='/findapet/channeldoctor' element={<CustomerDoctorappoint/>}/> 
              <Route exact path='/findapet/findpharmacy' element ={<CustomerPharmacy/>}/>
              <Route exact path='/findapet/findpettoolstore' element ={<CustomerPettoolstore/>}/>
              <Route exact path='/findapet/myprofile' element={<ProfilePage/>}/>
              <Route exact path='/findapet/adoptrequestform' element={<CustomerAdoptRequest/>}/>
              {/* <Route exact path='/' element ={<CustomerEditProfile/>}/> */}
              {/* <Route exact path='/Signup' element={<Signup/>} /> */}
              {/* <Route exact path='/' element={<CustomerChangePassword/>}/> */}



            {/* Doctor   */}
           <Route exact path='/DoctorHome' element={<DoctorHome/>} />
           <Route exact path='/DoctorHome/History' element={<DoctorViewPetHistory/>} />
           
        
        </Routes>

        <Footer/>
        
      </div>
  </Router>

 // admin   









  
// customer






//Doctor




//Staff member



  
  )
 }
}
// export withCookies(App);
export default withCookies(App)
