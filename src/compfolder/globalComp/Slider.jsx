import React from 'react';
import { Slide } from 'react-slideshow-image';
import "./Slider.scss"

 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = (props) => {


    const slideImages = props.img
    return (
        <div className="slideHeader">
      <div className="slide-container">
        <Slide {...properties}>
          {
            slideImages.map((img) => {
              return (
                <div className="each-slide">
                  <div style={{ 'backgroundImage': `url(${img})` }}>
                  </div>
                </div>
              )
            })
          }
        </Slide>
      </div>
      </div>
    )
}

export default Slideshow