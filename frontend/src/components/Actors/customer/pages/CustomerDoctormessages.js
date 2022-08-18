import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/CustomerDoctormessages.css';

import CustomerSubNavbar from './Customersubnavbar';

import dogvaccine from "../images/catmedic.png";
import doctorcalls from '../images/doctorcalls.jpg';
import texting from '../images/texting.jfif';
import Profile from '../images/profile.png';
function CustomerDoctormessages(){
    return(
        <div>
            <CustomerSubNavbar></CustomerSubNavbar>
            <div>
                <div id="messagesheader"> Your Recent chats</div>
                <div>
                    <table class="bg-c-light table">
                        
                        <tbody>
                            <tr>
                                <td><img src={Profile} id="messagesproileimg"></img> </td>
                                <th class="text-success" scope="row">Mark Redwood</th>
                                <td>channel date at 23rd this month</td>
                                <td class="text-success"><i class="fa fa-message"></i></td>
                                <td class="text-success"><i class="fa fa-phone"></i></td>
                            </tr>
                            <tr>
                                <td><img src={Profile} id="messagesproileimg"></img></td>
                                <th class="text-success" scope="row">Mark Redwood</th>
                                <td>channel date at 23rd this month</td>
                                <td class="text-success"><i class="fa fa-message"></i></td>
                                <td class="text-success"><i class="fa fa-phone"></i></td>
                            </tr>
                            <tr>
                                <td><img src={Profile} id="messagesproileimg"></img></td>
                                <th class="text-success" scope="row">Mark Redwood</th>
                                <td>channel date at 23rd this month</td>
                                <td class="text-success"><i class="fa fa-message"></i></td>
                                <td class="text-success"><i class="fa fa-phone"></i></td>
                            </tr>

                            <tr>
                                <td><img src={Profile} id="messagesproileimg"></img></td>
                                <th class="text-success" scope="row">Mark Redwood</th>
                                <td>channel date at 23rd this month</td>
                                <td class="text-success"><i class="fa fa-message"></i></td>
                                <td class="text-success"><i class="fa fa-phone"></i></td>
                            </tr>

                            <tr>
                                <td><img src={Profile} id="messagesproileimg"></img></td>
                                <th class="text-success" scope="row">Mark Redwood</th>
                                <td>channel date at 23rd this month</td>
                                <td class="text-success"><i class="fa fa-message"></i></td>
                                <td class="text-success"><i class="fa fa-phone"></i></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            
            <div class="searchbardiv">
                <form>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="petsearchbyname" aria-describedby="petsearch" placeholder="search people to connect"></input>
                        <button type="submit" class="btn btn-success " id="petsearchbtn">Search <i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </form>
            </div>
        </div>
    )
    

 
}

export default CustomerDoctormessages;