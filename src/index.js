import React from 'react';
import ReactDOM from 'react-dom';

import GOOGLE_API_KEY from './api/google-api-key';
import SearchBar from './components/SearchBar';

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('.container'));
