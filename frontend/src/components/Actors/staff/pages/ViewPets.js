import React,{useState} from 'react';
import {Link, Search} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  

import '../css/ViewPets.css';


import dog from '../img/dog.jpg';
import dog2 from '../img/d4.jpg';
import dog3 from '../img/d3.jpg';
import dog5 from '../img/d5.jpg';
import dog6 from '../img/d6.jpg';
import dog7 from '../img/d7.jpg';

function ViewPets(){
    return(
        <div>
        <section className="section bg-c-light border-top">
            <h3 class="pageTitle">Our Pets <i class="fa-solid fa-paw"></i></h3>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <div className="search">
                            <input class="searchTerm" type="text" placeholder=" Search here..." name="search"/>
                            <button class="searchButton" type="submit"><i class="fa-solid fa-search"></i></button>
                        </div>
                    </div>

                    <div class="col">
                        <Link to="/addnewpet" class="nav-link active">
                            <button type="button" class="btn btn-success addNewBtn" id="adoptbtn">Add New Pet <i class="fa-solid fa-paw"></i></button>
                        </Link>
                    </div>
                    <div class="col viewtoggleBtn">
                        <label className="switch">
                            <input type="checkbox" checked/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
          <div className="container ">
            <div className="row">

              <div class="admincard col-md-4">       
                <div className="card shadow" id='cardone'>
                    <div >
                      <img src={dog} className="imgcover rounded" alt="Services"/>
                    </div>
                    <div className="card-body" id='cardTitle'>
                      <div className="petdetail">
                        <div className='maindetails'>
                          <h6 className="petName"><b>Shadow</b></h6>
                          <div className="underline"></div>
                          <h6 >Mix Breed</h6>
                          <h6 >Male</h6>
                          <h6>2 Months</h6>
                          <h6>Brown and White</h6>
                        </div>

                          <div class="d-grid gap-2 ">
                            <button type="button" class="btn btn-outline-success editmedicalBtn" id="adoptbtn" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">Medical Status <i class="fa-solid fa-stethoscope"></i></button>
                          </div>
                  
                        <h6 >Shadow is a calm, innocent and child friendly puppy. Its Vaccinations are up to date. Also It is in good health. </h6>
                      </div>  
                      
                    </div>
                    
                    <Link to="/postpets" class="nav-link active d-grid gap-2">
                      <button type="button" class="btn btn-success postpetBtn" id="adoptbtn">Post Pet <i class="fa-solid fa-newspaper"></i></button>
                  </Link>
                </div>
              </div>

              <div class="admincard col-md-4">       
                <div className="card shadow" id='cardone'>
                    <div className='dogimg'>
                      <img src={dog2} className="imgcover rounded" alt="Services"/>
                    </div>
                    
                    <div className="card-body" id='cardTitle'>
                      <div className="petdetail">
                        <div className='maindetails'>
                          <h6 className="petName"><b>Browny</b></h6>
                          <div className="underline"></div>
                          <h6>Normal</h6>
                          <h6>Male</h6>
                          <h6>4 Years</h6>
                          <h6>Brown, Light Brown</h6>
                        </div>

                          <div class="d-grid gap-2 ">
                            <button type="button" class="btn btn-outline-success editmedicalBtn" id="adoptbtn" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">Medical Status <i class="fa-solid fa-stethoscope"></i></button>
                          </div>
                  
                        <h6 >Browny is a blowzy animal. Also it is best for security. Its Vaccinations are up to date. Also It is in good health. </h6>
                      </div>  
                      
                    </div>
                    
                    <Link to="/postpets" class="nav-link active d-grid gap-2">
                      <button type="button" class="btn btn-success postpetBtn" id="adoptbtn">Post Pet <i class="fa-solid fa-newspaper"></i></button>
                  </Link>
                </div>
              </div>

              <div class="admincard col-md-4">       
                <div className="card shadow" id='cardone'>
                    <img src={dog3} className="imgcover rounded" alt="Services"/>
                    <div className="card-body" id='cardTitle'>
                      <div className="petdetail">
                        <div className='maindetails'>
                          <h6 className="petName"><b>Shaily</b></h6>
                          <div className="underline"></div>
                          <h6>Normal</h6>
                          <h6>Female</h6>
                          <h6>3 Months</h6>
                          <h6>Brown, White, Black</h6>
                        </div>

                          <div class="d-grid gap-2 ">
                            <button type="button" class="btn btn-outline-success editmedicalBtn" id="adoptbtn" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">Medical Status <i class="fa-solid fa-stethoscope"></i></button>
                          </div>
                  
                        <h6 >Shaily is a qute and calm. It is a child friendly puppy. Its Vaccinations are up to date. Also It is in good health. </h6>
                      </div>  
                      
                    </div>
                    
                    <Link to="/postpets" class="nav-link active d-grid gap-2">
                      <button type="button" class="btn btn-success postpetBtn" id="adoptbtn">Post Pet <i class="fa-solid fa-newspaper"></i></button>
                  </Link>
                </div>
              </div>

              <div class="admincard col-md-4">       
                <div className="card shadow" id='cardone'>
                    <img src={dog5} className="imgcover rounded" alt="Services"/>
                    <div className="card-body" id='cardTitle'>
                      <div className="petdetail">
                        <div className='maindetails'>
                          <h6 className="petName"><b>Blacky</b></h6>
                          <div className="underline"></div>
                          <h6>Mix Breed</h6>
                          <h6>Male</h6>
                          <h6>2 Years</h6>
                          <h6>Black, Light Brown</h6>
                        </div>

                          <div class="d-grid gap-2 ">
                            <button type="button" class="btn btn-outline-success editmedicalBtn" id="adoptbtn" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">Medical Status <i class="fa-solid fa-stethoscope"></i></button>
                          </div>
                  
                        <h6 >Blacky is a innocent pet. It is a child friendly pet and playful pet. Its Vaccinations are up to date. Also It is in good health. </h6>
                      </div>  
                      
                    </div>
                    
                    <Link to="/postpets" class="nav-link active d-grid gap-2">
                      <button type="button" class="btn btn-success postpetBtn" id="adoptbtn">Post Pet <i class="fa-solid fa-newspaper"></i></button>
                  </Link>
                </div>
              </div>

              <div class="admincard col-md-4">       
                <div className="card shadow" id='cardone'>
                    <img src={dog6} className="imgcover rounded" alt="Services"/>
                    <div className="card-body" id='cardTitle'>
                      <div className="petdetail">
                        <div className='maindetails'>
                          <h6 className="petName"><b>Tommy</b></h6>
                          <div className="underline"></div>
                          <h6>Normal</h6>
                          <h6>Male</h6>
                          <h6>5 Years</h6>
                          <h6>Brown, White</h6>
                        </div>

                          <div class="d-grid gap-2 ">
                            <button type="button" class="btn btn-outline-success editmedicalBtn" id="adoptbtn" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">Medical Status <i class="fa-solid fa-stethoscope"></i></button>
                          </div>
                  
                        <h6 >Tommy is a innocent and calm. It is a silent pet but better friend for loneliness. Its Vaccinations are up to date. Also It is in good health. </h6>
                      </div>  
                      
                    </div>
                    
                    <Link to="/postpets" class="nav-link active d-grid gap-2">
                      <button type="button" class="btn btn-success postpetBtn" id="adoptbtn">Post Pet <i class="fa-solid fa-newspaper"></i></button>
                  </Link>
                </div>
              </div>


              <div class="admincard col-md-4">       
                <div className="card shadow" id='cardone'>
                    <img src={dog7} className="imgcover rounded" alt="Services"/>
                    <div className="card-body" id='cardTitle'>
                      <div className="petdetail">
                        <div className='maindetails'>
                          <h6 className="petName"><b>Bobby</b></h6>
                          <div className="underline"></div>
                          <h6>Normal</h6>
                          <h6>Male</h6>
                          <h6>3 month</h6>
                          <h6>Brown, Black</h6>
                        </div>

                          <div class="d-grid gap-2 ">
                            <button type="button" class="btn btn-outline-success editmedicalBtn" id="adoptbtn" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">Medical Status <i class="fa-solid fa-stethoscope"></i></button>
                          </div>
                  
                        <h6 >Bobby is a very active and playful pet. It is a child friendly pet. Its Vaccinations are up to date. Also It is in good health. </h6>
                      </div>  
                      
                    </div>
                    
                    <Link to="/postpets" class="nav-link active d-grid gap-2">
                      <button type="button" class="btn btn-success postpetBtn" id="adoptbtn">Post Pet <i class="fa-solid fa-newspaper"></i></button>
                  </Link>
                </div>
              </div>


            </div>
          </div>
        </section>
         
                <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                          <div class="container-fluid justify-content-start">
                            <button class="btn btn-outline-success me-2 medicalbtn" type="button"> Vaccination <i class="fa-solid fa-newspaper"></i></button>
                            <button class="btn btn-outline-success me-2 medicalbtn" type="button"> Injuries <i class="fa-solid fa-newspaper"></i></button>
                            <button class="btn btn-outline-success me-2 medicalbtn" type="button"> Others <i class="fa-solid fa-newspaper"></i></button>
                          </div>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <div className="container donationTable">
                          <div className="row ">
                            {/* <table class="table  table-stripped table-hover"> */}
                            <table class="table table-stripped table-hover">
                             
                              <tbody className='text-center'>
                                <tr>
                                  <td scope="row">18.07.2020</td>
                                  <td className='vaccineendalign'>Vaccinated for Rabies</td>
                                </tr>
                                <tr>
                                  <td scope="row">12.07.2020</td>
                                  <td className='vaccineendalign'>Vaccinated for Distemper</td>
                                </tr>
                                <tr>
                                  <td scope="row">8.06.2020</td>
                                  <td className='vaccineendalign'>Vaccinated for Parainfluenza</td>
                                </tr>
                              </tbody>
                            </table>
                          </div> 
                        </div>
                      <div class="modal-footer">
                        {/* <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button> */}
                        <button type="button" class="btn btn-success" data-bs-target="#exampleModal" data-bs-toggle="modal">  Update Status <i class="fa-solid fa-edit"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
          
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                               
                                            
                        <div className="card card-body shadow">
                            <div className="row">
                                <div className="col-md-12 border-left">
                                    <h6><i class="fa-solid fa-smile-beam"></i><b> Update correctly..... </b></h6>
                                    <hr/> 
                                    <div className="form-group">
                                        <label className="mb-1 mt-1">Pet Id</label>
                                        <input type="text" className="form-control" placeholder=""></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Type</label>
                                        <textarea rows="2" className="form-control" placeholder="">
                                          <select>
                                            <label>Vaccination</label>
                                            <label>Injuries</label>
                                            <label>Other</label>
                                          </select>
                                        </textarea>
                                    </div>  
                                    <div className="form-group">
                                        <label className="mb-1 mt-1">Date</label>
                                        <input type="text" className="form-control" placeholder=""></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Medical Status</label>
                                        <textarea rows="2" className="form-control" placeholder="Enter Your Medical Status"></textarea>
                                    </div>                    
                                    <div className="form-group py-3">
                                        <div class="container px-4 text-center">
                                            <div class="row gx-5 ">
                                                    <div class="col ">
                                                        <Link to="/viewpets" class="nav-link active">
                                                            <button type="button" className="btn btn-success shadow w-100 postPetBtn"><b>Update Status  <i class="fa-solid fa-edit"></i></b></button>
                                                        </Link>
                                                    </div>
                                                    <div class="col ">
                                                        <button type="button" className="btn btn-danger shadow w-100 postPetBtn" data-bs-dismiss="modal"><b>Discard <i class="fa-solid fa-times"></i></b></button>
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
          </div>     
    )
}

export default ViewPets;