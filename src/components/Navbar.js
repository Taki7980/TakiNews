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

export class Navbar extends Component {
    static propTypes = {}

    render() {
        const ONclick = () => {
            let val = document.querySelector("input").innerText;

        }
        return (
            <>
                <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                    {/* <div className="container flex flex-wrap items-center justify-between mx-auto">
                        <div className="flex items-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/2537/2537926.png" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">TakiNews</span>
                        </div>
                        <div className="flex md:w-[50%] sm:w-[50%] sm:text-sm">
                            <div className=" w-full md:block md:w-auto flex flex-col" id="navbar-default">
                                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li>
                                        <Link to="/general" className="text-xl block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/technology" className="text-xl block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >technology</Link>
                                    </li>
                                    <li>
                                        <Link to="/business" className="text-xl block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">business</Link>
                                    </li>
                                    <li>
                                        <Link to="/entertainment" className="text-xl block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">entertainment</Link>
                                    </li>

                                    <li>
                                        <Link to="/health" className="text-xl block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">health</Link>
                                    </li>
                                    <li>
                                        <Link to="/science" className="text-xl block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">science</Link>
                                    </li>
                                    <li>
                                        <Link to="/sports" className="text-xl block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">sports</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                    <Humberger/>
                </nav>

            </>
        )
    }
}

export default Navbar