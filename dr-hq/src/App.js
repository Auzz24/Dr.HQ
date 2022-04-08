import Home from './Components/Home.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Login from './Components/Login.js'
import Department from './Components/Department';
import {BrowserRouter as Router,  Route} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      
      <Router>
      <Header/>
        {/* <Switch> */}
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/Department" component={Department}/>
          <Route exact path="/Login" component={Login}></Route>
          {/* <Route exact path="/Login" component={Login}/> */}
          <Route exact path="/" component={Home}/>
        {/* </Switch> */}
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
