import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 
import {Link} from 'react-router-dom'; 
import '../css/CustomerPharmacy.css';
import phavectors from  '../images/pharmacy.png';
import Pagination from  './pagination';
import NavbarUsers from '../../../includes/NavbarUsers';
function CustomerPharmacy(){
    const [users,setUser]=useState([])
    const [name,setName]=useState('');
    const [number,setNumber]=useState('');
    const [city,setCity]=useState('');
    const [street,setStreet]=useState('');
    const getUsers=async e=>{
        e.preventDefault();
        console.log("hiiii");
        try{
            fetch("http://localhost:5000/petadopter/findapet/findpharmacy").then((result)=>
            {
                result.json().then((resp)=>{
                    console.log(resp[0].Name);
                    setUser(resp)
                    setName(resp[0].Name)
                    setNumber(resp[0].Number)
                    setStreet(resp[0].Street)
                    setCity(resp[0].City)
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
            <div>
                <p class= "searchpharmacyheading">Find all medicine <i class="fa-solid fa-pills"></i> need for your pet <i class="fa fa-paw"></i> from our registered
                online pharmacy <i class="fa-solid fa-prescription-bottle-medical"></i> shops and receive the medicines for your door steps on time <i class="fa fa-clock"></i></p>
            </div>
            <form>
                <div class="mb-3" id="pharmacysearchdivs">
                    <label for="Pharmacyname" class="form-label">Search by Area <i class="fa-solid fa-magnifying-glass"></i></label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter of area your Pharmacy"></input>
                    <button class="btn btn-success" id="custsearchbtns" onClick={getUsers}>Search <i class="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div class="mb-3" id="pharmacysearchdivs">
                    <label for="Pharmacyname" class="form-label">Search by Medicine <i class="fa-solid fa-magnifying-glass"></i></label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter of name your Medicine"></input>
                    <button class="btn btn-success" id="custsearchbtns">Search <i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </form>
            <div class=" row"> 
                        {/* <div class="col-sm-3 card" id="pharmarea">
                            <h4 class="text-success petname">Arogya pharmacy</h4>
                            <div className="underline underlineJusty"></div>
                            <img src={phavectors} class="card-img-top"  id="imgpharm" alt="Tommy"></img>
                            <div class="card-body">
                                
                                <h6 class="petage text-danger">No.20, Nugegoda Road, Pitakotte</h6>
                                <Link to="pharmacystore"><button type="button" class="btn btn-success" id="phachannelbtn">visit <i class="fa fa-pills"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-sm-3 card"  id="pharmarea">
                            <h4 class="text-success petname">Arogya pharmacy</h4>
                            <div className="underline underlineJusty"></div>
                            <img src={phavectors} class="card-img-top"  id="imgpharm"  alt="Tommy"></img>
                            <div class="card-body">
                                
                                <h6 class="petage text-danger">No.20, Nugegoda Road, Pitakotte</h6>
                                <Link to="pharmacystore"><button type="button" class="btn btn-success" id="phachannelbtn">visit <i class="fa fa-pills"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-sm-3 card"  id="pharmarea">
                            <h4 class="text-success petname">Arogya pharmacy</h4>
                            <div className="underline underlineJusty"></div>
                            <img src={phavectors} class="card-img-top" id="imgpharm" alt="Tommy"></img>
                            <div class="card-body">
                                
                                <h6 class="petage text-danger">No.20, Nugegoda Road, Pitakotte</h6>
                                <Link to="pharmacystore"><button type="button" class="btn btn-success" id="phachannelbtn">visit <i class="fa fa-pills"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-sm-3 card"  id="pharmarea">
                            <h4 class="text-success petname">Arogya pharmacy</h4>
                            <div className="underline underlineJusty"></div>
                            <img src={phavectors} class="card-img-top"  id="imgpharm" alt="Tommy"></img>
                            <div class="card-body">
                                
                                <h6 class="petage text-danger">No.20, Nugegoda Road, Pitakotte</h6>
                                <Link to="pharmacystore"><button type="button" class="btn btn-success" id="phachannelbtn"> visit <i class="fa fa-pills"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-sm-3 card"  id="pharmarea">
                            <h4 class="text-success petname">Arogya pharmacy</h4>
                            <div className="underline underlineJusty"></div>
                            <img src={phavectors} class="card-img-top"  id="imgpharm" alt="Tommy"></img>
                            <div class="card-body">
                            
                                <h6 class="petage text-danger">No.20, Nugegoda Road, Pitakotte</h6>
                                <Link to="pharmacystore"><button type="button" class="btn btn-success" id="phachannelbtn"> visit <i class="fa fa-pills"></i></button></Link>
                            </div>
                        </div> */}
                    {
                        users.map((item,i)=><div class="col-sm-3 card"  id="pharmarea">
                        <h4 class="text-success petname">{item.name}</h4>
                        <div className="underline underlineJusty"></div>
                        <img src={phavectors} class="card-img-top"  id="imgpharm" alt="Tommy"></img>
                        <div class="card-body">
                            
                            <h6 class="petage text-danger">{item.number},{item.street},{item.city}</h6>
                            <Link to="pharmacystore"><button type="button" class="btn btn-success" id="phachannelbtn"> visit <i class="fa fa-pills"></i></button></Link>
                        </div>
                    </div>)
                    }
                        
                </div>
                <Pagination></Pagination>
        </div>
    )
    
}

export default CustomerPharmacy;