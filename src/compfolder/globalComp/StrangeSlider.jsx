import React, { useState, useEffect } from 'react';
import "./StrangeSlider.scss"
import img0 from "../../images/airy-min.jpeg"
import img1 from "../../images/foodish-min.jpg"
import img2 from "../../images/golfoverview-min.jpg"
import img3 from "../../images/sunset.jfif"
import arrow from "../../images/move-to-next.svg"

// let imageFolder = [img0,img1,img2,img3]



const StrangeSlider = ()=>{

    let [count,setCount]= useState(1)

    let [imageFolder,setFolder]= useState([   
    <img src={img0} key={Date.now()} alt=""/>,
    <img src={img1} key={Date.now()} alt=""/>,
    <img src={img2} key={Date.now()} alt=""/>,
    <img src={img3} key={Date.now()} alt=""/>
])
    let newFolder=[]
    let temp
const imageFolderMove=()=>{

   newFolder=imageFolder

   temp=newFolder.pop()
   newFolder.unshift(temp)
    
   setFolder(imageFolder=newFolder)
    setCount(count+2)


}



    return(
        <div className="strangeSliderContainer">
            <div className="bigWindow"> {imageFolder[0]}
            <div className="littleWindows">
                <div className="littleImgContainer img1"> {imageFolder[1]} </div>
                <div className="littleImgContainer"> {imageFolder[2]}</div>
                <div className="greyDiv" onClick={imageFolderMove}> <img  id="seeCarribeanGolf"  src={arrow} alt=""/>   </div>
            </div>

            </div>
            <p>" Conceived with you in mind"</p>

        </div>
    )
}

export default StrangeSlider