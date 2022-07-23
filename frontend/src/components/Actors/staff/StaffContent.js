import React from 'react';
import {Link} from 'react-router-dom';


import create from '../img/create.jpg';
import view from '../img/view.jpg';
import delete1 from '../img/delete1.jpg';
import update from '../img/update.jpg';
import '../css/AdminHome.css';
function AdminHome() {
  return (

<div>
<section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div class="admincard col-md-6">
                       
                            <div className="card shadow" id='cardone'>
                            <img src={delete1} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/>
                                <div className="card-body">
                                    <h6>DELETE</h6>
                                    <div className="underline"></div>
                                    <p>PetHeaven is an online web based system to facilitate services for animals specially</p>
                                </div>
                            </div>
                        </div>
                       


                        <div class="admincard col-md-6">
                       
                            <div className="card shadow" id='cardone'>
                            <img src={create} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/>
                                <div className="card-body">
                                    <h6>CREATE</h6>
                                    <div className="underline"></div>
                                    <p>PetHeaven is an online web based system to facilitate services for animals specially</p>
                                </div>
                            </div>
                        </div>
                        

                        <div class="admincard col-md-6">
                       
                            <div className="card shadow" id='cardone'>
                            <img src={update} className="w-50  border-bottom mx-auto d-block img-fluid" alt="Services"/>
                                <div className="card-body">
                                    <h6>Pet Tool Store</h6>
                                    <div className="underline"></div>
                                    <p>PetHeaven is an online web based system to facilitate services for animals specially</p>
                                </div>
                            </div>
                        </div>
                        

                        <div class="admincard col-md-6">
                       
                            <div className="card shadow" id='cardone'>
                            <img src={view} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/>
                                <div className="card-body">
                                    <h6>Pet Tool Store</h6>
                                    <div className="underline"></div>
                                    <p>PetHeaven is an online web based system to facilitate services for animals specially</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
</div>


  );
}

export default AdminHome;
