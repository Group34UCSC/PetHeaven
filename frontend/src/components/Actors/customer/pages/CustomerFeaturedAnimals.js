import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import puppy1 from '../images/puppy1.jfif';
import puppy2 from '../images/puppy2.jfif';
import kitty1 from '../images/kitties1.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  

import '../css/CustomerFeaturedAnimals.css';
function CustomerFeaturedAnimals(){
    return(
            <div class="bg-c-light container">
                <h3 class="featuredanimalsheader">Featured Pets <i class="fa-solid fa-paw"></i></h3>
                
                
                    <div class="row cardbody featuredanimalarea" > 
                        <div class="col-md-3 card"  id="card1" >
                            
                                <img src={puppy2} class="card-img-top" id="featuredimg" alt="Tommy"></img>
                                <div class="card-body">
                                    <p class="card-text"></p>
                                    <button type="button" class="btn btn-success " id="adoptbtn">Adopt pet <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                                </div>
                        </div>

                        <div class="col-md-3 card" id="card1">
                            <img src={puppy2} class="card-img-top" id="featuredimg" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <button type="button" class="btn btn-success " id="adoptbtn">Adopt pet <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                                
                            </div>
                        </div>

                        <div class="col-md-3 card" id="card1">
                            <img src={kitty1} class="card-img-top" id="featuredimg" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <button type="button" class="btn btn-success " id="adoptbtn">Adopt pet <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                            </div>
  
                        </div>

                        <div class="col-md-3 card" id="card1">
                            <img src={kitty1} class="card-img-top" id="featuredimg" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <button type="button" class="btn btn-success " id="adoptbtn">Adopt pet <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                            </div>
  
                        </div>
                </div>
   
            </div>
        )
}

export default CustomerFeaturedAnimals;