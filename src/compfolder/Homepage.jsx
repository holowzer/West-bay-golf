import React from 'react';
import Slideshow from './globalComp/Slider'
// import { Player, Shortcut } from 'video-react'
import "./Homepage.scss"
import Nav from "./globalComp/Nav"
import img1 from "../images/golf3-min.jpeg"
import {Link} from 'react-router-dom';


let Homepage = () => {

    return (
        <div className="homepageContainer">
            <div className="homepageNavContainer">
                <Nav />

                <h1 className="homepageHook">The Premier Roatan <br/> Golf Experience</h1>
                <Slideshow size="normal" img={["/assets/golf-preview.jpg", img1, "/assets/about-us-landing-2.jpg"]} />
                {/* <Player
                    playsInline
                    muted
                    autoPlay
                    loop
                    poster="/logo512.png" // TODO: Chage poster
                    height="100vh"
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                    <Shortcut clickable={false} dblclickable={false} shortcuts={[]} />
                </Player> */}
            </div>
            <div className="homepage-center-block">
                <h2>Discover the True <br/>Caribbean Golf Experience</h2>
                <div className="tooClassicDiv">
                    <div id="golfRoatanExplanation" className="preview-text">
                        Located along the second largest barrier reef in the world, Roatan is truly spoiled by mother
                        nature. Our golf course features lush vegetation and spectacular roatan ocean views. Our golf course is in West Bay, Roatan and a 10 minute walk from the white sands of West Bay Beach (one of the best in the Caribbean) and a short golf cart ride from every hotel in West Bay.
                    </div>
                    <div className="preview-image">
                        <img src="/assets/home-intermed.png" alt="Golf preview"/>
                    </div>
                </div>
            </div>

            <div className="homepagePreview text-on-right">
                <div className="preview-image">
                    <img src="/assets/golf-preview.jpg" alt="Golf preview"/>
                </div>
                <div className="preview-text">
                    <h3>The Golf Experience</h3>
                    <p>
                        Our course is designed by Dye Designs. Pete and Perry Dye have designed courses all over the world including some of the most challenging PGA courses. In designing our course they
                        wanted to execute a short course that could be played in less than 90 minutes but that was also very challenging for even an experienced golfer. 
                    </p>

                    <a href="/golf" className="preview-cta">Learn more</a>
                </div>
            </div>
            <div className="spacer"></div>
            <div className="slideshow-with-text">
                <h2>Mixing the deepest blues <br/>and brightest greens</h2>
                <Slideshow size="most" img={["/assets/home-slide-1.jpg", "/assets/home-slide-2.jpg", "/assets/home-slide-3.jpg"]} />
            </div>
            <div className="homepage-center-block">
                <h2>Live your best life at West Bay <br/>Golf Club & Villas</h2>
                <div className="tooClassicDiv">
                    <div className="preview-image">
                        <img src="/assets/home-intermed2.png" alt="Golf preview" />
                    </div>
                    <div id="golfRoatanExplanation" className="preview-text">
                        Our gated community has 24 hour security and a staff ready to make your stay an incredibly memorable one! We have 2 bedroom villas available for sale and rent at the Golf Course. Would you like breakfast or lunch served in your villa, would you like assistance arranging snorkeling or scuba? Just ask! Included in your stay in our villas is free beach access on West Bay Beach where you can enjoy amazing snorkeling, water sports, or most importantly, some well deserved downtime at the sea!
                    </div>
                </div>
            </div>
            <div className="homepagePreview text-on-left">
                <div className="preview-image">
                    <img src="/assets/residence-preview.jpg" alt="Residence preview" />
                </div>
                <div className="preview-text">
                    <h3>Live and play <br/>in Paradise</h3>
                    <p>
                        Our villas are designed with you in mind. Fully outfitted kitchen and beautiful living room
                        downstairs with a large covered patio. Upstairs are 2 bedrooms each with bathroom and
                        patios. The views of greens and blues is all around you and is certain to relax and refresh you after a long day of golf and diving!
                    </p>

                    <a href="/residences" className="preview-cta">Learn more</a>
                </div>
            </div>

            <div className="homepageGlobalPreviews homepage-center-block">
                <h2>Come and Discover our Breathtaking <br/>Views and Challenging Greens</h2>

                <div className="sidebyside">
                    <Link to="/golf">
                        <h3>The Golf Experience</h3>
                        <img src="/assets/golf-experience.jpg" alt="Golf preview"/>
                    </Link>
                    <Link to="/residences">
                        <h3>The Residence</h3>
                        <img src="/assets/residence-preview.jpg" alt="Residence preview" style={{ objectFit: 'cover' }} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Homepage