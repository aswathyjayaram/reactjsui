import React, { Component } from 'react';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Contactus from './Contactus';
import Help from './Help';
import loginsignup from './loginsignup';
import Storelocator from './Storelocator';
import privacypolicy from './privacypolicy';
import terms from './terms';
import logm from './logm.png';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
        <ul className="header">
        
        <li><NavLink to="/Help">Help</NavLink></li>
        <li><NavLink to="/Storelocator">Storelocator</NavLink></li>
        <li className="loginsignup"><NavLink to="/loginsignup">loginsignup</NavLink></li>
        <li className="contactus"><NavLink to="/Contactus">Contactus</NavLink></li>
        </ul><div className="logo">
        <img src={logm} alt="logo"></img>
        <p className="hero"> <input type="text" name="search" placeholder="search..."/>
        < button type="Submit">Submit</button></p>
        </div>
       <p className="herob">
       <NavLink to ="/Home">Home</NavLink>
      </p>
        <div className="content">
            
            <Route path="/Help" component={Help}/>
            <Route path="/Storelocator" component={Storelocator}/>
            <Route path="/loginsignup" component={loginsignup}/>
            <Route path="/Contactus" component={Contactus}/>
            <Route path="/Home" component={Home}/>
        </div>
      <footer className="footer">
      <p className="ftr">Powered by: DigitalS-Team<NavLink to="/privacypolicy">|privacypolicy|</NavLink>
      <Route path="/privacypolicy" component={privacypolicy}/>
      <NavLink to="/terms">Terms and conditions|</NavLink>
      <Route path="/terms" component={terms}/>
      </p>
      
      </footer>
      </div>
      </HashRouter>
    );
  }
}

export default App;
