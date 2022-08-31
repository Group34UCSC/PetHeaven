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


const REGISTER_URL = "http://localhost:5000/SignUp";
const AdminUpdate = () => {

    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     try {
    //         const body = { user, email, pwd };
    //         const response = await fetch(
    //             "http://localhost:5000/SignUp",
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
    //         console.log("Falil");
    //     }

    // }






    const [users, setUser] = useState([])
    const [User_name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [User_type, setuserType] = useState("");
    const [User_ID, setUserId] = useState(null)




    useEffect(() => {
        getUsers();
    }, [])

    function getUsers() {
        fetch("http://localhost:5000/Admin/View").then((result) => {
            result.json().then((resp) => {
                // console.warn(resp)

                setUser(resp)
                setName(resp[0].User_name)
                setuserType(resp[0].User_type)
                setEmail(resp[0].Email)
                setUserId(resp[0].User_ID)

            })
        })
    }

    console.warn(users)
    function UpdateUser(item) {
        console.log(item)
        setUserId(item.User_ID)
        setName(item.User_name)
        setEmail(item.Email)
        setuserType(item.User_type)

    }



    
    // async  function  DeleteUser(item) {
        
    
       
        
       
        
    //     // axios({
    //     //     method: 'post',
    //     //     url: `localhost:5000/Admin/Delete/${UserID}`,
    //     //     headers: { },
    //     //     data : data
    //     //   })
    //     // .then(function (response) {
    //     //   console.log(JSON.stringify(response.data));
    //     // })
    //     // .catch(function (error) {
    //     //   console.log(error);
    //     // });

    //     try {
    //           const UserID= item.User_ID ;
    //         const response = await fetch(
    //             `localhost:5000/Admin/Delete/${UserID}`,
    //             {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-type": "application/json"
    //                 },
    //                 // body: JSON.stringify(body)
    //             }
    //         );
    //         console.log(response);
    //     }
    //     catch (err) {
    //         console.log("Falil12");
    //     }

        




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
                `localhost:5000/Admin/Delete/${UserID}`,
                requestOptions)
            ;
            console.log(response);
        }
        catch (err) {
            console.log(err);
        }

    }






    return (

   
            <div>
                <NavbarUsers />

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
                            <tbody>

                                {
                                    users.map((item, i) =>
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
                                                        <h3 className="text-center">UPDATE ACCOUNTS</h3>
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
                                                    UserID:
                                                   
                                                </label>
                                                <input class="inputFields"
                                                    type="text"
                                                    id="username"
                                                    value={User_ID} onChange={(e)=>{setName(e.target.value)}}
                                                    placeholder="Enter Your User Name"
                                                    required
                                               
                                                />



                                                 
                                              <label htmlFor="username" class="labels">
                                                    User Name
                                                   
                                                </label>
                                                <input class="inputFields"
                                                    type="text"
                                                    id="username"
                                                    value={User_name} onChange={(e)=>{setUserId(e.target.value)}}
                                                    placeholder="Enter Your User Type"
                                                    required
                                               
                                                />

                                                
                                              <label htmlFor="username" class="labels">
                                                    User Type
                                                   
                                                </label>
                                                <input class="inputFields"
                                                    type="text"
                                                    id="usertype"
                                                    value={User_type} onChange={(e)=>{setuserType(e.target.value)}}
                                                    placeholder="Enter Your User Type"
                                                    required
                                               
                                                />
                                               

                                                <label htmlFor="emailre" class="labels">
                                                    Email:
                                                    
                                                </label>
                                                <input class="inputFields"
                                                    type="email"
                                                    id="emailre"
                                                    value={Email} onChange={(e)=>{setEmail(e.target.value)}}
                                                    placeholder="Enter Your Email"
                                                    required
                                                    
                                                />
                                               


                                                <label htmlFor="password" class="labels">
                                                    Password:
                                                   
                                                </label>
                                                <input class="inputFields"
                                                    type="password"
                                                    id="password"
                                                   
                                                    placeholder="Enter Your Password"
                                                    required
                                                  
                                                />
                                            

                                                <label htmlFor="confirm_pwd" class="labels">
                                                    Confirm Password:
                                                    
                                                </label>
                                                <input class="inputFields"
                                                    type="password"
                                                    id="confirm_pwd"
                                                   
                                                    placeholder="Enter Your Password Again"
                                                    required
                                                   
                                                />
                                               

                                               
                                                <div className="d-flex justify-content-center">

                                                    <button className="mt-5" id="SignUpBtn" >Update</button>
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





                    </div>


                </div>

            </div>
       
    );
}

export default AdminUpdate;

