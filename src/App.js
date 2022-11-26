import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact/Contact'
import Journey from './components/Journey/Journey'
import Navbar from './components/Navbar/Navbar'
import Store from './components/Store/Store'
import Team from './components/Team/Team'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Store />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/team' element={<Team />} />
        <Route exact path='/journey' element={<Journey />} />
      </Routes>
    </>
  )
}

export default App  