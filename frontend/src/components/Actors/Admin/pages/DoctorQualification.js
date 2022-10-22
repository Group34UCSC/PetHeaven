import React from "react";
import { useRef, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';



// import {faCheck, faTimes, faInfoCircle} from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignUpImg from "../../../images/doctor.jpg";
import '../css/AdminUpdate.css';
import NavbarUsers from "../../../includes/NavbarUsers";


const REGISTER_URL = "http://localhost:5000/SignUp";
const Admin_checkQualification = () => {

    const [users, setUser] = useState([])
    const [fullname, setName] = useState("");
    const [mobile, setmobile] = useState("");
    const [doctorID, setDoctorId] = useState("")
    const [DoctorNIC, setNIC] = useState("")
    const [address, setAddress] = useState("")
    const[Lisence,setLisence]= useState("")


   


    const [buttontext, setButtontext] = useState('Update');
  
    const [pwd, setPwd] = useState('');
  
    const [matchPwd, setMatchPwd] = useState('');
 

  

    useEffect(() => {
        getUsers();
    }, [])

    function getUsers() {
        fetch("http://localhost:5000/Admin/DoctorView").then((result) => {
            result.json().then((resp) => {
                // console.warn(resp)

                setUser(resp)
                setName(resp[0].fullname)
                setmobile(resp[0].mobile)
                setDoctorId(resp[0].doctorID)
                setNIC(resp[0].DoctorNIC)
                setLisence(resp[0].lisence)
            })
        })
    }

    console.warn(users)
    function UpdateUser(item) {
        console.log("Table Data")
        console.log(item)
        setName(item.fullname)
        setmobile(item.mobile)
        setDoctorId(item.doctorID)
        setNIC(item.NIC)
        setAddress(item.address)
        setLisence(item.lisence)
    }


    // const  DeleteUser = async (item) => {
    //   console.log("prasad")

    //   var raw = "";

    //    var requestOptions = {
    //         method: 'POST',
    //         body: raw,
    //         redirect: 'follow'
    //       };
    //     try {
    //         const body = { item };
    //         const UserID= item.User_ID ;
    //         const response = await fetch(
    //             `http://localhost:5000/Admin/Delete/${UserID}`,
    //             requestOptions)
    //         ;
    //         console.log(response);
    //     }
    //     catch (err) {
    //         console.log(err);
    //     }

    // }



 
    // const UpdateUserform = async e => {
    //     e.preventDefault();
    //     setButtontext('Updated..');
    //     try {
    //         const body = { User_type,User_name,User_ID , Email, pwd };
    //         const response = await fetch(
    //             "http://localhost:5000/Admin/Update",
    //             {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-type": "application/json"
    //                 },
    //                 body: JSON.stringify(body)
    //             }
    //         );
    //         console.log(response);
    //     }
    //     catch (err) {
    //         console.log("Falil12");
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
                  <input type="text" class="form-control form-input" placeholder="Search Name , UserType or Email..." onChange={(e)=>{setSearchTerm(e.target.value)}} />
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
                                    <th scope="col">Full Name</th>
                                    <th scope="col" >Mobile</th>
                                    <th scope="col">Doctor ID</th>
                                    
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    users.filter((item)=>{
                                        if(searchTerm == ""){
                                            return item
                                        }else if (item.fullname.toLowerCase().includes(searchTerm.toLowerCase()) || item.mobile.toLowerCase().includes(searchTerm.toLowerCase()) || item.doctorID.toLowerCase().includes(searchTerm.toLowerCase())){
                                            return item
                                        }
                                    }).map((item, i) =>
                                        <tr key={i}>
                                            
                                            <td>{item.fullname}</td>
                                            <td>{item.mobile}</td>
                                            <td>{item.doctorID}</td>
                                            <td><button type="button" class="btn btn-warning" onClick={() => UpdateUser(item)}>View Qualities</button></td>
                                            {/* <td><button type="button" class="btn btn-danger" onClick={() => DeleteUser(item)}>Deactivated</button></td> */}
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
                                                        <h3 className="text-center">Doctor Qualifications</h3>
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
                                                    Full Name
                                                   
                                                </label>
                                                <input class="inputFields"
                                                    type="text"
                                                    id="username"
                                                    value={fullname} onChange={(e)=>{setName(e.target.value)}}
                                                    placeholder="Enter Your User Type"
                                                    required
                                               
                                                />

                                                
                                              <label htmlFor="username" class="labels">
                                                   Mobile
                                                   
                                                </label>
                                                <input class="inputFields"
                                                    type="text"
                                                    id="usertype"
                                                    value={mobile} onChange={(e)=>{setmobile(e.target.value)}}
                                                    placeholder="Enter Your User Type"
                                                    required
                                               
                                                />
                                               

                                                <label htmlFor="emailre" class="labels">
                                                    Doctor ID
                                                    
                                                </label>
                                                <input class="inputFields"
                                                    type="email"
                                                    id="emailre"
                                                    value={doctorID} onChange={(e)=>{setDoctorId(e.target.value)}}
                                                    placeholder="Enter Your Email"
                                                    required
                                                    
                                                />
                                                
                                                <label htmlFor="emailre" class="labels">
                                                    NIC
                                                    
                                                </label>
                                                <input class="inputFields"
                                                    type="email"
                                                    id="emailre"
                                                    value={DoctorNIC} onChange={(e)=>{setNIC(e.target.value)}}
                                                    placeholder="Enter Your NIC"
                                                    required
                                                    
                                                />

                                                <label htmlFor="emailre" class="labels">
                                                    Address
                                                    
                                                </label>
                                                <input class="inputFields"
                                                    type="email"
                                                    id="emailre"
                                                    value={address} onChange={(e)=>{setAddress(e.target.value)}}
                                                    placeholder="Enter Your NIC"
                                                    required
                                                    
                                                />

                                                 <label htmlFor="emailre" class="labels">
                                                    Lisence
                                                    
                                                </label>
                                                <input class="inputFields"
                                                    type="email"
                                                    id="emailre"
                                                    value={Lisence} onChange={(e)=>{setLisence(e.target.value)}}
                                                    placeholder="Enter Your NIC"
                                                    required
                                                    
                                                />

                                               <label htmlFor="emailre" class="labels">
                                                    Qualifications
                                                    
                                                </label>
                                                <input class="inputFields"
                                                    type="email"
                                                    id="emailre"
                                                    value={DoctorNIC} onChange={(e)=>{setNIC(e.target.value)}}
                                                    placeholder="Enter Your NIC"
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

export default  Admin_checkQualification;

