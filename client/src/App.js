import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Browse from "./pages/Browse"
import HeaderNav from './components/HeaderNav';
import MyStuff from "./pages/MyStuff"
import ToDoList from "./components/ToDoList"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import Auth from "./modules/Auth"
import Footer from "./components/Footer"

import Test from "./components/Test"


const App = () => (


  <Router>

    <div className="Container">
      <HeaderNav />
      <div className="ui grid center aligned">

        <div className="four wide column">
          <ToDoList />
        </div>
        <div className="eleven wide column" id="content">
        <Route exact path="/test" component={Test} />
          <Switch>

            <Route exact path="/" render={() => (
              Auth.isUserAuthenticated() ? (
                <Redirect to="/mystuff/venues"/>
              ) : (
                  <LoginPage />
                )
            )} />
            {/* <Route exact path="/" component={LoginPage} /> */}
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route path="/browse" component={Browse} />
            <Route path="/myStuff" component={MyStuff}/>





            {/* <Route path="/mystuff" render={() => (
              Auth.isUserAuthenticated() ? (
                <Redirect to="/mystuff/venues"/>
              ) : (
                  <LoginPage />
                )
            )} /> */}

            <Route path="/mystuff" component={MyStuff} />




          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;

