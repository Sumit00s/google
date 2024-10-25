import React from 'react'
import {Link,Route,Routes,Navigate} from 'react-router-dom'
import Results from './Results'
import { TbError404 } from "react-icons/tb";
import NotFound from './NotFound';

const RoutesPath = () => {
  return (
    <div className='p-4'>
      <Routes>
        <Route path='/' element={<Navigate to='/search'></Navigate>}></Route>
        <Route path='/search' element={<Results></Results>}></Route>
        <Route path='/images' element={<Results></Results>}></Route>
        <Route path='/news' element={<Results></Results>}></Route>
        <Route path='/videos' element={<Results></Results>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  )
}

export default RoutesPath