/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import Humberger from './Humberger'
import React, { Component } from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    Switch,
    Link,
    Routes,
    Route,
    BrowserRouter as Router

} from "react-router-dom";

const Navbar = (props) => {

    const ONclick = () => {
        let val = document.querySelector("input").innerText;
    }
    return (
        <>
            <nav className="bg-white border-gray-200 top-0 overflow-auto px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <Humberger />
            </nav>
        </>
    )

}

export default Navbar