import React from "react";
import { useRef, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';



// import {faCheck, faTimes, faInfoCircle} from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignUpImg from "../../../images/both.jpeg";
import '../css/AdminUpdate.css';
import NavbarUsers from "../../../includes/NavbarUsers";



const donation = () => {

    const [users, setUser] = useState([])
    const [UserName, setUserName] = useState("");
    const [AccNO, setAccNO] = useState("");
    const [Branch, setBranch] = useState("");
    const [Date, setDate] = useState("");
    const [Amount, setAmount] = useState("");
    const [donationID, setdonationID]= useState("")

   


    const [buttontext, setButtontext] = useState('Update');
  
    const [pwd, setPwd] = useState('');
  
    const [matchPwd, setMatchPwd] = useState('');
 

  

    // useEffect(() => {
    //     getUsers();
    // }, [])

    // function getUsers() {
    //     fetch("http://localhost:5000/Admin/View").then((result) => {
    //         result.json().then((resp) => {
    //             // console.warn(resp)

    //             setUser(resp)
    //             setName(resp[0].User_name)
    //             setuserType(resp[0].User_type)
    //             setEmail(resp[0].Email)
    //             setUserId(resp[0].User_ID)

    //         })
    //     })
    // }

    // console.warn(users)
    // function UpdateUser(item) {
    //     console.log(item)
    //     setUserId(item.User_ID)
    //     setName(item.User_name)
    //     setEmail(item.Email)
    //     setuserType(item.User_type)

    // }


    const  DeleteUser = async (item) => {
      console.log("prasad")

      var raw = "";

       var requestOptions = {
            method: 'POST',
            body: raw,
            redirect: 'follow'
          };
        try {
            const body = { item };
            const UserID= item.User_ID ;
            const response = await fetch(
                `http://localhost:5000/Admin/Delete/${UserID}`,
                requestOptions)
            ;
            console.log(response);
        }
        catch (err) {
            console.log(err);
        }

    }



 
    const UpdateUserform = async e => {
        e.preventDefault();
        setButtontext('Done');
        try {
            const body = { UserName,AccNO,Branch , Date,Amount};
            const response = await fetch(
                "http://localhost:5000/Admin/Donation",
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
            console.log("Falil12");
        }

    }






const[searchTerm, setSearchTerm]=useState('')
    return (

   
            <div>
                <NavbarUsers />



                

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
                                                        <h3 className="text-center">DONATION DETAILS</h3>
                                                    </div>

                                                </div>
                                                <img src={SignUpImg} alt="Services" />
                                            </div>
                                        </div>

                                    </div>



                                    <div className="col-md-6 border-start">
                                 
                                        <section id="SignUpSection">
                                            
                                            <form id="SignUpForm" >
                     
                                            {/* <label htmlFor="emailre" class="labels">
                                                    Donation ID
                                                    
                                                </label>
                                                <input class="inputFields"
                                                    type="email"
                                                    id="emailre"
                                                    value={donationID} onChange={(e)=>{setdonationID (e.target.value)}}
                                                    placeholder="Enter Amount"
                                                    required
                                                    
                                                /> */}
                                     
                                              
                                            <label htmlFor="username" class="labels">
                                                    User Name
                                                   
                                                </label>
                                                <input class="inputFields"
                                                    type="text"
                                                    id="username"
                                                    value={UserName} onChange={(e)=>{setUserName(e.target.value)}}
                                                    placeholder="Enter User Name"
                                                    required
                                               
                                                />



                                                 
                                              <label htmlFor="username" class="labels">
                                                    User Account Number
                                                   
                                                </label>
                                                <input class="inputFields"
                                                    type="text"
                                                    id="username"
                                                    value={AccNO} onChange={(e)=>{setAccNO(e.target.value)}}
                                                    placeholder="Enter User Acc Number"
                                                    required
                                               
                                                />


                                              <label htmlFor="emailre" class="labels">
                                                    Branch
                                                    
                                                </label>
                                                <input class="inputFields"
                                                    type="email"
                                                    id="emailre"
                                                    value={Branch} onChange={(e)=>{setBranch(e.target.value)}}
                                                    placeholder="Enter Branch"
                                                    required
                                                    
                                                />
                                               

                                                
                                              <label htmlFor="username" class="labels">
                                                    Date
                                                   
                                                </label>
                                                <input class="inputFields"
                                                    type="text"
                                                    id="usertype"
                                                    value={Date} onChange={(e)=>{setDate(e.target.value)}}
                                                    placeholder="Enter Date"
                                                    required
                                               
                                                />
                                               

                                                <label htmlFor="emailre" class="labels">
                                                    Amount
                                                    
                                                </label>
                                                <input class="inputFields"
                                                    type="email"
                                                    id="emailre"
                                                    value={Amount} onChange={(e)=>{setAmount(e.target.value)}}
                                                    placeholder="Enter Amount"
                                                    required
                                                    
                                                />
                                               

                                               
                                                <div className="d-flex justify-content-center">

                                                    <button className="mt-5" id="SignUpBtn" onClick={UpdateUserform}>{buttontext}</button>
                                                </div>


                                            </form>
                                        </section>
                                        {/* //    )}  */}

                                    </div>








                                </div>
                            </div>
                        </div>
                    </div>

                </section>




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
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">User Type</th>
                                    <th scope="col">Operation</th>
                                    <th scope="col">Operation</th>
                                </tr>
                            </thead>
                            {/* <tbody>

                                {
                                    users.filter((item)=>{
                                        if(searchTerm == ""){
                                            return item
                                        }else if (item.User_name.toLowerCase().includes(searchTerm.toLowerCase()) || item.User_type.toLowerCase().includes(searchTerm.toLowerCase()) || item.Email.toLowerCase().includes(searchTerm.toLowerCase())){
                                            return item
                                        }
                                    }).map((item, i) =>
                                        <tr key={i}>
                                            <td>{item.User_ID}</td>
                                            <td>{item.User_name}</td>
                                            <td>{item.Email}</td>
                                            <td>{item.User_type}</td>
                                            <td><button type="button" class="btn btn-warning" onClick={() => UpdateUser(item)}>Update</button></td>
                                            <td><button type="button" class="btn btn-danger" onClick={() => DeleteUser(item)}>Deactivated</button></td>
                                        </tr>
                                    )
                                }


                            </tbody> */}
                        </table>









                    </div>


                </div>

            </div>
       
    );
}

export default donation;

