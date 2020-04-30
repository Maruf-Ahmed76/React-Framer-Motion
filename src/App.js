import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './component/home/Home';
import Navbar from './component/Layout/Navbar';
import About from './component/about/About';
import Contact from './component/contact/Contact';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
