import React, { Component } from "react";


function UserGreeting(props) {
    return( 
      <div className="uk-alert-primary uk-padding-small uk-margin-top uk-alert">
        Welcome back!
      </div>
    );
};

function GuestGreeting(props) {
    return( 
      <div className="uk-alert-warning uk-padding-small uk-margin-top uk-alert">
        Please sign up.
      </div>
    );
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
        <button className="uk-button uk-button-default" onClick={props.onClick}>Login</button>
    );
};

function LogoutButton(props) {
    return (
        <button className="uk-button uk-button-default" onClick={props.onClick}>
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