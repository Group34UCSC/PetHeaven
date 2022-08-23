
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import puppy1 from '../images/puppy1.jfif';
import puppy2 from '../images/puppy2.jfif';
import puppy4 from '../images/puppy4.jpg';
import kitties1 from '../images/kitties1.jfif';
import kitties3 from '../images/kitties3.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  

import '../css/CustomerFindpet.css';
import CustomerFeaturedAnimals from './CustomerFeaturedAnimals';
import DoctorAppointment from './DoctorAppointment';
import Pagination from './pagination';
import Customerservices from './Customerservices';
import Customerdocmessagetab from './CustomerDocmessagetab';
import NavbarUsers from '../../../includes/NavbarUsers';
function CustomerFindpet(){
    return(
            <div>

                <NavbarUsers/>
                <div class="border-bottom border-success">
                    <div class="border-bottom border-success searchpets">
                        <p class="desc1">We have Dogs <i class="fa fa-dog"></i> and cats <i class="fa fa-cat"></i> who need space in your kind hearts. If you are interesting to adopt hit the request button and  
                        add a new member to your home. <i class="fa fa-home"></i>
                        </p>   
                    </div>
                </div>
                <CustomerFeaturedAnimals></CustomerFeaturedAnimals>
                <h3 class="searchanimalsheader">Search pets <i class="fa-solid fa-paw"></i> from thousands of pets <i class="fa-solid fa-paw"></i>
                 in our petheaven  who will be<br></br>
                perfect family member for you. Search cats and dogs with your favourite color and age  </h3>
                    <div class="dropdown" id ="findpetdropdown">
                        <select class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                <option class="dropdown-item" >Type</option>
                                <option class="dropdown-item" >Dog</option>
                                <option class="dropdown-item" >cat</option>
                        </select>
                        
                        <select class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                <option class="dropdown-item" >Color</option>
                                <option class="dropdown-item" >Black</option>
                                <option class="dropdown-item" >White</option>
                                <option class="dropdown-item" >Gold</option>
                                <option class="dropdown-item" >Mixed</option>
                        </select>

                        <select class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                <option class="dropdown-item" >Age</option>
                                <option class="dropdown-item" >less than 6mo</option>
                                <option class="dropdown-item" >6mo - 2yrs</option>
                                <option class="dropdown-item" >over 2yrs</option>
                        </select>
                    </div>

                    <div class="searchbardiv">
                        <form>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="petsearchbyname" aria-describedby="petsearch" placeholder="search pets by name"></input>
                                <button type="submit" class="btn btn-success " id="petsearchbtn">Search <i class="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </form>
                    </div>

                    <div class=" bg-c-light row" id="findpetimgarea"> 
                        <div class="col-12 col-sm-2 card">
                            <h5 class="text-success petname">Jill</h5>
                            <div className="underline underlineJusty"></div>
                            <img src={puppy4} class="card-img-top"  id="findpetimgs" alt="Tommy"></img>
                            <div class="petage  card-body">
                            <h6 class="text-danger">2 months</h6>
                            <h6 class="text-dark">Brown</h6>
                                <Link to="viewpetdetails"><button type="button" class="btn btn-success" id="petadopthbtn">View pet<i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                            </div>
                            
                        </div>

                        <div class="col-12 col-md-2 card">
                            <h5 class="text-success petname">Joggi</h5>
                            <div className="underline underlineJusty"></div>
                            <img src={puppy1} class="card-img-top"  id="findpetimgs" alt="Tommy"></img>
                            <div class="petage card-body">
                            <h6 class="text-danger">2 months</h6>
                            <h6 class="text-dark">Black and white</h6>
                                <Link to="viewpetdetails"><button type="button" class="btn btn-success" id="petadopthbtn">View pet <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-12 col-md-2 card">
                            <h5 class="text-success petname">Blacky</h5>
                            <div className="underline underlineJusty"></div>
                            <img src={puppy2} class="card-img-top"  id="findpetimgs" alt="Tommy"></img>
                            <div class="petage card-body">
                            <h6 class="text-danger">2 months</h6>
                            <h6 class="text-dark">Black</h6>
                                <Link to="viewpetdetails"><button type="button" class="btn btn-success" id="petadoptbtn">View pet <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-12 col-md-2 card">
                            <h5 class="text-success petname">Jenn</h5>
                            <div className="underline underlineJusty"></div>
                            <img src={kitties3} class="card-img-top"  id="findpetimgs" alt="Tommy"></img>
                            <div class="petage card-body">
                            <h6 class="text-danger">2 months</h6>
                            <h6 class="text-dark">Grey</h6>
                                <Link to="viewpetdetails"><button type="button" class="btn btn-success" id="petadoptbtn">View pet <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                            </div>
                            
                        </div>

                        <div class="col-12 col-md-2 card">
                            <h5 class="text-success petname">Ocky</h5>
                            <div className="underline underlineJusty"></div>
                            <img src={puppy1} class="card-img-top"  id="findpetimgs" alt="Tommy"></img>
                            <div class="petage card-body">
                            <h6 class="text-danger">2 months</h6>
                            <h6 class="text-dark">Black and white</h6>
                                <Link to="viewpetdetails"><button type="button" class="btn btn-success" id="petadoptbtn">View pet <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-12 col-md-2 card">
                            <h5 class="text-success petname">Phil</h5>
                            <div className="underline underlineJusty"></div>
                            <img src={kitties1} class="card-img-top" id="findpetimgs" alt="Tommy"></img>
                            <div class="petage card-body">
                                <h6 class="text-danger">2 months</h6>
                                <h6 class="text-dark">Brown</h6>
                                <Link to="viewpetdetails"><button type="button" class="btn btn-success" id="petadoptbtn">View pet <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                            </div>
                        </div>
                    </div>
                <Pagination></Pagination>
                <Customerservices></Customerservices>
                <Customerdocmessagetab></Customerdocmessagetab>
            </div>
    )
}
export default CustomerFindpet;