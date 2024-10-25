import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { BsImages } from "react-icons/bs";
import { FaVideoSlash } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";

const Links = () => {
  return (
    <div className=' flex flex-row gap-5'>
        <Link to='/search' className='flex flex-row items-center gap-1'><IoIosSearch/> Search</Link>
        <Link to='/images' className='flex flex-row items-center gap-1'><BsImages /> Images</Link>
        <Link to='/videos' className='flex flex-row items-center gap-1'><FaVideoSlash /> Videos</Link>
        <Link to='/news' className='flex flex-row items-center gap-1'><FaNewspaper /> News</Link>
    </div>
  )
}

export default Links