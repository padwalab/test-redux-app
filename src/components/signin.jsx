import React, { Component } from "react";
import { connect } from "react-redux";
import { signInUser } from "../redux/actions/actionHelper";

class SignIn extends Component {
  // constructor(props) {
  // super(props);
  // this.state = { name: "" };
  // }
  state = {
    name: "",
    username: "",
    password: "",
  };
  handleName = (name) => {
    this.setState({ name });
  };
  handleUserName = (username) => {
    this.setState({ username });
  };
  handlePasssword = (password) => {
    this.setState({ password });
  };

  handleSignInUser = (e) => {
    e.preventDefault();
    this.props.signInUser(this.state);
    this.setState({ name: "", username: "", password: "" });
  };

  render() {
    // const { loggedIn } = this.props;
    let signInForm;
    signInForm = (
      <div className="container">
        <form id="login-form">
          <fieldset className="form-group row">
            <legend className="col-form-legend font-weight-light col-sm-1-12">
              Name
            </legend>
            <div className="col-sm-1-12">
              <input
                value={this.state.name}
                onChange={(e) => {
                  e.preventDefault();
                  this.handleName(e.target.value);
                }}
                type="text"
              />
            </div>
          </fieldset>
          <fieldset className="form-group row">
            <legend className="col-form-legend font-weight-light col-sm-1-12">
              UserName
            </legend>
            <div className="col-sm-1-12">
              <input
                value={this.state.username}
                onChange={(e) => {
                  e.preventDefault();
                  this.handleUserName(e.target.value);
                }}
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
                onChange={(e) => {
                  e.preventDefault();
                  this.handlePasssword(e.target.value);
                }}
                type="password"
              />
            </div>
          </fieldset>
          <fieldset className="form-group row">
            <div className="col-form-legend col-sm-1-12">
              <button
                onClick={this.handleSignInUser}
                type="submit"
                className="btn btn-primary"
              >
                SignIn
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    );
    return signInForm;
  }
}

export default connect(null, { signInUser })(SignIn);
