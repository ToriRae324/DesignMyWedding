import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ToDoList from "../../components/ToDoList"
import Venue from "../../components/Venue"
import Dress from "../../components/Dress"
import Decor from "../../components/Decor"
import "./Browse.css"

const Browse = () => (
    
  <div className="ui grid center aligned">
    <div className="four wide column">
      <ToDoList />
    </div>
      <Router>
        <div className="eleven wide column" id="browseContent" 
        // style={{ height: '800px', overflowY: "scroll" }}
        >
        <Switch>
          <Route exact path="/browse/venues" component={Venue} />
          <Route exact path="/browse/clothing" component={Dress} />
          <Route exact path="/browse/extras" component={Decor} />
          </Switch>
        </div>
      </Router>
      
  </div>
   
  );
  
  export default Browse;
  