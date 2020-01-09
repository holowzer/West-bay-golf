import React from 'react';
import navIcon from "../../images/menu.png"
import westBayLogo from "../../images/LogowestBay.png"
import "./Nav.scss"

let Nav=()=>{
    return(
     <nav>
        <img src={navIcon} alt="roatan golf club"/>
        <img src={westBayLogo} alt="caribbean west bay"/>
        <a href="">
            Contact Us
        </a>
     </nav>

    )
}
export default Nav
