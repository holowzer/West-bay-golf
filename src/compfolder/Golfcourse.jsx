import React, { useLayoutEffect, } from 'react';
import {Link} from 'react-router-dom';
import img0 from "../images/golf2-min.jpeg"
import img1 from "../images/golf3-min.jpeg"
import img2 from "../images/golf4-min.jpeg"
import golf1 from "../images/golf1-min.jpeg"
import golf5 from "../images/golf5-min.jpeg"
import golf6 from "../images/golf6-min.jpeg"
import golf8 from "../images/golf8-min.jpg"
import golf9 from "../images/galery3-min.jpg"
import golf10 from "../images/roatanluxurytravel-min.jpg"
import mySvg from "../images/mySvg.png"
import Slideshow from './globalComp/Slider';
import { Parallax,useController } from 'react-scroll-parallax';
import "./Golfcourse.scss"
import Nav from "./globalComp/Nav"





let Golfcourse = (props)=>{
    const { parallaxController } = useController();

    const ParallaxCache = () => {
     
        useLayoutEffect(() => {
            const handler = () => parallaxController.update();
            window.addEventListener('load', handler);
            return () => window.removeEventListener('load', handler);
        }, [parallaxController]);
     
        return null;
    };
    
    ParallaxCache()



    return(
        <div className="golfCourseContainer">
            <div>
            <Nav/>
            <div className="moto"><h2>Welcome to the <br/> Black Iguana Golf-Club.</h2></div>
            <div className="overLayer">
            <h4>Book your tee off today !</h4>
                <div className="rightCTA">
                <Link to="/contact/book-golf">Find your tee time <span id='spanLine'>-</span></Link>
                </div>
                <h3></h3>
            </div>
            <Slideshow size="normal" img={[img0, img1, img2]} />
            </div>
            <div className="welcomeDiv">
                <div>
                    <img src={golf1} alt="RoatanGolf"/>
                </div>
                <div>
                    <h2>The True Caribbean Golf Experience</h2>
                    <p>Nestled at the heart of the Caribbean <strong> The Black Iguana Golf Course</strong> is the only Dye design golf course in West Bay, setting the standard of excellence and beauty for an all immersive tropical golf experience.</p>
                </div>
           <img id="mySvg" src={mySvg} alt="stylesvg"/>
            </div>
            <div className="quoteMarket">
                <span>Nothing better than doing sport in front <br/>of paradisiac landscapes.  </span>
            </div>
            <div className="arguments">
                <div className="textArgument">
                <Parallax disabled={props.disabled} y={[26,-26]}>
                    <h2>Nestled in a Lush Tropical Landscape </h2>
                    <p>The Black Iguana features an 9-hole, par 3 golf course with magnificent views, generous elevation, immaculate emerald greens while truly testing your short game. The course presents a challenge for golfers of all skill levels with 3 sets of tees accommodating both the professional and beginner golfer.</p>
                    </Parallax>
                </div>
                <div className="photoArgumentFrame">
                 <img className="rightPhoto" src={golf5} alt="bestcarribeangolf"/>
                </div>

            </div>
            <div className="arguments">
                <div className="photoArgumentFrame">
                 <img className="leftPhoto" src={golf6} alt="thegolfpractice"/>
                </div>
                <div className="textArgument">
                <Parallax disabled={props.disabled}  y={[26,-26]}>
                    <h2>Designed to be both fun and challenging</h2>
                   
                 <p>Executing an immaculate short game course that could be played in less than 90 minutes but that was also very challenging for even an experienced golfer. Our 9 hole, par 3, course has tremendous elevation challenges and will truly test your short game. Carts, clubs, food and drinks are all available in our clubhouse and we’re open to everyone. We’ll even transport you anywhere in West Bay for free!</p>
                 </Parallax>
                </div>
            </div>
            <div className="relative">
                <h3 className="designQuote">World Class Perry Dye <br/> Design Golf Course.</h3>
            <Slideshow size="little" img={[golf10, golf9]} />
            </div>
            <div className="golfMap">
                <div className="googleMapGolf">
                    <img src={golf8} alt="roatanholidays"/>
                </div>
                <div className="mapExplaination">
                <Parallax disabled={props.disabled}  y={[26,-26]}>

                    <h2>Black Iguana Golf Course</h2>
                    <p>We invite you to visit The West Bay Golf Club to enjoy its breathtaking scenery, challenging design and outstanding customer service reflecting cherished in a lush tropical landscape minutes from the heart of West Bay beach.</p>
                    </Parallax>
                </div>
            </div>

            <div className="blueDivCTA">
                <h2>Book a tee time with us now!</h2>
                <h3>we recommand you to reserve your tee time in advance !</h3>
                <Link to="/contact/book-golf">
     Book tee times</Link>
            </div>
            
        </div>
        
    )
}

export default Golfcourse