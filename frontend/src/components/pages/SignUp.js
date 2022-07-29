import React from "react";
import {useRef, useEffect, useState } from "react"; 
import {Link} from 'react-router-dom';
// import {faCheck, faTimes, faInfoCircle} from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignUpImg from "../images/signup.jpg";
import './SignUp.css';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUp = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

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
        setValidPwd(PWD_REGEX.test(pwd));
        // console.log(result);
        // console.log(pwd);
        // setValidPwd(result);
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

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
            <section className="section bg-c-light">
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
                                        <h3 className="text-center">Sign Up</h3>
                                    </div>
                                <h6>Already Sign Up?</h6>
                                <Link to="/" class="nav-link active"><div>Sign In</div></Link>
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
                                    <section>
                                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                                        <form>
                                            <label htmlFor="username">
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
                                            <input
                                                type="text"
                                                id="username"
                                                ref={userRef}
                                                autoComplete="off"
                                                onChange={(e) => setUser(e.target.value)}
                                                value={user}
                                                required
                                                aria-invalid={validName ? "false" : "true"}
                                                aria-describedby="uidnote"
                                                onFocus={() => setUserFocus(true)}
                                                onBlur={() => setUserFocus(false)}
                                            />
                                            <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                4 to 24 characters.<br />
                                                Must begin with a letter.<br />
                                                Letters, numbers, underscores, hyphens allowed.
                                            </p>
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

export default SignUp;