import React, { Component } from 'react';
import {Parallax} from 'react-scroll-parallax';
import {Row, Col} from "reactstrap";
import {Link} from 'react-router-dom';
import "./Style/Components.css";
import SignUp from './Signup';



function Home() {
  return (
 
      <div bgImage={require("./Style/lobby2.jpg")}>
          <div style={{ height: 1000 }}>
            <div id="jumbo">
              <h3>
                The Dr.HQ team is here to make finding a doctor easy. We put your health first.
                </h3>
              <p>
              seitan heirloom post-ironic pop-up iPhone mlkshk hella selfies fashion axe occupy readymade put a bird on it
          messenger bag Wes Anderson Schlitz plaid Bushwick church-key lo-fi skateboard slow-carb hashtag trust fund
          Williamsburg biodiesel fixie farm-to-table 8-bit banjo XOXO Banksy chillwave bicycle rights retro cliche
          tattooed bespoke irony mumblecore Shoreditch deep v polaroid McSweeney's bitters 
              </p>
              <button>
                <Link to="/Doctor">
                  FIND YOUR DOCTOR HERE!
                </Link>
              </button>
            </div>
            <div id="signup">
           <SignUp></SignUp>
            </div>

      </div>
    </div>
  )
}
export default (Home);

