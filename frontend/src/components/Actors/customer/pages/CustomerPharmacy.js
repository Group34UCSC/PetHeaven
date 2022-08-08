import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 
import {Link} from 'react-router-dom'; 
import '../css/CustomerPharmacy.css';
import phavectors from  '../images/pharmacy.png';
import Pagination from  './pagination';
import CustomersubNavbar from './Customersubnavbar';
function CustomerPharmacy(){

    return(
        <div >
            <CustomersubNavbar></CustomersubNavbar>
            <div>
                <p class= "searchpharmacyheading">Find all medicine <i class="fa-solid fa-pills"></i> need for your pet <i class="fa fa-paw"></i> from our registered
                online pharmacy <i class="fa-solid fa-prescription-bottle-medical"></i> shops and receive the medicines for your door steps on time <i class="fa fa-clock"></i></p>
            </div>
            <form>
                <div class="mb-3" id="pharmacysearchdivs">
                    <label for="Pharmacyname" class="form-label">Search by name <i class="fa-solid fa-magnifying-glass"></i></label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter of name your Pharmacy"></input>
                    <button class="btn btn-success" id="custsearchbtns">Search <i class="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div class="mb-3" id="pharmacysearchdivs">
                    <label for="Pharmacyname" class="form-label">Search by Medicine <i class="fa-solid fa-magnifying-glass"></i></label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter of name your Medicine"></input>
                    <button class="btn btn-success" id="custsearchbtns">Search <i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </form>
            <div class=" row"> 
                        <div class="col-sm-3" id="pharmarea">
                            <img src={phavectors} class="card-img-top"  id="imgpharm" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <Link to="pharmacystore"><button type="button" class="btn btn-success" id="phachannelbtn">visit <i class="fa fa-pills"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-sm-3"  id="pharmarea">
                            <img src={phavectors} class="card-img-top"  id="imgpharm"  alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <Link to="pharmacystore"><button type="button" class="btn btn-success" id="phachannelbtn">visit <i class="fa fa-pills"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-sm-3"  id="pharmarea">
                            <img src={phavectors} class="card-img-top" id="imgpharm" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <Link to="pharmacystore"><button type="button" class="btn btn-success" id="phachannelbtn">visit <i class="fa fa-pills"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-sm-3"  id="pharmarea">
                            <img src={phavectors} class="card-img-top"  id="imgpharm" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <Link to="pharmacystore"><button type="button" class="btn btn-success" id="phachannelbtn"> visit <i class="fa fa-pills"></i></button></Link>
                            </div>
                        </div>
                </div>
                <Pagination></Pagination>
        </div>
    )
    
}

export default CustomerPharmacy;