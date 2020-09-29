import React from "react";
import "../css/App.scss";
import Navigation from "./Navigation";
import ToDosContainer from "./ToDosContainer";
import ToDonesContainer from "./ToDonesContainer";
import Help from "./Help";
import { HashRouter, Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Container from "./Container";


export default function App() {
  return (
    <Container>
      <HashRouter>
        <div className="app">
          <Navigation />
          <Switch>
            <Route exact path="/">
              <ToDosContainer/>
              <ToDonesContainer/>
            </Route>
            <Route exact path="/help" component={Help} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </HashRouter>
    </Container>
  );
}