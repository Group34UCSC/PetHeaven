import React from "react";
import Navbar from "../includes/Navbar";
import {useRef, useEffect, useState } from "react"; 
import {Link} from 'react-router-dom';


// import {faCheck, faTimes, faInfoCircle} from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignUpImg from "../images/signup.jpg";
import './SignIn.css';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignIn = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
        // console.log(result);
        // console.log(user);
        // setValidName(result);
    }, [user])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
        // console.log(result);
        // console.log(user);
        // setValidName(result);
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        // console.log(result);
        // console.log(pwd);
        // setValidPwd(result);
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd, email])

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // if button enabled with JS hack
    //     const v1 = USER_REGEX.test(user);
    //     const v2 = PWD_REGEX.test(pwd);
    //     if (!v1 || !v2) {
    //         setErrMsg("Invalid Entry");
    //         return;
    //     }
    //     try {
    //         const response = await axios.post(REGISTER_URL,
    //             JSON.stringify({ user, pwd }),
    //             {
    //                 headers: { 'Content-Type': 'application/json' },
    //                 withCredentials: true
    //             }
    //         );
    //         console.log(response?.data);
    //         console.log(response?.accessToken);
    //         console.log(JSON.stringify(response))
    //         setSuccess(true);
    //         //clear state and controlled inputs
    //         //need value attrib on inputs for this
    //         setUser('');
    //         setPwd('');
    //         setMatchPwd('');
    //     } catch (err) {
    //         if (!err?.response) {
    //             setErrMsg('No Server Response');
    //         } else if (err.response?.status === 409) {
    //             setErrMsg('Username Taken');
    //         } else {
    //             setErrMsg('Registration Failed')
    //         }
    //         errRef.current.focus();
    //     }
    // }

// function SignUp()
// {
    return(
        <div>
            <Navbar/>
            {/* <section className="py-4 ">
                <div className="container">
                    <div className="row bg-success text-white"> 
                        <div className="col-md-4 my-auto"></div>
                        <h3 className="text-center">Contact Us</h3>
                    </div>
                </div>
            </section> */}
            <div>
               
            </div>
            <section className="section bg-c-light" >
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 border-left">
                                    
                                {/* <img src={SignUpImg}  alt="Services"/> */}
                                <div className="col-md-12">
                            <div className="card shadow">
                            <div className="card-body">
                                    <div className="row bg-success text-white mb-3"> 
                                        <div className="col-md-4 my-auto"></div>
                                        <h3 className="text-center">SignIn</h3>
                                    </div>
                                <h6>If you haven't Account? please SignUp</h6>
                                <Link to="/" class="nav-link active"><div>Sign Up</div></Link>
                                {/* <div className="underline"></div> */}
                                                                
                            </div>
                            <img src={SignUpImg}  alt="Services"/>                               
                            </div>
                        </div>
                                    {/* <h6>
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
                                    </div> */}
                                </div>
                                <div className="col-md-6 border-start">
                                    <section id="SignUpSection">
                                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                                        <form id="SignUpForm">
                                        {/* <div className="d-flex justify-content-center mb-4">
                    <Link to="/petstore/inventory/ViewInventory" class="nav-link active">
                        <button type="button" id="post-add-btn" className="btn shadow w-100 ">Post a New Advertisement</button>
                    </Link>
                </div> */}
                                        <div id="dropDownMenu" className="mb-4">
                                            <select class="form-control dropdown-toggle" data-bs-toggle="dropdown">
                                                {/* <option selected>Select prescribed medicine</option> */}
                                                <option value="1">Pet Adopter</option>
                                                <option value="2">Veterinary Doctor</option>
                                                <option value="3">Pharmacy</option>
                                                <option value="4">Pet Tool Store</option>
                                                <option value="5">Staff Member</option>
                                            </select>
                                        </div>

                                  
                                            <label htmlFor="username" class="labels">
                                                Username:
                                                <span className={validName ? "valid" : "hide"}>
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </span>
                                                <span  className={validName || !user ? "hide" : "invalid"}>
                                                    <FontAwesomeIcon icon={faTimes}/>
                                                </span>
                                                {/* <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                                                <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} /> */}
                                            </label>
                                            <input class="inputFields"
                                                type="text"
                                                id="username"
                                                ref={userRef}
                                                autoComplete="off"
                                                onChange={(e) => setUser(e.target.value)}
                                                value={user}
                                                placeholder="Enter Your User Name"
                                                required
                                                aria-invalid={validName ? "false" : "true"}
                                                aria-describedby="uidnote"
                                                onFocus={() => setUserFocus(true)}
                                                onBlur={() => setUserFocus(false)}
                                            />
                                            <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                4 to 20 characters. Must begin with a letter. Letters, numbers, underscores, hyphens allowed.<br /> 
                                            </p>


                                            <label htmlFor="emailre" class="labels">
                                                Email:
                                                <span className={validEmail ? "valid" : "hide"}>
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </span>
                                                <span  className={validEmail || !email ? "hide" : "invalid"}>
                                                    <FontAwesomeIcon icon={faTimes}/>
                                                </span>
                                                {/* <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                                                <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} /> */}
                                            </label>
                                            <input class="inputFields"
                                                type="email"
                                                id="emailre"
                                                ref={userRef}
                                                autoComplete="off"
                                                onChange={(e) => setEmail(e.target.value)}
                                                value={email}
                                                placeholder="Enter Your Email"
                                                required
                                                aria-invalid={validEmail ? "false" : "true"}
                                                aria-describedby="uidnote"
                                                onFocus={() => setEmailFocus(true)}
                                                onBlur={() => setEmailFocus(false)}
                                            />
                                            <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                Input a valid email address.<br /> 
                                            </p>


                                            <label htmlFor="password" class="labels">
                                            Password:
                                                <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                                                <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                                            </label>
                                            <input class="inputFields"
                                                type="password"
                                                id="password"
                                                onChange={(e) => setPwd(e.target.value)}
                                                value={pwd}
                                                placeholder="Enter Your Password"
                                                required
                                                aria-invalid={validPwd ? "false" : "true"}
                                                aria-describedby="pwdnote"
                                                onFocus={() => setPwdFocus(true)}
                                                onBlur={() => setPwdFocus(false)}
                                            />
                                            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                8 to 24 characters. Must include uppercase and lowercase letters, a number and a special character.
                                                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                                            </p>


                                           

                                            <div className="d-flex justify-content-center">
                                                <button className="mt-5"id="SignUpBtn" disabled={!validName || !validPwd || !validMatch || !validEmail ? true : false}>SignIn</button>
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
        
    );
}

export default SignIn;