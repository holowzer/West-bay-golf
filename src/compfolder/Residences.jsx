import "./Residences.scss"
import React from 'react';
import img0 from "../images/download0.jpg"
import img1 from "../images/download1.jpg"
import img2 from "../images/download2.jpg"
import Slideshow from "./globalComp/Slider";
import Nav from "./globalComp/Nav";
import GeneralMenu from "./globalComp/GeneralMenu";
import StrangeSlider from "./globalComp/StrangeSlider";

const Residences = ()=>{
    return(
        <div className="Residences">
        <Nav/>
        <Slideshow size="normal" img={[img0, img1, img2]}/>
        <div className="residences-center-block">
             <h2>Conceived in the <br/>Heart of the Caribbean</h2>
        </div>
        <StrangeSlider/>
        <div className="residences-center-block">
             <h2>Conceived in the <br/>Heart of the Caribbean</h2>
        </div>
        <div className="tooClassicDiv">
        <div className="villaPreviewText">
                <h2>make your mother proud</h2>
                <p>we don't give a fuck about tomorrow. remember how we use to be. now i own my dreams between the lights of the tv. teenage headache dreams, i don't know how. i just took control in this latency of my memory.we don't give a fuck about tomorrow. remember how we use to be. now i own my dreams between the lights of the tv. teenage headache dreams, i don't know how. i just took control in this latency of my memory.
                </p>
            </div>

            <div className="villaPreviewContainer">
                <img src={img0} alt=""/>
            </div>
        </div>
        <div className="lushTropcial">
            <div className="lushPhoto">
    <img src={img1} alt=""/>
            </div>
            <div className="lushText">
            <h2>lush tropical damn !</h2>
                <p>we don't give a fuck about tomorrow. remember how we use to be. now i own my dreams between the lights of the tv. teenage headache dreams, i don't know how. i just took control in this latency of my memory.we don't give a fuck about tomorrow. remember how we use to be. now i own my dreams between the lights of the tv. teenage headache dreams, i don't know how. i just took control in this latency of my memory.
                </p>
            </div>
        </div>




        <GeneralMenu/>
        </div>
    )
}
export default Residences