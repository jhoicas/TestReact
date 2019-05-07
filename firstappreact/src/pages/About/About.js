import React from 'react';
import Home from '../Home/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function About() {
    return (<div> 
    <Home /> <button><Link to="/" className="navbar-brand"> Home</Link></button></div>
    
    );
}

export default About;
