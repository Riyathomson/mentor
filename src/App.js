import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Courses from './pages/courses';
import Events from './pages/events';
import Pricing from './pages/pricing';
import Trainers from './pages/trainers';


export default function App(){
  return(
    <Router>
      <Switch>



      <Route path ="/trainers" component = {Trainers}/>
      <Route path ="/pricing" component = {Pricing}/>
      <Route path ="/events" component = {Events}/>
      <Route path ="/courses" component = {Courses}/>
      <Route path ="/contact" component = {Contact}/>
      <Route path ="/about" component = {About}/>
   
    <Route path ="/" component = {Home}/>
      </Switch>

    </Router>
  );
}