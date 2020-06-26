import React, { Component } from "react";

import { Route, Redirect, Switch } from "react-router-dom";

import Home from "./components/home";
import NotFound from "./components/notFound";

import NavBar from "./components/navBar";

import Users from "./components/users";

import Login from "./components/login";
import auth from "./services/authService";
import "./App.css";

import Signup from "./components/signup";
import Logout from "./components/logout";

class App extends Component {
  state = { user: {} };

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    return (
      <div className="m-2">
        <NavBar user={this.state.user} />
        <main>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/signup" exact component={Signup} />

            {this.state.user && (
              <>
                <Route path="/home" exact component={Home} />
                <Route path="/users" exact component={Users} />
                <Route path="/logout" exact component={Logout} />
              </>
            )}

            <Route path="/notFound" component={NotFound} />

            <Redirect to="/notFound" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
