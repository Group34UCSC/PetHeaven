import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../css/CustomerServices.css';


function Customerservices(){
    return(
        <div class="bg-c-light">
            <div class= "row col-sm-12 border-top border-success" id="servicedescription">
                <h3>Pet Heaven is no only about pet adopting. You can get everything<br></br> 
                        you want for your pt <i class="fa-solid fa-paw"></i> from pet heaven.<br></br>
                    Checkout what PetHeaven offer for you and your pet <i class="fa-solid fa-paw"></i>
                </h3>
            </div>

            <div class="bg-c-light row">
                <div class="col-sm-3  text-bg-success servicescard">
                    <div class="card-body text-success" id="servicecard">
                        <h1 class="card-title" id="desccardhead">Pharmacies <i class="fa-solid fa-capsules"></i></h1>
                        <h5 class="card-subtitle mb-2" id="desccardarea">All medicine needs of your pet can find from our registered pharmacies</h5>
                        <button class="btn btn-secondary" id="reqbutton">Visit</button>
                    </div>
                </div>

                <div class=" col-sm-3 text-bg-success servicescard">
                    <div class=" card-body text-success" id="servicecard">
                        <h1 class="card-title" id="desccardhead">Veteranians <i class="fa-solid fa-stethoscope"></i></h1>
                        <h5 class="card-subtitle mb-2" id="desccardarea">Appoint doctor and channel your sick pets with consultation service</h5>
                        <button class="btn btn-secondary" id="reqbutton">Channel</button>
                    
                    </div>
                </div>
                <div class=" col-sm-3 text-bg-success  servicescard">
                    <div class="card-body text-success" id="servicecard">
                        <h1 class="card-title" id="desccardhead">Tool shops <i class="fa-solid fa-bag-shopping"></i></h1>
                        <h5 class="card-subtitle mb-2 " id="desccardarea">Go and shopping for your pet from thousands of our registerd shops </h5>
                        <button class="btn btn-secondary" id="reqbutton">Shopping</button>
                    </div>
                </div>

            </div>
            

        </div>
        
    )
}

export default Customerservices;