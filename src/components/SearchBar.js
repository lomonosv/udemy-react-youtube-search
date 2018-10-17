import React, { Component } from 'react';

class SearchBar extends Component {
	state = {
		term: ''
	};

	handleInputChange = (e) => {
		this.setState({
			term: e.target.value
		});
		this.props.onSearchTermChange(e.target.value);
	};

	render() {
		return (
			<div className="search-bar col-md-12">
				<input
					placeholder="Search"
					type="text"
					value={ this.state.term }
					onChange={ this.handleInputChange } />
			</div>
		);
	}
}

export default SearchBar;
