











/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter as Router,
  RouterProvider,
  Switch,
  Route,
  Link

} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


export default class App extends Component {
  c = "nirjhar sarkar";
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <News  category="sports"/>
        </Router>
      </div>
    )
  }
}

