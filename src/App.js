import React, { Component } from 'react';
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
    if (this.state.isLoggedIn) {
      dboard = <DashBoard uname={this.state.userDetails.username} />
    }
    return (
      <React.Fragment>
        <NavigationBar loggedIn={this.state.isLoggedIn} onSignIn={this.onSignIn} handleUsername={this.handleUsername} userDetails={this.state.userDetails} onLogin={this.onLogin} onLogout={this.onLogout} handlePassword={this.handlePassword} />
        { this.state.isLoggedIn ? dboard : null }
      </React.Fragment>
    );
  }
}

export default App;
