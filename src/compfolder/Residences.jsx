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
        <GeneralMenu/>
        </div>
    )

}
export default Residences