import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/CustomerDoctorappoint.css';
import docvectors from  '../images/docvector.png';
import CustomerDoctorCarousel from './Customerdoctorcarousel';
import Pagination from  './pagination';
import CustomersubNavbar from './CustomersubNavbar';
function CustomerDoctorAppoint(){

    return(
        <div>
            <CustomersubNavbar></CustomersubNavbar>
            <CustomerDoctorCarousel></CustomerDoctorCarousel>

            <h3 class="searchdoctorheading">Select best doctor for your pet among thousands of our registered qualified veteranians</h3>

            <form id="doctorform">
                <div class=" col-sm mb-3" id="doctorsearchbar">
                    <label for="doctorname" class="form-label">Search by name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter of name your doctor"></input>
                </div>
                <button class="btn btn-success "id="docsearchbtn">Search <i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
            
            
            <div class="row" id="doctorsearchcararea"> 
                        <div class="col-sm-3 card" id="doctorcard">
                            <img src={docvectors} class="card-img-top"  id="docproimg" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <button type="button" class="btn btn-success" id="channelbtn">Channel <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                            </div>
                        </div>

                        <div class="col-sm-3 card" id="doctorcard">
                            <img src={docvectors} class="card-img-top"  id="docproimg" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <button type="button" class="btn btn-success" id="channelbtn">Channel <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                            </div>
                        </div>

                        <div class="col-sm-3 card" id="doctorcard">
                            <img src={docvectors} class="card-img-top" id="docproimg" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <button type="button" class="btn btn-success" id="channelbtn">Channel <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                            </div>
                        </div>

                        <div class="col-sm-3 card" id="doctorcard">
                            <img src={docvectors} class="card-img-top"  id="docproimg" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <button type="button" class="btn btn-success" id="channelbtn">Channel <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                            </div>
                        </div>
                </div>
                <Pagination></Pagination>
        </div>
    )
    
}

export default CustomerDoctorAppoint;