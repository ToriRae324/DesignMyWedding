import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Browse from "./pages/Browse"
import HeaderNav from './components/HeaderNav';
import MyStuff from "./pages/MyStuff"
import ToDoList from "./components/ToDoList"


const App = () => (
  <Router>

    <div className="Container">
      <HeaderNav />
      <div className="ui grid center aligned">
        <div className="four wide column">
          <ToDoList />
        </div>

        <div className="eleven wide column" id="content">

          <Switch>
            <Route exact path="/" component={Browse} />
            <Route path="/browse" component={Browse} />
            <Route path="/mystuff" component={MyStuff} />
          </Switch>
        </div>
      </div>

    </div>
  </Router>
);

export default App;

