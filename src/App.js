import React from 'react';
import ScrollToTop from "react-router-scroll-top"
import './App.css';
import Homepage from "./compfolder/Homepage"
import Golfcourse from "./compfolder/Golfcourse"
import {ParallaxProvider} from "react-scroll-parallax"
import BookGolf from './compfolder/globalComp/contactPages/BookGolf'
import SalesContact from './compfolder/globalComp/contactPages/SalesContact'
import RentalContact from './compfolder/globalComp/contactPages/RentalContact'

import Aboutus from "./compfolder/Aboutus"
import Footer from "./compfolder/globalComp/Footer"
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Residences from './compfolder/Residences';



function App() {
let responsive=false

if(window.innerWidth<800){
  responsive=true
}

  return (

    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <ParallaxProvider>

    <ScrollToTop>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/golf" render={(props) => <Golfcourse disabled={responsive} isAuthed={true} />}/>
          <Route path="/about-us" component={Aboutus}/>
          <Route path="/residences" render={(props) => <Residences disabled={responsive} isAuthed={true} />}/>

          <Route path="/contact/book-golf" component={BookGolf}/>
          <Route path="/contact/real-estate-sales" component={SalesContact}/>
          <Route path="/contact/real-estate-rental" component={RentalContact}/>

          {/* <Route component={Homepage} /> */}
          {/* <Route render={() => <Redirect to="/" />} /> */}
          <Redirect to="/" />
        </Switch>
        <Footer/>
      </div>
      </ScrollToTop>
      </ParallaxProvider>

    </Router>
  )
}

export default App;
