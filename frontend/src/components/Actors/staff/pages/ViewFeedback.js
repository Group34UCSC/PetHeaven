import React,{useState} from 'react';
import {Link, Search} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/ViewFeedback.css';

import dog from '../img/dog.jpg';

function ViewFeedback(){
        return(
            <div>
            <section className="section bg-c-light border-top">
                <h3 class="pageTitle">Feedback  <i class="fa-solid fa-comments"></i></h3>
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <div className="searchposts searchfeedback">
                                <input class="searchTerm" type="text" placeholder=" Search here..." name="search"/>
                                <button class="searchButton" type="submit"><i class="fa-solid fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
              <div className="container">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <i class="fa-solid fa-user"></i> H.P.T.K. Kasthuriarachchi
                            </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>How can I contact chrity organization owner.</strong> Our organization happy to help this charity organization. We are expect to donate and also we are hope to do another programs. Can I contact the Head of this charity organization.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <i class="fa-solid fa-user"></i> H.P.T.K. Kasthuriarachchi
                            </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>How can I contact chrity organization owner.</strong> Our organization happy to help this charity organization. We are expect to donate and also we are hope to do another programs. Can I contact the Head of this charity organization.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <i class="fa-solid fa-user"></i> H.P.T.K. Kasthuriarachchi
                            </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>How can I contact chrity organization owner.</strong> Our organization happy to help this charity organization. We are expect to donate and also we are hope to do another programs. Can I contact the Head of this charity organization.
                            </div>
                            </div>
                        </div>
                    </div>
              </div>
            </section>
          </div>   
        )
}

export default ViewFeedback;
