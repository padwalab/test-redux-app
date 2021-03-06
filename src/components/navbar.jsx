import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./login";
import SignIn from "./signin";
import "bootstrap/dist/css/bootstrap.css";
import { logOutUser } from "../redux/actions/actionHelper";
import Logout from "./logout";
import { connect } from "react-redux";
class NavigationBar extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.logOutUser();
    
  };
  render() {
    const {
      // loggedIn,
      onLogin,
      // onLogout,
      // onSignIn,
      userDetails,
      handleUsername,
      handlePassword,
    } = this.props;
    return (
      <Router>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active m-2">
                <Link className="h3 font-weight-light" to="/">
                  Splitwise
                </Link>
              </li>
            </ul>
          </div>
          {!this.props.loggedIn ? (
            <div className="navbar-collapse collapse w-100 order-2 dual-collapse2">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item font-weight-light m-2">
                  <Link to="/login">Log In</Link>
                </li>
                <li className="nav-item font-weight-light m-2">
                  <Link to="/signin">Sign Up</Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="navbar-collapse collapse w-100 order-2 dual-collapse2">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item font-weight-light m-2">
                  <Link onClick={this.handleLogout} to="/">
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
        <Switch>
          <Route path="/login">
            <Login
              onLogin={onLogin}
              userDetails={userDetails}
              handleUsername={handleUsername}
              handlePassword={handlePassword}
            />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/logout">
            <Logout className="text-white" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { logOutUser })(NavigationBar);
