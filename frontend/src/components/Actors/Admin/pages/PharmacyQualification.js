import React from "react";
import { useRef, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';



// import {faCheck, faTimes, faInfoCircle} from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignUpImg from "../../../images/pharmacy.jpg";
import '../css/AdminUpdate.css';
import NavbarUsers from "../../../includes/NavbarUsers";


const REGISTER_URL = "http://localhost:5000/SignUp";
const Pharmacy_checkQualification = () => {

    const [users, setUser] = useState([])
    const [Name, setName] = useState("")
    const [Street, setStreet] = useState("")
    const [City, setCity] = useState("")
    const [Pharmacy_ID, setPharmacyID] = useState("")
    const [Registration_number, setRegistrationNumber] = useState("")
    const[Number,setNumber]= useState("")
    const[Qualifications,setQualifications]= useState("")

   


    const [buttontext, setButtontext] = useState('Update');
  
    const [pwd, setPwd] = useState('');
  
    const [matchPwd, setMatchPwd] = useState('');
 

  

    useEffect(() => {
        getUsers();
    }, [])

    function getUsers() {
        fetch("http://localhost:5000/Admin/PharmacyView").then((result) => {
            result.json().then((resp) => {
                 console.log(resp)

                setUser(resp)
                setName(resp[0].Name)
                setPharmacyID(resp[0].Pharmacy_ID)
                setRegistrationNumber(resp[0].Registration_number)
                setNumber(resp[0].Number)
                setStreet(resp[0].Street)
                setCity(resp[0].City)
            })
        })
    }

    console.warn(users)
    function UpdateUser(item) {
        // console.log("Table Data")
        // console.log(item)
        setName(item.Name)
        setPharmacyID(item.Pharmacy_ID)
        setRegistrationNumber(item.Registration_number)
        setNumber(item.Number)
        setStreet(item.Street)
        setCity(item.City)
       
    }


    // const  DeleteUser = async (item) => {
     
    //   var raw = "";

    //    var requestOptions = {
    //         method: 'POST',
    //         body: raw,
    //         redirect: 'follow'
    //       };
    //     try {
    //         const body = { item };
    //         const PhyID= item.Pharmacy_ID;
    //         const response = await fetch(
    //             `http://localhost:5000/Admin/PharmacyRegister/${PhyID}`,
    //             requestOptions)
    //         ;
    //         console.log(response);
    //     }
    //     catch (err) {
    //         console.log(err);
    //     }

    // }





const[searchTerm, setSearchTerm]=useState('')
    return (

   
            <div>
                <NavbarUsers />


                 {/* search */}
                 <div class="container">

            <div class="row height d-flex justify-content-center align-items-center">

              <div class="col-md-6">

                <div class="form">
                  <i class="fa fa-search"></i>
                  <input type="text" class="form-control form-input" placeholder="Search Pharmacy Name..." onChange={(e)=>{setSearchTerm(e.target.value)}} />
                  <span class="left-pan"><i class="fa fa-microphone"></i></span>
                </div>
                
              </div>
              
            </div>
            
          </div>



                {/* table */}


                <div>

                    <div class="adminviewtable">

                        <table class="table view">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Pharmacy ID</th>
                                    <th scope="col" >Pharmacy Name</th>
                                    <th scope="col">City</th>
                                    {/* <th scope="col">Operation</th>
                                    <th scope="col">Operation</th> */}
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    users.filter((item)=>{
                                        if(searchTerm == ""){
                                            return item
                                        }else if (item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ){
                                            return item
                                        }
                                    }).map((item, i) =>
                                        <tr key={i}>
                                            
                                            <td>{item.Pharmacy_ID}</td>
                                            <td>{item.Name}</td>
                                            <td>{item.City}</td>
                                            {/* <td><button type="button" class="btn btn-warning" onClick={() => UpdateUser(item)}>View Qualities</button></td>
                                            <td><button type="button" class="btn btn-danger" onClick={() => DeleteUser(item)}>Register</button></td> */}
                                        </tr>
                                    )
                                }


                            </tbody>
                        </table>





<section className="section bg-c-light" >
                    <div className="container">
                        <div className="card shadow">
                            <div className="card-body">
                                <div className="row">




                                    <div className="col-md-6 border-left">

                                        {/* <img src={SignUpImg}  alt="Services"/> */}
                                        <div className="col-md-12">
                                            <div className="card shadow">
                                                <div className="card-body">
                                                    <div className="row bg-success text-white mb-3">
                                                        <div className="col-md-4 my-auto"></div>
                                                        <h3 className="text-center">Pharmacy Qualifications</h3>
                                                    </div>

                                                </div>
                                                <img src={SignUpImg} alt="Services" />
                                            </div>
                                        </div>

                                    </div>



                                    <div className="col-md-6 border-start">
                                 
                                        <section id="SignUpSection">
                                            
                                            <form id="SignUpForm" >

                                                 
                                              <label htmlFor="username" class="labels">
                                                   Pharmacy ID
                                                   
                                                </label>
                                                <input class="inputFields"
                                                    type="text"
                                                    id="username"
                                                    value={Pharmacy_ID} onChange={(e)=>{setPharmacyID(e.target.value)}}
                                                   
                                                    required
                                               
                                                />

                                                
                                              <label htmlFor="username" class="labels">
                                                   Pharmacy Name
                                                   
                                                </label>
                                                <input class="inputFields"
                                                    type="text"
                                                    id="usertype"
                                                    value={Name} onChange={(e)=>{setName(e.target.value)}}
                                                    
                                                    required
                                               
                                                />

                                                <label htmlFor="emailre" class="labels">
                                                   Registration Number
                                                    
                                                </label>
                                                <input class="inputFields"
                                                    type="email"
                                                    id="emailre"
                                                    value={Registration_number} onChange={(e)=>{setRegistrationNumber(e.target.value)}}
                                                   
                                                    required
                                                    
                                                />



                                              <label htmlFor="emailre" class="labels">
                                                   Number
                                                    
                                                </label>
                                                <input class="inputFields"
                                                    type="email"
                                                    id="emailre"
                                                    value={Number} onChange={(e)=>{setNumber(e.target.value)}}
                                                    
                                                    required
                                                    
                                                />

                                              <label htmlFor="emailre" class="labels">
                                                   Street
                                                    
                                                </label>
                                                <input class="inputFields"
                                                    type="email"
                                                    id="emailre"
                                                    value={Street} onChange={(e)=>{setStreet(e.target.value)}}
                                                    
                                                    required
                                                    
                                                />
                                                
                                               

                                                <label htmlFor="emailre" class="labels">
                                                    City
                                                    
                                                </label>
                                                <input class="inputFields"
                                                    type="email"
                                                    id="emailre"
                                                    value={City} onChange={(e)=>{setCity(e.target.value)}}
                                                    
                                                    required
                                                    
                                                />
                                                


                                            </form>
                                        </section>
                                        {/* //    )}  */}

                                    </div>








                                </div>
                            </div>
                        </div>
                    </div>

                </section>





                    </div>


                </div>

            </div>
       
    );
}

export default  Pharmacy_checkQualification;

