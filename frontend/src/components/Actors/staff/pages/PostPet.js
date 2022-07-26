import React,{useState} from 'react';
import {Link, Search} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import '../css/PostPet.css';

function PostPet()
{
    return(
        <div>
            <section className="py-4 ">
            <div className="container ">
                <div className="row bg-success text-white titlebox"> 
                    <div className="col-md-4 my-auto"></div>
                    <h3 className="text-center ">Post New Pet <i class="fa-solid fa-paw"></i></h3>
                </div>
            </div>
            </section>
            <div>
               
            </div>
            <section className="section bg-c-light">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 border-left">
                                    <h6>
                                    <i class="fa-solid fa-grin-alt"></i><b> Add Details correctly.....</b>
                                    </h6>
                                    <hr/>
                                    <div className="form-group">
                                        <label className="mb-1">Pet Name</label>
                                        <input type="text" className="form-control" placeholder=""></input>
                                    </div>
                                    <div className="form-group">
                                        <div class="mb-3">
                                            <label for="formFile" class="form-label">Pet Image</label>
                                            <input class="form-control" type="file" id="formFile"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Pet Type</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Select Pet Type</option>
                                            <option value="1">Dog</option>
                                            <option value="2">Cat</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Breed</label>
                                        <input type="text" className="form-control" placeholder=""></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Gender</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Select Pet Gender</option>
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                        </select>
                                    </div>
                                   
                                
                                </div>
                                <div className="col-md-6 border-start">
                                    <div className="form-group">
                                        <label className="mb-1">Age</label>
                                        <input type="text" className="form-control" placeholder=""></input>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label className="mb-1">Colour</label>
                                        <input type="text" className="form-control" placeholder=""></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">About</label>
                                        <textarea rows="4" className="form-control" placeholder=""></textarea>
                                    </div>
                                    <div className="form-group py-3">
                                        <button type="button" className="btn btn-success shadow w-100 postPetBtn" data-bs-toggle="modal" data-bs-target="#exampleModal"><b>Post Pet <i class="fa-solid fa-check"></i></b></button>
                                    </div>
                                    
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
                                        <label className="mb-1 mt-1"><b>Are you sure to post ?</b></label>
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

export default PostPet;