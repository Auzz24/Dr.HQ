// import React from 'react';

// export default function Doctor() {
//    return (
//       <section>
//          <div>
//             <div>
//                <h2 id="drName"> </h2>
//                 <h3 id="drDepartment">  </h3>
//                 <h4 id="drEmail"> </h4>
//                 <h4 id="drAddress"> </h4>
//                 <h4 id="drTelephone"> </h4>
//             </div>
//          </div>
//       </section>
//    );
// }

import React, { useState } from 'react';
import {Row, Col, Container} from 'reactstrap';
import './Style/Components.css';
import {Parallax} from 'react-scroll-parallax';
import ReactTooltip from 'react-tooltip';


function Doctor() {
  return (

   <div bgImage={require("./Style/lobby1.jpg")} strength={500}>
   <div style={{ height: 100 }}>
<Container>
    <Row>
        <Col md="4">
          <a data-tip="Dr. Green" href="">  
          <img className="Project-Image" src={require("./Style/doctor.jpg")} alt="Emergency"/>
          </a>
        </Col>
        <Col md="4">
        <a data-tip="Dr. Cox" href="">  
          <img className="Project-Image" src={require("./Style/doctor2.jpg")} alt="Pediatrics"/>
          </a>
          </Col>
        <Col md="4">
        <a data-tip="Dr. House" href="">  
          <img className="Project-Image" src={require("./Style/doctor.jpg")} alt="Surgery"/>
          </a>
        </Col>
        <Col md="4">
          <a data-tip="Dr. Zarowny" href="">  
          <img className="Project-Image" src={require("./Style/doctor2.jpg")} alt="Neurology"/>
          </a>
        </Col>
        <Col md="4">
        <a data-tip="Dr. Bishop" href="">  
          <img className="Project-Image" src={require("./Style/doctor.jpg")} alt="Oncology"/>
          </a>
          </Col>
        <Col md="4">
        <a data-tip="Dr. Tractor" href="">  
          <img className="Project-Image" src={require("./Style/doctor2.jpg")} alt="Labor and Delivery"/>
          </a>
        </Col>
    </Row>
    <ReactTooltip place="top" type="dark" effect="float" />
</Container>
</div>

</div>


  );
}
export default Doctor;