import React from 'react';
import './css/Footer.css';

function Footer(){

    return(
       
      <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">

        
          <ul class="navbar-nav me-auto ms-auto">
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">Contact Us </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">Privacy Policy</a>
            </li>
            
          </ul>
       
      </div>
    </nav>
      
    )
}

export default Footer;