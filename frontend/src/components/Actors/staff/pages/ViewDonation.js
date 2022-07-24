import React,{useState} from 'react';
import {Link, Search} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  

import '../css/ViewDonation.css';


import dog from '../img/dog.jpg';

function ViewDonation(){
    return(
        <div>
        <section className="section bg-c-light border-top">
            <h3 class="pageTitle">Donations <i class="fa-solid fa-paw"></i></h3>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                    <div class="card card-body donationcard">
                      <h5 class="card-title">Received Donations</h5>
                      <h6 class="card-subtitle mb-2 text-muted">24 / 07 / 2020</h6>
                      <p class="card-text">Today's Total Amount of Donations = Rs. 756000.00</p>
                    </div>
                  </div>
                </div>
                <div class="row donationsearch">
                    <div class="col">
                        <div className="search">
                            <input class="searchTerm" type="text" placeholder=" Search here..." name="search"/>
                            <button class="searchButton" type="submit"><i class="fa-solid fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
          <div className="container donationTable">
            <div className="row ">
              <table class="table table-hover table-fixed">
                <thead>
                  <tr>

                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Name</th>
                    <th scope="col">Contact Number</th>
                    <th scope="col">Amount(Rs)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">18.07.2020</th>
                    <td>15 : 42</td>
                    <td>A.P.H. Aththanayake</td>
                    <td>+94(78) 5814239</td>
                    <td>70 000.00</td>
                  </tr>
                  <tr>
                    <th scope="row">18.07.2020</th>
                      <td>15 : 42</td>
                      <td>A.P.H. Aththanayake</td>
                      <td>+94(78) 5814239</td>
                      <td>70 000.00</td>
                  </tr>
                  <tr>
                    <th scope="row">18.07.2020</th>
                      <td>15 : 42</td>
                      <td>A.P.H. Aththanayake</td>
                      <td>+94(78) 5814239</td>
                      <td>70 000.00</td>
                  </tr>
                  <tr>
                    <th scope="row">18.07.2020</th>
                      <td>15 : 42</td>
                      <td>A.P.H. Aththanayake</td>
                      <td>+94(78) 5814239</td>
                      <td>70 000.00</td>
                  </tr>

                  <tr>
                    <th scope="row">18.07.2020</th>
                      <td>15 : 42</td>
                      <td>A.P.H. Aththanayake</td>
                      <td>+94(78) 5814239</td>
                      <td>70 000.00</td>
                  </tr>

                  <tr>
                    <th scope="row">18.07.2020</th>
                      <td>15 : 42</td>
                      <td>A.P.H. Aththanayake</td>
                      <td>+94(78) 5814239</td>
                      <td>70 000.00</td>
                  </tr>

                  <tr>
                    <th scope="row">18.07.2020</th>
                      <td>15 : 42</td>
                      <td>A.P.H. Aththanayake</td>
                      <td>+94(78) 5814239</td>
                      <td>70 000.00</td>
                  </tr>

                  <tr>
                    <th scope="row">18.07.2020</th>
                      <td>15 : 42</td>
                      <td>A.P.H. Aththanayake</td>
                      <td>+94(78) 5814239</td>
                      <td>70 000.00</td>
                  </tr>

                  <tr>
                    <th scope="row">18.07.2020</th>
                      <td>15 : 42</td>
                      <td>A.P.H. Aththanayake</td>
                      <td>+94(78) 5814239</td>
                      <td>70 000.00</td>
                  </tr>

                  <tr>
                    <th scope="row">18.07.2020</th>
                      <td>15 : 42</td>
                      <td>A.P.H. Aththanayake</td>
                      <td>+94(78) 5814239</td>
                      <td>70 000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>   
    )
}

export default ViewDonation;