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

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


const App = () => {

  const [Progress, setProgress] = useState(0)

  

  const country = "in";
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='gold'
          height={5}
          progress={Progress}
        />
        <Routes>
          <Route path='/general' element={<News setProgress={setProgress} key='general' pageSize={6} country={country} API_KEY={process.env.API_KEY} category='general' />}></Route>
          <Route path='/business' element={<News setProgress={setProgress} key='business' pageSize={6} country={country} API_KEY={process.env.API_KEY} category='business' />}></Route>
          <Route path='/entertainment' element={<News setProgress={setProgress} key='entertainment' pageSize={6} country={country} API_KEY={process.env.API_KEY} category='entertainment' />}></Route>
          <Route path='/health' element={<News setProgress={setProgress} key='health' pageSize={6} country={country} API_KEY={process.env.API_KEY} category='health' />}></Route>
          <Route path='/science' element={<News setProgress={setProgress} key='science' pageSize={6} country={country} API_KEY={process.env.API_KEY} category='science' />}></Route>
          <Route path='/sports' element={<News setProgress={setProgress} key='sports' pageSize={6} country={country} API_KEY={process.env.API_KEY} category='sports' />}></Route>
          <Route path='/technology' element={<News setProgress={setProgress} key='technology' pageSize={6} country={country} API_KEY={process.env.API_KEY} category='technology' />}></Route>
        </Routes>
      </Router>
    </div>
  )


}

export default App