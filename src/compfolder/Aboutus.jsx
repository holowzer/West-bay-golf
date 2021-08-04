import React from 'react';
import Slideshow from './globalComp/Slider';
import "./Aboutus.scss"
import Nav from "./globalComp/Nav"

let Aboutus = () => {

    return (
        <div className="aboutusContainer">
            <div>
                <Nav />
                <h1 className="aboutusHook">Who's the lovely team <br />behind Black Iguana?</h1>
                <Slideshow size="normal" img={["/assets/about-us-landing-1.jpg", "/assets/about-us-landing-2.jpg", "/assets/about-us-landing-3.jpg"]} />
            </div>
            <div className="aboutus-presentation text-on-right">
                <div>
                    <img src="/assets/residence-preview.jpg" alt="Property view" />
                </div>
                <div>
                    <h3>Welcome to the <br/> West Bay Golf <br/> Club & Villas</h3>
                    <p>Surrounded by a lush tropical landscape and the second largest barrier reef in the world, Roatán is truly spoiled by mother nature. Perfectly located near the West Bay Beach so you can enjoy amazing snorkeling, water sports, or most importantly, some well deserved downtime at the sea!</p>
                </div>
            </div>
            <div className="aboutus-presentation text-on-left">
                <div>
                    <img src="/assets/about-us-landing-2.jpg" alt="Why The Black Iguana" />
                </div>
                <div>
                    <h3>Why The <br/> Black Iguana</h3>
                    <p>Nothing is more Roatán than the endemic, endangered Black Iguana, also known as the Roatán Spiny Tailed Iguana. Only found on the islands of Roatán and Barbareta and on Roatán there are only a few thousand left. We’ve partnered with the scientific community through the International Iguana Foundation and with the Ft. Worth, Texas Zoo to help preserve this species. A portion of all our merchandise sales goes directly to fund the annual Iguana research conducted on Roatán. Please help us support the protection of this incredible species of Iguana!</p>
                </div>
            </div>
            
            <div className="aboutusPreview text-on-right">
                <div className="preview-image">
                    <img src="/assets/golf-preview-2.jpg" alt="Golf preview" />
                </div>
                <div className="preview-text">
                    <h3>Sharing the passion for Golf</h3>
                    <p>
                        Our main goal has always been to make sure our Golf course displays and exhibits all that Roatán has to offer, while guaranteeing a very challenging short game golf course open and loved by our locals but greatly enjoyed by experienced golfers. Not only offering the opportunity to play golf in the heart of the caribbean but to truly be part of true Roatán Golf Experience. 
                    </p>

                    <a href="/golf" className="preview-cta">Learn more</a>
                </div>
            </div>


            <div className="aboutus-center-block">
                <h2>Conceived in the <br/>Heart of the Caribbean</h2>
                
                <p>Our owners formed a company with a main mission to build a golf course and small community of homeowners to carve out a special niche in Roatán West Bay area, while offering the opportunity to experience what Roatán is truly about.</p>
                {/* TODO: MISSING PSEUDO-GALLERY-SLIDER W/ TEXT ON RIGHT  */}
            </div>

            <div className="sidebyside aboutus-clubhouse">
                <div className="aboutus-clubhouse-previews">
                    <div className="sidebyside">
                        <div>
                            <img src="/assets/about-us-clubhouse-2.jpg" alt="Club House 1"/>
                        </div>
                        <div>
                            <img src="/assets/residence-experience.jpg" alt="Club House 2"/>
                        </div>
                    </div>
                    <img src="/assets/about-us-clubhouse-1.jpg" alt="Club House 3"/>
                </div>
                <div className="aboutus-clubhouse-text">
                    <h3>Join Us for a <br/>Bite After Your <br/>Round</h3>
                    <p>
                        Come and enjoy the best dishes that Roatán offers, married with a great selection of refreshing cocktails & beverages just after your round. The Caribbean style clubhouse serves as an inviting retreat featuring an array of amenities including a restaurant, bar, golf pro shop and snack bar.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Aboutus