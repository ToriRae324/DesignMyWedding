import React from "react";
import { Route, Switch } from "react-router-dom";
import SavedVenue from "../../components/SavedVenue";
import SavedDress from "../../components/SavedDress";
import SavedDecor from "../../components/SavedDecor";
import ToDoList from "../../components/ToDoList";

const MyStuff = ({ match }) => (
 
 
      <Switch>
        <Route path={match.url + "/venues"} component={SavedVenue}/>
        <Route path={match.url +"/clothing"} component={SavedDress} />
        <Route path={match.url +"/extras"} component={SavedDecor} />
        </Switch>
     
  
   
  );
  
  export default MyStuff;
  
