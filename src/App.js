import React from 'react';
import './App.css';
import Nav from "./Nav";
import News from "./components/News"
import Headlines from "./components/Headlines"
import Error from "./components/Error"
import Footer from "./components/Footer";
import Business from './components/Business';
import WallStreet from './components/WallStreet'
import {Route, Switch} from 'react-router-dom'

function App(){


    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Headlines} />
          <Route path="/tech" component={News} />
          <Route path="/business" component={Business} />
          <Route path="/wsj" component={WallStreet} />
          <Route component={Error} />
        </Switch>
          
        <Footer /> 
      </div>
    );
}

export default App;
