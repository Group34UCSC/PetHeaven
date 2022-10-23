import React, {useEffect,useState} from "react";
import {Link} from 'react-router-dom';
import NavbarUsers from "../../../includes/NavbarUsers";
import '../css/EditAdvertisement.css';

function EditAdvertisement()
{
    const [editPetTools,setEditPetTools]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/petstore/View").then((result)=>{
        result.json().then((resp)=>{
            console.warn(resp)
            setEditPetTools(resp)
            console.log(resp)
        })
    })},[])
    return(
        <div>
            <NavbarUsers/>
            <section className="py-4 ">
            <div className="container col-md-8">
                <div className="row bg-success text-white"> 
                    <div className="col-md-4 my-auto"></div>
                    <h3 className="text-center">Edit Advertisement</h3>
                </div>
            </div>
            </section>
            <div>

            {
          editPetTools.map((item,i)=>
            <tr key={i}>
            <td>{item.User_ID}</td>
          <td>{item.User_name}</td>
          <td>{item.Email}</td>
            <td>{item.User_type}</td>
          </tr>
          )
        }

               
            </div>
            <section className="section bg-c-light">
                <div className="container col-md-8">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="">
                            <div className="row">
                                <div className="col-md-1">

                                </div>
                                {editPetTools.map((item,i)=>
                                <div className="col-md-10 " key={i}>
                                    <h5 className="main-heading text-center">To Edit a Posted Advertisement</h5>
                                <div className="underline mx-auto"></div>
                                    
                                        


                                    
                                    <div className="form-group ">
                                        <label className="mb-1">Title</label>
                                        <input type="text" className="form-control" value ={item.Title} placeholder="Enter Title"></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1 mt-2">Price</label>
                                        <input type="text" className="form-control" placeholder={item.Price}></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1 mt-2">Image</label>
                                        <input type="file" multiple accept="image/*"  className="form-control" placeholder="Input a Image"></input>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label className="mb-1 mt-2">Description</label>
                                        <textarea rows="4" className="form-control" placeholder={item.Description}></textarea>
                                    </div>
                                    {/* <div className="form-group py-3">
                                        <button type="button" className="btn btn-success shadow w-100 ">Send</button>
                                    </div> */}
                                    <div className="d-flex justify-content-center mb-3 mt-4 ">
                                        <Link to="" class="nav-link active">
                                            {/* <button type="button" id="post-add-btn" className="btn shadow w-100 ">Post a New Advertisement</button> */}
                                            <button type="button" id="submit-btn" className="btn shadow w-100 ">Confirm Edit</button>
                                        </Link>
                                    </div>
                                    
                                </div>
                                        
                                )
                                }
                                <div className="col-md-1">
                                    
                                </div>
                               
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
               

            </section>
        </div>
        
    );
}

export default EditAdvertisement;