import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import DashBoard from './components/dashboard';
import NavigationBar from './components/navbar';
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, userDetails: { username: "", password:""} }
  }
  onLogin = (e) => {
    e.preventDefault();
    if (this.state.userDetails.username === "admin" && this.state.userDetails.password === "admin"){
      this.setState({isLoggedIn: true})
      return;
    }
    this.setState({isLoggedIn: false})
  }
  onLogout = () => {
    this.setState({isLoggedIn: false, userDetails: { usename: "", password: ""}});
  }
  handleUsername = (uid) => {
    this.setState({userDetails: {username: uid, password: this.state.userDetails.password}})
  }
  handlePassword = (pwd) => {
    this.setState({userDetails: {username: this.state.userDetails.username, password: pwd}})
  }
  onSignIn = (e) => {
    e.preventDefault();
    console.log('on sign in called')
  }
  render(){
    let dboard;
    if (this.props.loggedIn) {
      dboard = <DashBoard uname={this.props.currentUser.name} />
    }
    return (
      <React.Fragment>
        <NavigationBar userDetails={this.state.userDetails} onLogin={this.onLogin} onLogout={this.onLogout} handlePassword={this.handlePassword} />
        { this.props.loggedIn ? dboard : null }
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, null)(App);
