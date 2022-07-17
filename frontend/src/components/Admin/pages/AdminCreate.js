import React,{useState} from "react";
import '../css/AdminCreate.css';

function AdminCreate() {
    return (
     <div>
    <div className="subHeader">
    <div className="topic">CREATE ACCOUNT</div>
    </div>
     
      
    <div className='containerCreate'>
     <form>
    <div class="row mb-4">
      <div class="col">
        <div class="mb-3">
          <label for="firstName" class="form-label">First name</label>
          <input type="text" class="form-control" id="firstName"/>
        </div>
      </div>
      <div class="col">
      <div class="mb-3">
          <label for="lastName" class="form-label">Last name</label>
          <input type="text" class="form-control" id="lastName"/>
        </div>
      </div>
    </div>

           
    <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>


        <div class="mb-3">
        <label for="option" class="form-label">User Type</label>
        <select class="form-control" id="inputGroupSelect02">
            <option selected>Choose...</option>
            <option value="1">Customer</option>
            <option value="2">Doctor</option>
            <option value="3">Staff Member</option>
            <option value="4">Pet Store</option>
            <option value="5">Pharmacy</option>
        </select>
        </div>

 
    <div class="mb-3">
          <label for="userid" class="form-label">User ID</label>
          <input type="text" class="form-control" id="userid"/>
    </div>

      <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
      </div>

      <div class="mb-3">
          <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
          <input type="password" class="form-control" id="exampleInputPassword2"/>
      </div>

      
            <button type="submit" class="btn btn-primary">Submit</button>
      </form>

     </div>

     </div>
    );
  }
  
  export default AdminCreate;


//   <div class="wrapper">
//   <form action="#">
//       <div class="h5 font-weight-bold text-center mb-3">Registration</div>
//       <div class="form-group d-flex align-items-center">
//           <div class="icon"><span class="far fa-user"></span></div>
//           <input autocomplete="off" type="text" class="form-control" placeholder="Name">
//       </div>
//       <div class="form-group d-flex align-items-center">
//           <div class="icon"><span class="far fa-envelope"></span></div>
//           <input autocomplete="off" type="email" class="form-control" placeholder="Email">
//       </div>
//       <div class="form-group d-flex align-items-center">
//           <div class="icon"><span class="fas fa-phone"></span></div>
//           <input autocomplete="off" type="tel" class="form-control" placeholder="Phone">
//       </div>
//       <div class="form-group d-flex align-items-center">
//           <div class="icon"><span class="fas fa-map-marker-alt"></span></div>
//           <input autocomplete="off" type="text" class="form-control" placeholder="City">
//       </div>
//       <div class="form-group d-flex align-items-center">
//           <div class="icon"><span class="fas fa-key"></span></div>
//           <input autocomplete="off" type="password" class="form-control" placeholder="Password">
//           <div class="icon btn"><span class="fas fa-eye-slash"></span></div>
//       </div>
//       <div class="mb-2">
//           <label class="option">Remember me
//               <input type="checkbox" checked>
//               <span class="checkmark"></span>
//           </label>
//       </div>
//       <div class="btn btn-primary mb-3">Signup</div>
//       <div class="terms mb-2">
//           By clicking "Signup", you acknowledge that you have read the
//           <a href="#">Privacy Policy</a> and agree to the
//           <a href="#">Terms of Service</a>.
//       </div>
//       <div class="connect border-bottom mt-4 mb-4"></div>
//       <ul class="p-0 social-links">
//           <li><a href="#"><span class="fab fa-facebook-f"></span></a></li>
//           <li><a href="#"><span class="fab fa-google"></span></a></li>
//           <li><a href="#"><span class="fab fa-github"></span></a></li>
//       </ul>
//   </form>
// </div>