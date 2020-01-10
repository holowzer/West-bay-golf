import React, { useEffect } from 'react';
import navIcon from "../../images/menu.svg"
import westBayLogo from "../../images/LogowestBay.png"
import "./Nav.scss"

let Nav=()=>{
    useEffect(()=>{
        const navButton = document.querySelector('.navButton')
        navButton.addEventListener(('click'),()=>{
            const menu = document.querySelector('.generalMenu')
            menu.classList.remove('toggleMenu')
        })
    },[])
    return(
     <nav>
        <img className="navButton" src={navIcon} alt="roatan golf club"/>
        <img src={westBayLogo} alt="caribbean west bay"/>
        <a href="">
            Contact Us
        </a>
     </nav>

    )
}
export default Nav
