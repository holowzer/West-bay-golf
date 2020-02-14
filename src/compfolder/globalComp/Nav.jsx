import React, { useEffect } from 'react';
import navIcon from "../../images/menu.svg"
import westBayLogo from "../../images/LogowestBay.png"
import Contact from '../globalComp/contactPages/Contact'
import GeneralMenu from '../globalComp/GeneralMenu'
import "./Nav.scss"
import { Link } from 'react-router-dom';
 
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
        <img className="navButton" src={navIcon} alt="Roatán golf club"/>
        <Link to="/">
            <img src={westBayLogo} className="navLogo" alt="caribbean west bay"/>
        </Link>
        <div className="contactButton">
            Contact Us
        </div>
        <GeneralMenu />
        <Contact/>
     </nav>
    )
}
export default Nav
