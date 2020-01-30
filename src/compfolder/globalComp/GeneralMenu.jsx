import React, { useEffect } from 'react';
import "./GeneralMenu.scss"
import close from "../../images/close.svg"
import sothebys from "../../images/sothebys.png"
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
                        <Link to="/">
                                <div href="">Homepage</div>
                            </Link>
                            <Link to="/golf">
                                <div href="">Golf</div>
                            </Link>
                            <Link to="/residences">
                            <div href="">The Residences</div>
                            </Link>
                            <Link to="/about-us">
                                <div href="">About Us</div>
                            </Link>



            </div>
                        <div className="rightLinks">
                            <h3>Learn more about our villas</h3>
                            <div className="whiteSotheby">
                                <img src={sothebys} alt=""/>
                            </div>
                            <div className="contactCta">
                            <Link to="#" onClick={() => {
                            const menu = document.querySelector('.generalContactContainer')
                            menu.classList.remove('toggleContact')
                        }}>Contact Us</Link>
                            </div>
                        </div>
                    </div>
        </div>
    )
}





export default GeneralMenu