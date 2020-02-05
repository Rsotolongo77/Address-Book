import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./pages/Contact";
import Detail from "./pages/Detail";

import './App.css';

function App() {
  return (

    //react router with switches according to path
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Contacts} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/contacts/:id" component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
