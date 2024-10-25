import React from 'react'
import { IoSearch } from "react-icons/io5";
import Links from './Links';
import { useContext } from 'react';
import { ResultContext } from '../contexts/ResultContextProvider';
const Search = () => {

  let {searchTerm,setSearchTerm,runAllQuerys}  = useContext(ResultContext);


  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className=' w-full flex flex-col items-center'>
      <div className=' bg-slate-400 p-1 w-full mt-3 mb-3 rounded-full flex flex-row  max-w-[600px]'>
      <input type="text" className=' w-full bg-transparent outline-none ml-2' placeholder='Search ' value={searchTerm} onChange={handleInputChange} />
      <IoSearch className=' text-slate-100 text-[40px] bg-slate-800 p-2 rounded-full cursor-pointer' onClick={()=>runAllQuerys()}/>
    </div>
    <Links></Links>
    </div>
  )
}

export default Search