import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../../components/Sidebar"
import SavedVenue from "../../components/SavedVenue"
import SavedDress from "../../components/Dress"
import SavedDecor from "../../components/Decor"

const MyStuff = () => (
    <Router>
  
      <div>
        <Sidebar />
        <Route exact path="/myStuff/venues" component={SavedVenue}/>
        <Route exact path="/myStuff/dresses" component={SavedDress}/>
        <Route exact path="/myStuff/decor" component={SavedDecor}/>
      </div>
  
    </Router>
  );
  
  export default MyStuff;