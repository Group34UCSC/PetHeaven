import React from 'react';
// import Create from './Create';
// import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
// import {Link} from 'react-router-dom';

import create from './img/create.jpg';
import view from './img/view.jpg';
import delete1 from './img/delete1.jpg';
import update from './img/update.jpg';
import './css/Home.css';
function Home() {
  return (
    
 
    <div className='container mt-3 mb-3'>
        <div className='row'>
            <div className='col-12 col-sm-6 col-lg-4'>
                <h2 className='text-center mt-3'>CREATE ACCOUNTS</h2>
                
                   <img src={create} className="mx-auto d-block img-fluid" alt=''></img>
                <p>Create New accounts for the PET HEAVEN users</p>
            </div>

            <div className='col-12 col-sm-6 col-lg-4'>
                <h2 className='text-center mt-3'>VIEW ACCOUNTS</h2>
                <img src={view} className="mx-auto d-block img-fluid" alt=''></img>
                <p>View PET HEAVEN users accounts</p>
            </div>
      

           
            <div className='col-12 col-sm-6 col-lg-4'>
                <h2 className='text-center mt-3'>DELETE ACCOUNTS</h2>
                <img src={delete1} className="mx-auto d-block img-fluid" alt=''></img>
                <p>Delete PET HEAVEN user acconts from system</p>
            </div>

           
            <div className='col-12 col-sm-6 col-lg-12'>
                <h2 className='text-center mt-3'>UPDATE ACCOUNTS</h2>
                <img src={update} className="mx-auto d-block img-fluid" alt=''></img>
                <p>Update PET HEAVEN user accounts</p>
            </div>

        </div> 
    </div> //container
    

  );
}

export default Home;
