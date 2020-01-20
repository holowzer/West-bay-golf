import "./Residences.scss"
import { Parallax,useController } from 'react-scroll-parallax';
import React, { useLayoutEffect } from 'react';
import galery1 from "../images/galery1.jpg"
import galery2 from "../images/galery2.jpeg"
import galery3 from "../images/galery3-min.jpg"
import galery4 from "../images/galery4-min.jpg"
import galery5 from "../images/galery5-min.jpg"
import galery6 from "../images/galery6-min.jpg"
import community from "../images/teamwork.png"
import golffield from "../images/golf-field.png"
import beach from "../images/beach.png"
import rent from "../images/rent.png"
import view from "../images/view.png"
import cabin from "../images/cabin.png"

import img1 from "../images/indoor1.jpg"
import img2 from "../images/house4.jpg"
import placeholder from "../images/placeHolder.png"
import Slideshow from "./globalComp/Slider";
import Nav from "./globalComp/Nav";
import GeneralMenu from "./globalComp/GeneralMenu";
import StrangeSlider from "./globalComp/StrangeSlider";
import house1 from "../images/carribeanvilla-min.jpg"
import house2 from "../images/house2.jpg"
import house3 from "../images/house3.jpg"




const Residences = (props)=>{


    const ParallaxCache = () => {
        const { parallaxController } = useController();
     
        useLayoutEffect(() => {
            const handler = () => parallaxController.update();
            window.addEventListener('load', handler);
            return () => window.removeEventListener('load', handler);
        }, [parallaxController]);
     
        return null;
    };
    
    ParallaxCache()

    


    return(
        <div className="Residences">
        <Nav/>
        <div className="moto"><h2>Welcome to the <br/> Black Iguana Golf-Club.</h2></div>

        <div className="overLayer">
            <h4>Book your place !</h4>
                <div className="rightCTA">
                    <a href="">Find your perfect house <span id='spanLine'>-</span></a>
                </div>
                <h3></h3>
            </div>
        <Slideshow size="normal" img={[house1, house2, house3]}/>
        <div className="residences-center-block">
             <h2>Conceived in the <br/>Heart of the Caribbean</h2>
        </div>
        <StrangeSlider/>
        <div className="residences-center-block">
             <h2>Conceived in the <br/>Heart of the Caribbean</h2>
        </div>
        <div className="tooClassicDiv">
        <div className="villaPreviewText">
        <Parallax disabled={props.disabled}  y={[36,-46]}>
                <h2>make your mother proud</h2>
                <p>we don't give a fuck about tomorrow. remember how we use to be. now i own my dreams between the lights of the tv. teenage headache dreams, i don't know how. i just took control in this latency of my memory.we don't give a fuck about tomorrow. remember how we use to be. 
                </p>
                </Parallax>
            </div>

            <div className="villaPreviewContainer">
                <img src={img2} alt=""/>
            </div>
        </div>
        <div className="lushTropcial">
            <div className="lushPhoto">
    <img src={img1} alt=""/>
            </div>
            <Parallax disabled={props.disabled}  y={[36,-46]}>

            <div className="lushText">

            <h2>lush tropical damn !{props.disabled}</h2>
                <p>we don't give a fuck about tomorrow. remember how we use to be. now i own my dreams between the lights of the tv. teenage headache dreams, i don't know how. i just took control in this latency of my memory.we don't give a fuck about tomorrow. remember how we use to be. now i own my dreams between the lights of the tv.</p>
            </div>
            </Parallax>
        </div>
        <div className="advantages">
            <div className="advantagesHead">
                <h2>the title of arguments zone</h2>
            </div>
            <div className="advantagesContent">
                <div className="argumentSticker">
                    <img src={community} alt=""/>
                    <h5>Gated Community</h5>
                </div>
                <div className="argumentSticker">
                    <img src={golffield} alt=""/>
                    <h5>9-hole <br/> Golf Course</h5>
                </div>
                <div className="argumentSticker">
                    <img src={cabin} alt=""/>
                    <h5>Club House</h5>
                </div>
                <div className="argumentSticker">
                    <img src={view} alt=""/>
                    <h5>Breathtaking Views</h5>
                </div>
                <div className="argumentSticker">
                    <img src={beach} alt=""/>
                    <h5>Close Beach Proximity</h5>
                </div>
                <div className="argumentSticker">
                    <img src={rent} alt=""/>
                    <h5>Optional Rental Programs</h5>
                </div>
            </div>
        </div>
        <div className="residences-center-block">
             <h2>A stunning tropical view from <br/>every villas.</h2>
        </div>
        <div className="galery">
            <div className="galeryLeft">
            <Parallax  y={[0,0]}>
                <img  preload="auto" src={galery1} alt=""/>
                <p>a peacefull place with a sweet taste of paradise</p>
                </Parallax>

            </div>
            <div className="galeryRight">
            <Parallax disabled={props.disabled}  y={[26,6]}>
                <img preload="auto" className="rellax" data-rellax-speed="4" src={galery2} alt=""/>
                <p>A challenging 9-hole !</p>
                </Parallax>

            </div>

            <div className="galeryLeft">
            <Parallax disabled={props.disabled}  y={[-20,28]}>
                <img preload="auto" className="rellax" src={galery3} alt=""/>
                <p>Well indicated and easy to travel.</p>
                </Parallax>

            </div>
            <div className="galeryRight">
            <Parallax disabled={props.disabled}  y={[10,-10]}>
                <img preload="auto" data-rellax-speed="2" className="rellax" src={galery4} alt=""/>
                <p>The grass is always green and the sky blue!</p>
                </Parallax>

            </div>

            <div className="galeryLeft">
            <Parallax disabled={props.disabled}  y={[-30,18]}>
                <img preload="auto" className="rellax" src={galery5} alt=""/>
                <p>the greenery is astonishing and relaxing.</p>
                </Parallax>

            </div>

            <div className="galeryRight">
            <Parallax disabled={props.disabled}  y={[20,-5]}>

                <img preload="auto" className="rellax" src={galery6} alt=""/>
                <p>Your house is always near..</p>
                </Parallax>

            </div>

      </div>




        
        <GeneralMenu/>
        </div>
    )
}
export default Residences