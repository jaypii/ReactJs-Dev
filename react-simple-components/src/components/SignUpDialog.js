import React, { Component } from 'react';


function FancyBorder(props) {
   return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
         {props.children}
      </div>
   );
}

function Dialog(props) {
   return (
     <FancyBorder color="blue">
       <h1 className="Dialog-title">
         {props.title}
       </h1>
       <p className="Dialog-message">
         {props.message}
       </p>
       {props.children}
     </FancyBorder>
   );
 }
 
 class SignUpDialog extends Component {
   constructor(props) {
     super(props);
     this.handleChange = this.handleChange.bind(this);
     this.handleSignUp = this.handleSignUp.bind(this);
     this.state = {login: ''};
   }
 
   render() {
     return (
       <Dialog title="Mars Exploration Program"
               message="How should we refer to you?">
         <input value={this.state.login}
                className="form-control"
                onChange={this.handleChange} /><br/>
         <button onClick={this.handleSignUp} className="btn btn-primary">
           Sign Me Up!
         </button>
       </Dialog>
     );
   }
 
   handleChange(e) {
     this.setState({login: e.target.value});
   }
 
   handleSignUp() {
     alert(`Welcome aboard, ${this.state.login}!`);
   }
 }

 export default SignUpDialog