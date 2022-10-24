import React from "react";
import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import './AddEquipmentStock.css';
import NavbarUsers from "../../../includes/NavbarUsers";
import API from "../../../services/baseURL";
import options from "../../../services/options";

function AddEquipmentStock()
{
     // Adding medicine functions started here
     const [itemList, setItemList] = useState([{ Item: '' ,Quantity: '',Price: '' },]);
     const handleServiceChange = (e, index) => {
       const { name, value } = e.target;
       const list = [...itemList];
       list[index][name] = value;
       setItemList(list);
     };
   
     const handleServiceRemove = (index) => {
       const list = [...itemList];
       list.splice(index, 1);
       setItemList(list);
     };
   
     const handleServiceAdd = () => {
      setItemList([...itemList, { Item: '' ,Quantity: '',Price: '' }]);
     };
   //   Adding medicine functions ended here
   const HandleStock = e => {
    e.preventDefault();
    console.log("Item List", itemList);

    itemList.map((item,index)=>{
      console.log("GGS")
      console.log(item)
      const Item = item.Item;
      const Quantity = item.Quantity;
      const Price = item.Price;
    // console.log("Price",medicineList[0].Price);
    const response = API.post(`petstore/inventory/AddStock`, {
      params: {
        Item: Item,
        Quantity: Quantity,
        Price : Price
      }
    }, options);
    console.log("Data ",response);
    alert("successfully Inserted");
    })


  };

    return(
        <div>
          <NavbarUsers/>
          {/* Inventory topic started here */}
        <section className="py-4 ">
        <div className="container">
            <div className="row bg-success text-white"> 
                <div className="col-md-4 my-auto"></div>
                <h3 className="text-center">Inventory</h3>
            </div>
        </div>
        </section>
        {/* Inventory topic ended here */}

        {/* New Stock Adding Form started here */}
        <section className="section bg-c-light border-bottom">
            <div className="container">
                <div className="card shadow">
                <div className="card-body">
                <h5 className="main-heading text-center">New Stock Adding Form</h5>
                <div className="underline mx-auto"></div>
            
                {/* <div className="form-group">
                <div className="card">
                    <div className="card-body bg-c-light">
                    <div className="row ">
                <div class="col-md-6">
                    <label for="option" class="form-label">Medicine</label>
                    <select class="form-control" id="inputGroupSelect02">
                        <option selected>Select prescribed medicine</option>
                        <option value="1">Cotrimaxazole 480 mg</option>
                        <option value="2">Metronidazole 400 mg</option>
                        <option value="3">Promethazine 10 mg</option>
                        <option value="4">Ezo omeprazole 20 mg</option>
                        <option value="5">Metronidazole 200 mg</option>
                    </select>
                    
                    </div>
                    <div class="col-md-3">
                        <div className="form-group">
                            <label className="mb-1">Quantity</label>
                            <input type="text" className="form-control" placeholder="Enter quantity of medicine"></input>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div className="form-group">
                            <label className="mb-1">Available Quantity</label>
                            <input type="text" className="form-control" ></input>
                        </div>
                    </div>
                </div>
                    </div>
                     
                </div>
                    
                    
                </div> */}
                <div className="form-field">
        <label htmlFor="service">Equipment List</label>

        {/* Medicine input field started here */}
        {itemList.map((itemInput, index) => (
          <div key={index} className="services">
            <div className="first-division">
              {/* <input
                name="service"
                type="text"
                id="service"
                value={singleService.service}
                onChange={(e) => handleServiceChange(e, index)}
                required
              /> */}

                {/* Medicine input parts started here */}
               <div className="form-group">
                <div className="card">
                    <div className="card-body bg-c-light">
                    <div className="row ">
                <div class="col-md-6">
                    <label for="option" class="form-label">Item</label>
                    <select class="form-control" value={itemInput.Item}  onChange={(e)=>handleServiceChange(e,index)} name="Item" id="inputGroupSelect02">
                        <option selected>Select Pet Tool to be Added</option>
                        <option value="Furniture Cage">Furniture Cage</option>
                        <option value="Dog grooming tools">Dog grooming tools</option>
                        <option value="Traction belt">Traction belt</option>
                        <option value="Cat collar">Cat collar</option>
                        <option value="Cat nail cutter">Cat nail cutter</option>
                        
                    </select>
                     {/* <input type="text" className="form-control" placeholder="Enter the title of item"></input> */}
                    </div>
                    <div class="col-md-3">
                        <div className="form-group">
                            <label className="mb-1">Quantity</label>
                            <input type="text" value={itemInput.Quantity} className="form-control"name="Quantity"
                             onChange={(e)=>handleServiceChange(e,index)} placeholder="Enter newly added quantity"></input>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div className="form-group">
                            <label className="mb-1">Unit Price</label>
                            <input type="text" value={itemInput.Price} className="form-control" name="Price" 
                            onChange={(e)=>handleServiceChange(e,index)} placeholder="Enter unit price"></input>
                        </div>
                    </div>
                </div>
                    </div>
                     
                </div>
                {/* Medicine input parts ended here */}
                    
                </div>

              {itemList.length - 1 === index && itemList.length < 15 && (
                <button
                  type="button"
                  onClick={handleServiceAdd}
                  className="add-btn"
                >
                  <span>+Add New Equipment</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {itemList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleServiceRemove(index)}
                  className="remove-btn"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
        {/* Medicine input field ended here */}

      </div>
      {/* <div className="output">
        <h2>Output</h2>
        {serviceList &&
          serviceList.map((singleService, index) => (
            <ul key={index}>
              {singleService.service && <li>{singleService.service}</li>}
            </ul>
          ))}
      </div> */}
      

      {/* Submit and View current availability buttons started here */}
      <div className="form-group py-3 row ">
            <div className="col-md-2">
                <button type="button" id="submit-btn" onClick={HandleStock} className="btn shadow w-100 ">Submit</button>
            </div>
            <div className="col-md-3">
            <Link to="/petstore/inventory/ViewPetToolInventory" class="nav-link active">
                <button type="button" id="view-btn" className="btn shadow w-100 ">View current availability</button>
            </Link>
            </div>
      </div>
    {/* Submit and View current availability buttons started here */}

            
                </div>
                
                </div>
        
                
                {/* <form className="Prescription" autoComplete="off">
                    <div className="form-field">
                        <label htmlFor="service">
                            service
                        </label>
                        <div className="services">
                            <div className="first-devision">
                                <input name="service" type="text" id="service" required/>
                                <button type="button" className="add-btn">
                                    <span>+Add a service</span>
                                </button>
                            </div>
                            <div className="second-devision">
                                <button type="button" className="remove-btn">
                                    <span>Remove</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="output">
                        <h2>Out put</h2>
                    </div>
                </form> */}
                
            </div>
            
        </section>
        {/* New Stock Adding Form ended here */}
    </div>
    )
}

export default AddEquipmentStock;

