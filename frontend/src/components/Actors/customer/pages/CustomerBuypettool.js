
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/CustomerFindpet.css';
import cage from '../images/cage.jfif';
import NavbarUsers from '../../../includes/NavbarUsers';

function CustomerBuypettool() {
    return(
        <div>
            <NavbarUsers/>
            <section className="section bg-c-light border-top">
                <h4 class="col-sm-12 petdetailsheader text-success">Paw and Baw pet world<i class="fa-solid fa-paw"></i></h4>
                <h6 class="col-sm-12 petdetailsheader ">No 20,Nawala road,Narahenpita <i class="fa-solid fa-paw"></i></h6>
                <div class="admincard col-12">     
                    <div className="card shadow cardpadding" id='cardone'>
                        <div class="row">
                            <div class="col-sm-3 column left">
                                <img src={cage} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/>
                            </div>
                            <div class="col-sm-9 column right card-body" id='cardTitle'>

                                <div class="card-body">
                                    <table class="table card-body" id="profiletable">
                                        <tbody>
                                            <tr>
                                                <th id="profilelabel">Item Name</th>
                                                <td id="profileitem">Firm Steel Cage</td>
                                            </tr>
                                    
                                            <tr>
                                                <th id="profilelabel">Brand</th>
                                                <td id="profileitem">LE STEEL</td>
                                            </tr>
                                    
                                            <tr>
                                                <th id="profilelabel">Manufacture Country</th>
                                                <td id="profileitem">Rumania</td>
                                            </tr>

                                            <tr id ="expirydaterow">
                                                <th  class="text-warning">Expiry date</th>
                                                <td>Not related</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="col-sm-9" id="petdescription">  A rigid dog cage, which is made by stainless steel, Includes a front door and side box to give food
                                    </div>
                    
                                </div>
                            </div>
                            <button type="button" class=" col-sm-10 btn btn-success deleteBtn" id="adoptbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">Buy <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default CustomerBuypettool;