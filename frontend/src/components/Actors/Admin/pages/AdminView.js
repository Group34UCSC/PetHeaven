import React,{useState} from "react";
import NavbarUsers from "../../../includes/NavbarUsers";
import '../css/AdminView.css';

function AdminView() {
    return (
     
        <div>
           <NavbarUsers/>
        <div className="subHeader">
        <div className="topic">VIEW USER ACCOUNT</div>
        </div>
         
         <div class="adminviewtable">

         <table class="table view">
  <thead class="thead-dark">
    <tr>
      <th scope="col">User Name</th>
      <th scope="col">Name</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">Adopt petNames</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sasiya</td>
      <td>Sasindu</td>
      <td>0770984523</td>
      <td>Sentry, Kalii</td>
    </tr>
    <tr>
    <td>Thisara</td>
      <td>Dilshan</td>
      <td>0770984523</td>
      <td>Brown, izii</td>
    </tr>
    <tr>
    <td>Sandaruwan</td>
      <td>Nimalsiripala</td>
      <td>0770981233</td>
      <td>Blacky, terii</td>
    </tr>
  </tbody>
</table>


         </div>
        
      </div>
     
    );
  }
  
  export default AdminView;