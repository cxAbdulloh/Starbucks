import React from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Section from './Components/Section/Section'
import Footer from './Components/Footer/Footer'
import Home from './Components/Pages/Home';
import LoginPopup from './Components/LoginPopup/LoginPopup';
import FindStore from './Components/FindStore/FindStore';


const App = () => {
  return (
    <div>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='sign-in' element={<LoginPopup/>} />
       <Route path='google-maps' element={<FindStore/>} />
      </Routes>
    </div>
  )
}

export default App
