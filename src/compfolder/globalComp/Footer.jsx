import React from 'react';
import westBayLogo from "../../images/LogowestBay.png"
import "./Footer.scss"

let Footer = () => {
    return (
        <footer>
            <div className="big-footer">

                <div className="footer-with-logo">
                    <img src={westBayLogo} alt="Caribbean West Bay" />
                    <div>
                        <a href="" className="social-button" title="Facebook">f</a>
                        <a href="" className="social-button" title="Twitter">t</a>
                        <a href="" className="social-button" title="Instagram">i</a>
                    </div>
                    <p>
                        Palm Ln, West Bay, <br/>
                        Honduras
                    </p>
                    <div className="footer-important-links">
                        <a href="phone:+504 9483-7049" title="Call West Bay">+504 9483-7049</a>
                        <br/>
                        <a href="mailto:golf@westbaygolfclubvillas.com" title="Contact West Bay">golf@westbaygolfclubvillas.com</a>
                    </div>
                </div>

                <div>
                    <ul>
                        <li> <a href="/golf" title="Golf">Golf</a> </li>
                        <li> <a href="/about-us" title="About us">About us</a> </li>
                        <li> <a href="/residence" title="The Residence">The Residence</a> </li>
                        <li> <a href="/gallery" title="Gallery">Gallery</a> </li>
                        <li> <a href="/contact" title="Contact">Contact</a> </li>
                        <li> <a href="/" title="Home">Home</a> </li>
                    </ul>
                </div>

                <div className="footer-weather">
                    <div className="weather-widget">
                        <a className="weatherwidget-io" href="https://forecast7.com/en/16d32n86d54/coxen-hole/?unit=us" data-label_1="ROATÁN" data-label_2="WEATHER" data-icons="Climacons Animated" data-days="5" data-textcolor="#FFF" >ROATÁN WEATHER</a>
                    </div>
                    <img src="/sotheby-logo.png" alt=""/>
                    <div className="footer-logo-vertical-align">
                        <div>
                            <img src="/blackiguana-logo.png" alt=""/>
                        </div>
                        <div>
                            <img src="/dyedesign-logo.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                Copyright © 2020 by West Bay Golf Club & Villas. All Rights Reserved. Designed and developed by PRYNT
            </div>
        </footer>
    )
}
export default Footer
