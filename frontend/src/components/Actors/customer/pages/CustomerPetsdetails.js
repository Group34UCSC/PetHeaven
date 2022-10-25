import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function CustomerPetsdetails() {
    const [users, setUsers] = useState([])
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [color,setColor]=useState("");
    const [image,setImage]=useState("");
    const [petname,setPetname]=useState("");
    const [petcolor,setPetcolor]=useState("");
    const [type,setType]=useState('');
    const [filtereddata,setFiltereddata]=useState('');

    // useEffect(()=>{
    //     getUsers();
    //    },[])
    const getUsers=async e=>{
        e.preventDefault();
        
        try{

            fetch("http://localhost:5000/petadopter/findapet").then((result)=>
            {
                result.json().then((resp)=>{
                    console.log(resp[0].type)
                        setUsers(resp)
                        console.log();
                        setAge(resp[0].age)
                        setColor(resp[0].color)
                        setName(resp[0].name)
                        setImage(resp[0].image)
                        setType(resp[0].type)
                    }
                )
            })
        }
        catch (err) {
            console.log("Faalil");
        }
    }
    return ( 
        <div class = "card" style = "width: 18rem;">
            <img src = "..." class = "card-img-top"alt = "..."></img> 
            <div class = "card-body" >
                <h5 class = "card-title">Card title</h5> 
                <p class = "card-text" > Some quick example text to build on the card title and make up the bulk of the card 's content.</p> 
                <a href = "#" class = "btn btn-primary" > Go somewhere</a> 
            </div> 
        </div>
    )
}

export default CustomerPetsdetails;
