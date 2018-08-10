import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedSidebar from "../../components/SavedSidebar";
import ToDoList from "../../components/ToDoList"
import SavedVenue from "../../components/SavedVenue";
import SavedDress from "../../components/SavedDress";
import SavedDecor from "../../components/SavedDecor";

const MyStuff = () => (
    
  
  <div class="ui grid center aligned">
  <div class="four wide column">
        <SavedSidebar />
        </div>
        <Router>
        <div className="eleven wide column">
        <Switch>
          <Route exact path="/mystuff/venues" component={SavedVenue} />
          <Route exact path="/mystuff/clothing" component={SavedDress} />
          <Route exact path="/mystuff/extras" component={SavedDecor} />
          </Switch>
        </div>
       </Router>
      </div>
  
   
  );
  
  export default MyStuff;
  
