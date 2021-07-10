import React from "react"
import image from './trollface.png';

function Header() {
    return (
            <header>
           <img src={image} alt="Problem?" />  
            <p>Meme generator</p>
            </header>
            )
    }
        
export default Header