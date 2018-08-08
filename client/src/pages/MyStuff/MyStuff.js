import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import Sidebar from "../../components/Sidebar"
import SavedVenue from "../../components/SavedVenue"
import SavedDress from "../../components/Dress"
import SavedDecor from "../../components/Decor"

const MyStuff = () => (
    <Router>
  
      <div>
        <Sidebar />
        <Route exact path="/myStuff/venues" component={SavedVenue}/>
        <Route exact path="/myStuff/dresses" component={SavedDress}/>
        <Route exact path="/myStuff/decor" component={SavedDecor}/>
      </div>
  
    </Router>
  );
  
  export default MyStuff;
=======
import SavedSidebar from "../../components/SavedSidebar";
import SavedVenue from "../../components/SavedVenue";
import SavedDress from "../../components/SavedDress";
import SavedDecor from "../../components/SavedDecor";

const MyStuff = () => (
    
  
      <div>
        <SavedSidebar />
        <Router>
          <div>
        <Route exact path="/mystuff/venues" component={SavedVenue} />
        <Route exact path="/mystuff/dresses" component={SavedDress} />
        <Route exact path="/mystuff/decor" component={SavedDecor} />
        </div>
       </Router>
      </div>
  
   
  );
  
  export default MyStuff;
  
>>>>>>> 7aa53da0c9dd3cbc9822f598f8489c1f34c923e5
