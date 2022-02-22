import React,{ useContext } from 'react'



import Footer from '../components/Footer'

import { AuthContext } from '../ConText/AuthenContext'

import '../styles/Home.css'
import MenuUser from '../components/MenuUser'
import Body from '../components/Body'

import Navbar from './Navbar'
const Home = () => {
    const {theme} = useContext(AuthContext)
    const {isLightTheme,light,dark} = theme
    const style = isLightTheme?light:dark
    return (
        <>
        
         {/* Tim kiem va logo */}
        <nav className="row m-0 container-fluid w-100 p-3 mb-md-5 mb-3 rounded" id="header">
        <Navbar/>
        {/* End Menu Chinh */}
        {/* menu user */}
        <MenuUser/>
        </nav>
        <Body/>
        
        
      
        </>

        
    
    )
}

export default Home
