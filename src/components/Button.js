import React from 'react';

class Button extends React.Component {
	render() {
		return (
			<div>
				<button onClick={ this.props.handleIncrement }>Click to Increment</button>
			</div>
		);
	}
}

export default Button;