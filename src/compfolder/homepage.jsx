import React from 'react';
import img0 from "../images/download0.jpg"
import img1 from "../images/download1.jpg"
import img2 from "../images/download2.jpg"
import Slideshow from './globalComp/Slider';
import "./Homepage.scss"
import Nav from "./globalComp/Nav"

let Homepage = ()=>{

    return(
        <div>
            <Nav/>
            <Slideshow img={[img0, img1, img2]} />
        </div>
    )
}

export default Homepage