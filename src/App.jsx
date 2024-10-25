import React, { useState } from "react"
import Navbar from "./compnents/Navbar"
import Footer from "./compnents/Footer"
import RoutesPath from "./compnents/RoutesPath"

export default function App() {

  const [darkTheme,setDarkTheme] = useState(false)
  return (
    <div className={darkTheme?'dark':''}>
      <div className=" bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen relative">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <RoutesPath/>
        <Footer></Footer>
      </div>
    </div>
  )
}