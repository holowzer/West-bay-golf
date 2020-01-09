import React from 'react';
import img0 from "../images/download0.jpg"
import img1 from "../images/download1.jpg"
import img2 from "../images/download2.jpg"
import Slideshow from './globalComp/Slider';
import "./Homepage.scss"

let Homepage = ()=>{

    return(
        <Slideshow img={[img0, img1, img2]} />
    )
}

export default Homepage