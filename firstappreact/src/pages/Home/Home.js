
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
    return (
        <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand"> Home</Link>
        <Link to="/Topic" className="navbar-brand"> Topic</Link>
        <Link to="/About" className="navbar-brand"> About</Link>
        </nav>
                                            );
}
export default Home;
