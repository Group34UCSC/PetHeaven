import React,{useState} from 'react';
import {Link, Search} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  

import '../css/ViewAdoptee.css';


import dog from '../img/dog.jpg';

function ViewAdoptee(){
    return(
        <div>
        <section className="section bg-c-light border-top">
            <h3 class="pageTitle">Adoptees <i class="fa-solid fa-paw"></i></h3>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <div className="search">
                            <input class="searchTerm" type="text" placeholder=" Search here..." name="search"/>
                            <button class="searchButton" type="submit"><i class="fa-solid fa-search"></i></button>
                        </div>
                    </div>

                    <div class="col">
                        <Link to="/viewpets" class="nav-link active">
                            <button type="button" class="btn btn-success addNewBtn" id="adoptbtn">Accept Adopt Request <i class="fa-solid fa-check"></i> 
                              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                10
                                <span class="visually-hidden">unread messages</span>
                              </span>
                            </button>
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
                    <img src={dog} className="w-50 border-bottom  d-block img-fluid" alt="Services"/>
                    <div className="card-body" id='cardTitle'>
                      <div className="petdetail">
                        <h6 className="petName"><b>Shadow</b></h6>
                        <div className="underline"></div>
                        <h6 >Mix Breed</h6>
                        <h6 >Male</h6>
                        <h6 >2 Months</h6>
                        <h6 >Brown and White</h6>

                        <h6 >Adoptted Date : 20.07.2022</h6>
                        <h6 >Adoptted Age  : 2 months</h6>

                        
                        <h6 >Adopter Name  : P.K.S.Samarasinghe</h6>
                        <h6 >Address       : No 56, James Rd, Kadawatha</h6>
                        <h6 >Contact No    : 0718896233</h6>
                      </div>  
                      
                    </div>
                  <Link to="/viewpets" class="nav-link active">
                    <button type="button" class="btn btn-success deleteBtn" id="adoptbtn">Notify Adopter <i class="fa-solid fa-bell"></i></button>
                  </Link>
                </div>
              </div>

              <div class="admincard col-md-4">
                         
                <div className="card shadow" id='cardone'>
                    <img src={dog} className="w-50 border-bottom  d-block img-fluid" alt="Services"/>
                    <div className="card-body" id='cardTitle'>
                      <div className="petdetail">
                        <h6 className="petName"><b>Shadow</b></h6>
                        <div className="underline"></div>
                        <h6 >Mix Breed</h6>
                        <h6 >Male</h6>
                        <h6 >2 Months</h6>
                        <h6 >Brown and White</h6>

                        <h6 >Adoptted Date : 20.07.2022</h6>
                        <h6 >Adoptted Age  : 2 months</h6>

                        
                        <h6 >Adopter Name  : P.K.S.Samarasinghe</h6>
                        <h6 >Address       : No 56, James Rd, Kadawatha</h6>
                        <h6 >Contact No    : 0718896233</h6>
                      </div>  
                      
                    </div>
                  <Link to="/viewpets" class="nav-link active">
                    <button type="button" class="btn btn-success deleteBtn" id="adoptbtn">Notify Adopter <i class="fa-solid fa-bell"></i></button>
                  </Link>
                </div>
              </div>


              <div class="admincard col-md-4">
                         
                         <div className="card shadow" id='cardone'>
                             <img src={dog} className="w-50 border-bottom  d-block img-fluid" alt="Services"/>
                             <div className="card-body" id='cardTitle'>
                               <div className="petdetail">
                                 <h6 className="petName"><b>Shadow</b></h6>
                                 <div className="underline"></div>
                                 <h6 >Mix Breed</h6>
                                 <h6 >Male</h6>
                                 <h6 >2 Months</h6>
                                 <h6 >Brown and White</h6>
         
                                 <h6 >Adoptted Date : 20.07.2022</h6>
                                 <h6 >Adoptted Age  : 2 months</h6>
         
                                 
                                 <h6 >Adopter Name  : P.K.S.Samarasinghe</h6>
                                 <h6 >Address       : No 56, James Rd, Kadawatha</h6>
                                 <h6 >Contact No    : 0718896233</h6>
                               </div>  
                               
                             </div>
                           <Link to="/viewpets" class="nav-link active">
                             <button type="button" class="btn btn-success deleteBtn" id="adoptbtn">Notify Adopter <i class="fa-solid fa-bell"></i></button>
                           </Link>
                         </div>
                       </div>


                       <div class="admincard col-md-4">
                         
                         <div className="card shadow" id='cardone'>
                             <img src={dog} className="w-50 border-bottom  d-block img-fluid" alt="Services"/>
                             <div className="card-body" id='cardTitle'>
                               <div className="petdetail">
                                 <h6 className="petName"><b>Shadow</b></h6>
                                 <div className="underline"></div>
                                 <h6 >Mix Breed</h6>
                                 <h6 >Male</h6>
                                 <h6 >2 Months</h6>
                                 <h6 >Brown and White</h6>
         
                                 <h6 >Adoptted Date : 20.07.2022</h6>
                                 <h6 >Adoptted Age  : 2 months</h6>
         
                                 
                                 <h6 >Adopter Name  : P.K.S.Samarasinghe</h6>
                                 <h6 >Address       : No 56, James Rd, Kadawatha</h6>
                                 <h6 >Contact No    : 0718896233</h6>
                               </div>  
                               
                             </div>
                           <Link to="/viewpets" class="nav-link active">
                             <button type="button" class="btn btn-success deleteBtn" id="adoptbtn">Notify Adopter <i class="fa-solid fa-bell"></i></button>
                           </Link>
                         </div>
                       </div>


                       <div class="admincard col-md-4">
                         
                         <div className="card shadow" id='cardone'>
                             <img src={dog} className="w-50 border-bottom  d-block img-fluid" alt="Services"/>
                             <div className="card-body" id='cardTitle'>
                               <div className="petdetail">
                                 <h6 className="petName"><b>Shadow</b></h6>
                                 <div className="underline"></div>
                                 <h6 >Mix Breed</h6>
                                 <h6 >Male</h6>
                                 <h6 >2 Months</h6>
                                 <h6 >Brown and White</h6>
         
                                 <h6 >Adoptted Date : 20.07.2022</h6>
                                 <h6 >Adoptted Age  : 2 months</h6>
         
                                 
                                 <h6 >Adopter Name  : P.K.S.Samarasinghe</h6>
                                 <h6 >Address       : No 56, James Rd, Kadawatha</h6>
                                 <h6 >Contact No    : 0718896233</h6>
                               </div>  
                               
                             </div>
                           <Link to="/viewpets" class="nav-link active">
                             <button type="button" class="btn btn-success deleteBtn" id="adoptbtn">Notify Adopter <i class="fa-solid fa-bell"></i></button>
                           </Link>
                         </div>
                       </div>


                       <div class="admincard col-md-4">
                         
                         <div className="card shadow" id='cardone'>
                             <img src={dog} className="w-50 border-bottom  d-block img-fluid" alt="Services"/>
                             <div className="card-body" id='cardTitle'>
                               <div className="petdetail">
                                 <h6 className="petName"><b>Shadow</b></h6>
                                 <div className="underline"></div>
                                 <h6 >Mix Breed</h6>
                                 <h6 >Male</h6>
                                 <h6 >2 Months</h6>
                                 <h6 >Brown and White</h6>
         
                                 <h6 >Adoptted Date : 20.07.2022</h6>
                                 <h6 >Adoptted Age  : 2 months</h6>
         
                                 
                                 <h6 >Adopter Name  : P.K.S.Samarasinghe</h6>
                                 <h6 >Address       : No 56, James Rd, Kadawatha</h6>
                                 <h6 >Contact No    : 0718896233</h6>
                               </div>  
                               
                             </div>
                           <Link to="/viewpets" class="nav-link active">
                             <button type="button" class="btn btn-success deleteBtn" id="adoptbtn">Notify Adopter <i class="fa-solid fa-bell"></i></button>
                           </Link>
                         </div>
                       </div>
         

                         
                          
            </div>
          </div>
        </section>
      </div>   
    )
}

export default ViewAdoptee;