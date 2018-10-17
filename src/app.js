import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './store/actions/index';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

class App extends Component {
	componentDidMount() {
		this.props.searchVideos('');
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail />
				<VideoList />
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		searchVideos: (term) => dispatch(actions.searchVideos(term))
	}
};

export default connect(null, mapDispatchToProps)(App);
