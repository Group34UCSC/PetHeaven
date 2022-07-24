import React from 'react'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import '../css/Staff.css';

import pet from '../img/pet.png';

function Staff() {
  return (
    <div>
      <section className="section bg-c-light border-top">
        <div className="container">
          <div className="row">
            <div class="admincard col-md-3">
                       
              <div className="card shadow" id='cardone'>
                <Link to="/viewpets" class="nav-link active">
                  <img src={pet} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/>
                  <div className="card-body " id='cardTitle'>
                    <h6><b>VIEW PETS</b></h6>
                    <div className="underline"></div>
                  </div>
                </Link>
              </div>
            </div>

            <div class="admincard col-md-3">
                       
              <div className="card shadow" id='cardone'>
                <Link to="/postpets" class="nav-link active">
                  <img src={pet} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/>
                  <div className="card-body" id='cardTitle'>
                    <h6><b>POST PETS</b></h6>
                    <div className="underline"></div>
                  </div>
                </Link>
              </div>
            </div>

            <div class="admincard col-md-3">
                       
              <div className="card shadow" id='cardone'>
                <Link to="/viewpost" class="nav-link active">
                  <img src={pet} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/>
                  <div className="card-body" id='cardTitle'>
                    <h6><b>VIEW POSTS</b></h6>
                    <div className="underline"></div>
                  </div>
                </Link>
              </div>
            </div>

            <div class="admincard col-md-3">
                       
              <div className="card shadow" id='cardone'>
                <Link to="/viewadoptee" class="nav-link active">
                  <img src={pet} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/>
                  <div className="card-body" id='cardTitle'>
                    <h6><b>VIEW ADOPTEES</b></h6>
                    <div className="underline"></div>
                  </div>
                </Link>
              </div>
            </div>

            <div class="admincard col-md-3">
                       
              <div className="card shadow" id='cardone'>
                <Link to="/updatevaccination" class="nav-link active">
                  <img src={pet} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/>
                  <div className="card-body" id='cardTitle'>
                    <h6><b>UPDATE VACCINATION</b></h6>
                    <div className="underline"></div>
                  </div>
                </Link>
              </div>
            </div>

            <div class="admincard col-md-3">
                       
              <div className="card shadow" id='cardone'>
                <Link to="/notifyadopter" class="nav-link active">
                  <img src={pet} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/>
                  <div className="card-body" id='cardTitle'>
                    <h6><b>NOTIFY ADOPTER</b></h6>
                    <div className="underline"></div>
                  </div>
                </Link>
              </div>
            </div>

            <div class="admincard col-md-3">
                       
              <div className="card shadow" id='cardone'>
                <Link to="/viewdonation" class="nav-link active">
                  <img src={pet} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/>
                  <div className="card-body" id='cardTitle'>
                    <h6><b>VIEW DONATIONS</b></h6>
                    <div className="underline"></div>
                  </div>
                </Link>
              </div>
            </div>

            <div class="admincard col-md-3">
                       
              <div className="card shadow" id='cardone'>
                <Link to="/viewfeedback" class="nav-link active">
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                    <span class="visually-hidden">unread messages</span>
                  </span>
                  <img src={pet} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/>
                  <div className="card-body" id='cardTitle'>
                    <h6><b>VIEW FEEDBACK</b></h6>
                    <div className="underline"></div>
                  </div>
                </Link>
              </div>
            </div>
                       
                        
          </div>
        </div>
      </section>
    </div>
  )
}

export default Staff