import React, {Component} from "react";
import {useRef, useEffect, useState } from "react"; 
import {Link} from 'react-router-dom';
import '../css/PostAdvertisement.css';
// import PetToolImg from "../images/Pet-tool.jpg";



// import {Link, Navigate} from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import Axios from 'axios';

// import {faCheck, faTimes, faInfoCircle} from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavbarUsers from "../../../includes/NavbarUsers";

const TITLE_REGEX = RegExp(
    /^[A-z][A-z0-9-_]{3,23}$/
);
const PRICE_REGEX = RegExp(
    /^[0-9\b]+$/
);
const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};


export class PostAdvertisement extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            PetToolImg : 'https://cdn.onlinewebfonts.com/svg/img_74492.png',
            Title: null,
            Price: null,
            Description: null,
            errors: {
                Title: '',
                Price: '',
                Description: ''
            }
        };
        // console.log(this.state);
    }

// state={
//     PetToolImg : 'https://cdn.onlinewebfonts.com/svg/img_74492.png',
// }
                

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

handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {

        case 'Title':
            errors.Title =
            TITLE_REGEX.test(value)
                    ? ''
                    : 'Please enter a valid title!';
            break;
        case 'Price':
            errors.Price =
            PRICE_REGEX.test(value)
                    ? ''
                    : 'Please enter a valid price!';
            break;
        case 'Price':
            errors.Description =
            TITLE_REGEX.test(value)
                    ? ''
                    : 'Please enter a valid description!';
                break;
        default:
            break;
    }

    this.setState({ errors, [name]: value });
}


HandlePost = (e) => {
    e.preventDefault()
//   const data = { Title: this.state.Title, Price: Price, Image:Image, Description: Description};
    // console.log(data);
    // const {Title}=this.state;
    // const {Price}=this.state;
    // const {Image}=this.Image;
    // const {Description}=this.state;
    Axios.post("http://localhost:5000/petstore/addNewEquipment", {

                    // Title: Title, 
                    // Price: Price, 
                    // Image: Image, 
                    // Description: Description
                })
                .then((response) => {
                    console.log(response.data)
                    
                  if(response.data.error) {
                    alert(response.data.error);}
                  else{
                    // alert("successfully Logged in!");
                    const token = response.data;
                    
                    }
                       
                        });


};


