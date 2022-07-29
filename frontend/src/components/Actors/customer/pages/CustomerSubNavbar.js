import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import puppy1 from '../images/puppy1.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/Customersubnavbar.css';
import CustomerFeaturedAnimals from './CustomerFeaturedAnimals';
import DoctorAppointment from './DoctorAppointment';
import Pagination from './pagination';
import Customerservices from './Customerservices';

function Customersubnavbar(){
    return(
        <div class="bg-light" id="subnavarea">
            <ul class="nav nav-pills nav-fill">
                <li class="nav-item" id="custsubnaitem">
                    <a class="bg-warning nav-link active" aria-current="page" href="#">Find pets<i class="fa fa-dog"></i></a>
                </li>
                <li class="nav-item" id="custsubnaitem">
                    <a class="text-dark nav-link" href="#">Veteranians<i class="fa fa-stethoscope"></i></a>
                </li>
                <li class="nav-item" id="custsubnaitem">
                    <a class="text-dark nav-link" href="#">Pharmacies <i class="fa-solid fa-prescription-bottle-medical"></i></a>
                </li>
                <li class="nav-item" id="custsubnaitem">
                    <a class="text-dark nav-link">Shopping <i class="fa-solid fa-cart-shopping"></i></a>
                </li>
                <li class="nav-item" id="custsubnaitem">
                    <Link to="/SignUp/findapet/messages"><a class="text-dark nav-link" aria-current="page" href="#">Messages <i class="fa fa-message"></i></a></Link>
                </li>
                <li class="nav-item" id="custsubnaitemprofile">
                    <Link to="/SignUp/findapet/myprofile"><a class="text-dark nav-link" aria-current="page" href="#">My profile <i class="fa fa-user"></i></a></Link>
                </li>
            </ul>
        </div>
    
    )
}

export default Customersubnavbar;