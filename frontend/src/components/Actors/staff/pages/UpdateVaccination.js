import React,{useState} from 'react';
import {Link, Search} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/UpdateVaccination.css';
import NavbarUsers from '../../../includes/NavbarUsers';

function UpdateVaccination() {
    return(
        <div>
        <NavbarUsers/>
            <section className="py-4 ">
            <div className="container ">
                <div className="row bg-success text-white titlebox"> 
                    <div className="col-md-4 my-auto"></div>
                    <h3 className="text-center "> Update Medical Status <i class="fa-solid fa-syringe"></i></h3>
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
                                        <b><i class="fa-solid fa-smile"></i> Update Details correctly.....</b>
                                    </h6>
                                    <hr/>
                                    <form>
                                        <div className="form-group">
                                            <label className="mb-1">Pet Name</label>
                                            <input type="text" className="form-control" placeholder="Enter Pet name"></input>
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1">Apointed Date</label>
                                            <input type="date" className="form-control" placeholder="Select Saccinated Date"></input>
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1">Medical Status Type</label>
                                            <select class="form-select" aria-label="Default select example">
                                            <option selected>Vaccination</option>
                                            <option value="1">Vaccination</option>
                                            <option value="2">Injuries</option>
                                            <option value="2">Others</option>
                                        </select>
                                            </div>
                                        <div className="form-group">
                                            <label className="mb-1">Medical Status</label>
                                            <textarea rows="4" className="form-control" placeholder="Enter Medical Status"></textarea>
                                        </div>
                                        <div className="form-group py-3">
                                            <div class="container px-4 text-center">
                                                <div class="row gx-5 ">
                                                    <div class="col ">
                                                        <button type="submit" className="btn btn-success shadow w-100 postPetBtn" data-bs-toggle="modal" data-bs-target="#exampleModal"><b>Update  <i class="fa-solid fa-check"></i></b></button>
                                                    </div>
                                                    <div class="col ">
                                                        <button type="reset" className="btn btn-danger shadow w-100 postPetBtn"><b>Discard  <i class="fa-solid fa-times"></i></b></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                               
                                            
                        <div className="card card-body shadow">
                            <div className="row">
                                <div className="col-md-12 border-left">
                                    <div className="form-group confimtext">
                                        <label className="mb-1 mt-1"><b>Are you sure to update ?</b></label>
                                    </div>                  
                                    <div className="form-group py-3">
                                        <div class="container px-4 text-center">
                                            <div class="row gx-5 ">
                                                    <div class="col ">
                                                        <Link to="/viewpets" class="nav-link active">
                                                            <button type="button" className="btn btn-success shadow w-100 postPetBtn"><b>Yes  <i class="fa-solid fa-check"></i></b></button>
                                                        </Link>
                                                    </div>
                                                    <div class="col ">
                                                        <button type="button" className="btn btn-danger shadow w-100 postPetBtn" data-bs-dismiss="modal"><b>No <i class="fa-solid fa-times"></i></b></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>       
                        </div>
                    </div>
                </div>
        </div>
        
    );
}

export default UpdateVaccination;