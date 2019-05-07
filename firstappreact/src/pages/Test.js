import React from 'react';
import Home from './Home/Home';
import About from './About/About';
import Topic from './Topic/Topic';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Test() {

    // var numeros = 0;
    // for (var i = 0; i < 400; i++) {
    //     numeros += i;
    // }

    return (
        <Router>
            <div>
            


                    {/* {<span>{numeros}</span>} */}
            
                <Route exact path="/" component={Home} />
                <Route path="/Topic" component={Topic} />

                <Route path="/About" component={About} />

            </div>
        </Router>
    );

}

export default Test;