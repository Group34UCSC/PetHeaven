import React,{useEffect,useState} from "react";
import NavbarUsers from "../../../includes/NavbarUsers";
import '../css/AdminView.css';

function AdvanceDonation() {


  const [users,setUser]=useState([])
  const [users1,setUser1]=useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/Admin/View").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        setUser(resp)
      })
    })

    fetch("http://localhost:5000/Admin/DonationView").then((result)=>{
      result.json().then((resp1)=>{
        // console.warn(resp)
        setUser1(resp1)
      })
    })

  },[])
  console.warn(users)



  const[searchTerm, setSearchTerm]=useState('')
  
    return (
     
        <div>
          
       



{/* donation table */}

<div className="subHeader">
        <div className="topic">VIEW USER DONATION</div>
        </div>
         
         <div class="adminviewtable">

         <table class="table view">
  <thead class="thead-dark">
    <tr>
                                    <th scope="col">Donation ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Acc No</th>
                                    <th scope="col">Branch</th>
    </tr>
  </thead>
  <tbody>
    
  {                                   users1.filter((item)=>{
                                        if(searchTerm == ""){
                                            return item
                                        }else if (item.UserName.toLowerCase().includes(searchTerm.toLowerCase()) ){
                                            return item
                                        }
                                    }).map((item, i) =>
                                        <tr key={i}>
                                            <td>{item.donationID}</td>
                                            <td>{item.UserName}</td>
                                            <td>{item.Date}</td>
                                            <td>{item.Amount}</td>
                                            <td>{item.AccNO}</td>
                                            <td>{item.Branch}</td>
                                        </tr>
                                    )
        }


  </tbody>
</table>


         </div>
        

                 
              {/* table */}
              <table class="table">
  <thead>
    <tr>
    <th scope="col">Income</th>
      <th scope="col">Expences</th>
      <th scope="col">amount</th>
      <th scope="col">Remain balance</th>
    </tr>
  </thead>
  <tbody>

  <tr>
      <td>10000</td>
      <td></td>
      <td></td>
      <td> </td>
    </tr>
    <tr>

    <td></td>
      <td>Pet Food</td>
      <td>2000</td>
      <td> </td>
    </tr>
    <tr>
      
    <td></td>
      <td>Pet vaccine</td>
      <td>1000</td>
      <td></td>
    </tr>
    <tr>
      
    <td></td>
      <td>Tranport</td>
      <td>2000</td>
      <td></td>
    </tr>

    <tr>
      
      <td></td>
        <td>other</td>
        <td>0</td>
        <td></td>
      </tr>

    <tr>
    <td></td>
      <td></td>
      <td></td>
      <td>5000</td>
    </tr>
  </tbody>
</table>





        
      </div>
     
    );
  }
  
  export default AdvanceDonation;