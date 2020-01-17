import React from 'react';
import Slideshow from './globalComp/Slider'
import { Player, Shortcut } from 'video-react'
import "./Homepage.scss"
import Nav from "./globalComp/Nav"

let Homepage = () => {

    return (
        <div className="homepageContainer">
            <div className="homepageNavContainer">
                <Nav />

                <h1 className="homepageHook">The Premier Roatan <br/> Golf Experience</h1>
                <Player
                    playsInline
                    muted
                    autoPlay
                    loop
                    poster="/logo512.png" // TODO: Chage poster
                    height="100vh"
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                    <Shortcut clickable={false} dblclickable={false} shortcuts={[]} />
                </Player>
            </div>
            <div className="homepage-center-block">
                <h2>Discover the True Caribbean Golf Experience</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
            </div>

            <div className="homepagePreview text-on-right">
                <div className="preview-image">
                    <img src="/assets/golf-preview.jpg" alt="Golf preview"/>
                </div>
                <div className="preview-text">
                    <h3>The Golf Experience</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non
                    </p>

                    <a href="/golf" className="preview-cta">Learn more</a>
                </div>
            </div>
            <div className="slideshow-with-text">
                <h2>Mixing the deepest blues and brightest greens</h2>
                <Slideshow size="little" img={["/assets/home-slide-1.jpg", "/assets/home-slide-2.jpg", "/assets/home-slide-3.jpg"]} />
            </div>
            <div className="homepage-center-block">
                <h2>Live your best life at West Bay <br /> Golf Club & Villas</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non
                </p>
            </div>
            <div className="homepagePreview text-on-left">
                <div className="preview-image">
                    <img src="/assets/residence-preview.jpg" alt="Residence preview" />
                </div>
                <div className="preview-text">
                    <h3>Live and play <br/>in Paradise</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non
                    </p>

                    <a href="/golf" className="preview-cta">Learn more</a>
                </div>
            </div>

            <div className="homepageGlobalPreviews homepage-center-block">
                <h2>Come and Discover our Breathtaking <br/>Views and Challenging Greens</h2>

                <div className="sidebyside">
                    <div>
                        <h3>The Golf Experience</h3>
                        <img src="/assets/golf-experience.jpg" alt="Golf preview"/>
                    </div>
                    <div>
                        <h3>The Residence</h3>
                        <img src="/assets/residence-experience.jpg" alt="Residence preview" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage