import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/CustomerAdoptpet.css';
import docvectors from  '../images/docvector.png';
import CustomersubNavbar from './CustomersubNavbar';
import Pagination from  './pagination';

function CustomerAdoptRequest() {
    return(
        <div>
            <CustomersubNavbar></CustomersubNavbar>
            <div  class="bg-c-light">
                <h1 class="bg-c-light col-sm-12 requestheader">Adopt Request form</h1>
                <h2 class="bg-c-light col-sm-12 requestdescription border-bottom border-success"> Fill this form with correct information.<br></br> PetHeaven team 
                will send you a notification whether you can take this pet or not</h2>
            </div>
            
            <form class=" requestform " id="requestform">
                <div class="customerformrows row">
                    <label for="inputfirst name" class="col-sm-12 col-form-label " id="reqformlabels">Full name</label>
                    <div class="col-sm-10">
                        <input type="text" class="formarea form-control" id="inputfirstname"></input>
                    </div>
                </div>

                <div class="customerformrows row">
                    <label for="inputlast name" class="col-sm-12 col-form-label" id="reqformlabels">Phone number</label>
                    <div class="col-sm-10">
                        <input type="phonenumber" class="formarea form-control" id="phonenumber"></input>
                    </div>
                </div>

                <div class="customerformrows row">
                    <label for="inputfirst name" class="col-sm-12 col-form-label" id="reqformlabels">Your rough monthly income</label>
                    <div class="col-sm-10">
                        <input type="text" class="formarea form-control" id="inputfirstname"></input>
                    </div>
                </div>

                <div class="customerformrows row">
                    <label for="inputlast name" class="col-sm-12 col-form-label" id="reqformlabels">Do you have any pets in your home currently</label>
                </div>
                    
                <div class="radiobtns">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                    <label class="form-check-label" for="flexRadioDefault1">Yes</label>

                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                    <label class="form-check-label" for="flexRadioDefault1">No</label>
                </div> 

                <div class="customerformrows row">
                    <label for="inputlast name" class="col-sm-12 col-form-label" id="reqformlabels">If yes enter type of the pet</label>
                </div>
                    
                <div class="radiobtns">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                    <label class="form-check-label" for="flexRadioDefault1">Dog</label>

                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                    <label class="form-check-label" for="flexRadioDefault1">cat</label>
                </div>       

                <div class="customerformrows row">
                    <label for="inputlast name" class="col-sm-12 col-form-label">Do you have any kids in your home</label>
                </div>
                <div class="radiobtns">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                    <label class="form-check-label" for="flexRadioDefault1">Yes</label>
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                        <label class="form-check-label" for="flexRadioDefault1">No</label>
                </div>        

                <div class="customerformrows row">
                    <label for="inputfirst name" class="col-sm-12 col-form-label" id="reqformlabels">Any additional details</label>
                    <div class="col-sm-10">
                        <textarea type="textarea" class="form-control" id="inputfirstname"></textarea>
                    </div>
                </div>

                <div class="btnclass">
                    <button class="btn btn-success" type="submit" value="Submit">submit <i class="fa-solid fa-check"></i></button>
                    <button class="btn btn-danger" type="reset" value="Reset">Reset <i class="fa-solid fa-xmark"></i></button>
                </div>
            </form>
        </div>
        
    )
}

export default CustomerAdoptRequest;