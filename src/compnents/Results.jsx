import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { ResultContext } from '../contexts/ResultContextProvider'
import Loading from './Loading'
import { MdSearchOff } from "react-icons/md";

const Results = () => {

  let {loading,getImagesResult,getNewsResult,getSearchResult,getVideosResult,searchresult,imageresult,newsresult,videoresult,searchTerm,setSearchTerm}  = useContext(ResultContext)
  let loaction = useLocation();

  useEffect(()=>{
    // if(loaction.pathname == '/search'){
    //   getSearchResult();
    // }
    
    // if(loaction.pathname == '/videos'){
    //   getVideosResult();
    // }

    // if(loaction.pathname == '/news'){
    //   getNewsResult();
    // }

    // if(loaction.pathname == '/images'){
    //   getImagesResult();
    // }
    
  },[loaction.pathname])

  if(loading) return <Loading/>

  if(loaction.pathname == '/search'){
    return(
        searchTerm.length > 0?(      <div className='flex flex-col items-start justify-start space-y-6 sm:px-56'>
        {
          searchresult.map((item,index)=>(
            <div key={index} className='w-full flex flex-col items-start mt-2'>
              <a href={item.href} target='_blank' rel='noreferrer'>
                <p className=' text-justify text-sm dark:text-white text-black'>
                  {
                    item.href.length>30 ?item.href.substring(0,30):item.href
                  }
                </p>
                <p className='text-lg text-justify hover:underline dark:text-blue-300 text-blue-700 '>
                  {item.title}
                </p>
                <p className=' text-justify dark:text-white text-black text-[15px]'>
                  {`${item.body.length>200 ? item.body.substring(0,200):item.body}...`}
                </p>
              </a>
            </div>
          ))
        }
      </div>):(<h1 className=' my-10 text-slate-950 dark:text-white text-[30px] font-bold flex item-start justify-center'><MdSearchOff className=' text-[80px]'/></h1>)
    )
  }

  if(loaction.pathname == '/images'){
    return(

      searchTerm.length > 0?(<div className=' flex  mt-2 flex-wrap justify-center items-center gap-x-3 gap-y-1 rounded-sm'>
      {
        imageresult.map((item,index)=>(
          <a href={item.url} key={index} className=' w-[300px] h-[320px]' target='_blank'>
            <img src={item.image} alt="image" className='w-[300px] h-[250px] object-fill' loading='lazy'/>
            <p>{`${item.title.length > 65 ? item.title.substring(0,30):item.title}...`}</p>
          </a>
        ))
      }
    </div>):(<h1 className=' my-10 text-slate-950 dark:text-white text-[30px] font-bold flex item-start justify-center'><MdSearchOff className=' text-[80px]'/></h1>)
  
    )
  }

  if(location.pathname == '/videos'){
    return(
      searchTerm.length > 0?(<div className=' flex  mt-2 flex-wrap justify-center items-center gap-x-3 gap-y-3 rounded-sm'>
      {
        videoresult.map((item,index)=>(
          <div key={index}>
            <iframe width="300" height="300" src={`${item.embed_url}?rel=0`} frameborder="0" loading='lazy'></iframe>
            <p className=' text-slate-950 dark:text-white'>{`${item.title.length>35? item.title.substring(0,35):item.title}`}</p>
          </div>
        ))
      }
    </div>):(<h1 className=' my-10 text-slate-950 dark:text-white text-[30px] font-bold flex item-start justify-center'><MdSearchOff className=' text-[80px]'/></h1>)
      
    )
  }

  if(loaction.pathname == '/news'){
    return(
      searchTerm.length > 0?(<div className='flex flex-col items-start justify-start space-y-6 sm:px-56'>
      {
        newsresult.map((item,index)=>(
          <div key={index} className='w-full flex flex-col items-start mt-2 my-3 p-1 shadow-sm'>
            <a href={item.url} target='_blank' rel='noreferrer' className='flex flex-row gap-2 items-center'>
              <div>
              <p className=' text-justify text-sm dark:text-white text-black'>
                {
                  item.source.length>30 ?item.source.substring(0,30):item.source
                }
              </p>
              <p className='text-lg text-justify hover:underline dark:text-blue-300 text-blue-700 '>
                {item.title}
              </p>
              <p className=' text-justify dark:text-white text-black text-[15px]'>
                {`${item.body.length>100 ? item.body.substring(0,100):item.body}...`}
              </p>
              </div>
              <img src={item.image} alt="" className=' w-[100px] h-[100px] object-cover rounded-md'/>
            </a>
          </div>
        ))
      }
    </div>):(<h1 className=' my-10 text-slate-950 dark:text-white text-[30px] font-bold flex item-start justify-center'><MdSearchOff className=' text-[80px]'/></h1>)
      
    )
  }
}

export default Results