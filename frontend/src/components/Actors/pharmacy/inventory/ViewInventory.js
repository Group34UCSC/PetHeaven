import React, {useEffect,useState}  from "react";
import NavbarUsers from "../../../includes/NavbarUsers";
import './ViewInventory.css';
import SignUpImg from "../../../images/pharmacy1.jpg";


function ViewInventory()
{
    const [med, setMed] = useState([])
    const [MFD, setMFD] = useState("");
    const [EXP, setEXP] = useState("");
    const [Quantity, setQuantity] = useState("");
    const [Price, setPrice] = useState("");

    const [buttontext, setButtontext] = useState('Update');
    
    const [inventory,setInventory]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/pharmacy/viewInventory").then((result)=>{
        result.json().then((resp)=>{
            console.warn(resp)
            setInventory(resp)
            console.log(resp)
        })
    })},[])
    const[searchTerm, setSearchTerm]=useState('')

    console.warn(med)
    function UpdateStock(item) {
        console.log(item)
        setMFD(item.MFD)
        setEXP(item.EXP)
        setQuantity(item.Quantity)
        setPrice(item.Price)

    }

    const UpdateStockform = async e => {
        e.preventDefault();
        setButtontext('Updated..');
        try {
            const body = { MFD,EXP , Quantity, Price };
            const response = await fetch(
                "http://localhost:5000/Admin/Update",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
            );
            console.log(response);
        }
        catch (err) {
            console.log("Falil12");
        }

    }

    
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

            <section className="section bg-c-light" >
                    <div className="container">
                        <div className="card shadow">
                            <div className="card-body">
                                <div className="row">




                                    <div className="col-md-6 border-left">

                                       
                                        <div className="col-md-12">
                                            <div className="card shadow">
                                                <div className="card-body">
                                                    <div className="row bg-success text-white mb-3">
                                                        <div className="col-md-4 my-auto"></div>
                                                        <h3 className="text-center">Update Stock Details</h3>
                                                    </div>

                                                </div>
                                                <img src={SignUpImg}  alt="Services"/>
                                            </div>
                                        </div>

                                    </div>



                                    <div className="col-md-6 border-start">
                                 
                                        <section id="SignUpSection">
                                            
                                            <form id="SignUpForm" >
                     
                                         
        
                                              
                                            <label htmlFor="username" class="labels">
                                                    Manufacture Date:
                                                   
                                                </label>
                                                <input class="inputFields"
                                                    type="date"
                                                    id="MFD"
                                                    value={MFD} onChange={(e)=>{setMFD(e.target.value)}}
                                                    placeholder="Enter Manufacture Date"
                                                    required
                                               
                                                />



                                                 
                                              <label htmlFor="EXP" class="labels">
                                                Expiary Date:
                                                   
                                                </label>
                                                <input class="inputFields"
                                                    type="date"
                                                    id="username"
                                                    value={EXP} onChange={(e)=>{setEXP(e.target.value)}}
                                                    placeholder="Enter Expiary Date"
                                                    required
                                               
                                                />


                                              <label htmlFor="Quantity" class="labels">
                                                Quantity:
                                                   
                                                </label>
                                                <input class="inputFields"
                                                    type="text"
                                                    id="usertype"
                                                    value={Quantity} onChange={(e)=>{setQuantity(e.target.value)}}
                                                    placeholder="Enter Quantity"
                                                    required
                                               
                                                />
                                               

                                                <label htmlFor="Price" class="labels">
                                                    Price:
                                                    
                                                </label>
                                                <input class="inputFields"
                                                    type="text"
                                                    id="Price"
                                                    value={Price} onChange={(e)=>{setPrice(e.target.value)}}
                                                    placeholder="Enter Unit Price"
                                                    required
                                                    
                                                />
                                               

                                               
                                                <div className="d-flex justify-content-center">

                                                    <button className="mt-5" id="SignUpBtn" onClick={UpdateStockform}>{buttontext}</button>
                                                </div>


                                            </form>
                                        </section>
                                        {/* //    )}  */}

                                    </div>








                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            
        {/* Medicine stock details started here    */}
        <section className="section bg-c-light border-bottom">
            <div className="container">
                <div className="card shadow">
                <div className="card-body">
                <h5 className="main-heading text-center">Availability of Veterinary Medicine Stock</h5>
                <div className="underline mx-auto"></div>


                   {/* Search bar started here */}
                   <div class="searchbar-div" >
                    <form>
                        <div className="form-group mt-3">
                        <div className="card mb-4 ">
                            <div className="card-body bg-c-light">
                            <div className="row ml-4">

                        {/* Search box started here         */}
                       

                            <div class="container">

                            <div class="row height d-flex justify-content-center align-items-center">

                            <div class="col-md-8">

                            <div class="form">
                                {/* <i class="fa fa-search"></i> */}
                                <input type="text" class="form-control form-input" placeholder="Search by Medicine Name" onChange={(e)=>{setSearchTerm(e.target.value)}} />
                                {/* <span class="left-pan"><i class="fa fa-microphone"></i></span> */}
                                </div>
                                
                            </div>
                            
                            </div>

                        </div>

                        
                        {/* Search box ended here          */}

                        {/* Search button started here      */}
                            {/* <div class="col-md-2">
                            <button type="submit" class="btn btn-success " id="petsearch-btn">Search <i class="fa-solid fa-magnifying-glass"></i></button>
                            </div> */}
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
                            <th scope="col">Medicine Name</th>
                            <th scope="col">Manufacture Date</th>
                            <th scope="col">Expiary Date</th>
                            <th scope="col">Quantity(Units)</th>
                            <th scope="col">Unit Price(LKR)</th>
                            <th scope="col">Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                
                                inventory.filter((item)=>{
                                    if(searchTerm == ""){
                                        return item
                                    }else if (item.Medicine.toLowerCase().includes(searchTerm.toLowerCase())){
                                        return item
                                    }
                                }).map((item,i)=>
                                    <tr key={i}>
                                        
                                <td>{i+1}</td>
                                <td>{item.Medicine}</td>
                                <td>{item.MFD}</td>
                                <td>{item.EXP}</td>
                                <td>{item.Quantity}</td>
                                <td>{item.Price}</td>
                                <td><button type="button" class="btn btn-warning" onClick={() => UpdateStock(item)}>Update</button></td>
                                {/* <td>{item.Medicine}</td> */}
                                </tr>
                                )
                            }

                            {/* <tr>
                            <th scope="row">1</th>
                            <td>Cotrimaxazole 480 mg</td>
                            <td>623</td>
                            <td>420</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Metronidazole 400 mg</td>
                            <td>512</td>
                            <td>912</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Promethazine 10 mg</td>
                            <td>29</td>
                            <td>1440</td>
                            </tr>
                            <tr>
                            <th scope="row">4</th>
                            <td>Ezo omeprazole 20 mg</td>
                            <td>57</td>
                            <td>960</td>
                            </tr> */}
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

export default ViewInventory;