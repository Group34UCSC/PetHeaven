import React from 'react';
import Pdf from "react-to-pdf";
import '../css/PDF.css';
import SignUpImg from "../../../images/both.jpeg";
const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
        <h1>{props.title}</h1>
        <img src={SignUpImg} alt={props.title} />
        <h2>Your Income : {props.income}</h2>
        <h2>your Expences :{props.expences}</h2>
        <p>{props.content}</p>
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button class="btn btn-primary" onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </>
  );
}

export default PDF;