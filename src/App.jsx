import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from '../src/Components/Pages/Home'
import Gynae from '../src/Components/Pages/Gynae'
import Calculate from '../src/Components/Pages/Calculate'
import Navbbar from '../src/Components/Navbar/Navbbar'
import Aboutus from './Components/Pages/Aboutus'
import Yoga from './Components/Pages/yoga'

function App() {
  return (
   <>
   <Navbbar/>
   <Routes>
   <Route path="/" element={<Home/>}/>
      <Route path='/calculate' element={<Calculate/>}/>
      <Route path='/gynae' element={<Gynae/>}/>
      <Route path='/about-us' element={<Aboutus/>}/>
      <Route path='/yoga' element={<Yoga/>}/>
   </Routes>
   </>
  )
}

export default App
