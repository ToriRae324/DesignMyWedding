import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../../components/Sidebar"
import Venue from "../../components/Venue"
import Dress from "../../components/Dress"

const Browse = () => (
    <Router>
  
      <div>
        <Sidebar />
        <Route exact path="/browse" component={Venue} />
        <Route exact path="/browse/venue" component={Venue} />
        <Route exact path="/browse/dress" component={Dress} />
      </div>
  
    </Router>
  );
  
  export default Browse;
  