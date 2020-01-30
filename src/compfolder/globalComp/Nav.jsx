import React, { useEffect } from 'react';
import navIcon from "../../images/menu.svg"
import westBayLogo from "../../images/LogowestBay.png"
import Contact from '../globalComp/contactPages/Contact'
import GeneralMenu from '../globalComp/GeneralMenu'
import "./Nav.scss"

let Nav=()=>{
    useEffect(()=>{
        const navButton = document.querySelector('.navButton')
        navButton.addEventListener(('click'),()=>{
            const menu = document.querySelector('.generalMenu')
            menu.classList.remove('toggleMenu')
        })

        const contactButton = document.querySelector('.contactButton')
        contactButton.addEventListener(('click'),()=>{
            const menu = document.querySelector('.generalContactContainer')
            menu.classList.remove('toggleContact')
        })
    },[])
    return(
     <nav>
        <img className="navButton" src={navIcon} alt="roatan golf club"/>
        <img src={westBayLogo} alt="caribbean west bay"/>
        <div className="contactButton">
            Contact Us
        </div>
        <GeneralMenu />
        <Contact/>
     </nav>
    )
}
export default Nav
