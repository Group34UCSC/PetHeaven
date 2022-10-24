import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/CustomerAdoptpet.css';
import docvectors from  '../images/docvector.png';
import Pagination from  './pagination';
import petdog from '../images/petdog.jpg';
import NavbarUsers from '../../../includes/NavbarUsers';

function CustomerAdoptrequest() {
    const [fullname, setFullname] = useState('');
    const [phonenumber,setPhonenumber] = useState('');
    const [income, setIncome] = useState('');
    const [isanyPet,setIsanyPet]=useState('1');
    const [typeofPet,setTypeofPet] = useState('1');
    const [kidsinHome,setKidsinHome] = useState('1');
    const [isanypatient,setIsanypatient] = useState('1');
    const [adoptexperience,setAdoptexperience]=useState('1');
    const [additionalDetails,setAdditionalDetails] = useState('');
    const [buttonText, setButtonText] = useState('Submit');
    const handleSubmit = async e => {
        e.preventDefault();
        setButtonText('Submitted . . .');
        try {
          const body = {fullname,phonenumber,income,isanyPet,typeofPet,kidsinHome,isanypatient,adoptexperience,additionalDetails};
          const response = await fetch(
            "http://localhost:5000/PetAdopter/findapet/adoptrequestform",
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
            console.log("Falil");
        }
    
    }

    return(
        <div>
            <NavbarUsers/>
            <h1 class="bg-c-light col-sm-12 requestheader">Adopt Request form</h1>
            <h2 class="bg-c-light col-sm-12 requestdescription border-bottom border-success"> Fill this form with correct information.<br></br> PetHeaven team 
                will send you a notification whether you can take this pet or not</h2>
            <div class="row " id="requestarea">
                <div class="col-sm-6 column leftimg" ><img src={petdog} id="reqpetimg"></img></div>
                <div class="col-sm-6 column rightform cardbody" > 
                    <h3 id="requestheader">Request form<i class="fa-solid fa-pen"></i></h3>
                        <form class="reqform card bg-light">
                            <div id="reqrows">
                            <label for="yourname" class="reqform-label" id="reqformlabels">fullName</label>
                            <input type="text" class="form-control" value={fullname} onChange={(e) => setFullname(e.target.value)}></input>
                        </div>
                        <div id="reqrows">
                            <label for="username" class="reqform-label" id="reqformlabels">Phonenumber</label>
                            <input class="form-control" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)}></input>
                        </div>

                        <div  id="reqrows">
                            <label for="income" class="reqform-label  text-success" id="reqformlabels">Select price range you can allocate</label>
                            <select value={income} onChange={(e) => setIncome(e.target.value)}>
                                <option value="1" >Less 5000</option>
                                <option value="2" >5000 - 10000</option>
                                <option value="3" >5000 - 10000</option>
                                <option value="4" >10000 - 15000</option>
                                <option value="5" >More 15000</option>
                            </select>
                        </div>  

                        <div id="reqrows">
                            <label class="reqform-label" >Is there any pet in your home </label>
                            <select value={isanyPet} onChange={(e) => setIsanyPet(e.target.value)}>
                                <option value="1" >Yes</option>
                                <option value="2" >no</option>
                            </select>
                        </div>

                        <div id="reqrows">
                            <label class="reqform-label" >What Kind of pet in your home </label>
                            <select value={typeofPet} onChange={(e) => setTypeofPet(e.target.value)}>
                                <option value="1" >Dog</option>
                                <option value="2" >Cat</option>
                                <option value="3" >Not related</option>
                            </select>
                        </div>

                        <div id="reqrows">
                            <label class="reqform-label" >Is there any kid in your home  </label>
                            <select value={kidsinHome} onChange={(e)=>setKidsinHome(e.target.value)}>
                                <option value="1">yes</option>
                                <option value="2">no</option>
                            </select>
                        </div>

                        <div id="reqrows">
                            <label class="reqform-label" >Is there any patient in your home ( ex :- wheeze)  </label>
                            <select value={isanypatient} onChange={(e)=>setIsanypatient(e.target.value)}>
                                <option value="1">yes</option>
                                <option value="2">no</option>
                            </select>
                        </div>

                        <div id="reqrows">
                            <label class="reqform-label" >Have u any previous adoptees </label>
                            <select value={adoptexperience} onChange={(e)=>setAdoptexperience(e.target.value)}>
                                <option value="1">yes</option>
                                <option value="2">no</option>
                            </select>
                        </div>

                        <div id ="reqrows">
                            <label for="Phone number" class="reqform-label" id="reqformlabels">Additional details</label>
                            <textarea type="text" class="form-control" value={additionalDetails} onChange={(e) => setAdditionalDetails(e.target.value)}></textarea>
                        </div>
                        <button type="submit" action="submit" class="col-sm-10 btn btn-success" id="reqbtn"  onClick={handleSubmit}>{buttonText} <i class="fa-solid fa-check"></i></button>
                        <button type="reset" action="reset" class="col-sm-10 btn btn-danger" id="reqbtn">Reset <i class="fa-solid fa-xmark"></i></button>
                    </form>
                </div>
                
            </div>
        </div>
        
    )
}

export default CustomerAdoptrequest;