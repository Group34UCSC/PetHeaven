import React,{useState, useEffect} from 'react';
import {Link, Search} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  

import '../css/ViewAdoptee.css';

import ad1 from '../img/ad1.jpg';
import ad2 from '../img/ad2.jpg';
import ad3 from '../img/ad3.jpg';
import NavbarUsers from '../../../includes/NavbarUsers';

function ViewAdoptee(){

  const [adoptees,setAdoptees]=useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/staffmember/viewadoptees").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        setAdoptees(resp)
        console.log(resp);
      })
    })
  },[])
  console.warn(adoptees)
  console.log(adoptees)

    return(
        <div>
        <NavbarUsers/>
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
                        <Link to="viewadopterrequests" class="nav-link active">
                            <button type="button" class="btn btn-success addNewBtn" id="postpetbtn">Accept Adopt Request <i class="fa-solid fa-check"></i> 
                              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger notfycount">
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
          <div className="container">
            <div className="row">

              {adoptees.map((item,i)=>
                <div class="admincard col-md-4">       
                <div className="card shadow" id='cardone'>
                    <img src={ad1} className="imgcover rounded" alt="Services"/>
                    <div className="card-body" id='cardTitle'>
                      <div className="petdetail">
                        <div className='maindetails'>
                          <h6 className="petName"><b>{item.name}</b></h6>
                          <div className="underline"></div>
                          <h6 className='ashtext'>{item.breed}</h6>
                          <h6 className='ashtext'>{item.gender}</h6>
                          <h6 className='ashtext'>{item.age}</h6>
                          <h6 className='ashtext'>{item.color}</h6>
                        </div>
                        
                        <div className='adopterdetail'></div>
                          <h6 >Adopter Name  : <span className='adopterlink' data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-user"></i> {item.firstName} {item.lastName}</span></h6>
                          <h6 >Address       : {item.address}</h6>
                          <h6 >Contact No    : {item.mobile}</h6>
                          <h6 >Adoptted Date : {item.adoptedDate}</h6>
                          <h6 >Adoptted Age  : {item.adoptedAge}</h6>
                      </div>  
                      
                    </div>
                  <Link to="notifyadopter" class="nav-link active d-grid gap-2">
                    <button type="button" class="btn btn-success notifyBtn" id="postpetbtn">Notify Adopter <i class="fa-solid fa-bell"></i></button>
                  </Link>
                </div>
              </div>

              )}
                 
            </div>
          </div>
        </section>
        <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered ">
                    <div class="modal-content adoptercard">
                               
                                            
                        <div className="card card-body shadow ">
                            <div className="row">
                                <div className="col-md-12 border-left">
                                    <h6><i class="fa-solid fa-user"></i> L.H.S.P.Kahandawa</h6>
                                    <hr/> 
                                    <div className="form-group">
                                        <h6>Contact Number : 0758863044</h6>
                                    </div>
                                    <div className="form-group">
                                        <h6>Rough Monthly Income : 92 000.00</h6>
                                    </div>
                                    <div className="form-group">
                                        <h6>Kids : 2 babies</h6>
                                    </div>   
                                    <div className="form-group">
                                        <h6>Other Pets : Have a cat</h6>
                                    </div>  

                                    <div className="form-group py-3">
                                        <div class="container px-4 text-center">
                                            <div class="row gx-5 ">
                                                    <div class="col ">
                                                        <button type="button" className="btn btn-danger shadow w-100 postPetBtn" data-bs-dismiss="modal"><b>Close <i class="fa-solid fa-times"></i></b></button>
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

export default ViewAdoptee;