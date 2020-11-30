import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Users from "./pages/Users";

import "./App.css";
import EditUser from "./pages/EditUser";
import NewUsers from "./pages/NewUsers";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/new-users" component={NewUsers} />
          <Route path="/edit/:id" component={EditUser} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