// function PostAdvertisement()
    render()
    {
            
        
        
        
        
            return(
                <>
                <div>
                    <NavbarUsers/>
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
                                        

                                        <section>
                                            <form className="row">
                                            <div className="col-md-1">
        
                                            </div>
                                                <div className="col-md-10 ">
                                                <h5 className="main-heading text-center">To Post a New Advertisement</h5>
                                            <div className="underline mx-auto"></div>
                                                   
                                                    
        
        
                                                <div className="form-group ">
                                                    <label className="mb-1">Title
                                                    {/* <span className={validTitle ? "valid" : "hide"}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                        </span> */}
                                                    </label>
                                                    <input type="text" className="form-control" placeholder="Enter the title"
                                                        id="username"
                                                        // ref={userRef}
                                                        autoComplete="off"
                                                        onChange={(e) => this.setTitle(e.target.value)}
                                                        // value={Title}
                                                        required
                                                        // aria-invalid={validTitle ? "false" : "true"}
                                                        aria-describedby="uidnote"
                                                        // onFocus={() => setTitleFocus(true)}
                                                        // onBlur={() => setTitleFocus(false)}
                                                    ></input>
                                                    <p id="uidnote" className={this.TitleFocus && this.Title && !this.validTitle ? "instructions" : "offscreen"}>
                                                    {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                                                    4 to 20 characters. Must begin with a letter. Letters, numbers, underscores, hyphens allowed.<br /> 
                                                </p>
                                                </div>
                                                <div className="form-group">
                                                    <label className="mb-1 mt-2">Price</label>
                                                    <input type="text" className="form-control" placeholder="Enter the price(LKR)"
                                                    
                                                        // id="price"
                                                        // ref={userRef}
                                                        // autoComplete="off"
                                                        // onChange={(e) => setPrice(e.target.value)}
                                                        // value={Price}
                                                        // required
                                                        // aria-invalid={validPrice ? "false" : "true"}
                                                        // aria-describedby="uidnote"
                                                        // onFocus={() => setPriceFocus(true)}
                                                        // onBlur={() => setPriceFocus(false)}

                                                    >


                                                    </input>
                                                    <p id="uidnote" className={this.PriceFocus && this.Price && !this.validPrice ? "instructions" : "offscreen"}>
                                                    {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                                                    Must begin a amount. Numbers allowed.<br /> 
                                                    </p>
                                                </div>
        
                                                <div className="form-group">
                                                    <div className="ImgContainer" id="ImgContainer">
                                                        {/* <h3 className="ImgHeading">Add Image of Equipment</h3> */}
                                                        <label className="mb-1 mt-2">Add Image of Equipment</label>
                                                        <div className="PetTool-holder mt-1 mb-3" id="PetTool-holder">
                                                            <img src={this.state.PetToolImg} alt="" id="Pet-tool"></img> 
                                                            {/* <img src={PetToolImg} className="w-100 border-bottom" alt="Services"/> */}
                                                            {/* {/* <input type="file" name="petTool-upload" id="Pet-tool-img" accept="image/*"  className="form-control" placeholder="Input a Image"></input> */}
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
                                                    <textarea rows="4" className="form-control" placeholder="Enter a description"

                                                        // type="text"
                                                        // id="username"
                                                        // ref={userRef}
                                                        // autoComplete="off"
                                                        // onChange={(e) => setDescription(e.target.value)}
                                                        // value={Description}
                                                        // required
                                                        // aria-invalid={validDescription ? "false" : "true"}
                                                        // aria-describedby="uidnote"
                                                        // onFocus={() => setDescriptionFocus(true)}
                                                        // onBlur={() => setDescriptionFocus(false)}
                                                    
                                                    ></textarea>
                                                    <p id="uidnote" className={this.DescriptionFocus && this.Description && !this.validDescription ? "instructions" : "offscreen"}>
                                                    {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                                                    4 to 20 characters. Must begin with a letter. Letters, numbers, underscores, hyphens allowed.<br /> 
                                                    </p>

                                                  

                                                </div>
                                                {/* <div className="form-group py-3">
                                                    <button type="button" className="btn btn-success shadow w-100 ">Send</button>
                                                </div> */}
                                                <div className="d-flex justify-content-center mb-3 mt-4 ">
                                                    <Link to="/petstore/addNewEquipment" class="nav-link active">
                                                        {/* <button type="button" id="post-add-btn" className="btn shadow w-100 ">Post a New Advertisement</button> */}
                                                        <button type="button" id="submit-btn" onClick={this.HandlePost}   className="btn shadow w-100 ">Post</button>
                                                    </Link>
                                                </div>
                                                
                                            </div>
                                            <div className="col-md-1">
                                            
                                            </div>
                                            </form>

                                        </section>
                                        
        
                                        
                                       
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
        
                    </section>
                </div>
                </>
            );
        
        
    }
}

export default PostAdvertisement;

        // const userRef = useRef();
        // const errRef = useRef();
    
        // const [Title	, setTitle	] = useState('');
        // const [validTitle	, setValidTitle	] = useState(false);
        // const [TitleFocus, setTitleFocus] = useState(false);

        // const [Description	, setDescription	] = useState('');
        // const [validDescription	, setValidDescription	] = useState(false);
        // const [DescriptionFocus, setDescriptionFocus] = useState(false);

        // disabled={!this.validTitle || !this.validPrice || !this.validDescription 

//         Advertise = ()=>
// {
//             const TITLE_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
//             const PRICE_REGEX = /^[0-9\b]+$/;
            
    
//             const userRef = useRef();
//             const errRef = useRef();
//             const [Title	, setTitle	] = useState('');
//             const [validTitle	, setValidTitle	] = useState(false);
//             const [TitleFocus, setTitleFocus] = useState(false);

//             const [Price	, setPrice	] = useState('');
//             const [validPrice	, setValidPrice	] = useState(false);
//             const [PriceFocus, setPriceFocus] = useState(false);

//             const [Description	, setDescription	] = useState('');
//             const [validDescription	, setValidDescription	] = useState(false);
//             const [DescriptionFocus, setDescriptionFocus] = useState(false);

//             const [errMsg, setErrMsg] = useState('');

//             useEffect(() => {
//                 userRef.current.focus();
//             }, [])
        
//             useEffect(() => {
//                 setValidTitle(TITLE_REGEX.test(Title));
//                 // console.log(result);
//                 // console.log(user);
//                 // setValidName(result);
//             }, [Title])
        
//             useEffect(() => {
//                 setValidPrice(PRICE_REGEX.test(Price));
//                 // console.log(result);
//                 // console.log(user);
//                 // setValidName(result);
//             }, [Price])
        
//             useEffect(() => {
//                 setValidDescription(TITLE_REGEX.test(Description));
//                 // console.log(result);
//                 // console.log(user);
//                 // setValidName(result);
//             }, [Description])
           
        
//             useEffect(() => {
//                 setErrMsg('');
//             }, [Title, Price, Description])
// }

// const {PetToolImg}=this.state;

//         const {userRef}=this.state;
//         const {errRef}=this.state;

//         const {Title}=this.state;
//         const {validTitle}=this.state;
//         const {setTitle}=this.state;
//         const {setValidTitle}=this.state;
//         const {TitleFocus}=this.state;
//         const {setTitleFocus}=this.state;

//         const {Price}=this.state;
//         const {setPrice}=this.state;
//         const {validPrice}=this.state;
//         const {setValidPrice}=this.state;
//         const {PriceFocus}=this.state;
//         const {setPriceFocus}=this.state;

//         const {Description}=this.state;
//         const {setDescription}=this.state;
//         const {validDescription}=this.state;
//         const {setValidDescription}=this.state;
//         const {DescriptionFocus}=this.state;
//         const {setDescriptionFocus}=this.state;