import React, { Component } from 'react';

class SimpleText extends Component {

	constructor(props) {
	super(props)

	this.state={
		username:''
	}
}

	handleUsername = (event) => {
		this.setState({
			username:event.target.value
					
		})
	}

	handleSubmit = (event) => {
		if(!this.state.username)
					{
						alert(`Please enter name`)
					}
					else{
						alert(`Welcome ${this.state.username}`)
					}
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Username</label>
					<input type='text' value={this.state.username} onChange={this.handleUsername} />
					
				</div>
				
					<button type="submit">Submit</button>
				</form>
		);
	}
}

export default SimpleText;