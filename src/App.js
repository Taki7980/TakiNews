/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Switch,
  Link,
  Routes,
  Route,
  BrowserRouter as Router

} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  state = {
    progress: 0
  }
  setProgress=(progress)=> {
    this.setState({ progress: progress });
  }
  country = "in";
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='gold'
            height={5}
            progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route path='/general' element={<News setProgress={this.setProgress} key='general' pageSize={6} country={this.country} API_KEY="3474df98f54e4eec87d5d472b8b4d3a0" category='general' />}></Route>
            <Route path='/business' element={<News setProgress={this.setProgress} key='business' pageSize={6} country={this.country} API_KEY="3474df98f54e4eec87d5d472b8b4d3a0" category='business' />}></Route>
            <Route path='/entertainment' element={<News setProgress={this.setProgress} key='entertainment' pageSize={6} country={this.country} API_KEY="3474df98f54e4eec87d5d472b8b4d3a0" category='entertainment' />}></Route>
            <Route path='/health' element={<News setProgress={this.setProgress} key='health' pageSize={6} country={this.country} API_KEY="3474df98f54e4eec87d5d472b8b4d3a0" category='health' />}></Route>
            <Route path='/science' element={<News setProgress={this.setProgress} key='science' pageSize={6} country={this.country} API_KEY="3474df98f54e4eec87d5d472b8b4d3a0" category='science' />}></Route>
            <Route path='/sports' element={<News setProgress={this.setProgress} key='sports' pageSize={6} country={this.country} API_KEY="3474df98f54e4eec87d5d472b8b4d3a0" category='sports' />}></Route>
            <Route path='/technology' element={<News setProgress={this.setProgress} key='technology' pageSize={6} country={this.country} API_KEY="3474df98f54e4eec87d5d472b8b4d3a0" category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }

}