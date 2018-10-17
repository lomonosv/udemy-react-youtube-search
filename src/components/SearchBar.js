import React, { Component } from 'react';

class SearchBar extends Component {
	state = {
		value: ''
	};

	handleInputChange = (e) => {
		this.setState({
			value: e.target.value
		});
	};

	render() {
		return (
			<div>
				<input type="text" value={ this.state.value } onChange={ this.handleInputChange } />
				<p>{ this.state.value }</p>
			</div>
		);
	}
}

export default SearchBar;
