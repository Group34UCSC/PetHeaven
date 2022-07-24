import React,{useState} from 'react';
import {Link, Search} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import '../css/AddNewPet.css';

function AddNewPet()
{
    return(
        <div>
            <section className="py-4 ">
            <div className="container ">
                <div className="row bg-success text-white titlebox"> 
                    <div className="col-md-4 my-auto"></div>
                    <h3 className="text-center ">Add New Pet <i class="fa-solid fa-paw"></i></h3>
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
                                    <i class="fa-solid fa-grin-alt"></i><b>Add Details correctly.....</b>
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
                                    <div className="form-group">
                                        <label className="mb-1">Age</label>
                                        <input type="text" className="form-control" placeholder=""></input>
                                    </div>
                                   
                                
                                </div>
                                <div className="col-md-6 border-start">
                                    
                                    <div className="form-group">
                                        <label className="mb-1">Colour</label>
                                        <input type="text" className="form-control" placeholder=""></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Received Date</label>
                                        <input type="date" className="form-control" placeholder=""></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Medical Status</label>
                                        <textarea rows="4" className="form-control" placeholder=""></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">About</label>
                                        <textarea rows="4" className="form-control" placeholder=""></textarea>
                                    </div>
                                    <div className="form-group py-3">
                                        <button type="button" className="btn btn-success shadow w-100 postPetBtn"><b>Post Pet</b></button>
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

export default AddNewPet;