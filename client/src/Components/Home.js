import React from 'react';
// import {Parallax} from 'react-scroll-parallax';
// import {Row, Col} from "reactstrap";
import {Link} from 'react-router-dom';
import "./Style/Components.css";
import SignUp from './SignUp';
// import Login from './Login';



function Home() {
  return (
 
      <div bgImage={require("./Style/lobby2.jpg")}>
          <div style={{ height: 1000 }}>
            <div id="jumbo">
              <h3>
                The Dr.HQ team is here to make finding a doctor easy. 
                </h3>
              <p>
              We believe that healthcare should be about you and your family, that is why we put your health first.
              We strive to deliver safe, quality and compassionate care. Let us take care of your family of in your time of need.  
              </p>
              <button>
                <Link to="/AllDoctors">
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

