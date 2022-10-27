import React from "react";
import { useRef, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';



// import {faCheck, faTimes, faInfoCircle} from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignUpImg from "../../../images/donation.jpg";
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
    //     fetch("http://localhost:5000/Admin/DonationView").then((result) => {
    //         result.json().then((resp) => {
    //             // console.warn(resp)

    //             setUser(resp)
    //             setUserName(resp[0].UserName)
    //             setAccNO(resp[0].AccNO)
    //             setBranch(resp[0].Branch)
    //             setDate(resp[0].Date)
    //             setAmount(resp[0].Amount)
    //             setdonationID(resp[0].donationID)
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
                                                    Full Name
                                                   
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
                                                    type="date"
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




                



                {/* table */}

{/* 
                <div>

                    <div class="adminviewtable">

                        <table class="table view">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Donation ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Acc No</th>
                                    <th scope="col">Branch</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    users.filter((item)=>{
                                        if(searchTerm == ""){
                                            return item
                                        }else if (item.UserName.toLowerCase().includes(searchTerm.toLowerCase()) ){
                                            return item
                                        }
                                    }).map((item, i) =>
                                        <tr key={i}>
                                            <td>{item.donationID}</td>
                                            <td>{item.UserName}</td>
                                            <td>{item.Date}</td>
                                            <td>{item.Amount}</td>
                                            <td>{item.AccNO}</td>
                                            <td>{item.Branch}</td>
                                        </tr>
                                    )
                                }


                            </tbody>
                        </table>









                    </div> */}


                </div>

       
    );
}

export default donation;

