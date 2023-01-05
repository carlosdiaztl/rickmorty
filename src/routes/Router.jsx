import React from 'react'
import { Route,BrowserRouter, Routes } from 'react-router-dom'
import Insta from '../components/instagram/Insta'
import Pokemon from '../components/pokemon/Pokemon'
import Home from '../components/home/Home'
import Rick from '../components/rick/Rick'
const Router = () => {
  return (
   
    <BrowserRouter> 
    <Routes>
    <Route path='pokemon' element={<Pokemon/>} />
    <Route path='/' element={<Insta/>} />
    <Route path='/home' element={<Home/>} />
    <Route  path='rick' element={<Rick/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default Router