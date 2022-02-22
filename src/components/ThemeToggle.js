import React,{useContext} from 'react'
import { AuthContext } from '../ConText/AuthenContext'
const ThemeToggle = () => {
    const {toggleTheme} = useContext(AuthContext)
    return (

         <button onClick={toggleTheme}>Toggle Theme</button>
        
        
        
    )
}

export default ThemeToggle
