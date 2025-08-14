import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Coursedetails from './pages/Coursedetails'
import Login from './pages/Login'
import Mybooking from './pages/Mybooking'
import Profile from './pages/Profile'
import Register from './pages/Register'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/coursedetails/:id' element={<Coursedetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='mybooking' element={<Mybooking/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='register' element={<Register/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
