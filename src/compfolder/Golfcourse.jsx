import React, { useLayoutEffect } from 'react';
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
                    <a href="">Find your tee time <span id='spanLine'>-</span></a>
                </div>
                <h3></h3>
            </div>
            <Slideshow size="normal" img={[img0, img1, img2]} />
            </div>
            <div className="welcomeDiv">
                <div>
                    <img src={golf1} alt=""/>
                </div>
                <div>
                    <h2>enter the paradise with 1000$</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt recusandae beatae eos, vitae ullam laboriosam nobis facere eveniet officia commodi vero fuga accusantium ducimus veniam atque laborum exercitationem sapiente reprehenderit!</p>
                </div>
           <img id="mySvg" src={mySvg} alt=""/>
            </div>
            <div className="quoteMarket">
                <span>The best quote we have will make you slowly melt. <br/> You just have to taste our paradise.  </span>
            </div>
            <div className="arguments">
                <div className="textArgument">
                <Parallax disabled={props.disabled} y={[36,-46]}>
                    <h2>our argument is here</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo accusantium perspiciatis nemo soluta aspernatur, at optio perferendis cupiditate tempora, obcaecati repudiandae ut fuga possimus cumque aut illo fugiat expedita quaerat.</p>
                    </Parallax>
                </div>
                <div className="photoArgumentFrame">
                 <img className="rightPhoto" src={golf5} alt=""/>
                </div>

            </div>
            <div className="arguments">
                <div className="photoArgumentFrame">
                 <img className="leftPhoto" src={golf6} alt=""/>
                </div>
                <div className="textArgument">
                <Parallax disabled={props.disabled}  y={[36,-46]}>
                    <h2>our argument is here</h2>
                   
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo accusantium perspiciatis nemo soluta aspernatur, at optio perferendis cupiditate tempora, obcaecati repudiandae ut fuga possimus cumque aut illo fugiat expedita quaerat.</p>
                 </Parallax>
                </div>
            </div>
            <div className="relative">
                <h3 className="designQuote">World Class Perry Dye <br/> Design Golf Course.</h3>
            <Slideshow size="little" img={[golf10, golf9]} />
            </div>
            <div className="golfMap">
                <div className="googleMapGolf">
                    <img src={golf8} alt=""/>
                </div>
                <div className="mapExplaination">
                <Parallax disabled={props.disabled}  y={[36,-46]}>

                    <h2>the iguana course<br/> of love.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis in id nostrum rerum quisquam error sit necessitatibus, quibusdam, dolores nemo a suscipit neque autem unde! Commodi hic vitae amet aliquam!</p>
                    </Parallax>
                </div>
            </div>
            <div className="blueDivCTA">
                <h2>Book a tee time with us now!</h2>
                <h3>we recommand you to reserve your tee time in advance !</h3>
                <a href="">Book tee times</a>
            </div>
        </div>
    )
}

export default Golfcourse