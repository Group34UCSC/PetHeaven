import React from "react";
import {Link} from 'react-router-dom';
import '../css/DoctorPrescriptionUser.css';
import { useEffect, useState } from "react";
// import {Link} from 'react-router-dom';


import NavbarUsers from "../../../includes/NavbarUsers";
import PrescriptionTable from "./PrescriptionTable";
import API from "../../../services/baseURL";
import options from "../../../services/options";



function DoctorPrescription()
{

       // Adding medicine functions started here
       const [medicineList, setMedicineList] = useState([{ Medicine: '' ,Dosage: '',Duration: '' },]);
       

        const handleServiceChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...medicineList];
        list[index][name] = value;
        setMedicineList(list);
      };
     
      const handleServiceRemove = (index) => {
        const list = [...medicineList];
        list.splice(index, 1);
        setMedicineList(list);
      };
      //  const handleServiceRemove = (index) => {
      //   const list = [...medicineList];
      //   list.splice(index, 1);
      //   setMedicineList(list);
      // };
      const handleServiceAdd = () => {
        setMedicineList([...medicineList, {Medicine: '' ,Dosage: '',Duration: ''  }]);
       };
     //   Adding medicine functions ended here
     
     // Confirm and send buttons started here
       const[show,setShow]=useState(false);
       const[showBill,setShowBill]=useState(false);
     // Confirm and send buttons ended here 

    
  const HandlePrescription = e => {
    e.preventDefault();
    console.log("Medicine List", medicineList);
    
    // const data = { Medicine: medicineList.Medicine, Quantity: medicineList.Quantity, Price: medicineList.Price};
    // const data = medicineList;
    // console.log("Data",data);

    medicineList.map((item,index)=>{
      // console.log("GGS")
      console.log(item)
      const Medicine = item.Medicine;
    const Dosage = item.Dosage;
    const Duration = item.Duration;
    // console.log("Price",medicineList[0].Price);
    const response = API.post(`Doctor/DoctorPrescription`, {
      params: {
        Medicine: Medicine,
        Dosage: Dosage,
        Duration : Duration
      }
    }, options);
    console.log("Data ",response);
    alert("Successfully Submitted");
    })
    


  };

    return(
        <div>
        <NavbarUsers/>
        <PrescriptionTable />

   

    {/* Repeat Prescription Form started here */}
    <section className="section bg-c-light border-bottom">
        <div className="container">
            <div className="card shadow">
            <div className="card-body">
            <h5 className="main-heading text-center">Prescription</h5>
            <h6 class="slmc" className="text-center">Add Medicine</h6>
            <div className="underline mx-auto"></div>
       
            <div className="form-field">
    <label htmlFor="service">Medicine List</label>

    {/* Medicine input field started here */}
    {medicineList.map((medicineInput, index) => (
      <div key={index} className="services">
        <div className="first-division">
         

            {/* Medicine input parts started here */}
           <div className="form-group">
            <div className="card">
                <div className="card-body bg-c-light">
                <div className="row ">
            <div class="col-md-6">
                <label for="option" class="form-label">Medicine</label>
                <select class="form-control" value={medicineInput.Medicine} onChange={(e)=>handleServiceChange(e,index)} name="Medicine" id="inputGroupSelect02">
                    <option selected>Select  Medicine</option>
                    <option value="Cotrimaxazole 480 mg">Cotrimaxazole 480 mg</option>
                    <option value="Metronidazole 400 mg">Metronidazole 400 mg</option>
                    <option value="Promethazine 10 mg">Promethazine 10 mg</option>
                    <option value="Ezo omeprazole 20 mg">Ezo omeprazole 20 mg</option>
                    <option value="Metronidazole 200 mg">Metronidazole 200 mg</option>
                </select>
                
                </div>
                <div class="col-md-3">
                    <div className="form-group">
                        <label className="mb-1">Dosage</label>
                        <input type="text" className="form-control" value={medicineInput.Dosage} name="Dosage"
                             onChange={(e)=>handleServiceChange(e,index)} placeholder="Enter dosage"></input>
                    </div>
                </div>
                <div class="col-md-3">
                    <div className="form-group">
                        <label className="mb-1">Duration</label>
                        <input type="text" className="form-control" value={medicineInput.Duration} name="Duration"
                             onChange={(e)=>handleServiceChange(e,index)}  placeholder="Enter duration"></input>
                    </div>
                </div>
            </div>
                </div>
                 
            </div>
            {/* Medicine input parts ended here */}
                
            </div>

          {medicineList.length - 1 === index && medicineList.length < 6 && (
            <button
              type="button"
              onClick={handleServiceAdd}
              className="add-btn"
            >
              <span>+Add a Medicine</span>
            </button>
          )}
        </div>
        <div className="second-division">
          {medicineList.length !== 1 && (
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
  {/* Submit and View current availability buttons started here */}
  <div className="form-group py-3 row ">
            <div className="col-md-2">
                <button type="button" id="submit-btn"  onClick={HandlePrescription} className="btn shadow w-100 ">Submit</button>
            </div>
            <div className="col-md-3">
            
            </div>
      </div>
    {/* Submit and View current availability buttons started here */}
  

  {/* Confirm and reject buttons started here */}
  {/* <div className="form-group py-3 row ">
        <div className="col-md-6">
            <button onClick={()=>setShowBill(true)} type="button" id="submit-btn" className="btn shadow w-100 ">Confirm</button>
        </div>
        <div className="col-md-6">
            <button onClick={()=>setShow(true)} type="button" id="reject-btn" className="btn shadow w-100 ">Reject</button>
        </div>
  </div> */}
{/* Confirm and reject buttons started here */}

        
            </div>
            
            </div>
    
          
            
        </div>
        
        
    </section>
    {/* Repeat Prescription Form ended here */}
    
  
    
    
    </div>
 

        
    );
}

export default DoctorPrescription;