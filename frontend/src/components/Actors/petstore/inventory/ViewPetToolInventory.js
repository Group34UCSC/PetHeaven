import React, {useEffect,useState} from "react";
import NavbarUsers from "../../../includes/NavbarUsers";
import './ViewPetToolInventory.css';

function ViewPetToolInventory()
{
    const [inventory,setInventory]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/petstore/viewInventory").then((result)=>{
        result.json().then((resp)=>{
            console.warn(resp)
            setInventory(resp)
            console.log(resp)
        })
    })},[])

    return(
        <div>
            <NavbarUsers/>
            <section className="py-4 ">
            <div className="container">
                <div className="row bg-success text-white"> 
                    <div className="col-md-4 my-auto"></div>
                    <h3 className="text-center">Current Status of Inventory</h3>
                </div>
            </div>
            </section>
            
        {/* Medicine stock details started here    */}
        <section className="section bg-c-light border-bottom">
            <div className="container">
                <div className="card shadow">
                <div className="card-body">
                <h5 className="main-heading text-center">Availability of Stock</h5>
                <div className="underline mx-auto"></div>


                   {/* Search bar started here */}
                   <div class="searchbar-div" >
                    <form>
                        <div className="form-group mt-3">
                        <div className="card mb-4 ">
                            <div className="card-body bg-c-light">
                            <div className="row ml-4">

                        {/* Search box started here         */}
                        <div class="col-md-10">
                            <input type="text" class="form-control" id="petsearchby-name" aria-describedby="petsearch" placeholder="Search Item by Item Name or ID"></input>
                            
                            </div>
                        {/* Search box ended here          */}

                        {/* Search button started here      */}
                            <div class="col-md-2">
                            <button type="submit" class="btn btn-success " id="petsearch-btn">Search <i class="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        {/* Search box ended here      */}

                        </div>
                            </div>
                            
                        </div>
                        
                        
                        </div>
                    </form>
                </div>
                {/* Search bar ended here */}

                <hr/>


                
                </div>

                {/* Stock details started here */}
                <div className="container mb-3">
                <div className="card shadow">
                <div className="card-body">
                    <table class="table table-striped table-hover">

                        <thead>
                            <tr>
                            <th scope="col"></th>
                            <th scope="col">Item Name</th>
                            <th scope="col">Quantity(Units)</th>
                            <th scope="col">Unit Price(LKR)</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            inventory.map((item,i)=>
                                <tr key={i}>
                            <td>{i+1}</td>
                            <td>{item.Medicine}</td>
                            <td>{item.Quantity}</td>
                            <td>{item.Price}</td>
                            {/* <td>{item.Medicine}</td> */}
                            </tr>
                            )
                        }


                        </tbody>
                    </table>
                </div>
                </div>
                {/* Stock details ended here */}

            </div>
                </div>
                
            </div>
            
        </section>
        {/* Medicine stock details ended here  */}   
        </div>
        
    );
}

export default ViewPetToolInventory;