import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import SideBar from './components/SideBar'
import ChatScreen from './components/ChatScreen'
import Login from './components/Login'
import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css';
import styled from 'styled-components';
import {auth} from './firebase'


function App() {

  const [user, loading, error] = useAuthState(auth);

  console.log(user)
  return (
    <div>
      
      <BrowserRouter>
      {!user?
      (
        <Login />
        )
      :(
        <>
      <Header />
      <AppBody>
        <SideBar />
        <Routes>
         <Route path="/" element={<ChatScreen />} />
          
         
        </Routes>

      </AppBody>
        </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  
  display:flex;
  height:100vh;

`
