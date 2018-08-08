import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedSidebar from "../../components/SavedSidebar";
import SavedVenue from "../../components/SavedVenue";
import SavedDress from "../../components/SavedDress";
import SavedDecor from "../../components/SavedDecor";

const MyStuff = () => (
    
  
      <div>
        <SavedSidebar />
        <Router>
          <div>
        <Route exact path="/mystuff/venues" component={SavedVenue} />
        <Route exact path="/mystuff/dresses" component={SavedDress} />
        <Route exact path="/mystuff/decor" component={SavedDecor} />
        </div>
       </Router>
      </div>
  
   
  );
  
  export default MyStuff;
  