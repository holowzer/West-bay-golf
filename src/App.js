import React from 'react';
import './App.css';
import Golfcourse from "./compfolder/Golfcourse"
import Homepage from "./compfolder/Homepage"
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';



function App() {
  return (

    <Router>
    <div className="App">
      <Route path="/Homepage" component={Homepage}/>
      <Route path="/Golfcourse" component={Golfcourse}/>
    </div>
    </Router>
  )
}

export default App;
