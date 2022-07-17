import React from 'react';
import {Link} from 'react-router-dom';


import create from '../img/create.jpg';
import view from '../img/view.jpg';
import delete1 from '../img/delete1.jpg';
import update from '../img/update.jpg';
import '../css/AdminHome.css';
function AdminHome() {
  return (
       
    <div className='container mt-3 mb-3'>
        <div className='row'>
            <div className='col-12 col-sm-6 col-lg-4'>
                <h2 className='text-center mt-4'>CREATE ACCOUNTS</h2>
                <Link to="/Create"> <img src={create} className="mx-auto d-block img-fluid" alt=''></img></Link>
                <p>Create New accounts for the PET HEAVEN users</p>
            </div>

            <div className='col-12 col-sm-6 col-lg-4'>
                <h2 className='text-center mt-4'>VIEW ACCOUNTS</h2>
                <Link to="/View"><img src={view} className="mx-auto d-block img-fluid" alt=''></img></Link>
                <p> View PET HEAVEN users accounts</p>
            </div>
      

           
            <div className='col-12 col-sm-6 col-lg-4'>
                <h2 className='text-center mt-4'>DELETE ACCOUNTS</h2>
                <Link to="/Delete"><img src={delete1} className="mx-auto d-block img-fluid" alt=''></img></Link>
                 <p>Delete PET HEAVEN user acconts from system</p>
            </div>

           
            <div className='col-12 col-sm-6 col-lg-12'>
                <h2 className='text-center mt-4'>UPDATE ACCOUNTS</h2>
                <Link to="/Update"><img src={update} className="mx-auto d-block img-fluid" alt=''></img></Link>
                <p>Update PET HEAVEN user accounts</p>
            </div>

        </div> 
    </div> //container

  );
}

export default AdminHome;
