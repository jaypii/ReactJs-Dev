import { h, render, Component } from 'preact';
import style from './style';
import Clock from '../../components/Clock';

export default class Home extends Component {
	// Initialise our state. For now we only store the input value
	state = { value: '', name: 'world' }
 
	onInput = ev => {
	  // This will schedule a state update. Once updated the component
	  // will automatically re-render itself.
	  this.setState({ value: ev.target.value });
	}

	// Add a submit handler that updates the `name` with the latest input value
	onSubmit = () => {
		this.setState({ name: this.state.value });
	 }
 
	render() {
	  return (
		 <div>
			<h1>Hello, {this.state.name}!</h1>
			<form onSubmit={this.onSubmit}>
			  <input type="text" value={this.state.value} onInput={this.onInput} />
			  <button type="submit">Update</button>
			</form>
			<Clock />
		 </div>
	  );
	}
}