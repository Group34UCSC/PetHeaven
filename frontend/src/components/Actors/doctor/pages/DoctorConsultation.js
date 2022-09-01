import React from "react";
import {useRef, useEffect, useState } from "react"; 
import {Link} from 'react-router-dom';
import Axios from 'axios';
import '../css/DoctorConsultation.css';
import NavbarUsers from "../../../includes/NavbarUsers";
import DoctorViewPetHistory from "./DoctorViewPetHistory";
import  ConsultationPage from "./ConsultationPage";





// import NavbarUsers from "../../../includes/NavbarUsers";

function DoctorConsultation() {

    const [users, setUser] = useState([])
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone_number, setNumber] = useState("");
    const [Service_type, setService] = useState("");

    useEffect(() => {
        getUsers();
    }, [])

    function getUsers() {
        fetch("http://localhost:5000/Doctor/consultationView").then((result) => {
            result.json().then((resp) => {
                // console.warn(resp)

                setUser(resp)
                setName(resp[0].Name)
                setEmail(resp[0].Email)
                setNumber(resp[0].Phone_number)
                setService(resp[0].Service_type)

            })
        })
    }

    // console.warn(users)
    // function UpdateUser(item) {
    //     console.log(item)
    //     setUserId(item.User_ID)
    //     setName(item.User_name)
    //     setEmail(item.Email)
    //     setuserType(item.User_type)

    // }






    return(
     
     <div> 
      <NavbarUsers />
     

      <div>

<div class="adminviewtable">

    <table class="table view">
        <thead class="thead-dark">
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Service Type</th>
                {/* <th scope="col">Operation</th>
                <th scope="col">Operation</th> */}
            </tr>
        </thead>
        <tbody>

            {
                users.map((item, i) =>
                    <tr key={i}>
                        <td>{item.Name}</td>
                        <td>{item.Email}</td>
                        <td>{item.Phone_number}</td>
                        <td>{item.Service_type}</td>
                        {/* <td><button type="button" class="btn btn-warning" onClick={() => UpdateUser(item)}>Update</button></td>
                        <td><button type="button" class="btn btn-danger" onClick={() => DeleteUser(item)}>Deactivated</button></td> */}
                    </tr>
                )
            }


        </tbody>
    </table>
</div>
</div>



<div class="row m-md-5 m-3 ">
        
        <div class="lg-4 bg-red py-5 px-5">
            <form action="">
                <h4 class="text-center text-white mb-4">confirm / reject consultation</h4>
                <div class="row">
                    <div class="col-md-6 col-12 my-md-0 my-2">
                        <input type="text" class="form-control bg-darkred" placeholder="customer Name"/>
                    </div>
                    <div class="col-md-6 col-12 my-md-0 my-2 ">
                        <input type="email" class="form-control bg-darkred" placeholder="customer Email"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-12 my-2">
                        <input type="text" class="form-control bg-darkred" placeholder="customer Phone Number"/>
                    </div>
                    <div class="col-md-6 col-12 my-2">
                        <select name="" id="dropDown" class="form-control bg-darkred shadow-none">
                            <option value="" hidden selected>Services</option>
                            <option value="service 1">About Cat</option>
                            <option value="service 1">About dog</option>
                            
                        </select>
                    </div>
                    <div class="">
                        <textarea cols="10" rows="3" class="form-control bg-darkred shadow-none"
                            placeholder="Message"></textarea>
                    </div>
                    <div class=" my-2"> <button class="btn w-100 shadow-none text-uppercase msg-btn">Send
                            Message</button> </div>

                </div>
            </form>
        </div>
        
    </div>



            </div>
     
    );
}
 export default DoctorConsultation;

