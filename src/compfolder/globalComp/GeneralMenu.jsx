import React, { useEffect } from 'react';
import "./GeneralMenu.scss"
import close from "../../images/close.svg"
import { Link } from 'react-router-dom';
const GeneralMenu = ()=>{
    useEffect(()=>{
        let closebut= document.querySelector('.theCross')
        let generalMenu = document.querySelector('.generalMenu')
        closebut.addEventListener('click',()=>{
            generalMenu.classList.add('toggleMenu')
        })
        
    },[])
    
    return(
        <div className="generalMenu toggleMenu">
                    <div className="topDiv">
                        <img className="theCross" src={close} alt=""/>
                    </div>
                    <div className="midMenu">
                        <div className="leftLinks">
                            <Link to="/Golf">
                                <a href="">Golf</a>
                            </Link>
                            <Link to="/about-us">
                                <a href="">About Us</a>
                            </Link>
                            <Link to="/Residences">
                            <a href="">The Residences</a>
                            </Link>
                            <Link to="/Galery">
                                <a href="">Galery</a>
                            </Link>
                            <Link to="/">
                                <a href="">Homepage</a>
                            </Link>


            </div>
                        <div className="rightLinks">
                            <h3>Learn more about our villas</h3>
                            <div className="whiteSotheby"></div>
                            <div className="contactCta"></div>
                        </div>
                    </div>
        </div>
    )
}





export default GeneralMenu