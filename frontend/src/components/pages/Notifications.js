import React,{useState} from "react";
import './Notifications.css'

function Notifications() {
    return (
      <div>
    <div className="subHeader">
    <div className="topic">Notifications</div>
    </div>

     <table class="table table-striped mt-3 mb-3">
  <thead>
    <tr>
      <th >User name</th>
      <th >Name</th>
      <th >Notifications</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>sasindu</td>
      <td>Mark</td>
      <td>auto</td>
    </tr>
    <tr>
      <td>Thisara</td>
      <td>Jacob</td>
      <td>Thornton</td>
    </tr>
    <tr>
      <td>Sandaruwan</td>
      <td>Larry</td>
      <td>the Bird</td>
    </tr>
  </tbody>
</table>

     </div>
    );
  }
  
  export default Notifications;