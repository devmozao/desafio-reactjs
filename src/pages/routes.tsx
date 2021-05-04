import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/profile/:username" exact component={Profile} />
        <Route path="/" exact component={Home} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
