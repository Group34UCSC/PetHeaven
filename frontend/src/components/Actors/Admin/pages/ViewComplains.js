import React,{useState} from "react";
import { useRef, useEffect } from "react";
import NavbarUsers from "../../../includes/NavbarUsers";
import '../css/ViewComplains.css';

function ViewComplains() {
  const [users, setUser] = useState([])
    const [User_name, setName] = useState("");
    const [complains, setComplains] = useState("");
    const [User_type, setuserType] = useState("");
    const [complain_ID, setComplainId] = useState(null)



  useEffect(() => {
    getUsers();
}, [])

function getUsers() {
    fetch("http://localhost:5000/Admin/ComplainsView").then((result) => {
        result.json().then((resp) => {
            // console.warn(resp)

            setUser(resp)
            setComplainId(resp[0].complain_ID)
            setName(resp[0].User_name)
            setuserType(resp[0].User_type)
            setComplains(resp[0].complains)

  

        })
    })
}

console.warn(users)
function UpdateUser(item) {
    console.log(item)
    setComplainId(item.complain_ID)
    setName(item.User_name)
    setuserType(item.User_type)
    setComplains(item.complains)

}

  
const[searchTerm, setSearchTerm]=useState('')
    return (
  
      <div>
      <NavbarUsers />


       {/* search */}
       <div class="container">

  <div class="row height d-flex justify-content-center align-items-center">

    <div class="col-md-6">

      <div class="form">
        <i class="fa fa-search"></i>
        <input type="text" class="form-control form-input" placeholder="Search Name or Complain..." onChange={(e)=>{setSearchTerm(e.target.value)}} />
        <span class="left-pan"><i class="fa fa-microphone"></i></span>
      </div>
      
    </div>
    
  </div>
  
</div>



      {/* table */}


      <div>

          <div class="adminviewtable">

              <table class="table view">
                  <thead class="thead-dark">
                      <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Name</th>
                          <th scope="col">User Type</th>
                          <th scope="col">Complains</th>
                          <th scope="col">Operation</th>
                      </tr>
                  </thead>
                  <tbody>

                      {
                          users.filter((item)=>{
                              if(searchTerm == ""){
                                  return item
                              }else if (item.User_name.toLowerCase().includes(searchTerm.toLowerCase()) || item.User_type.toLowerCase().includes(searchTerm.toLowerCase())){
                                  return item
                              }
                          }).map((item, i) =>
                              <tr key={i}>
                                  <td>{item.complain_ID}</td>
                                  <td>{item.User_name}</td>
                                  <td>{item.User_type}</td>
                                  <td>{item.complains}</td>
                                  <td><button type="button" class="btn btn-warning" onClick={() => UpdateUser(item)}>Fix Error</button></td>
                       
                              </tr>
                          )
                      }


                  </tbody>
              </table>      
      </div>
      </div>
      </div>

      
     
    );
  }
  
  export default ViewComplains;