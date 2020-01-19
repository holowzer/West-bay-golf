import React from 'react';
import './App.css';
import Homepage from "./compfolder/Homepage"
import Golfcourse from "./compfolder/Golfcourse"
import {ParallaxProvider} from "react-scroll-parallax"
import BookGolf from './compfolder/globalComp/contactPages/BookGolf'
import SalesContact from './compfolder/globalComp/contactPages/SalesContact'
import RentalContact from './compfolder/globalComp/contactPages/RentalContact'

import Aboutus from "./compfolder/Aboutus"
import Footer from "./compfolder/globalComp/Footer"
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Residences from './compfolder/Residences';



function App() {
  return (
<ParallaxProvider>
    <Router>
      <div className="App">
        <Route path="/" exact component={Homepage}/>
        <Route path="/golf" component={Golfcourse}/>
        <Route path="/about-us" component={Aboutus}/>
        <Route path="/residences" component={Residences}/>

        <Route path="/contact/book-golf" component={BookGolf}/>
        <Route path="/contact/real-estate-sales" component={SalesContact}/>
        <Route path="/contact/real-estate-rental" component={RentalContact}/>
        <Footer/>
      </div>
    </Router>
    </ParallaxProvider>
  )
}

export default App;
