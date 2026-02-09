import React from 'react'
import "./Error404.css"
import { Navigate, useNavigate } from 'react-router-dom'
import NavComponent from '../components/NavComponent';
import SectionHeader from '../components/SectionHeader.';
import Footer from '../components/Footer';
const Error404 = () => {
  const navigate  = useNavigate();
  return (
    <div className='error'>
      <NavComponent/>
     <SectionHeader />

     <h1>404 Not Found</h1>
     <P>Your visited page not found, You may go to home page</P>

   <button onClick={()=>navigate('/')}>Back to homepage</button>
   <Footer />
    </div>
  )
}

export default Error404