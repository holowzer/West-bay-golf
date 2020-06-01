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
        <div className="moto"><h2>Live your best life <br/>at West Bay Golf Club & Villas</h2></div>

        <div className="overLayer">
            <h4>Book your place !</h4>
                <div className="rightCTA">
                    <a href="https://www.roatanlife.com/" target="_blank">Find your perfect house <span id='spanLine'>-</span></a>
                </div>
                
            </div>
        <Slideshow size="normal" img={[house1, house2, house3]}/>
        <StrangeSlider/>
        <div className="tooClassicDiv">
        <div className="villaPreviewText">
        <Parallax disabled={props.disabled}  y={[36,-46]}>
                <h2>Simply the Finest in Roatán Island Living</h2>
                <p>Surrounded by Roatán’s tropical landscape and the golf course The two bedroom villas are designed by world famed architect, Lane Pettigrew. Making The West Bay Golf Club & Villas a very unique and exciting new development project in Roatán.
 
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

            <h2>Features</h2>
                <p>Our 2 bedroom villas available for sale and rent at the Golf Course. Would you like breakfast or lunch served in your villa, would you like assistance arranging snorkeling or scuba? Just ask! Included in your stay in our villas is free beach access on West Bay Beach where you can enjoy amazing snorkeling, water sports, or most importantly, some well deserved downtime at the sea!
</p>
            </div>
            </Parallax>
            
        </div>
        <div className="specificities">
           <img id="RoatanGolf" src={galery2} alt=""/>
           <div className="speText">
           <h2>Your own Private Heaven</h2>
           <p>Our villas are designed with you in mind. Fully outfitted kitchen and beautiful living room
downstairs with a large covered patio. Upstairs are 2 bedrooms each with bathroom and
patios. The views of greens and blues is all around you and is certain to relax and refresh you after a long day of golf and diving!</p>

           </div>
       </div>

        <div className="advantages">
            <div className="advantagesHead">
                <h2>Everything you need !</h2>
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
            <Parallax  y={[5,0]}>
                <img  preload="auto" src={galery1} alt=""/>
                <p>A peaceful place with a sweet taste of paradise</p>
                </Parallax>

            </div>
            <div className="galeryRight">
            <Parallax disabled={props.disabled}  y={[-5,6]}>
                <img preload="auto" className="rellax" data-rellax-speed="4" src={galery2} alt=""/>
                <p>A challenging 9-hole course!</p>
                </Parallax>

            </div>

            <div className="galeryLeft">
            <Parallax disabled={props.disabled}  y={[5,-8]}>
                <img preload="auto" className="rellax" src={galery3} alt=""/>
                <p>The challenge begins</p>
                </Parallax>

            </div>
            <div className="galeryRight">
            <Parallax disabled={props.disabled}  y={[-5,5]}>
                <img preload="auto" data-rellax-speed="2" className="rellax" src={galery4} alt=""/>
                <p>The grass is always green and the sky blue!</p>
                </Parallax>

            </div>

            <div className="galeryLeft">
            <Parallax disabled={props.disabled}  y={[5,-5]}>
                <img preload="auto" className="rellax" src={galery5} alt=""/>
                <p>the greenery is astonishing and relaxing.</p>
                </Parallax>

            </div>

            <div className="galeryRight">
            <Parallax disabled={props.disabled}  y={[20,-10]}>

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