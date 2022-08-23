import React,{useState} from "react";
import NavbarUsers from "../../../includes/NavbarUsers";
import '../css/ViewComplains.css';

function ViewComplains() {
    return (
        <div>
        {/* <div className="subHeader">
        <div className="topic">VIEW PET HISTORY</div>
        </div> */}
         < NavbarUsers />
         <div class="DoctorViewPetHistorytable">

         <table class="table view">
  <thead class="thead-dark">
    <tr>
      <th scope="col">User ID</th>
      <th scope="col">User Name</th>
      <th scope="col">Complains</th>
      <th scope="col">user Type</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Imesh</td>
      <td>system pages not loading</td>
      <td>customer</td>
      
    </tr>
    <tr>
    <td>2</td>
      <td>Ravindu</td>
      <td>system pages images not clear</td>
      <td>customer</td>
      
    </tr>
    <tr>
    <td>3</td>
      <td>Yuki</td>
      <td>Donate function is not Working sometimes</td>
      <td>Doctor</td>
    </tr>
    <tr>
    <td>4</td>
      <td>Thilini</td>
      <td>system pages not loading</td>
      <td>Admin</td>
    </tr>
    <tr>
    <td>5</td>
      <td>Manuka</td>
      <td>Footer links is not working</td>
      <td>customer</td>
    </tr>
   
  </tbody>
</table>


         </div>


         <div class="row m-md-5 m-3 ">
        
        <div class="lg-4 bg-red py-5 px-5">
            <form action="">
                <h4 class="text-center text-white mb-4">Response to Complains</h4>
                <div class="row">
                    <div class="col-md-6 col-12 my-md-0 my-2">
                        <input type="text" class="form-control bg-darkred" placeholder="User Name"/>
                    </div>
                    <div class="col-md-6 col-12 my-md-0 my-2 ">
                        <input type="email" class="form-control bg-darkred" placeholder="User ID"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-12 my-2">
                        <input type="text" class="form-control bg-darkred" placeholder="User Type"/>
                    </div>
                    <div class="col-md-6 col-12 my-2">
                        <select name="" id="dropDown" class="form-control bg-darkred shadow-none">
                            <option value="" hidden selected>Status</option>
                            <option value="service 1">Pending</option>
                            <option value="service 1">Success</option>
                            
                        </select>
                    </div>
                    <div class="">
                        <textarea cols="10" rows="3" class="form-control bg-darkred shadow-none"
                            placeholder="Message"></textarea>
                    </div>
                    <div class=" my-2"> <button class="btn w-100 shadow-none text-uppercase msg-btn">Send
                            Message</button> </div>

                </div>
            </form>
        </div>
        
    </div>








        
      </div>

      
     
    );
  }
  
  export default ViewComplains;