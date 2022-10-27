import React,{useState} from 'react';
import {Link} from 'react-router-dom';
// import puppy1 from '../images/puppy1.jfif';
// import puppy2 from '../images/puppy2.jfif';
// import kitty1 from '../images/kitties1.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
// import editvector from '../images/editvector.png';

import Profileview from './Profileview';
import './CustomerEditProfile.css';

function CustomerEditprofile(){
    const [users, setUsers] = useState([])
    const [firstName,setFirstname]=useState("");
    const [lastName,setLastName]=useState("");
    const [address,setAddress] = useState("");
    const [mobile,setMobile]=useState("");
    const [adopterID,setAdopterID]=useState("");
    
    const [buttontext,setButtonText]=useState("");
    const handleSubmit=async e=>{
        e.preventDefault();
        setButtonText('Changes made');
        try {
            const User_ID=window.loggedUserId;
            console.log(User_ID);
            const body = {firstName,lastName,address,mobile,User_ID};
            console.log(firstName);
            const response = await fetch(
                "http://localhost:5000/PetAdopter/editprofile",
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
            console.log("Falil");
        }
    }
    
    // useEffect(()=>{
    //     getUsers();
    // },[])

    return(
        <div>
        
            <h3 id="editprofileheader">Edit your Profile</h3>
            <div class="card cardbody">
                <form class="signupform" id="editprofileform">
                        <div id="signuprows">
                            <label for="exampleFormControlInput1" class="form-label">First Name</label>
                            <input class="form-control" id="exampleFormControlInput1" value={firstName} onChange={(e)=>setFirstname(e.target.value)} placeholder="Enter first name"></input>
                        </div>
                        <div id="signuprows">
                            <label for="username" class="form-label">Last Name</label>
                            <input class="form-control" id="usernameinput" rows="3" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Enter Last name here"></input>
                        </div>

                        <div  id="signuprows">
                            <label for="Phone number" class="form-label">Address</label>
                            <input type="phonenumber" class="form-control" id="phoneinput" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Enter your address here"></input>
                        </div>
                        <div id="signuprows">
                            <label for="email" class="form-label">Mobile Number</label>
                            <input class="form-control" id="emailinput" rows="3" value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder="Enter your phone number here"></input>
                        </div>
                        <button type="submit" action="submit" class="btn btn-success" id="customereditprofiles" onClick={handleSubmit}>Submit <i class="fa-solid fa-check"></i></button>
                        <button type="reset" action="reset" class="btn btn-danger" id="customereditprofiles">Reset <i class="fa-solid fa-xmark"></i></button>
                </form>
            </div>
            
            
        </div>
   
    )
}

export default CustomerEditprofile;