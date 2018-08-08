import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Browse from "./pages/Browse"
import HeaderNav from './components/HeaderNav';

const App = () => (
  <Router>

    <div>
      <HeaderNav />
      <Route exact path="/" component={Browse} />
      <Route exact="/browse" component={Browse} />

      
      
    </div>

  </Router>
);

export default App;

