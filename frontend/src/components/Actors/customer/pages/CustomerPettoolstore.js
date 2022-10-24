import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/CustomerPettoolstore.css';
import {Link} from 'react-router-dom';
import pstorevectors from  '../images/pettoolstore.jpg';
import Pagination from  './pagination';

import NavbarUsers from '../../../includes/NavbarUsers';

function CustomerPettoolstore(){

    return(
        <div>
            <NavbarUsers/>
            <h3 id="searchpetstoreheading">Find Every thing for your pet <i class="fa fa-paw"></i> from our online market where number of 
            registered shops <i class="fa fa-shop"></i> with everything to your pet <i class="fa fa-paw"></i> to sell</h3>
            <div id="pettoolstorearea">
                <div class="mb-3" id="petstoresearchbars">
                    <label for="Pharmacyname" class="form-label">Search by area <i class="fa fa-magnifying-glass"></i></label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter of area of your shop"></input>
                    <button class="btn btn-success" id="petstoresearchbtn">Search <i class="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div class="mb-3" id="petstoresearchbars">
                    <label for="Pharmacyname" class="form-label">Search by Item <i class="fa fa-magnifying-glass"></i></label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter of name your Medicine"></input>
                    <button class="btn btn-success"id="petstoresearchbtn">Search <i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            
                <div class="row"> 
                    <div class="col-sm-2 card" id="petstorecard">
                        <h4 class="text-success petname">Nika</h4>
                        <div className="underline underlineJusty"></div>
                            <img src={pstorevectors} class="card-img-top" id="pettoolstoreimg" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <h6 class="petage text-danger">No.20, Nugegoda Road, Pitakotte</h6>
                                <Link to="petstore"><button type="button" class="btn btn-success" id="petstorebtn">Shop <i class="fa fa-bag"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-sm-2 card" id="petstorecard">
                            <h4 class="text-success petname">PetWorld stores</h4>
                            <div className="underline underlineJusty"></div>
                            <img src={pstorevectors} class="card-img-top" id="pettoolstoreimg" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <h6 class="petage text-danger">No.20, Nugegoda Road, Pitakotte</h6>
                                <Link to="petstore"><button type="button" class="btn btn-success" id="petstorebtn">Shop <i class="fa fa-bag"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-sm-2 card" id="petstorecard" >
                            <h4 class="text-success petname">Paw n baw</h4>
                            <div className="underline underlineJusty"></div>
                            <img src={pstorevectors} class="card-img-top" id="pettoolstoreimg" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <h6 class="petage text-danger">No.20, Nugegoda Road, Pitakotte</h6>
                                <Link to="petstore"><button type="button" class="btn btn-success" id="petstorebtn">Shop <i class="fa fa-bag"></i></button></Link>
                            </div>
                        </div>

                        <div class=" col-sm-2 card" id="petstorecard">
                            <h4 class="text-success petname">Paw n baw</h4>
                            <div className="underline underlineJusty"></div>
                            <img src={pstorevectors} class="card-img-top" id="pettoolstoreimg" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <h6 class="petage text-danger">No.20, Nugegoda Road, Pitakotte</h6>
                                <Link to="petstore"><button type="button" class="btn btn-success" id="petstorebtn">Shop <i class="fa fa-bag"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-sm-2 card" id="petstorecard">
                            <h4 class="text-success petname">Paw n baw</h4>
                            <div className="underline underlineJusty"></div>
                            <img src={pstorevectors} class="card-img-top" id="pettoolstoreimg" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <h6 class="petage text-danger">No.20, Nugegoda Road, Pitakotte</h6>
                                <Link to="petstore"><button type="button" class="btn btn-success" id="petstorebtn">Shop <i class="fa fa-bag"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-sm-2 card" id="petstorecard" >
                            <h4 class="text-success petname">Bawwa world</h4>
                            <div className="underline underlineJusty"></div>
                            <img src={pstorevectors} class="card-img-top" id="pettoolstoreimg" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <h6 class="petage text-danger">No.20, Nugegoda Road, Pitakotte</h6>
                                <Link to="petstore"><button type="button" class="btn btn-success" id="petstorebtn">Shop <i class="fa fa-bag"></i></button></Link>
                            </div>
                        </div>
                </div>

            </div>
            
                <Pagination></Pagination>
        </div>
    )
    
}

export default CustomerPettoolstore;