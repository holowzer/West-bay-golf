import React from 'react';
import img0 from "../images/download0.jpg"
import img1 from "../images/download1.jpg"
import img2 from "../images/download2.jpg"
import Slideshow from './globalComp/Slider';
import "./Golfcourse.scss"
import Nav from "./globalComp/Nav"

let Golfcourse = ()=>{

    return(
        <div className="golfCourseContainer">
            <div>
            <Nav/>
            <Slideshow size="normal" img={[img0, img1, img2]} />
            </div>
            <div className="welcomeDiv">
                <div>
                    <img src={img1} alt=""/>
                </div>
                <div>
                    <h2>enter the paradise with 1000$</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt recusandae beatae eos, vitae ullam laboriosam nobis facere eveniet officia commodi vero fuga accusantium ducimus veniam atque laborum exercitationem sapiente reprehenderit!</p>
                </div>
            </div>
            <div className="quoteMarket">
                <span>The best quote we have will make you slowly melt. <br/> You just have to taste our paradise.  </span>
            </div>
            <div className="arguments">
                <div className="textArgument">
                    <h2>our argument is here</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo accusantium perspiciatis nemo soluta aspernatur, at optio perferendis cupiditate tempora, obcaecati repudiandae ut fuga possimus cumque aut illo fugiat expedita quaerat.</p>
                </div>
                <div className="photoArgumentFrame">
                 <img className="rightPhoto" src={img1} alt=""/>
                </div>

            </div>
            <div className="arguments">
                <div className="photoArgumentFrame">
                 <img className="leftPhoto" src={img1} alt=""/>
                </div>
                <div className="textArgument">
                    <h2>our argument is here</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo accusantium perspiciatis nemo soluta aspernatur, at optio perferendis cupiditate tempora, obcaecati repudiandae ut fuga possimus cumque aut illo fugiat expedita quaerat.</p>
                </div>
            </div>
            <Slideshow size="little" img={[img0, img1, img2]} />
            <div className="golfMap">
                <div className="googleMapGolf">
                    <img src={img0} alt=""/>
                </div>
                <div className="mapExplaination">
                    <h2>the iguana course<br/> of love.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis in id nostrum rerum quisquam error sit necessitatibus, quibusdam, dolores nemo a suscipit neque autem unde! Commodi hic vitae amet aliquam!</p>
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