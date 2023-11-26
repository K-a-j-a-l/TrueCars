import { useState } from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Cards from './Components/Cards'
import Login from './Components/Login'
import LoginRegister from './Pages/LoginRegister'

function App() {
 return (
  <>
   {' '}
   {/* <Navbar />{' '} */}{' '}
   {/* <Header />
                                                   <Cards /> */}{' '}
   <LoginRegister /> {/* <Footer /> */}{' '}
  </>
 )
}

export default App
