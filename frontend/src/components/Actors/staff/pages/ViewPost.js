import React,{useState} from 'react';
import {Link, Search} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/ViewPost.css';

import dog from '../img/dog.jpg';

function ViewPost(){
    return(
        <div>
        <section className="section bg-c-light border-top">
            <h3 class="pageTitle">Pet Posts <i class="fa-solid fa-paw"></i></h3>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <div className="searchposts">
                            <input class="searchTerm" type="text" placeholder=" Search here..." name="search"/>
                            <button class="searchButton" type="submit"><i class="fa-solid fa-search"></i></button>
                        </div>
                    </div>
                    <div class="col toggleBtn">
                        <label className="switch">
                            <input type="checkbox" checked/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
          <div className="container">
            <div className="row">
                <div class="admincard col-md-3">     
                    <div className="card shadow cardpadding" id='cardone'>
                        <img src={dog} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/>
                        <div className="card-body" id='cardTitle'>
                        <div className="petdetail">
                            <h6 className="petName"><b>Shadow</b></h6>
                            <div className="underline underlineJusty"></div>
                            <h6 >Mix Breed</h6>
                            <h6 >Male</h6>
                            <h6 >2 Months</h6>
                            <h6 >Brown and White</h6>
                            <h6>Shadow is a calm, innocent and child friendly puppy. Its Vaccinations are up to date. Also It is in good health. </h6>
                        </div>  
                        
                        </div>
                        <Link to="/viewpets" class="nav-link active">
                        <button type="button" class="btn btn-success deleteBtn" id="adoptbtn">Delete Post <i class="fa-solid fa-trash"></i></button>
                        </Link>
                    </div>
                </div>

                <div class="admincard col-md-3">     
                    <div className="card shadow cardpadding" id='cardone'>
                        <img src={dog} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/>
                        <div className="card-body" id='cardTitle'>
                        <div className="petdetail">
                            <h6 className="petName"><b>Shadow</b></h6>
                            <div className="underline underlineJusty"></div>
                            <h6 >Mix Breed</h6>
                            <h6 >Male</h6>
                            <h6 >2 Months</h6>
                            <h6 >Brown and White</h6>
                            <h6>Shadow is a calm, innocent and child friendly puppy. Its Vaccinations are up to date. Also It is in good health. </h6>
                        </div>  
                        
                        </div>
                        <Link to="/viewpets" class="nav-link active">
                        <button type="button" class="btn btn-success deleteBtn" id="adoptbtn">Delete Post <i class="fa-solid fa-trash"></i></button>
                        </Link>
                    </div>
                </div>

                <div class="admincard col-md-3">     
                    <div className="card shadow cardpadding" id='cardone'>
                        <img src={dog} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/>
                        <div className="card-body" id='cardTitle'>
                        <div className="petdetail">
                            <h6 className="petName"><b>Shadow</b></h6>
                            <div className="underline underlineJusty"></div>
                            <h6 >Mix Breed</h6>
                            <h6 >Male</h6>
                            <h6 >2 Months</h6>
                            <h6 >Brown and White</h6>
                            <h6>Shadow is a calm, innocent and child friendly puppy. Its Vaccinations are up to date. Also It is in good health. </h6>
                        </div>  
                        
                        </div>
                        <Link to="/viewpets" class="nav-link active">
                        <button type="button" class="btn btn-success deleteBtn" id="adoptbtn">Delete Post <i class="fa-solid fa-trash"></i></button>
                        </Link>
                    </div>
                </div>

                <div class="admincard col-md-3">     
                    <div className="card shadow cardpadding" id='cardone'>
                        <img src={dog} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/>
                        <div className="card-body" id='cardTitle'>
                        <div className="petdetail">
                            <h6 className="petName"><b>Shadow</b></h6>
                            <div className="underline underlineJusty"></div>
                            <h6 >Mix Breed</h6>
                            <h6 >Male</h6>
                            <h6 >2 Months</h6>
                            <h6 >Brown and White</h6>
                            <h6>Shadow is a calm, innocent and child friendly puppy. Its Vaccinations are up to date. Also It is in good health. </h6>
                        </div>  
                        
                        </div>
                        <Link to="/viewpets" class="nav-link active">
                        <button type="button" class="btn btn-success deleteBtn" id="adoptbtn">Delete Post <i class="fa-solid fa-trash"></i></button>
                        </Link>
                    </div>
                </div>

                <div class="admincard col-md-3">     
                    <div className="card shadow cardpadding" id='cardone'>
                        <img src={dog} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/>
                        <div className="card-body" id='cardTitle'>
                        <div className="petdetail">
                            <h6 className="petName"><b>Shadow</b></h6>
                            <div className="underline underlineJusty"></div>
                            <h6 >Mix Breed</h6>
                            <h6 >Male</h6>
                            <h6 >2 Months</h6>
                            <h6 >Brown and White</h6>
                            <h6>Shadow is a calm, innocent and child friendly puppy. Its Vaccinations are up to date. Also It is in good health. </h6>
                        </div>  
                        
                        </div>
                        <Link to="/viewpets" class="nav-link active">
                        <button type="button" class="btn btn-success deleteBtn" id="adoptbtn">Delete Post <i class="fa-solid fa-trash"></i></button>
                        </Link>
                    </div>
                </div>

                <div class="admincard col-md-3">     
                    <div className="card shadow cardpadding" id='cardone'>
                        <img src={dog} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/>
                        <div className="card-body" id='cardTitle'>
                        <div className="petdetail">
                            <h6 className="petName"><b>Shadow</b></h6>
                            <div className="underline underlineJusty"></div>
                            <h6 >Mix Breed</h6>
                            <h6 >Male</h6>
                            <h6 >2 Months</h6>
                            <h6 >Brown and White</h6>
                            <h6>Shadow is a calm, innocent and child friendly puppy. Its Vaccinations are up to date. Also It is in good health. </h6>
                        </div>  
                        
                        </div>
                        <Link to="/viewpets" class="nav-link active">
                        <button type="button" class="btn btn-success deleteBtn" id="adoptbtn">Delete Post <i class="fa-solid fa-trash"></i></button>
                        </Link>
                    </div>
                </div>

                <div class="admincard col-md-3">     
                    <div className="card shadow cardpadding" id='cardone'>
                        <img src={dog} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/>
                        <div className="card-body" id='cardTitle'>
                        <div className="petdetail">
                            <h6 className="petName"><b>Shadow</b></h6>
                            <div className="underline underlineJusty"></div>
                            <h6 >Mix Breed</h6>
                            <h6 >Male</h6>
                            <h6 >2 Months</h6>
                            <h6 >Brown and White</h6>
                            <h6>Shadow is a calm, innocent and child friendly puppy. Its Vaccinations are up to date. Also It is in good health. </h6>
                        </div>  
                        
                        </div>
                        <Link to="/viewpets" class="nav-link active">
                        <button type="button" class="btn btn-success deleteBtn" id="adoptbtn">Delete Post <i class="fa-solid fa-trash"></i></button>
                        </Link>
                    </div>
                </div>

                <div class="admincard col-md-3">     
                    <div className="card shadow cardpadding" id='cardone'>
                        <img src={dog} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/>
                        <div className="card-body" id='cardTitle'>
                        <div className="petdetail">
                            <h6 className="petName"><b>Shadow</b></h6>
                            <div className="underline underlineJusty"></div>
                            <h6 >Mix Breed</h6>
                            <h6 >Male</h6>
                            <h6 >2 Months</h6>
                            <h6 >Brown and White</h6>
                            <h6>Shadow is a calm, innocent and child friendly puppy. Its Vaccinations are up to date. Also It is in good health. </h6>
                        </div>  
                        
                        </div>
                        <Link to="/viewpets" class="nav-link active">
                        <button type="button" class="btn btn-success deleteBtn" id="adoptbtn">Delete Post <i class="fa-solid fa-trash"></i></button>
                        </Link>
                    </div>
                </div>
             
            </div>
          </div>
        </section>
      </div>   
    )
}

export default ViewPost;