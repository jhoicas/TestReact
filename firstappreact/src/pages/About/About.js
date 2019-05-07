import React, {useState} from 'react';
import Home from '../Home/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function About() {
    const [arrozchino, setArrozchino] = useState(0);
    return (<div> 
    <Home /> <button><Link to="/" className="navbar-brand"> Home</Link></button>
    
    <p>Ud ha tocado el boton {arrozchino}</p>
    <button onClick={()=> setArrozchino(arrozchino+1)}>Click me</button>
    </div>
    
    );
}

export default About;
