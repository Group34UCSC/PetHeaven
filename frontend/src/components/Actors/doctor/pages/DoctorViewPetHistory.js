

import React,{useEffect,useState} from "react";
import NavbarUsers from "../../../includes/NavbarUsers";
import '../css/DoctorViewPetHistory.css';

function DoctorViewPetHistory() {


  const [users,setUser]=useState([]);
  const [name, setName] = useState("");
  const [complains, setComplains] = useState("");
  const [User_type, setuserType] = useState("");



  useEffect(()=>{
    fetch("http://localhost:5000/Doctor/ViewPet").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        setUser(resp)
      })
    })
  },[])
  console.warn(users)




  const[searchTerm, setSearchTerm]=useState('')
    return (
     
        <div>
           <NavbarUsers/>
        <div className="subHeader">
        <div className="topic">VIEW PET HISTORY</div>
        </div>
         
            {/* search */}
            <div class="container">

<div class="row height d-flex justify-content-center align-items-center">

  <div class="col-md-6">

    <div class="form">
      <i class="fa fa-search"></i>
      <input type="text" class="form-control form-input" placeholder="Search Name... or Type" onChange={(e)=>{setSearchTerm(e.target.value)}} />
      <span class="left-pan"><i class="fa fa-microphone"></i></span>
    </div>
    
  </div>
  
</div>

</div>


         <div class="adminviewtable">

         <table class="table view">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Colour</th>
      <th scope="col">Gender</th>
      <th scope="col">About</th>
    </tr>
  </thead>
  <tbody>
              {
                users.filter((item)=>{
                  if(searchTerm == ""){
                       return item
                    }else if (item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.type.toLowerCase().includes(searchTerm.toLowerCase())){
                       return item
                   }
                   }).map((item,i)=>
            <tr key={i}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.color}</td>
            <td>{item.gender}</td>
            <td>{item.about}</td>
          </tr>
          )
        }


  </tbody>
</table>


         </div>
        
      </div>
     
    );
  }
  
  export default DoctorViewPetHistory;