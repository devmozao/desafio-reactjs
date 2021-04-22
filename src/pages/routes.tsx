import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";

//<Route path="/" exact component={Home}/>
//<Route path="/profile/:username" component={Profile}/>

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
