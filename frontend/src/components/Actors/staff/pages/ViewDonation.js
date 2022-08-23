import React,{useState} from 'react';
import {Link, Search} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  

import '../css/ViewDonation.css';



import dog from '../img/dog.jpg';
import NavbarUsers from '../../../includes/NavbarUsers';

function ViewDonation(){
    return(
        <div>
        <NavbarUsers/>
        <section className="section bg-c-light border-top">
            <h3 class="pageTitle">Donations <i class="fa-solid fa-paw"></i></h3>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                    <div class="card card-body donationcard">
                      <h5 class="card-title">Received Donations</h5>
                      <h6 class="card-subtitle mb-2 text-muted">24 / 07 / 2020</h6>
                      <p class="card-text donationtext">Today's Total Amount of Donations = Rs. 101000.00</p>
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
              {/* <table class="table  table-stripped table-hover"> */}
              <table class="table table-stripped table-hover">
                <thead>
                  <tr className='text-center'>

                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Name</th>
                    <th scope="col">Contact Number</th>
                    <th scope="col">Amount(Rs)</th>
                  </tr>
                </thead>
                <tbody className='text-center'>
                  <tr>
                    <td scope="row">10.08.2020</td>
                    <td>15 : 42</td>
                    <td>A.P.H. Aththanayake</td>
                    <td>+94(78) 5814239</td>
                    <td className='amountcell'>70 000.00</td>
                  </tr>
                  <tr>
                    <td scope="row">10.08.2020</td>
                      <td>14 : 42</td>
                      <td>A.K.K. Ramanayake</td>
                      <td>+94(78) 5763439</td>
                      <td>5 000.00</td>
                  </tr>
                  <tr>
                    <td scope="row">10.08.2020</td>
                      <td>13 : 58</td>
                      <td>M.M.D.S. Mahitige</td>
                      <td>+94(71) 5814751</td>
                      <td>2 000.00</td>
                  </tr>
                  <tr>
                    <td scope="row">10.08.2020</td>
                      <td>13 : 02</td>
                      <td>D.S.P.M. Dulsith</td>
                      <td>+94(72) 5896339</td>
                      <td>10 000.00</td>
                  </tr>

                  <tr>
                    <td scope="row">10.08.2020</td>
                      <td>12 : 42</td>
                      <td>B.P.S.R. Bandara</td>
                      <td>+94(77) 5896349</td>
                      <td>4 000.00</td>
                  </tr>

                  <tr>
                    <td scope="row">10.08.2020</td>
                      <td>12 : 18</td>
                      <td>H.M.M.K. Davithri</td>
                      <td>+94(78) 5896339</td>
                      <td>2 000.00</td>
                  </tr>

                  <tr>
                    <td scope="row">10.08.2020</td>
                      <td>10 : 42</td>
                      <td>P.P.S.D. Pathiranage</td>
                      <td>+94(78) 8964239</td>
                      <td>8 000.00</td>
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