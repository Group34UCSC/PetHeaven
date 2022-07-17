import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';


import './App.css';

import AdminHeader from './components/Admin/pages/AdminHeader';
import AdminHome from './components/Admin/pages/AdminHome';
import AdminNotifications from './components/Admin/pages/AdminNotifications';
import AdminCreate from './components/Admin/pages/AdminCreate';
import AdminDelete from './components/Admin/pages/AdminDelete';
import AdminUpdate from './components/Admin/pages/AdminUpdate';



function App() {
  return (
 // admin   
<Router>
<div>
   <AdminHeader />
 
      <Routes>
      <Route exact path='/Create' element={<AdminCreate />} />
      <Route exact path='/Delete' element={<AdminDelete />} />
      <Route exact path='/Update' element={<AdminUpdate />} />
      <Route exact path='/Notifications' element={<AdminNotifications />} />
      <Route exact path='/' element={<AdminHome />} />
      </Routes>
   
</div>
</Router>


  
// customer






//Doctor




//Staff member




  );
}

export default App;
