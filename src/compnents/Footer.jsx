import React from 'react'
import { FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='text-center p-3 mt-10 border-t text-black bg-white dark:bg-slate-950 dark:text-white  dark:border-gray-700 border-gray-200 absolute w-[100%] bottom-0'>
      <h3 className=' text-[20px] font-bold'>2024 Google,Inc.</h3>
      <p className=' text-slate-950 dark:text-white flex flex-row items-center justify-center gap-2 my-3 font-bold'>Made with <span> {<FaCode className='text-[25px] text-pink-800'/>} </span> by sumit sonawane</p>
    </div>
  )
}

export default Footer