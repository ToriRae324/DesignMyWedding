import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../../components/Sidebar"
import Venue from "../../components/Venue"
import Dress from "../../components/Dress"
import Decor from "../../components/Decor"

const Browse = () => (
    
  
      <div>
        <Sidebar />
        <Router>
          <div>
        <Route exact path="/browse/venues" component={Venue} />
        <Route exact path="/browse/dresses" component={Dress} />
        <Route exact path="/browse/decor" component={Decor} />
        </div>
       </Router>
      </div>
  
   
  );
  
  export default Browse;
  