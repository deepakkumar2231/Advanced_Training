import React from 'react'
import About from './About'
import Home from './Home'
import Error from './Error'
import NavBar from './NavBar'
import People from './People'
import Person from './Person'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//we want to use our router in our web page so that we would require a router our component to there 

function ReactRouterDom() {
    return (

      <Router>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    {/* //either write exact or write full name of path bcoz / will  */}
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                
                <Route path="/people">
                    <People />
                </Route>
                <Route path="/person/:id" children={<Person></Person>}></Route>
                <Route path="*">
                    {/* // this is going to show in every page , to remove this wrap all route in switch */}
                    <Error />
                </Route>
               
            </Switch>
        </Router>
    )
}

export default ReactRouterDom
