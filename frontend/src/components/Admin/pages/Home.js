import React from 'react';
// import Create from './Create';
// import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
// import {Link} from 'react-router-dom';


import '../css/Home.css';
function Home() {
  return (
    
    <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" href="#">Create Accounts</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Delete Accounts</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Update Accounts</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="#">View Accounts</a>
  </li>
</ul> 

  );
}

export default Home;
