import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../../components/Sidebar"
import Venue from "../../components/Venue"
import Dress from "../../components/Dress"
import Decor from "../../components/Decor"
import "./Browse.css"

const Browse = () => (
    
  <div className="ui grid center aligned">
    <div className="four wide column">
      <Sidebar />
    </div>
      <Router>
        <div className="eleven wide column" id="browseContent" 
        // style={{ height: '800px', overflowY: "scroll" }}
        >
          <Route exact path="/browse/venues" component={Venue} />
          <Route exact path="/browse/dresses" component={Dress} />
          <Route exact path="/browse/decor" component={Decor} />
        </div>
      </Router>
      
  </div>
   
  );
  
  export default Browse;
  