import React from 'react';
import Pdf from "react-to-pdf";
import '../css/PDF.css';
import logo from "../../../images/logo.png";
const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
        <h1>{props.title}</h1>
        <img src={logo} alt={props.title} />
        <h2>Your Income : {props.income}</h2>
        <h2>your Food Expences :{props.Foodexpences}</h2>
        <h2>your Vaccine Expences :{props.Vaccineexpences}</h2>
        <h2>your Transport Expences :{props.Transportexpences}</h2>
        <h2>your Other Expences :{props.Otherexpences}</h2>
        
        <div id='pdfContent12'>
          {props.content}
        </div>
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button class="btn btn-primary" id="bb" onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </>
  );
}

export default PDF;