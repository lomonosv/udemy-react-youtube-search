import React, { Component } from 'react';

class SearchBar extends Component {
	state = {
		term: ''
	};

	handleInputChange = (e) => {
		this.setState({
			term: e.target.value
		});
	};

	render() {
		return (
			<div>
				<input
					type="text"
					value={ this.state.term }
					onChange={ this.handleInputChange } />
				<p>{ this.state.term }</p>
			</div>
		);
	}
}

export default SearchBar;
