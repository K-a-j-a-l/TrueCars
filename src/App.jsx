import { useState } from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Cards from './Components/Cards'
import Login from './Components/Login'
import LoginRegister from './Pages/LoginRegister'
import AdminPanel from "./Pages/AdminPanel"

function App() {
    return (
	  <>
   {' '}
   {/* <Navbar />{' '} */}{' '}
   {/* <Header />
    <Cards /> */}{' '}
   {/* <LoginRegister />  */}
    <AdminPanel/>
                        
   {/* <Footer /> */}{' '}
  </>

    )
}

export default App