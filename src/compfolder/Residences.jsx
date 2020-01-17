import "./Residences.scss"
import React from 'react';
import img0 from "../images/download0.jpg"
import img1 from "../images/download1.jpg"
import img2 from "../images/download2.jpg"
import placeholder from "../images/placeHolder.png"
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
        <div className="advantages">
            <div className="advantagesHead">
                <h2>the title of arguments zone</h2>
            </div>
            <div className="advantagesContent">
                <div className="argumentSticker">
                    <img src={placeholder} alt=""/>
                    <h5>Gated Community</h5>
                </div>
                <div className="argumentSticker">
                    <img src={placeholder} alt=""/>
                    <h5>9-hole <br/> Golf Course</h5>
                </div>
                <div className="argumentSticker">
                    <img src={placeholder} alt=""/>
                    <h5>Club House</h5>
                </div>
                <div className="argumentSticker">
                    <img src={placeholder} alt=""/>
                    <h5>Breathtaking Views</h5>
                </div>
                <div className="argumentSticker">
                    <img src={placeholder} alt=""/>
                    <h5>Close Beach Proximity</h5>
                </div>
                <div className="argumentSticker">
                    <img src={placeholder} alt=""/>
                    <h5>Optional Rental Programs</h5>
                </div>
            </div>
        </div>
        <div className="residences-center-block">
             <h2>A stunning tropical view from <br/>every villas.</h2>
        </div>
        <div className="galery">
            <div className="galeryLeft">
                <img src={img0} alt=""/>
                <p>a peacefull place with a sweet taste of paradise</p>
            </div>
            <div className="galeryRight">
                <img src={img0} alt=""/>
                <p>Cigarettes on cigarettes people will never stop to drive cars.</p>
            </div>

            <div className="galeryLeft">
                <img src={img0} alt=""/>
                <p>Your mother will love those big fields of green birds flying.</p>
            </div>
            <div className="galeryRight">
                <img src={img0} alt=""/>
                <p>Your mother will love those big fields of green birds flying.</p>
            </div>

            <div className="galeryLeft">
                <img src={img0} alt=""/>
                <p>Cigarettes on cigarettes people will never stop to drive cars.</p>
            </div>
            <div className="galeryRight">
                <img src={img0} alt=""/>
                <p>Your mother will love those big fields of green birds flying.</p>
            </div>

            <div className="galeryLeft">
                <img src={img0} alt=""/>
                <p>Your mother will love those big fields of green birds flying.</p>
            </div>
            <div className="galeryRight">
                <img src={img0} alt=""/>
                <p>Cigarettes on cigarettes people will never stop to drive cars.</p>
            </div>
      </div>





        <GeneralMenu/>
        </div>
    )
}
export default Residences