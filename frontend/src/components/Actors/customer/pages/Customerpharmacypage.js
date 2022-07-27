import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/CustomerDoctorappoint.css';
import docvectors from  '../images/docvector.png';
import CustomerDoctorCarousel from './Customerdoctorcarousel';
import Pagination from  './pagination';
import CustomersubNavbar from './CustomersubNavbar';
import Profile from '../images/profile.png';
import medicinetin from '../images/medicinetin.jfif';
import medicinebottle from '../images/medbottle.jfif';
import '../css/Customerpharmacypage.css'
import '../css/profileview.css';
function Customerpharmacypage(){
    return (
        <div>
            <CustomersubNavbar></CustomersubNavbar>
            <div id="pharmacyprofilearea">
                <div class="card" id="profileviewcard">
                    <div class="row">
                        <div class="col col-sm-3 column">
                            <img src={Profile} ></img>
                        </div>

                        <div class="col col-sm-9 column">
                            <div class="card-body">
                                <table class="table" id="profiletable">
                                
                                    <tbody>
                                        <tr>
                                            <th id="profilelabel">Shop name</th>
                                            <td>Arogya Pharmacy</td>
                                        
                                        </tr>

                                        <tr>
                                            <th id="profilelabel">Address</th>
                                            <td>Arogya pharmacy, 29/B, Main street, Akuressa </td>
                                        </tr>

                                        <tr>
                                            <th id="profilelabel">Telephone number</th>
                                            <td>077-2357890</td>
                                        </tr>

                                        <tr>
                                            <th id="profilelabel">Email</th>
                                            <td>absilva@gmail.com</td>
                                        </tr>

                                        <tr>
                                            <th id="profilelabel">Registration number</th>
                                            <td>2017/A/RC/226</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="searchbardiv">
                    <form>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="petsearchbyname" aria-describedby="petsearch" placeholder="search medicine by name"></input>
                            <button type="submit" class="btn btn-success " id="petsearchbtn">Search <i class="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </form>
            </div>
            <h3 class="featuredanimalsheader">Medicine stock <i class="fa-solid fa-paw"></i></h3>
            <div class="row cardbody featuredanimalarea" > 
                <div class="col-md-2 card"  id="card1" >
                    <img src={medicinetin} class="card-img-top" id="featuredimg" alt="Tommy"></img>
                    <div class="card-body">
                        <p class="card-text"></p>
                        <button type="button" class="btn btn-success " id="adoptbtn">Buy <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                    </div>
                </div>

                <div class="col-md-2 card" id="card1">
                    <img src={medicinebottle} class="card-img-top" id="featuredimg" alt="Tommy"></img>
                    <div class="card-body">
                        <p class="card-text"></p>
                        <button type="button" class="btn btn-success " id="adoptbtn">Buy <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                    </div>
                </div>

                <div class="col-md-2 card" id="card1">
                    <img src={medicinetin} class="card-img-top" id="featuredimg" alt="Tommy"></img>
                    <div class="card-body">
                        <p class="card-text"></p>
                        <button type="button" class="btn btn-success " id="adoptbtn">Buy <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                    </div>
                </div>

                <div class="col-md-2 card" id="card1">
                    <img src={medicinebottle} class="card-img-top" id="featuredimg" alt="Tommy"></img>
                    <div class="card-body">
                        <p class="card-text"></p>
                        <button type="button" class="btn btn-success " id="adoptbtn">Buy <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                    </div>
                </div>

                <div class="col-md-2 card"  id="card1" >
                    <img src={medicinebottle} class="card-img-top" id="featuredimg" alt="Tommy"></img>
                    <div class="card-body">
                        <p class="card-text"></p>
                        <button type="button" class="btn btn-success " id="adoptbtn">Buy <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                    </div>
                </div>

                <div class="col-md-2 card" id="card1">
                    <img src={medicinebottle} class="card-img-top" id="featuredimg" alt="Tommy"></img>
                    <div class="card-body">
                        <p class="card-text"></p>
                        <button type="button" class="btn btn-success " id="adoptbtn">Buy <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                    </div>
                </div>
            </div>
            <Pagination></Pagination>
        </div>
    )
}

export default Customerpharmacypage;