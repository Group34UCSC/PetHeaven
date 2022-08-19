import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/CustomerDoctormessages.css';
<<<<<<< HEAD
import CustomerSubNavbar from './CustomerSubNavbar';
=======
import CustomerSubNavbar from './Customersubnavbar';
>>>>>>> 32444d99e30598aa06ce81c3f9403cd0b78e2c68
import dogvaccine from "../images/catmedic.png";
import doctorcalls from '../images/doctorcalls.jpg';
import texting from '../images/texting.jfif';
import messages from '../images/messages.jpg';

function CustomerDocmessagetab(){
    return(
        <div class="col bg-image" id="custmessagetabaccess">
            <h1 id="custmessagesheader"> Use Pet Heaven chat service to connect with doctors.</h1>
            <h4 id ="custmessagecontent">You can call and message with doctors with online consultation service</h4>
            <button id="custmessagebtn" class="btn btn-success">Open chats <i class="fa fa-message"></i></button>
        </div>
    )
}

export default CustomerDocmessagetab;