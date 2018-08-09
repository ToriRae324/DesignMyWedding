import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../../components/Sidebar"
import Venue from "../../components/Venue"
import Dress from "../../components/Dress"
import Decor from "../../components/Decor"

const Browse = () => (
    
  <div class="ui grid center aligned">
    <div class="four wide column">
      <Sidebar />
    </div>
      <Router>
        <div className="eleven wide column">
          <Route exact path="/browse/venues" component={Venue} />
          <Route exact path="/browse/dresses" component={Dress} />
          <Route exact path="/browse/decor" component={Decor} />
        </div>
      </Router>
      
  </div>
   
  );
  
  export default Browse;
  