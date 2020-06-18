import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Nav from "./Nav";
import HomePage from "./pages/HomePage";
import Feed from "./pages/Feed";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
      <main>
        <Nav />

        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>

          <Route exact path='/feed'>
            <Feed />
          </Route>

          <Route exact path='/gallery'>
            <Gallery />
          </Route>

          <Route path='/*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
