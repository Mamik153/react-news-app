import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Nav from "./Nav";
import News from "./News"
import Headlines from "./Headlines"
import Error from "./Error"
import Footer from "./Footer";
import {Route, Switch} from 'react-router-dom'

function App(){


    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Headlines} />
          <Route path="/tech/" exact component={News} />
          <Route component={Error} />
        </Switch>
          
        <Footer /> 
      </div>
    );
}

export default App;
