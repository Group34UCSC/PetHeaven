import React from "react";
import '../css/PostAdvertisement.css';

function PostAdvertisement()
{
    return(
        <div>
            <section className="py-4 ">
            <div className="container">
                <div className="row bg-success text-white"> 
                    <div className="col-md-4 my-auto"></div>
                    <h3 className="text-center">Post a New Advertisement</h3>
                </div>
            </div>
            </section>
            <div>
               
            </div>
            <section className="section bg-c-light">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="">
                            <div className="row">
                                <div className="col-md-8 border-left">
                                    <h6>
                                        Leave Us a Message
                                    </h6>
                                    <hr/>
                                    <div className="form-group">
                                        <label className="mb-1">Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Your Name"></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1 mt-1">Email</label>
                                        <input type="text" className="form-control" placeholder="Enter Your Email"></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Message</label>
                                        <textarea rows="4" className="form-control" placeholder="Enter Your Message"></textarea>
                                    </div>
                                    <div className="form-group py-3">
                                        <button type="button" className="btn btn-success shadow w-100 ">Send</button>
                                    </div>
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

export default PostAdvertisement;