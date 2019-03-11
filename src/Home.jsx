import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import AboutMe from "./AboutMe";
import App from './App.jsx';


class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/aboutme' component={AboutMe}/>
          <Route exact path='/' component={App}/>
        </div>
      </Router>
    );
  }
}

export default Home;