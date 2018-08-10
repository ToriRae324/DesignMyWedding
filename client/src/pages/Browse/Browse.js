import React from "react";
import { Route, Switch } from "react-router-dom";
import ToDoList from "../../components/ToDoList"
import Venue from "../../components/Venue"
import Dress from "../../components/Dress"
import Decor from "../../components/Decor"
import "./Browse.css"

const Browse = ({match}) => (
    
  <div className="ui grid center aligned">
    <div className="four wide column">
      <ToDoList />
    </div>
      
        <div className="eleven wide column" id="browseContent">
        <Switch>
          <Route path={match.url + "/venues"} component={Venue}/>
          <Route path={match.url +"/clothing"} component={Dress} />
          <Route path={match.url +"/extras"} component={Decor} />
          </Switch>
        </div>
      
      
  </div>
   
  );
  
  export default Browse;
  