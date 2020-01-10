import React from 'react';
import './App.css';
import Homepage from "./compfolder/Homepage"
import Golfcourse from "./compfolder/Golfcourse"

import BookGolf from './compfolder/globalComp/contactPages/BookGolf'

import Aboutus from "./compfolder/Aboutus"
import Footer from "./compfolder/globalComp/Footer"
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';



function App() {
  return (

    <Router>
      <div className="App">
        <Route path="/" exact component={Homepage}/>
        <Route path="/golf" component={Golfcourse}/>
        <Route path="/about-us" component={Aboutus}/>

        <Route path="/contact/book-golf" component={BookGolf}/>
      </div>
      <Footer/>
    </Router>
  )
}

export default App;
