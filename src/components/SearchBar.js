import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions/index';

const SearchBar = props => (
	<div className="search-bar col-md-12">
		<input
			placeholder="Search"
			type="text"
			onChange={ e => props.searchVideos(e.target.value) } />
	</div>
);

const mapDispatchToProps = dispatch => {
	return {
		searchVideos: (term) => dispatch(actions.searchVideos(term))
	}
};

export default connect(null, mapDispatchToProps)(SearchBar);
