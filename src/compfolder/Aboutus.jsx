import React from 'react';
import img0 from "../images/download0.jpg"
import img1 from "../images/download1.jpg"
import img2 from "../images/download2.jpg"
import Slideshow from './globalComp/Slider';
import GeneralMenu from './globalComp/GeneralMenu'
import "./Aboutus.scss"
import Nav from "./globalComp/Nav"

let Aboutus = () => {

    return (
        <div className="aboutusContainer">
            <div>
                <Nav />
                <Slideshow size="normal" img={[img0, img1, img2]} />
            </div>
            <div className="aboutus-presentation text-on-right">
                <div>
                    <img src={img1} alt="Property view" />
                </div>
                <div>
                    <h2>Welcome to the <br/> West Bay Golf <br/> Club & Villas</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt recusandae beatae eos, vitae ullam laboriosam nobis facere eveniet officia commodi vero fuga accusantium ducimus veniam atque laborum exercitationem sapiente reprehenderit!</p>
                </div>
            </div>
            <div className="aboutus-presentation text-on-left">
                <div>
                    <img src={img2} alt="Why The Black Iguana" />
                </div>
                <div>
                    <h2>Why The <br/> Black Iguana</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt recusandae beatae eos, vitae ullam laboriosam nobis facere eveniet officia commodi vero fuga accusantium ducimus veniam atque laborum exercitationem sapiente reprehenderit!</p>
                </div>
            </div>
            
            <div className="aboutusPreview text-on-right">
                <div className="preview-image">
                    <img src={img1} alt="Golf preview" />
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

            <div className="sidebyside">
                <div className="sidebyside-col">
                    <h2>The Family</h2>
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
                <div className="sidebyside sidebyside-img">
                    <div>
                        <h3>Staff Members</h3>
                        <img src={img1} alt="Staff Members" />
                    </div>
                    <div>
                        <h3>Owners</h3>
                        <img src={img2} alt="Owners" />
                    </div>
                </div>
            </div>

            <div className="aboutus-center-block">
                <h2>Conceived in the <br/>Heart of the Caribbean</h2>
                
                {/* TODO: MISSING PSEUDO-GALLERY-SLIDER W/ TEXT ON RIGHT  */}
            </div>

            <div className="sidebyside">
                <div className="aboutus-clubhouse-previews">
                    <div className="sidebyside">
                        <div>
                            <img src={img0} alt="Club House 1"/>
                        </div>
                        <div>
                            <img src={img1} alt="Club House 2"/>
                        </div>
                    </div>
                    <img src={img2} alt="Club House 3"/>
                </div>
                <div>
                    <h3>Join Us for a <br/>Bite After Your <br/>Round</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat
                    </p>
                </div>
            </div>
            <GeneralMenu/>
        </div>
    )
}

export default Aboutus