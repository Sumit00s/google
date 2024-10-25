import React, { useEffect } from "react";
import { useState } from "react";
import { createContext} from "react";
import axios from "axios";

export const ResultContext = createContext();

export const ResultContextProvider = ({children}) =>{

    let [loading,isLoading] = useState(false);
    const [searchTerm,setSearchTerm] = useState('');
    let [newsresult,setNewsResult] = useState([]);
    let [searchresult,setSearchResult] = useState([]);
    let [imageresult,setImageResult] = useState([]);
    let [videoresult,setVideoResult] = useState([]);

    async function getSearchResult(){
      isLoading(true)
      const options = {
        method: 'POST',
        url: 'https://google-api31.p.rapidapi.com/websearch',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '8f95521fb1mshd48c07106d7c035p15509ajsnb46059ad0e87',
          'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
        },
        data: {
          text: searchTerm,
          safesearch: 'off',
          timelimit: '',
          region: 'wt-wt',
          max_results: 20
        }
      };
      
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setSearchResult(response.data.result)
      } catch (error) {
        console.error(error);
      }
      isLoading(false)
    }

    async function  getNewsResult(){
      console.log('news result')
      isLoading(true);
      const options = {
        method: 'POST',
        url: 'https://google-api31.p.rapidapi.com/',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '8f95521fb1mshd48c07106d7c035p15509ajsnb46059ad0e87',
          'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
        },
        data: {
          text: searchTerm,
          region: 'wt-wt',
          max_results: 25
        }
      };
      
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setNewsResult(response.data.news)
      } catch (error) {
        console.error(error);
      }
      isLoading(false)
    }

    async function getVideosResult(){
      console.log('videos result')
      isLoading(true)
      const options = {
        method: 'POST',
        url: 'https://google-api31.p.rapidapi.com/videosearch',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '8f95521fb1mshd48c07106d7c035p15509ajsnb46059ad0e87',
          'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
        },
        data: {
          text: searchTerm,
          safesearch: 'off',
          timelimit: '',
          duration: '',
          resolution: '',
          region: 'wt-wt',
          max_results: 50
        }
      };
      
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setVideoResult(response.data.result)
      } catch (error) {
        console.error(error);
      }
      isLoading(false)
    }

    async function getImagesResult(){
      isLoading(true)
      console.log('images result')
      const options = {
        method: 'POST',
        url: 'https://google-api31.p.rapidapi.com/imagesearch',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '8f95521fb1mshd48c07106d7c035p15509ajsnb46059ad0e87',
          'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
        },
        data: {
          text: searchTerm,
          safesearch: 'off',
          region: 'wt-wt',
          color: '',
          size: '',
          type_image: '',
          layout: '',
          max_results: 100
        }
      };
      
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setImageResult(response.data.result)
      } catch (error) {
        console.error(error);
      }
      isLoading(false)
    }

    function runAllQuerys(){
      getSearchResult();
      getImagesResult();
      getVideosResult();
      getNewsResult();
    }
    

    return(
      <ResultContext.Provider value={{runAllQuerys,getImagesResult,getNewsResult,getSearchResult,getVideosResult,searchresult,setSearchResult,imageresult,setImageResult,videoresult,setVideoResult,newsresult,setNewsResult,searchTerm,setSearchTerm,loading,isLoading}}>{children}</ResultContext.Provider>
    )

}
