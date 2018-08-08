import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Browse from "./pages/Browse"
<<<<<<< HEAD
=======
import HeaderNav from './components/HeaderNav';
>>>>>>> 7aa53da0c9dd3cbc9822f598f8489c1f34c923e5
import MyStuff from "./pages/MyStuff"

const App = () => (
  <Router>

    <div>
      <HeaderNav />
      <Route exact path="/" component={Browse} />
      <Route path="/browse" component={Browse} />
      <Route path="/mystuff" component={MyStuff} />

<<<<<<< HEAD
      <MyStuff/>
      <Browse />
      </div>
    );
  }
}
=======
      
      
    </div>

  </Router>
);
>>>>>>> 7aa53da0c9dd3cbc9822f598f8489c1f34c923e5

export default App;

