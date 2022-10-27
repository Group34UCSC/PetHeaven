import React,{useState, useEffect} from 'react';
import {Link, Search} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  

import '../css/ViewPets.css';


import dog from '../img/dog.jpg';
import NavbarUsers from '../../../includes/NavbarUsers';

function ViewPets(){
    const [pets,setPets]=useState([])
    useEffect(()=>{
      fetch("http://localhost:5000/staffmember/viewpets").then((result)=>{
        result.json().then((resp)=>{
          // console.warn(resp)
          setPets(resp)
          console.log(resp);
        })
      })
    },[])
    console.warn(pets)
    console.log(pets)

    const [medicalstatus,setMedicalstatus]=useState([])
    useEffect(()=>{
      fetch("http://localhost:5000/staffmember/viewmedicalstatus").then((result)=>{
        result.json().then((resp)=>{
          // console.warn(resp)
          setMedicalstatus(resp)
          console.log(medicalstatus);
        })
      })
    },[])

    const [medicalstatusinjury,setMedicalstatusinjury]=useState([])
    useEffect(()=>{
      fetch("http://localhost:5000/staffmember/viewmedicalstatusinjury").then((result)=>{
        result.json().then((resp)=>{
          // console.warn(resp)
          setMedicalstatusinjury(resp)
          console.log(resp);
        })
      })
    },[])

    const [medicalstatusother,setMedicalstatusother]=useState([])
    useEffect(()=>{
      fetch("http://localhost:5000/staffmember/viewmedicalstatusother").then((result)=>{
        result.json().then((resp)=>{
          // console.warn(resp)
          setMedicalstatusother(resp)
          console.log(resp);
        })
      })
    },[])
    const [buttonText, setButtonText] = useState('Post Pet ');

    const handlepostpet = async (item) => {
      // e.preventDefault();
      
      setButtonText('Pet Posted ... ');
      try {
          const body = item;
          const PetID= item;
          
          const response = await fetch(`http://localhost:5000/staffmember/postpetpost/${PetID}`,
              {
                  method: "POST" , headers: {"Content-type": "application/json"},
                  body: JSON.stringify(body)
              }
          );
          console.log(item);
      }
      catch (err) {
          console.log("hey");
      }
  }
     //onlick Vaccines button 
     const Vaccines = ()=>{
      return(
        <div>
          {medicalstatus.map((item,i)=>

          <tbody className='text-center'>
          <tr>
            <td scope="row">{item.date}</td>
            <td className='vaccineendalign'>{item.details}</td>
          </tr>
          </tbody>

          )}

      </div>
      )
    }

    //onlick injury button 
    const Injuries = ()=>{
      return(
        <div>
          {medicalstatusinjury.map((item,i)=>

          <tbody className='text-center'>
          <tr>
            <td scope="row">{item.date}</td>
            <td className='vaccineendalign'>{item.details}</td>
          </tr>
          </tbody>

        )}

      </div>
      )
    }

        //onlick Others button 
        const Others = ()=>{
          return(
            <div>
               {medicalstatusother.map((item,i)=>

              <tbody className='text-center'>
              <tr>
                <td scope="row">{item.date}</td>
                <td className='vaccineendalign'>{item.details}</td>
              </tr>
              </tbody>

              )}
    
          </div>
          )
        }

    return(
        <div>
        <NavbarUsers/>
        <section className="section bg-c-light border-top">
            <h3 class="pageTitle">Our Pets <i class="fa-solid fa-paw"></i></h3>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <div className="search">
                            <input class="searchTerm" type="text" placeholder=" Search here..." name="search"/>
                            <button class="searchButton" type="submit"><i class="fa-solid fa-search"></i></button>
                        </div>
                    </div>

                    <div class="col">
                        <Link to="addnewpet" class="nav-link active">
                            <button type="button" class="btn btn-success addNewBtn" id="postpetbtn">Add New Pet <i class="fa-solid fa-paw"></i></button>
                        </Link>
                    </div>
                    <div class="col viewtoggleBtn">
                        <label className="switch">
                            <input type="checkbox" checked/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
          <div className="container ">
            <div className="row">

              {pets.map((item,i)=>
                           <div class="admincard col-md-4">       
                           <div className="card shadow" id='cardone'>
                               <div >
                                 <img src={item.image} className="imgcover rounded" alt="Services"/>
                               </div>
                               <div className="card-body" id='cardTitle'>
                                 <div className="petdetail">
                                   <div className='maindetails'>
                                     <h6 className="petName"><b>{item.name}</b></h6>
                                     <div className="underline"></div>
                                     <h6>{item.breed}</h6>
                                     <h6>{item.gender}</h6>
                                     <h6>{item.age}</h6>
                                     <h6>{item.color}</h6>
                                   </div>
         
                                     <div class="d-grid gap-2 ">
                                     <div class="container-fluid justify-content-start">
                                          <button class="btn btn-outline-success me-2 medicalbtn"  type="button" data-bs-toggle="modal" data-bs-target="#exampleModalToggle" onClick={Vaccines}> Vaccines </button>
                                          <button class="btn btn-outline-success me-2 medicalbtn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalToggle2" onClick={Injuries} > Injuries </button>
                                          <button class="btn btn-outline-success me-2 medicalbtn" type="button" onClick={Others} data-bs-toggle="modal" data-bs-target="#exampleModalToggle1"> Others </button>
                                      </div>
                                       {/* <button type="button" class="btn btn-outline-success editmedicalBtn" id="postpetbtn" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">Medical Status <i class="fa-solid fa-stethoscope"></i></button> */}
                                     </div>
                                     <h6 class="visibilityhidden">hhhh</h6>
                             
                                   <h6 >{item.about}</h6>
                                 </div>  
                                 
                               </div>

                               <Link to="" class="nav-link active d-grid gap-2">
                                 <button type="button" class="btn btn-success postpetBtn" id="postpetbtn" value={item.petID} onClick={(e) => handlepostpet(e.target.value)}>Post Pet <i class="fa-solid fa-newspaper"></i></button>
                             </Link>

                               {/* <Link to="postpets" class="nav-link active d-grid gap-2">
                                 <button type="button" class="btn btn-success postpetBtn" id="postpetbtn">Post Pet <i class="fa-solid fa-newspaper"></i></button>
                             </Link> */}
                           </div>
                         </div>
              )}

            </div>
          </div>
        </section>
        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                          <h4><b>  Vaccination Details <i class="fa fa-ambulance"></i>	</b></h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>

                      

                      <div class="modal-body">
                        <div className="container donationTable">
                          <div className="row ">
                            <table class="table table-stripped table-hover">

                            {medicalstatus.map((item,i)=>

                                <tbody className='text-center'>
                                <tr>
                                  <td scope="row">{item.date}</td>
                                  <td className='vaccineendalign'>{item.details}</td>
                                </tr>
                                </tbody>
              
                            )}
                             
                            </table>
                          </div> 
                        </div>
                      <div class="modal-footer">
                        </div>
                    </div>
                  </div>
                  </div>
                  </div>

                  <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggle2Label" tabindex="-1">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                          <h4><b>  Vaccination Details <i class="fa fa-ambulance"></i>	</b></h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>

                      

                      <div class="modal-body">
                        <div className="container donationTable">
                          <div className="row ">
                            <table class="table table-stripped table-hover">


                            {medicalstatusinjury.map((item,i)=>

                            <tbody className='text-center'>
                            <tr>
                              <td scope="row">{item.date}</td>
                              <td className='vaccineendalign'>{item.details}</td>
                            </tr>
                            </tbody>

                            )}
                             
                            </table>
                          </div> 
                        </div>
                      <div class="modal-footer">
                        </div>
                    </div>
                  </div>
                  </div>
                  </div>

                

              <div class="modal fade" id="exampleModalToggle1" aria-hidden="true" aria-labelledby="exampleModalToggle1Label" tabindex="-1">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                          <h4><b>  Other Details <i class="fa fa-ambulance"></i>	</b></h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>

                      <div class="modal-body">
                        <div className="container donationTable">
                          <div className="row ">
                            <table class="table table-stripped table-hover">

                            {medicalstatusother.map((item,i)=>

                            <tbody className='text-center'>
                            <tr>
                              <td scope="row">{item.date}</td>
                              <td className='vaccineendalign'>{item.details}</td>
                            </tr>
                            </tbody>

                            )}
                             
                             
                            </table>
                          </div> 
                        </div>
                      <div class="modal-footer">
                        </div>
                    </div>
                  </div>
                </div>
                </div>
                
            </div>  
            
    )
}

export default ViewPets;