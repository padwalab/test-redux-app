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
  render() {
    state = {
      username: "",
      password: "",
    };
    const {
      loggedIn,
      onLogin,
      handleUsername,
      handlePassword,
      userDetails,
    } = this.props;
    let loginForm;
    if (!loggedIn) {
      loginForm = (
        <div className="container">
          <WarningBanner warn={!loggedIn} />
          <form id="login-form" onSubmit={(e) => onLogin(e)}>
            <fieldset className="form-group row">
              <legend className="col-form-legend font-weight-light col-sm-1-12">
                Username
              </legend>
              <div className="col-sm-1-12">
                <input
                  value={userDetails.username}
                  onChange={(e) => handleUsername(e.target.value)}
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
                  value={userDetails.password}
                  onChange={(e) => handlePassword(e.target.value)}
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

export default connect(null, { logInUser })(Login);
