
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import puppy1 from '../images/puppy1.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/CustomerFindpet.css';
import CustomerFeaturedAnimals from './CustomerFeaturedAnimals';
import DoctorAppointment from './DoctorAppointment';
import Pagination from './pagination';
import Customerservices from './Customerservices';
function CustomerFindpet(){
    return(
            <div>
                
                <div class=" bg-c-light border-bottom border-success searchpets">
                    <p class="desc1">We have Dogs <i class="fa fa-dog"></i> and cats <i class="fa fa-cat"></i> who need space in your kind hearts. If you are interesting to adopt hit the request button and  
                    add a new member to your home. <i class="fa fa-home"></i>
                    </p>   
                </div>

                <CustomerFeaturedAnimals></CustomerFeaturedAnimals>
                <h3 class="searchanimalsheader">Search pets <i class="fa-solid fa-paw"></i> from thousands of pets <i class="fa-solid fa-paw"></i>
                 in our petheaven  who will be<br></br>
                perfect family member for you. Search cats and dogs with your favourite color and age  </h3>
                
                    

                    <div class="dropdown" id ="findpetdropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            Type
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Dog</a></li>
                            <li><a class="dropdown-item" href="#">cat</a></li>
                        </ul>

                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            color
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#"></a>White</li>
                            <li><a class="dropdown-item" href="#">Black</a></li>
                            <li><a class="dropdown-item" href="#">Brown</a></li>
                            <li><a class="dropdown-item" href="#">Mixed</a></li>
                        </ul>

                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            Age
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">baby</a></li>
                            <li><a class="dropdown-item" href="#">Young</a></li>
                            <li><a class="dropdown-item" href="#">adult</a></li>
                        </ul>
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
                        <div class="col-sm-2 card">
                            <img src={puppy1} class="card-img-top" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <Link to="adoptrequestform"><button type="button" class="btn btn-success" id="petadopthbtn">Adopt <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                            </div>
                            
                        </div>

                        <div class="col-sm-2 card">
                            <img src={puppy1} class="card-img-top" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <Link to="adoptrequestform"><button type="button" class="btn btn-success" id="petadopthbtn">Adopt <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-sm-2 card">
                            <img src={puppy1} class="card-img-top" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <Link to="adoptrequestform"><button type="button" class="btn btn-success" id="petadoptbtn">Adopt <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-sm-2 card">
                            <img src={puppy1} class="card-img-top" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <Link to="adoptrequestform"><button type="button" class="btn btn-success" id="petadoptbtn">Adopt <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                            </div>
                            
                        </div>

                        <div class="col-sm-2 card">
                            <img src={puppy1} class="card-img-top" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <Link to="adoptrequestform"><button type="button" class="btn btn-success" id="petadoptbtn">Adopt <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-sm-2 card">
                            <img src={puppy1} class="card-img-top" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <Link to="adoptrequestform"><button type="button" class="btn btn-success" id="petadoptbtn">Adopt <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                            </div>
                        </div>
                    </div>
                <Pagination></Pagination>
                <Customerservices></Customerservices>
            </div>
    )
        
}

export default CustomerFindpet;