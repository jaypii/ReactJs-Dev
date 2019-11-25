import React, { Component } from "react";


function UserGreeting(props) {
    return <div className="alert alert-info mt-2">Welcome back!</div>
};

function GuestGreeting(props) {
    return <div className="alert alert-warning mt-2">Please sign up.</div>
};

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />
    }
    return <GuestGreeting />
};

function LoginButton(props) {
    return(
        <button className="btn btn-primary" onClick={props.onClick}>Login</button>
    );
};

function LogoutButton(props) {
    return (
        <button className="btn btn-primary" onClick={props.onClick}>
            Logout
        </button>
    );  
};

class LoginControl extends Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    };

    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
  
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />
      }
  
      return (
        <div>
          {button}
          <Greeting isLoggedIn={isLoggedIn} />
        </div>
      );
    }
  }

  export default LoginControl;