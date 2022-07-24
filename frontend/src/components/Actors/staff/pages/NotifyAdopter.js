import React,{useState} from 'react';
import {Link, Search} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/NotifyAdopter.css';

function NotifyAdopter() {
    return(
        <div>
            <section className="py-4 ">
            <div className="container ">
                <div className="row bg-success text-white titlebox"> 
                    <div className="col-md-4 my-auto"></div>
                    <h3 className="text-center ">Notify Adopter <i class="fa-solid fa-bell"></i></h3>
                </div>
            </div>
           
            </section>
            <div>
               
            </div>
            <section className="section bg-c-light">
                <div className="container">
                    <div className="card shadow notificationForm">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12 border-left">
                                    <h6>
                                        <i class="fa-solid fa-smile-beam"></i><b>Kindly Notify Them..... </b>
                                        
                                    </h6>
                                    <hr/>
                                    <div className="form-group">
                                        <label className="mb-1">Adopter Name</label>
                                        <input type="text" className="form-control" placeholder="Adopter Name"></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1 mt-1">Mobile Number</label>
                                        <input type="text" className="form-control" placeholder="Adopter's Contact Number"></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Message</label>
                                        <textarea rows="4" className="form-control" placeholder="Enter Your Message"></textarea>
                                    </div>
                                    <div className="form-group py-3">
                                        {/* <button type="button" className="btn btn-success shadow w-100 ">Send</button> */}
                                        <div class="container px-4 text-center">
                                            <div class="row gx-5">
                                                <div class="col ">
                                                    <Link to="/viewpets" class="nav-link active">
                                                        <button type="button" class="btn btn-success deleteBtn" id="adoptbtn"><b>Send <i class="fa-solid fa-check"></i></b></button>
                                                    </Link>
                                                </div>
                                                <div class="col ">
                                                    <Link to="/viewpets" class="nav-link active">
                                                        <button type="button" class="btn btn-success deleteBtn" id="adoptbtn"><b>Discard <i class="fa-solid fa-times"></i></b></button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
        
    );
}

export default NotifyAdopter;