import React, { useState } from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import SignUpPage from "./pages/Signup.jsx";
import LoginPage from "./pages/Login.jsx";
import NotificationsPage from "./pages/Notification.jsx";
import CallPage from "./pages/Call.jsx";
import OnboardingPage from "./pages/Onboarding.jsx";
import ChatPage from "./pages/Chat.jsx";

import {Toaster} from "react-hot-toast";
import { useEffect } from 'react';


import PageLoader from './components/PageLoader.jsx';
import useAuthUser from './hooks/useAuthUser.js';
import  Layout  from './components/Layout.jsx';
import { useThemeStore } from './store/useThemeStore.js';

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

  const {isLoading, authUser } = useAuthUser();
  const {theme} = useThemeStore

  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded;

  if(isLoading) return <PageLoader/>;


  return (
    <div className=' h-screen' data-theme={theme}>
      <Routes>
        <Route 
          path = "/" 
          element = {
            isAuthenticated && isOnboarded ? ( 
              <Layout showSidebar={true}>
                <HomePage/>
              </Layout> 
            ):( 
             <Navigate to={!isAuthenticated ? "/login" : "/onboarding " }/>
            ) 
          }
        />
        <Route path = "/signup"
          element = {
            !isAuthenticated ? <SignUpPage/> : <Navigate to ={isOnboarded ? "/" : "/onboarding"} />
          } 
        />
        <Route path = "/login" 
          element = {
            !isAuthenticated ? <LoginPage/> : <Navigate to = {isOnboarded ? "/" : "/onboarding"} />
          } 
        />

        <Route
          path="/notifications"
          element={
            isAuthenticated && isOnboarded ? (
              <Layout showSidebar={true}>
                <NotificationsPage />
              </Layout>
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
            )
          }
        />
        <Route path = "/call" element = { isAuthenticated ? <CallPage/> : <Navigate to ="/login"/>} />
        <Route path = "/chat" element = { isAuthenticated ? <ChatPage/> : <Navigate to ="/login"/>} />
        <Route 
          path = "/onboarding" 
          element = {
            isAuthenticated ? (
              !isOnboarded ? (
               <OnboardingPage/> 
              ):( 
               <Navigate to ="/"/>
              )
            ):(
              <Navigate to = "/login"/>
            )
          }
        />
      </Routes>

      < Toaster/>
    </div>
  )
}

export default App
