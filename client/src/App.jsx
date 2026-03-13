import React, { useState } from 'react'
import {Route, Routes } from "react-dom";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Notification from "./pages/Notification.jsx";
import Call from "./pages/Call.jsx";
import Onboarding from "./pages/Onboarding.jsx";

import {Toaster} from "react-hot-toast";
import { useEffect } from 'react';
import {useQuery} from "@tanstack/react-query"

import { axiosInstance } from './lib/axios.js';

const App = () => {
  // axios
  // cosnt [data , setData] = useState([]);
  // const [ isLoading, setIsLoading]= useState(false);
  // const [error, setError] = useState(null);


  // useEffect(()=>{
  //   const getData = async ()=>{
  //     setIsLoading(true);
  //     try{
  //       const data = await fetch ("https://jsonplaceholder.typicode.com/todos");
  //       const json = await data.json();
  //       setData(json);
  //     }catch(error){
  //       setError(error);
  //     }finally{
  //       setIsLoading(false);
  //     }
  //   };
  //   getData();
  // },[]);

  // console.log(data);



  // instead of using axoios we use this for better expeience
  // react query transstack

  const {data, isLoading, error} = useQuery({
    queryKey:["todos"],

    queryFn: async()=>{
      const res = await axiosInstance.get("/auth/me");
      return res.data;
    },
    retry:false,
  });

  console.log(data);


  return (
    <div className=' h-screen' data-theme="coffee" >
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/signup" element = {<Signup/>} />
        <Route path = "/login" element = {<Login/>} />
        <Route path = "/notification" element = {<Notification/>} />
        <Route path = "/call" element = {<Call/>} />
        <Route path = "/onboarding" element = {<Onboarding/>} />
      </Routes>

      < Toaster/>
    </div>
  )
}

export default App
