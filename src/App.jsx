import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Error404 from './pages/Error404'
import ContactUsPage from './pages/ContactUsPage'
import AboutUs from './pages/AboutUs'


function App() {


  return (
    <Routes>
      <Route exact path='/' element={<Homepage />} />
      <Route  path='/signup' element={<Signup />} />
      <Route  path='/signin' element={<Signin />} />
      <Route  path='*' element={<Error404/>}/>
      <Route path='/ContactUsPage' element={<ContactUsPage />}/>
      <Route path='/About' element={<AboutUs />}/>
   </Routes>
  )
}

export default App