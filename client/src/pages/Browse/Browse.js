import React from "react";
import { Route, Switch } from "react-router-dom";
import ToDoList from "../../components/ToDoList"
import Venue from "../../components/Venue"
import Dress from "../../components/Dress"
import Decor from "../../components/Decor"
import "./Browse.css"

const Browse = ({ match }) => (

  <Switch>
    <Route path={match.url + "/venues"} component={Venue} />
    <Route path={match.url + "/clothing"} component={Dress} />
    <Route path={match.url + "/extras"} component={Decor} />
  </Switch>


);

export default Browse;
