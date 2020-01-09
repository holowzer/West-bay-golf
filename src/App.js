import React from 'react';
import './App.css';
import Golfcourse from "./compfolder/Golfcourse"
import Homepage from "./compfolder/Homepage"
import Footer from "./compfolder/globalComp/Footer"
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';



function App() {
  return (

    <Router>
      <div className="App">
        <Route path="/homepage" component={Homepage}/>
        <Route path="/golf" component={Golfcourse}/>
      </div>
      <Footer/>
    </Router>
  )
}

export default App;
