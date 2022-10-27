import React,{useState, useEffect} from 'react';
import {Link, Search} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/ViewAdopterRequests.css';

import dog from '../img/dog.jpg';
import NavbarUsers from '../../../includes/NavbarUsers';


function ViewAdopterRequests(){

    const [name, setName] = useState('');
    const [contact,setContact]=useState('');
    const [income,setIncome] = useState('');
    const [type, setType] = useState('');
    const [pettype, setPettype] = useState('');
    const [petdetail,setPetdetail] = useState('');
    const [kids,setKids] = useState('');
    const [buttonText, setButtonText] = useState('Accept Request');



    const handleSubmit = async e => {
        e.preventDefault();
        setButtonText('Accepted ... ');
        try {
            const body = {name,contact,income,pettype,petdetail};
            console.log(name);
            
            const response = await fetch(
            "http://localhost:5000/staffmember/addnewadopter",
                {
                    method: "POST",
                    headers: {
                    "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
            );
            console.log(response);
        }
        catch (err) {
            console.log("Falil");
        }
    } 

    const  AcceptAdopterRequest = async (item) => {
       
        console.log(item);
        var raw = "";
        console.log("___test data arrived___");
         var requestOptions = {
              method: 'POST',
              body: raw,
              redirect: 'follow'
            };
          try {
              const body = { item };
              const Adopter_name= item.fullname ;
              console.log(item.fullname)
              const response = await fetch(
                  `http://localhost:5000/staffmember/acceptrequest/${Adopter_name}`,
                  requestOptions).then(window.location.reload(true))
              ;
              console.log(response);
          }
          catch (err) {
              console.log(err);
          }
  
      }

    const [adopterrequest,setAdopterrequest]=useState([])
        useEffect(()=>{
        fetch("http://localhost:5000/staffmember/viewadopterrequests").then((result)=>{
            result.json().then((resp)=>{
            // console.warn(resp)
            setAdopterrequest(resp)
            console.log(resp);
            })
        })
        },[])
        console.warn(adopterrequest)
        console.log(adopterrequest)

        return(
            <div>
            <NavbarUsers/>
            <section className="section bg-c-light border-top">
                <h3 class="pageTitle">Adopter Requests  <i class="fa-solid fa-comments"></i></h3>
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <div className="searchposts searchfeedback">
                                <input class="searchTerm" type="text" placeholder=" Search here..." name="search"/>
                                <button class="searchButton" type="submit"><i class="fa-solid fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
              <div className="container">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            
                        </div>
                        </div>
                        

                        {adopterrequest.map((item,i)=>
                            <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <i class="fa-solid fa-user"></i><b>{item.fullname}</b> 
                            </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            <div className="container">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6 border-left">
                                                <h6>
                                                <i class="fa-solid fa-grin-alt"></i><b> Request to adopt pet.....</b>
                                                </h6>
                                                <hr/>
                                                <div className="form-group requestformfield">
                                                    <label className="mb-1 inputanswercolor">Full Name</label>
                                                    <input type="text" className="form-control " placeholder="" value={item.fullname}></input>
                                                </div>

                                                <div className="form-group requestformfield">
                                                    <label className="mb-1 inputanswercolor">Contact Number</label>
                                                    <input type="tel" className="form-control" placeholder="" pattern="[0-9]{3}-[0-9]{2}[0-9]{3}" value={item.phonenumber}></input>
                                                </div>

                                                <div className="form-group requestformfield">
                                                    <label className="mb-1 inputanswercolor">Spend for Pet</label>
                                                    <input type="income" className="form-control" min="0.00" max="" step="0.01" value={item.income}></input>
                                                </div>

                                                <div className="form-group requestformfield">
                                                    <label className="mb-1 inputanswercolor">Any pets in home currently</label>
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected value={item.isanyPet}>Yes</option>
                                                        <option value="Yes">Yes</option>
                                                        <option value="No">No</option>
                                                    </select>
                                                     
                                                </div>
                                                
                                                
                                            
                                            </div>
                                            <div className="col-md-6 border-start">

                                                
                                                
                                                <div className="form-group requestformfield">
                                                    <label className="mb-1 inputanswercolor">Type of the pet</label>
                                                    <input type="num" className="form-control" placeholder="" value={item.typeofPet}></input>
                                                </div>

                                                <div className="form-group requestformfield">
                                                    <label className="mb-1 inputanswercolor">Kids in home</label>
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected value={item.kidsinHome}>No</option>
                                                        <option value="1">Yes</option>
                                                        <option value="1">No</option>
                                                    </select>
                                                     
                                                </div>
                                                
                                                <div className="form-group requestformfield">
                                                    <label className="mb-1 inputanswercolor">Other details</label>
                                                    <textarea rows="2" className="form-control" placeholder="" value={item.additionalDetails}></textarea>
                                                </div>
                                                <div className='acceptMargin'>
                                                    <div class="row gx-5 ">
                                                        <div class="col ">
                                                            <button type="button" className="btn btn-success shadow w-100 postPetBtn" onclick={()=>AcceptAdopterRequest(item)}><b>{buttonText} <i class="fa-solid fa-check"></i></b></button>
                                                        </div>
                                                        <div class="col ">
                                                            <button type="button" className="btn btn-danger shadow w-100 postPetBtn" data-bs-toggle="modal" data-bs-target="#exampleModalreject"><b>Reject Request  <i class="fa-solid fa-times"></i></b></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    
                    )}
                    

                        
                    </div>
              </div>
            </section>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                               
                                            
                        <div className="card card-body shadow">
                            <div className="row">
                                <div className="col-md-12 border-left">
                                    <div className="form-group confimtext">
                                        <label className="mb-1 mt-1"><b>Are you sure to accept ?</b></label>
                                    </div>                  
                                    <div className="form-group py-3">
                                        <div class="container px-4 text-center">
                                            <div class="row gx-5 ">
                                                    <div class="col ">
                                                        <Link to="/viewpets" class="nav-link active">
                                                            <button type="button" className="btn btn-success shadow w-100 postPetBtn"><b>Yes  <i class="fa-solid fa-check"></i></b></button>
                                                        </Link>
                                                    </div>
                                                    <div class="col ">
                                                        <button type="button" className="btn btn-danger shadow w-100 postPetBtn" data-bs-dismiss="modal"><b>No <i class="fa-solid fa-times"></i></b></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>       
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="exampleModalreject" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                               
                                            
                        <div className="card card-body shadow">
                            <div className="row">
                                <div className="col-md-12 border-left">
                                    <h6><i class="fa-solid fa-smile-beam"></i><b> Kindly Response Them..... </b></h6>
                                    <hr/> 
                                    {/* <div className="form-group">
                                        <label className="mb-1 mt-1">Recipient</label>
                                        <input type="text" className="form-control" placeholder=""></input>
                                    </div> */}
                                    <div className="form-group">
                                        <label className="mb-1">Message</label>
                                        <textarea rows="4" className="form-control" placeholder="Enter Your Message"></textarea>
                                    </div>                    
                                    <div className="form-group py-3">
                                        <div class="container px-4 text-center">
                                            <div class="row gx-5 ">
                                                    <div class="col ">
                                                        <Link to="/viewpets" class="nav-link active">
                                                            <button type="button" className="btn btn-success shadow w-100 postPetBtn"><b>Send  <i class="fa-solid fa-paper-plane"></i></b></button>
                                                        </Link>
                                                    </div>
                                                    <div class="col ">
                                                        <button type="button" className="btn btn-danger shadow w-100 postPetBtn" data-bs-dismiss="modal"><b>Discard <i class="fa-solid fa-times"></i></b></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>       
                        </div>
                    </div>
                </div>
            </div> 
          
        )
}

export default ViewAdopterRequests;
