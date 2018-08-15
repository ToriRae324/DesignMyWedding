import React from "react";
import { Route, Switch } from "react-router-dom";
import SavedVenue from "../../components/SavedVenue";
import SavedDress from "../../components/SavedDress";
import SavedDecor from "../../components/SavedDecor";
import ToDoList from "../../components/ToDoList";

const MyStuff = ({ match }) => (
 
 
      <Switch>
        <Route path={"/venues"} component={SavedVenue}/>
        <Route path={"/clothing"} component={SavedDress} />
        <Route path={"/extras"} component={SavedDecor} />
        </Switch>
     
  
   
  );
  
  export default MyStuff;
  
