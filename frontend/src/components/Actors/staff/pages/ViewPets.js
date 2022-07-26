import React,{useState} from 'react';
import {Link, Search} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  

import '../css/ViewPets.css';


import dog from '../img/dog.jpg';

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
                    <img src={dog} className="w-50 border-bottom  d-block img-fluid" alt="Services"/>
                    <div className="card-body" id='cardTitle'>
                      <div className="petdetail">
                        <div className='maindetails'>
                          <h6 className="petName"><b>Shadow</b></h6>
                          <div className="underline"></div>
                          <h6 className='ashtext'>Mix Breed</h6>
                          <h6 className='ashtext'>Male</h6>
                          <h6 className='ashtext'>2 Months</h6>
                          <h6 className='ashtext'>Brown and White</h6>
                        </div>

                        <div className='medicalstatus'>
                          <h6 >01/05/2020 - Vaccinated for Rabies</h6>
                          <h6 >06/06/2020 - Injured left leg from dogs bitten </h6>
                          <h6 >10/06/2022 - Back to normal from left leg injury</h6>
                          <h6 >10/06/2022 - Back to normal from left leg injury</h6>
                          <h6 >10/06/2022 - Back to normal from left leg injury</h6>
                          <h6 >10/06/2022 - Back to normal from left leg injury</h6>

                          <Link to="/updatemedicalstatus" class="nav-link active d-grid gap-2 ">
                            <button type="button" class="btn btn-success editmedicalBtn" id="adoptbtn">Update Medical Status <i class="fa-solid fa-edit"></i></button>
                          </Link>
                  
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
                    <img src={dog} className="w-50 border-bottom  d-block img-fluid" alt="Services"/>
                    <div className="card-body" id='cardTitle'>
                      <div className="petdetail">
                        <div className='maindetails'>
                          <h6 className="petName"><b>Shadow</b></h6>
                          <div className="underline"></div>
                          <h6 className='ashtext'>Mix Breed</h6>
                          <h6 className='ashtext'>Male</h6>
                          <h6 className='ashtext'>2 Months</h6>
                          <h6 className='ashtext'>Brown and White</h6>
                        </div>

                        <div className='medicalstatus'>
                          <h6 >01/05/2020 - Vaccinated for Rabies</h6>
                          <h6 >06/06/2020 - Injured left leg from dogs bitten </h6>
                          <h6 >10/06/2022 - Back to normal from left leg injury</h6>
                          <h6 >10/06/2022 - Back to normal from left leg injury</h6>
                          <h6 >10/06/2022 - Back to normal from left leg injury</h6>
                          <h6 >10/06/2022 - Back to normal from left leg injury</h6>
                          
                          <Link to="/updatemedicalstatus" class="nav-link active d-grid gap-2">
                          <button type="button" class="btn btn-success editmedicalBtn" id="adoptbtn">Update Medical Status <i class="fa-solid fa-edit"></i></button>
                          </Link>
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
                    <img src={dog} className="w-50 border-bottom  d-block img-fluid" alt="Services"/>
                    <div className="card-body" id='cardTitle'>
                      <div className="petdetail">
                        <div className='maindetails'>
                          <h6 className="petName"><b>Shadow</b></h6>
                          <div className="underline"></div>
                          <h6 className='ashtext'>Mix Breed</h6>
                          <h6 className='ashtext'>Male</h6>
                          <h6 className='ashtext'>2 Months</h6>
                          <h6 className='ashtext'>Brown and White</h6>
                        </div>

                        <div className='medicalstatus'>
                          <h6 >01/05/2020 - Vaccinated for Rabies</h6>
                          <h6 >06/06/2020 - Injured left leg from dogs bitten </h6>
                          <h6 >10/06/2022 - Back to normal from left leg injury</h6>
                          <h6 >10/06/2022 - Back to normal from left leg injury</h6>
                          <h6 >10/06/2022 - Back to normal from left leg injury</h6>
                          <h6 >10/06/2022 - Back to normal from left leg injury</h6>
                          
                          <Link to="/updatemedicalstatus" class="nav-link active d-grid gap-2">
                          <button type="button" class="btn btn-success editmedicalBtn" id="adoptbtn">Update Medical Status <i class="fa-solid fa-edit"></i></button>
                          </Link>
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
                    <img src={dog} className="w-50 border-bottom  d-block img-fluid" alt="Services"/>
                    <div className="card-body" id='cardTitle'>
                      <div className="petdetail">
                        <div className='maindetails'>
                          <h6 className="petName"><b>Shadow</b></h6>
                          <div className="underline"></div>
                          <h6 className='ashtext'>Mix Breed</h6>
                          <h6 className='ashtext'>Male</h6>
                          <h6 className='ashtext'>2 Months</h6>
                          <h6 className='ashtext'>Brown and White</h6>
                        </div>

                        <div className='medicalstatus'>
                          <h6 >01/05/2020 - Vaccinated for Rabies</h6>
                          <h6 >06/06/2020 - Injured left leg from dogs bitten </h6>
                          <h6 >10/06/2022 - Back to normal from left leg injury</h6>
                          <h6 >10/06/2022 - Back to normal from left leg injury</h6>
                          <h6 >10/06/2022 - Back to normal from left leg injury</h6>
                          <h6 >10/06/2022 - Back to normal from left leg injury</h6>
                          
                          <Link to="/updatemedicalstatus" class="nav-link active d-grid gap-2">
                          <button type="button" class="btn btn-success editmedicalBtn" id="adoptbtn">Update Medical Status <i class="fa-solid fa-edit"></i></button>
                          </Link>
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
                    <img src={dog} className="w-50 border-bottom  d-block img-fluid" alt="Services"/>
                    <div className="card-body" id='cardTitle'>
                      <div className="petdetail">
                        <div className='maindetails'>
                          <h6 className="petName"><b>Shadow</b></h6>
                          <div className="underline"></div>
                          <h6 className='ashtext'>Mix Breed</h6>
                          <h6 className='ashtext'>Male</h6>
                          <h6 className='ashtext'>2 Months</h6>
                          <h6 className='ashtext'>Brown and White</h6>
                        </div>

                        <div className='medicalstatus'>
                          <h6 >01/05/2020 - Vaccinated for Rabies</h6>
                          <h6 >06/06/2020 - Injured left leg from dogs bitten </h6>
                          <h6 >10/06/2022 - Back to normal from left leg injury</h6>
                          <h6 >10/06/2022 - Back to normal from left leg injury</h6>
                          <h6 >10/06/2022 - Back to normal from left leg injury</h6>
                          <h6 >10/06/2022 - Back to normal from left leg injury</h6>
                          
                          <Link to="/updatemedicalstatus" class="nav-link active d-grid gap-2">
                          <button type="button" class="btn btn-success editmedicalBtn" id="adoptbtn">Update Medical Status <i class="fa-solid fa-edit"></i></button>
                          </Link>
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
                    <img src={dog} className="w-50 border-bottom  d-block img-fluid" alt="Services"/>
                    <div className="card-body" id='cardTitle'>
                      <div className="petdetail">
                        <div className='maindetails'>
                          <h6 className="petName"><b>Shadow</b></h6>
                          <div className="underline"></div>
                          <h6 className='ashtext'>Mix Breed</h6>
                          <h6 className='ashtext'>Male</h6>
                          <h6 className='ashtext'>2 Months</h6>
                          <h6 className='ashtext'>Brown and White</h6>
                        </div>

                        <div className='medicalstatus'>
                          <h6 >01/05/2020 - Vaccinated for Rabies</h6>
                          <h6 >06/06/2020 - Injured left leg from dogs bitten </h6>
                          <h6 >10/06/2022 - Back to normal from left leg injury</h6>
                          <h6 >10/06/2022 - Back to normal from left leg injury</h6>
                          <h6 >10/06/2022 - Back to normal from left leg injury</h6>
                          <h6 >10/06/2022 - Back to normal from left leg injury</h6>
                          
                          <Link to="/updatemedicalstatus" class="nav-link active d-grid gap-2">
                          <button type="button" class="btn btn-success editmedicalBtn" id="adoptbtn">Update Medical Status <i class="fa-solid fa-edit"></i></button>
                          </Link>
                        </div>

                        <h6 >Shadow is a calm, innocent and child friendly puppy. Its Vaccinations are up to date. Also It is in good health. </h6>
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
      </div>   
    )
}

export default ViewPets;