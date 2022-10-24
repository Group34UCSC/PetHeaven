
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  

import profile from '../images/profile.png';
import './profileview.css';

function Profileview(){
    const [users, setUsers] = useState([])
    const [name,setFirstname]=useState("");
    const [age,setLastname]=useState("");
    const [color,setUsername]=useState("");
    const [image,setImage]=useState("");
    const [email,setEmail]=useState("");
    useEffect(()=>{
        getUsers();
    },[])

    const getUsers=async e=>{
        console.log(window.loggedUserId);
        console.log("__THISARA__");
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
                        setEmail(resp[0].Email)
                    }
                )
            })
        }
        catch (err) {
            console.log("Faalil");
        }
    }

    console.log(users);
    console.log("___thisara dilshan___");
    return(
        <div>
            <div class="card" id="profileviewcard">
                <div class="row">
                    <div class="col col-sm-3 column">
                        {/* <img src={profile} ></img> */}
                    </div>
                    
                    {
                        users.map((item,i)=>{
                            console.log(window.loggedUserId)
                            console.log("show me what is there");
                            console.log(item.User_ID);
                            if(window.loggedUserId==item.User_ID){
                                
                                return(
                                    <div class="col col-sm-9 column">
                                        
                                        <div class="card-body">
                                            <table class="table" id="profiletable">
                                            <tbody>
                                                <tr>
                                                    <th id="profilelabel">Your Name</th>
                                                    <td id="profileitem">{item.firstName} {item.lastName}</td>
                                                </tr>
                                            
                                                <tr>
                                                    <th id="profilelabel">User Name</th>
                                                    <td id="profileitem">{item.User_name}</td>
                                                </tr>

                                                <tr>
                                                    <th id="profilelabel">Telephone number</th>
                                                    <td id="profileitem">{item.mobile}</td>
                                                </tr>

                                                <tr>
                                                    <th id="profilelabel">Email</th>
                                                    <td id="profileitem">{item.Email}</td>
                                                </tr>
                                            </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Profileview;