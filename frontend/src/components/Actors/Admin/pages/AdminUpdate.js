import React from "react";
import { useRef, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Axios from 'axios';



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
                                        </tr>
                                    )
                                }


                            </tbody>
                        </table>

                        
         <form>
         <div class="form-group">
    <label for="exampleInputPassword1">ID</label>
    <input type="text" value={User_ID} onChange={(e)=>{setName(e.target.value)}} class="form-control" id="ID" placeholder="ID"/>
  </div>    

  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" value={User_name} onChange={(e)=>{setUserId(e.target.value)}} class="form-control" id="name" aria-describedby="name" placeholder="Enter Name"/>
  </div>     
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" value={Email} onChange={(e)=>{setEmail(e.target.value)}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  
  <div class="form-group">
    <label for="exampleInputEmail1">User Type</label>
    <input type="text" value={User_type} onChange={(e)=>{setuserType(e.target.value)}} class="form-control" id="usertype" aria-describedby="emauserType" placeholder="Enter user Type"/>
  </div>
 
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>




                    </div>


                </div>

            </div>
       
    );
}

export default AdminUpdate;

