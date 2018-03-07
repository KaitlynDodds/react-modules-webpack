import React from 'react';
import { hot } from 'react-hot-loader'

// styles 
import styles from '../css/app.css';

// components 
import Button from './Button.js';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}

		this.handleIncrement = this.handleIncrement.bind(this);
	}

	handleIncrement() {
		let c = this.state.count;
		c += 1;
		this.setState({
			count: c
		});
	}

	render() {
		return (
			<div className={styles.wrapper}>
				<h1>This is a React App</h1>
				<h3>{this.state.count}</h3>
				<Button handleIncrement={this.handleIncrement} />
			</div>
		);
	}
}

export default hot(module)(App);