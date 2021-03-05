import React, { Component } from "react";

class SignIn extends Component {
  render() {
    const {
      loggedIn,
      onSignIn,
      handleUsername,
      handlePassword,
      userDetails,
      handleName,
    } = this.props;
    let signInForm;
    if (!loggedIn) {
      signInForm = (
        <div className="container">
          <form id="login-form" onSubmit={(e) => onSignIn(e)}>
            <fieldset className="form-group row">
              <legend className="col-form-legend font-weight-light col-sm-1-12">
                Name
              </legend>
              <div className="col-sm-1-12">
                <input
                  value={userDetails.name}
                  onChange={(e) => handleName(e.target.value)}
                  type="text"
                  name="username"
                  id="username"
                />
              </div>
            </fieldset>
            <fieldset className="form-group row">
              <legend className="col-form-legend font-weight-light col-sm-1-12">
                Username
              </legend>
              <div className="col-sm-1-12">
                <input
                  value={userDetails.username}
                  onChange={(e) => handleUsername(e.target.value)}
                  type="text"
                  name="username"
                  id="username"
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
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <fieldset className="form-group row">
              <div className="col-form-legend col-sm-1-12">
                <button type="submit" className="btn btn-primary">
                  SignIn
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      );
    }
    return signInForm;
  }
}

export default SignIn;
