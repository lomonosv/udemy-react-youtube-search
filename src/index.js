import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import { GOOGLE_API_KEY } from './api/google-api-key';
import SearchBar from './components/SearchBar';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({
			key: GOOGLE_API_KEY,
			term: 'surfboards'
		}, videos => this.setState({ videos }));
	}

	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
