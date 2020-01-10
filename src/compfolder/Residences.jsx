import "./Residences.scss"
import React from 'react';
import img0 from "../images/download0.jpg"
import img1 from "../images/download1.jpg"
import img2 from "../images/download2.jpg"
import Slideshow from "./globalComp/Slider";
import Nav from "./globalComp/Nav";
import GeneralMenu from "./globalComp/GeneralMenu";

const Residences = ()=>{
    return(
        <div className="Residences">
        <Nav/>
        <Slideshow size="normal" img={[img0, img1, img2]}/>
        <GeneralMenu/>
        </div>
    )

}
export default Residences