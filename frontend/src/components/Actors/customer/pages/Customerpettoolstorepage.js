import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/CustomerDoctorappoint.css';
import docvectors from  '../images/docvector.png';
import CustomerDoctorCarousel from './Customerdoctorcarousel';
import Pagination from  './pagination';
import Profile from '../images/profile.png';
import cage from '../images/cage.jfif';
import pendants from '../images/pendants.jfif';
import catfood from '../images/catfood.jpg';
import dogchain from '../images/dogchain.jpg';
import meo from '../images/meo.jpg';
import dogplate from '../images/dogplate.jfif';
import '../css/Customerpharmacypage.css'
import '../css/profileview.css';
import NavbarUsers from '../../../includes/NavbarUsers';
function Customerpettoolstorepage(){
    return (
        <div>
            <NavbarUsers/>
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
                                            <td id="profileitem">Paw n baw world</td>
                                        </tr>

                                        <tr>
                                            <th id="profilelabel">Address</th>
                                            <td id="profileitem"> Paw n baw,no 11, Old Tangalle road, Matara</td>
                                        </tr>

                                        <tr>
                                            <th id="profilelabel">Telephone number</th>
                                            <td id="profileitem">077-2357890</td>
                                        </tr>

                                        <tr>
                                            <th id="profilelabel">Email</th>
                                            <td id="profileitem">absilva@gmail.com</td>
                                        </tr>

                                        <tr>
                                            <th id="profilelabel">Registration number</th>
                                            <td id="profileitem">2017/A/RC/226</td>
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
                            <input type="text" class="form-control" id="petsearchbyname" aria-describedby="petsearch" placeholder="search item by name"></input>
                            <button type="submit" class="btn btn-success " id="petsearchbtn">Search <i class="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </form>
            </div>
            <h3 class="featuredanimalsheader">Item stock <i class="fa-solid fa-paw"></i></h3>
            <div class="row cardbody featuredanimalarea" > 
                <div class="col-md-2 card"  id="card1" >
                    <h4 class="text-success petname">Iron cage</h4>
                    <div className="underline underlineJusty"></div>
                    <img src={cage} class="card-img-top" id="featuredimg" alt="Tommy"></img>
                    <div class="card-body">
                        <h6 class="petage text-danger">Rs 7550/=</h6>
                        <Link to="pettooldetails"><button type="button" class="btn btn-success " id="adoptbtn">Buy <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                    </div>
                </div>

                <div class="col-md-2 card" id="card1">
                    <h4 class="text-success petname">Steel chain</h4>
                    <div className="underline underlineJusty"></div>
                    <img src={dogchain} class="card-img-top" id="featuredimg" alt="Tommy"></img>
                    <div class="card-body">
                        <h6 class="petage text-danger">Rs 1,045/=</h6>
                        <Link to="pettooldetails"><button type="button" class="btn btn-success " id="adoptbtn">Buy <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                    </div>
                </div>

                <div class="col-md-2 card" id="card1">
                    <h4 class="text-success petname">Dog plate</h4>
                    <div className="underline underlineJusty"></div>
                    <img src={dogplate} class="card-img-top" id="featuredimg" alt="Tommy"></img>
                    <div class="card-body">
                        <h6 class="petage text-danger">Rs 560/=</h6>
                        <button type="button" class="btn btn-success " id="adoptbtn">Buy <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                    </div>
                </div>

                <div class="col-md-2 card" id="card1">
                    <h4 class="text-success petname">Steel Pendant</h4>
                    <div className="underline underlineJusty"></div>
                    <img src={pendants} class="card-img-top" id="featuredimg" alt="Tommy"></img>
                    <div class="card-body">
                        <h6 class="petage text-danger">Rs 2,500/=</h6>
                        <button type="button" class="btn btn-success " id="adoptbtn">Buy <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                    </div>
                </div>

                <div class="col-md-2 card"  id="card1" >
                    <h4 class="text-success petname">Cat Smitten</h4>
                    <div className="underline underlineJusty"></div>
                    <img src={catfood} class="card-img-top" id="featuredimg" alt="Tommy"></img>
                    <div class="card-body">
                        <h6 class="petage text-danger">Rs. 2,100/=</h6>
                        <button type="button" class="btn btn-success " id="adoptbtn">Buy <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                    </div>
                </div>

                <div class="col-md-2 card" id="card1">
                    <h4 class="text-success petname">Me-o Biscuits</h4>
                    <div className="underline underlineJusty"></div>
                    <img src={meo} class="card-img-top" id="featuredimg" alt="Tommy"></img>
                    <div class="card-body">
                        <h6 class="petage text-danger">Rs 780/=</h6>
                        <button type="button" class="btn btn-success " id="adoptbtn">Buy <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                    </div>
                </div>
            </div>
            <Pagination></Pagination>
        </div>
    )
}

export default Customerpettoolstorepage;