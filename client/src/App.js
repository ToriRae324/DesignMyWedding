import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./App.css"
import Browse from "./pages/Browse"
import HeaderNav from './components/HeaderNav';
import MyStuff from "./pages/MyStuff"
import ToDoList from "./components/ToDoList"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import Auth from "./modules/Auth"
import TeamPage from "./pages/TeamPage"
import Footer from "./components/Footer"



const App = () => (


  <Router>
    <div>
      <HeaderNav />
      <div className="container ui grid center stackable aligned">

        <div className="four wide column" id="todoSide">
          <ToDoList />
        </div>

        <div className="eleven wide column" id="content">
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
            <Route exact path="/teamPage" component={TeamPage}/>




            <Route path="/myStuff" component={MyStuff}/>




            <Route path="/mystuff" render={() => (
              Auth.isUserAuthenticated() ? (
                <Redirect to="/mystuff"/>
              ) : (
                  <LoginPage />
                )
            )} />


          </Switch>
        </div>
        </div>
      <Footer />
    </div>
  </Router>
);

export default App;

