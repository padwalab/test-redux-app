import React, { Component } from "react";
import { connect } from "react-redux";
import { logInUser } from "../redux/actions/actionHelper";

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return (
    <div className="alert alert-warning" role="alert">
      Invalid Credentials!
    </div>
  );
}

class Login extends Component {
  state = {
    username: "",
    password: "",
  };
  handleUserName = (username) => {
    console.log(this.props);
    this.setState({ username });
  };
  handlePassword = (password) => {
    this.setState({ password });
  };
  onLogin = (e) => {
    e.preventDefault();
    this.props.logInUser(this.state);
  };
  render() {
    // const { loggedIn } = this.props;
    let loginForm;
    if (!this.props.loggedIn) {
      loginForm = (
        <div className="container">
          <WarningBanner warn={!this.props.loggedIn} />
          <form id="login-form" onSubmit={this.onLogin}>
            <fieldset className="form-group row">
              <legend className="col-form-legend font-weight-light col-sm-1-12">
                Username
              </legend>
              <div className="col-sm-1-12">
                <input
                  value={this.state.username}
                  onChange={(e) => this.handleUserName(e.target.value)}
                  type="text"
                />
              </div>
            </fieldset>
            <fieldset className="form-group row">
              <legend className="col-form-legend font-weight-light col-sm-1-12">
                Password
              </legend>
              <div className="col-sm-1-12">
                <input
                  value={this.state.password}
                  onChange={(e) => this.handlePassword(e.target.value)}
                  type="password"
                />
              </div>
            </fieldset>
            <fieldset className="form-group row">
              <div className="col-form-legend col-sm-1-12">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      );
    } else {
      loginForm = null;
    }
    return loginForm;
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { logInUser })(Login);
