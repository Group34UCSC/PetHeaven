
import React,{useState,useEffect} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link,useLocation} from 'react-router-dom';
import puppy1 from '../images/puppy1.jfif';
import puppy2 from '../images/puppy2.jfif';
import puppy4 from '../images/puppy4.jpg';
import kitties1 from '../images/kitties1.jfif';
import kitties3 from '../images/kitties3.jfif';
import NavbarUsers from '../../../includes/NavbarUsers';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/Customerviewpetdetails.css';


function Customerviewpetdetails(){
    const [users, setUsers] = useState([])
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [color,setColor]=useState("");
    const [image,setImage]=useState("");
    const [petname,setPetname]=useState("");
    const [petcolor,setPetcolor]=useState("");
    const [type,setType]=useState('');
    const [filtereddata,setFiltereddata]=useState('');
    const [gender,setGender]=useState('');
    const [breed,setBreed]=useState('');
    const [petID,setPetid]=useState('');
    const [about,setAbout]=useState('');
    useEffect(()=>{
        getUsers();
    },[])
    const getUsers=async e=>{
    
        
        try{

            fetch("http://localhost:5000/petadopter/findapet/petdetails").then((result)=>
            {
                result.json().then((resp)=>{
                        console.log(resp[0].type)
                        setUsers(resp)
                        setAge(resp[0].age)
                        setPetid(resp[0].petID)
                        setColor(resp[0].color)
                        setName(resp[0].name)
                        setImage(resp[0].image)
                        setType(resp[0].type)
                        setGender(resp[0].gender)
                        setBreed(resp[0].breed)
                        setAbout(resp[0].about)
                    }
                )
            })

        }
        catch (err) {
            console.log("Faalil");
        }

    }
    return (
        <div>
            <NavbarUsers/>
            <section className="section bg-c-light border-top">
                <h4 class="col-sm-12 petdetailsheader">Pet Posts - Click adopt request button to view the adopt request form <i class="fa-solid fa-paw"></i></h4>
                <div class="admincard col-12">     
                    <div>
                        {
                            
                            users.map((item,i)=>{
                                const queryString = window.location.search;
                                console.log(queryString);
                                const urlParams = new URLSearchParams(queryString);
                                const id = urlParams.get('id');
                                
                                if(item.petID==id){
                                    return(
                                            <div>
                                                <div className="card shadow cardpadding" id='cardone'>
                                                    <div className="container ">
                                                        <div className="row bg-success text-white titlebox"> 
                                                            <div className="col-md-4 my-auto"></div>
                                                            <h3 className="text-center ">{item.name}<i class="fa-solid fa-paw"></i></h3>
                                                        </div>
                                                    
                                                    
                                                        <div className="row">
                                                            <div class="col-sm-4 column left">
                                                                <img src={puppy4} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/>
                                                            </div>
                                                            <div class="col-sm-8 column right card-body" id='cardTitle'>                            
                                                                <div class>
                                                                    <table class="table card-body" id="profiletable">
                                                                        <tbody>
                                                                            <tr>
                                                                                <th id="profilelabel">Pet Name</th>
                                                                                <td>{item.name}</td>
                                                                            </tr>
                                                                    
                                                                            <tr>
                                                                                <th id="profilelabel">Breed</th>
                                                                                <td>{item.breed}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th id="profilelabel">Gender</th>
                                                                                <td>{item.gender}</td>
                                                                            </tr>

                                                                            <tr>
                                                                                <th id="profilelabel">Age</th>
                                                                                <td>{item.age}</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                <div class="col-sm-9 card " id="petdescription">{item.about} </div>
                                                            </div>
                                                        </div>
                                                        <Link to="adoptrequestform"><button type="button" class=" col-sm-10 btn btn-success deleteBtn" id="adoptbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">request to adopt <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    
                                }
                                

                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Customerviewpetdetails;

