import React from "react";
import './PharmacyHome.css';
// import {Link} from 'react-router-dom';

import PaidPrescriptions from "./images/pres.jpg";
import Inquiries from "./images/inquiry.jpg";
import Inventory from "./images/inventory.png";



function PharmacyHome()
{
    return(
        <div>
            
            
            <section className="py-4 ">
            <div className="container">
                <div className="row bg-success text-white"> 
                    <div className="col-md-4 my-auto"></div>
                    <h3 className="text-center">Aradhana Pharmacy</h3>
                </div>
            </div>
            </section>
            <div>
               
            </div>
            <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card shadow">
                            <img src={PaidPrescriptions} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Paid Prescriptions</h6>
                                    <div className="underline"></div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                            <img src={Inquiries} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Inquiries</h6>
                                    <div className="underline"></div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                            <img src={Inventory} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Inventory</h6>
                                    <div className="underline"></div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-4 ">
            <div className="container">
                <div className="row bg-success text-white"> 
                    <div className="col-md-4 my-auto"></div>
                    <h3 className="text-center">New Prescriptions</h3>
                </div>
            </div>
            </section>
            <div></div>
        </div>
    );
}

export default PharmacyHome;