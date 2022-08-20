import React, {Component} from "react";
import {Link} from 'react-router-dom';
import '../css/PostAdvertisement.css';
// import PetToolImg from "../images/Pet-tool.jpg";

export class PostAdvertisement extends Component
{

state={
    PetToolImg : 'https://cdn.onlinewebfonts.com/svg/img_74492.png',
}

ImgHandler = (e) =>{
    const reader = new FileReader();
    reader.onload = () =>
    {
        if(reader.readyState === 2)
        {
            this.setState({PetToolImg:reader.result})
        }
    }
    reader.readAsDataURL(e.target.files[0])
}

// function PostAdvertisement()
    render()
    {
        const {PetToolImg}=this.state
        return(
            <div>
                <section className="py-4 ">
                <div className="container col-md-8">
                    <div className="row bg-success text-white"> 
                        <div className="col-md-4 my-auto"></div>
                        <h3 className="text-center">New Advertisement</h3>
                    </div>
                </div>
                </section>
                <div>
                   
                </div>
                <section className="section bg-c-light">
                    <div className="container col-md-8">
                        <div className="card shadow">
                            <div className="card-body">
                                <div className="">
                                <div className="row">
                                    <div className="col-md-1">
    
                                    </div>
                                    <div className="col-md-10 ">
                                        <h5 className="main-heading text-center">To Post a New Advertisement</h5>
                                    <div className="underline mx-auto"></div>
                                        
                                        <div className="form-group ">
                                            <label className="mb-1">Title</label>
                                            <input type="text" className="form-control" placeholder="Enter the title"></input>
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1 mt-2">Price</label>
                                            <input type="text" className="form-control" placeholder="Enter the price(LKR)"></input>
                                        </div>

                                        <div className="form-group">
                                            <div className="ImgContainer" id="ImgContainer">
                                                {/* <h3 className="ImgHeading">Add Image of Equipment</h3> */}
                                                <label className="mb-1 mt-2">Add Image of Equipment</label>
                                                <div className="PetTool-holder mt-1 mb-3" id="PetTool-holder">
                                                    <img src={PetToolImg} alt="" id="Pet-tool"></img>
                                                    {/* <img src={PetToolImg} className="w-100 border-bottom" alt="Services"/> */}
                                                    {/* <input type="file" name="petTool-upload" id="Pet-tool-img" accept="image/*"  className="form-control" placeholder="Input a Image"></input> */}
                                                </div>
                                                <input type="file" name="petTool-upload" id="Pet-tool-img" accept="image/*"  className="form-control" placeholder="Input a Image" onChange={this.ImgHandler}></input>
                                            </div>
                                        </div>

                                        {/* <div className="form-group">
                                            <label className="mb-1 mt-2">Image</label>
                                            <input type="file" multiple accept="image/*"  className="form-control" placeholder="Input a Image"></input>
                                        </div> */}
                                        
                                        <div className="form-group">
                                            <label className="mb-1 mt-2">Description</label>
                                            <textarea rows="4" className="form-control" placeholder="Enter a description"></textarea>
                                        </div>
                                        {/* <div className="form-group py-3">
                                            <button type="button" className="btn btn-success shadow w-100 ">Send</button>
                                        </div> */}
                                        <div className="d-flex justify-content-center mb-3 mt-4 ">
                                            <Link to="/petstore/addNewEquipment" class="nav-link active">
                                                {/* <button type="button" id="post-add-btn" className="btn shadow w-100 ">Post a New Advertisement</button> */}
                                                <button type="button" id="submit-btn" className="btn shadow w-100 ">Post</button>
                                            </Link>
                                        </div>
                                        
                                    </div>
    
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
}

export default PostAdvertisement;