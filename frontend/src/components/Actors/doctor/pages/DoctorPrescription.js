import React from "react";
import {Link} from 'react-router-dom';
// import '../css/DoctorPrescription.css';
// import {Link} from 'react-router-dom';


import NavbarUsers from "../../../includes/NavbarUsers";



function DoctorPrescription()
{
    return(
        <div>
            <NavbarUsers/>
    
                {/* Prescription list started  */}
        <label htmlFor="service">Prescription List</label>

        {/* First prescription started */}
        <div className="form-group mt-3">
                <div className="card">
                <Link to="DoctorPrescriptionUser" class="nav-link active">
                    <div className="card-body bg-c-light">
                    <div className="row ">
                <div class="col-md-2">
                    <label for="option" class="form-label">Prescription No</label>
                        <h4 className="main-heading">1</h4>
                    
                    </div>
                    <div class="col-md-5">
                        <label for="option" class="form-label">User details</label>
                        <h4 className="main-heading">Dr. Amal Silva</h4>
                        
                    </div>
                    <div class="col-md-5">
                    <label for="option" class="form-label">Pet details</label> 
                        <h4 className="main-heading">Shaggy</h4>
                        <h6 class="slmc">Dog</h6>
                        <h6 class="slmc">6 months</h6>
                        <h6 class="slmc">disease</h6>
                    </div>
                </div>
                    </div>
                </Link>
                </div>
                    
                    
                </div>
                {/* First prescription ended */}




                
        {/* second prescription started */}
        <div className="form-group mt-3">
                <div className="card">
                <Link to="/pharmacy/Prescription" class="nav-link active">
                    <div className="card-body bg-c-light">
                    <div className="row ">
                <div class="col-md-2">
                    <label for="option" class="form-label">Prescription No</label>
                        <h4 className="main-heading">2</h4>
                    
                    </div>
                    <div class="col-md-5">
                        <label for="option" class="form-label">User details</label>
                        <h4 className="main-heading">Dr. kmal Silva</h4>
                        
                    </div>
                    <div class="col-md-5">
                    <label for="option" class="form-label">Pet details</label> 
                        <h4 className="main-heading">bhaggy</h4>
                        <h6 class="slmc">Dog</h6>
                        <h6 class="slmc">8 months</h6>
                        <h6 class="slmc">disease</h6>
                    </div>
                </div>
                    </div>
                </Link>
                </div>
                    
                    
                </div>
                {/* second prescription ended */}




                
        {/* third prescription started */}
        <div className="form-group mt-3">
                <div className="card">
                <Link to="/pharmacy/Prescription" class="nav-link active">
                    <div className="card-body bg-c-light">
                    <div className="row ">
                <div class="col-md-2">
                    <label for="option" class="form-label">Prescription No</label>
                        <h4 className="main-heading">3</h4>
                    
                    </div>
                    <div class="col-md-5">
                        <label for="option" class="form-label">User details</label>
                        <h4 className="main-heading">Dr. wimal Silva</h4>
                        
                    </div>
                    <div class="col-md-5">
                    <label for="option" class="form-label">Pet details</label> 
                        <h4 className="main-heading">Naggy</h4>
                        <h6 class="slmc">Dog</h6>
                        <h6 class="slmc">6 months</h6>
                        <h6 class="slmc">disease</h6>
                    </div>
                </div>
                    </div>
                </Link>
                </div>
                    
                    
                </div>
                {/* third prescription ended */}

                
        {/* fouth prescription started */}
        <div className="form-group mt-3">
                <div className="card">
                <Link to="/pharmacy/Prescription" class="nav-link active">
                    <div className="card-body bg-c-light">
                    <div className="row ">
                <div class="col-md-2">
                    <label for="option" class="form-label">Prescription No</label>
                        <h4 className="main-heading">4</h4>
                    
                    </div>
                    <div class="col-md-5">
                        <label for="option" class="form-label">User details</label>
                        <h4 className="main-heading">Dr. Omal Silva</h4>
                        
                    </div>
                    <div class="col-md-5">
                    <label for="option" class="form-label">Pet details</label> 
                        <h4 className="main-heading">Shaggy</h4>
                        <h6 class="slmc">Dog</h6>
                        <h6 class="slmc">6 months</h6>
                        <h6 class="slmc">disease</h6>
                    </div>
                </div>
                    </div>
                </Link>
                </div>
                    
                    
                </div>
                {/* fourth prescription ended */}


               

             
            </div>
       
        
      
      
 

        
    );
}

export default DoctorPrescription;