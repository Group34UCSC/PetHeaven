import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import {Link} from 'react-router-dom';
import '../css/CustomerDoctorappoint.css';
import docvectors from  '../images/docvector.png';
import CustomerDoctorCarousel from './Customerdoctorcarousel';
import Pagination from  './pagination';
import NavbarUsers from '../../../includes/NavbarUsers';

function CustomerDoctorAppoint(){
    const [users,setUser] = useState([])
    const [doctorname,setDoctorname]=useState("");
    const [address,setAddress]=useState("");
    const [name,setName]=useState("");
    var axios = require('axios');
    var data = JSON.stringify({});
    
    // const getUsers=async e=>{
    //     e.preventDefault();
    //     try{
    //         var config = {
    //             method: 'get',
    //             url: 'http://localhost:5000/petadopter/findapet/finddoctors',
    //             headers: { 
    //                 'Content-Type': 'application/json'
    //             },
    //             data : data
    //             };
            
    //             axios(config).then(function (response) {
    //                 console.log(JSON.stringify(response.data));

    //                 setUser(response);
    //                 setDoctorname(response[0].User_name);
                  
    //             })
    //             .catch(function (error) {
    //                 console.log(error);
    //             });
    //     }
    
    //     catch (err) {
    //         console.log("Faalil");
    //     }
    // }
    const getUsers=async e=>{
        e.preventDefault();
        console.log("hiiii");
        console.log(doctorname);
        try{
            
            fetch("http://localhost:5000/petadopter/findapet/finddoctors").then((result)=>
            {
                result.json().then((resp)=>{
                    setUser(resp)
                    setDoctorname(resp[0].fullname)
                    setAddress(resp[0].address)
                    
                    console.log(resp[0].fullname);
                })
            })
        }
        catch (err) {
            console.log("Faalil");
        }
    }

    return(
        <div>
            <NavbarUsers/>
            <CustomerDoctorCarousel></CustomerDoctorCarousel>


            <h3 class="d-none d-md-block aboutsearchdoctorheading">Select best doctor for your pet among thousands of our registered qualified veteranians</h3>
            <form id="col col-sm-9 doctorform">
                <div class="col-sm mb-3" id="doctorsearchbar">
                    <label for="doctorname" class="form-label">Search by name</label>
                    <input type="text"  class="form-control" id="exampleFormControlInput1" value={name}  onChange={(e)=>setName(e.target.value)} placeholder="enter name of your doctor"></input>
                </div>
                <button class="btn btn-success "id="docsearchbtn" onClick={getUsers}>Search <i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
            
            
            <div class="row" id="doctorsearchcararea"> 
                        {/* <div class="col-sm-2 card" id="doctorcard">
                            <h5 class="text-success petname">Sanath Nandadewa</h5>
                            <div className="underline underlineJusty"></div>
                            <img src={docvectors} class="card-img-top"  id="docproimg" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <h6 class="text-danger doctown">Kottawa</h6>
                                <Link to="requestappoint"><button type="button" class="btn btn-success" id="channelbtn">Channel <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-sm-2 card" id="doctorcard">
                            <h5 class="text-success petname">Upuli Rathnayake</h5>
                            <div className="underline underlineJusty"></div>
                            <img src={docvectors} class="card-img-top"  id="docproimg" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <h6 class="text-danger doctown">Rathnapura</h6>
                                <Link to="requestappoint"><button type="button" class="btn btn-success" id="channelbtn">Channel <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-sm-2 card" id="doctorcard">
                            <h5 class="text-success petname">J.A.Arunasinghe</h5>
                            <div className="underline underlineJusty"></div>
                            <img src={docvectors} class="card-img-top" id="docproimg" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <h6 class="text-danger doctown">Ahangama</h6>
                                <Link to="requestappoint"><button type="button" class="btn btn-success" id="channelbtn">Channel <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-sm-2 card" id="doctorcard">
                            <h5 class="text-success petname">Farhan Behardinne</h5>
                            <div className="underline underlineJusty"></div>
                            <img src={docvectors} class="card-img-top"  id="docproimg" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <h6 class="text-danger doctown">Weligama</h6>
                                <Link to="requestappoint"><button type="button" class="btn btn-success" id="channelbtn">Channel <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-sm-2 card" id="doctorcard">
                            <h5 class="text-success petname">J.A.Arunasinghe</h5>
                            <div className="underline underlineJusty"></div>
                            <img src={docvectors} class="card-img-top" id="docproimg" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <h6 class="text-danger doctown">Ahangama</h6>
                                <Link to="requestappoint"><button type="button" class="btn btn-success" id="channelbtn">Channel <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-sm-2 card" id="doctorcard">
                            <h5 class="text-success petname">Farhan Behardinne</h5>
                            <div className="underline underlineJusty"></div>
                            <img src={docvectors} class="card-img-top"  id="docproimg" alt="Tommy"></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                                <h6 class="text-danger doctown">Weligama</h6>
                                <Link to="requestappoint"><button type="button" class="btn btn-success" id="channelbtn">Channel <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                            </div>
                        </div> */}
                {
                    users.map((item,i)=>{
                        if(item.fullname==name){
                            return(
                                <div class="col col-sm-2 card" id="doctorcard">
                                <h5 class="text-success petname">{item.fullname}</h5>
                                <div className="underline underlineJusty"></div>
                                    <img src={docvectors} class="card-img-top"  id="docproimg" alt="Tommy"></img>
                                    <div class="card-body">
                                        <p class="card-text"></p>
                                        <h6 class="text-danger doctown">{item.address}</h6>
                                        <Link to="requestappoint"><button type="button" class="btn btn-success" id="channelbtn">Channel <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                                    </div>
                                </div>
                            )
                        } 
                    })
                
                }
                        
            </div>
            <Pagination></Pagination>
        </div>
    )
    
}

export default CustomerDoctorAppoint;