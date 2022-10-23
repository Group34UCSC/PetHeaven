import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import Profileview from './Profileview';
// import '../css/doctorAppointment.css';
import CustomerEditProfile from './CustomerEditprofile';
import CustomerChangePassword from './CustomerChangepassword';
import NavbarUsers from '../includes/NavbarUsers';
function ProfilePage(){
    const [users, setUsers] = useState([])
    const [name,setFirstname]=useState("");
    const [age,setLastname]=useState("");
    const [color,setUsername]=useState("");
    const [image,setImage]=useState("");
    const [email,setEmail]=useState("");

    const getUsers=async e=>{
    
        
        try{

            fetch("http://localhost:5000/petadopter/profilepage").then((result)=>
            {
                result.json().then((resp)=>{
                    console.log(resp[0].type)
                        setUsers(resp)
                        console.log();
                        setFirstname(resp[0].firstname)
                        setLastname(resp[0].lastname)
                        setUsername(resp[0].username)
                        setEmail(resp[0].email)
                    }
                )
            })
        }
        catch (err) {
            console.log("Faalil");
        }
    }
    
    return(
        <div>
            <NavbarUsers/>
            <Profileview></Profileview>
            <div class="cardbody" id="profilebtn"> 
                <button class="btn btn-success " id="profilebtns" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i class="fa-solid fa-pen-to-square" ></i>Edit profile</button>
                <button class="btn btn-success " id="profilebtns" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1"><i class="fa-solid fa-pen-to-square"></i>Change password</button>
            </div>
            <div class="row">
                <div class="collapse column  profilecollapse col-md-6" id="collapseExample">
                    <div class="card card-body">
                        <CustomerEditProfile></CustomerEditProfile>
                    </div>
                </div>

                <div class="collapse column profilecollapse col-md-6" id="collapseExample1">
                    <div class="card card-body">
                        <CustomerChangePassword></CustomerChangePassword>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProfilePage;