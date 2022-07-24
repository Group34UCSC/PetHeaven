import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/CustomerPettoolstore.css';
import pstorevectors from  '../images/pettoolstore.jpg';
import Pagination from  './pagination';
function CustomerPettoolstore(){

    return(
        <div>
            <div>
                
            </div>
            <h3 class="searchpharmacyheading">Find Every thing for your pet <i class="fa fa-paw"></i> from our online market where number of 
            registered shops <i class="fa fa-shop"></i> with everything to your pet <i class="fa fa-paw"></i> to sell</h3>

            <div class="mb-3" id="pharmacysearchbars">
                <label for="Pharmacyname" class="form-label">Search by name <i class="fa fa-magnifying-glass"></i></label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter of name your Pharmacy"></input>
                <button class="btn btn-success">Search <i class="fa-solid fa-magnifying-glass"></i></button>
            </div>

            <div class="mb-3" id="pharmacysearchbars">
                <label for="Pharmacyname" class="form-label">Search by Item <i class="fa fa-magnifying-glass"></i></label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter of name your Medicine"></input>
                <button class="btn btn-success">Search <i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            
            <div class="row"> 
                        <div class="col-sm-3" id="petstorecard">
                            <img src={pstorevectors} class="card-img-top" id="pettoolstoreimg" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button type="button" class="btn btn-success" id="channelbtn">Channel</button>
                            </div>
                        </div>

                        <div class="col-sm-3" id="petstorecard">
                            <img src={pstorevectors} class="card-img-top" id="pettoolstoreimg" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button type="button" class="btn btn-success" id="channelbtn">Channel</button>
                            </div>
                        </div>

                        <div class="col-sm-3" id="petstorecard" >
                            <img src={pstorevectors} class="card-img-top" id="pettoolstoreimg" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button type="button" class="btn btn-success" id="channelbtn">Channel</button>
                            </div>
                        </div>

                        <div class=" col-sm-3" id="petstorecard">
                            <img src={pstorevectors} class="card-img-top" id="pettoolstoreimg" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button type="button" class="btn btn-success" id="channelbtn">Channel</button>
                            </div>
                        </div>
                </div>
                <Pagination></Pagination>
        </div>
    )
    
}

export default CustomerPettoolstore;