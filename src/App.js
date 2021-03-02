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
  handleUsername = (uid) => {
    this.setState({userDetails: {username: uid, password: this.state.userDetails.password}})
  }
  handlePassword = (pwd) => {
    this.setState({userDetails: {username: this.state.userDetails.username, password: pwd}})
  }
  render(){
    let dboard;
    if (this.state.isLoggedIn) {
      dboard = <DashBoard />
    }
    return (
      <React.Fragment>
        <NavigationBar loggedIn={this.state.isLoggedIn} handleUsername={this.handleUsername} userDetails={this.state.userDetails} onLogin={this.onLogin} handlePassword={this.handlePassword} />
        {dboard}
      </React.Fragment>
    );
  }
}

export default App;
