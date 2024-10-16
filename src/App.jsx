import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar';
import './App.css'
import Main from './Components/Main/Main'
import AuthListener from './Components/Authentication/AuthListener';
import SignUp from './Components/Authentication/SignUp';
import LogIn from './Components/Authentication/LogIn';

const App = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <Main></Main>
     {/* <AuthListener></AuthListener>
     <SignUp></SignUp>
     <LogIn></LogIn> */}
    </>
  )
}

export default App;