import React from 'react';
import { Slide } from 'react-slideshow-image';
 

 
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
    )
}

export default Slideshow