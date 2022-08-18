import React from "react";
import {useRef, useEffect, useState } from "react"; 
import {Link} from 'react-router-dom';
import Axios from 'axios';
import '../css/DoctorConsultation.css';
import NavbarUsers from "../../../includes/NavbarUsers";
import DoctorViewPetHistory from "./DoctorViewPetHistory";





// import NavbarUsers from "../../../includes/NavbarUsers";

function DoctorConsultation() {
    return(
     
     <div> <NavbarUsers />

     <DoctorViewPetHistory />

<div class="row m-md-5 m-3 ">
        <div class="col-lg-4 bg-blue py-5 px-5">
            <h4 class="text-center text-white mb-4">Contact Details</h4>
            <div class="row">
                <div class=" col-lg-4 col-md-5 offset-lg-0 offset-md-2 col-4 ">
                    <p class="fw-bold">Call Us:</p>
                </div>
                <div class=" col-lg-8 col-md-5 col-8">
                    <p>+2 392 3929 210</p>
                </div>
                <div class=" col-lg-4 col-md-5 offset-lg-0 offset-md-2 col-4">
                    <p class="fw-bold">Location:</p>
                </div>
                <div class=" col-lg-8 col-md-5 col-8">
                    <p>San Francisco, California,USA</p>
                </div>
                <div class=" col-lg-4 col-md-5 offset-lg-0 offset-md-2 col-4">
                    <p class="fw-bold">Work hours:</p>
                </div>
                <div class=" col-lg-8 col-md-5 col-8">
                    <p class="">Monday-Friday 8:00AM-8:00PM Sunday-closed</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 bg-red py-5 px-5">
            <form action="">
                <h4 class="text-center text-white mb-4">Make An Appointment</h4>
                <div class="row">
                    <div class="col-md-6 col-12 my-md-0 my-2">
                        <input type="text" class="form-control bg-darkred" placeholder="Your Full Name"/>
                    </div>
                    <div class="col-md-6 col-12 my-md-0 my-2 ">
                        <input type="email" class="form-control bg-darkred" placeholder="Your Email"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-12 my-2">
                        <input type="text" class="form-control bg-darkred" placeholder="Your Phone Number"/>
                    </div>
                    <div class="col-md-6 col-12 my-2">
                        <select name="" id="dropDown" class="form-control bg-darkred shadow-none">
                            <option value="" hidden selected>Services</option>
                            <option value="service 1">Service 1</option>
                            <option value="service 1">Service 2</option>
                            <option value="service 1">Service 3</option>
                        </select>
                    </div>
                    <div class="">
                        <textarea cols="10" rows="3" class="form-control bg-darkred shadow-none"
                            placeholder="Message"></textarea>
                    </div>
                    <div class=" my-2"> <button class="btn w-100 shadow-none text-uppercase msg-btn">Send
                            Message</button> </div>

                </div>
            </form>
        </div>
        <div class="col-lg-4 bg-blue py-5 px-5">
            <h4 class="text-center text-white mb-4">Maintenance Services</h4>
            <div class="col">
                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa a minima explicabo similique,
                    ipsum quam quibusdam quae. Assumenda quibusdam molestiae eveniet qui voluptatum nesciunt vero
                    molestias quas sint quia? Ratione?</p>
            </div>
            <div class=""><button class="btn my-3 shadow-none text-uppercase">More Services</button></div>
        </div>
    </div>



            </div>
     
    );
}
 export default DoctorConsultation;

