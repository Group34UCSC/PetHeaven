import React,{useState} from "react";
import '../css/AdminNotifications.css'

function AdminNotifications() {
    return (
      <div>
    <div className="subHeader">
    <div className="topic">Notifications</div>
    </div>

     <table class="table table-striped mt-3 mb-3">
  <thead>
    <tr>
      <th scope="col">User name</th>
      <th scope="col">Name</th>
      <th scope="col">Notifications</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">sasindu</th>
      <td>Mark</td>
      <td>auto</td>
    </tr>
    <tr>
      <th scope="row">Thisara</th>
      <td>Jacob</td>
      <td>Thornton</td>
    </tr>
    <tr>
      <th scope="row">Sandaruwan</th>
      <td>Larry</td>
      <td>the Bird</td>
    </tr>
  </tbody>
</table>

     </div>
    );
  }
  
  export default AdminNotifications;