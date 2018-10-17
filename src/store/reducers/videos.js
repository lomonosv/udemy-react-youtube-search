import * as actionTypes from '../actions/actionTypes';

const initialState = {
	videos: [],
	selectedVideo: null
};

const searchVideos = (state, action) => {
	return {
		...state,
		videos: action.videos,
		selectedVideo: action.videos[0]
	};
};

const selectVideo = (state, action) => {
	return {
		...state,
		selectedVideo: action.selectedVideo
	};
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SEARCH_VIDEOS:
			return searchVideos(state, action);
		case actionTypes.SELECT_VIDEO:
			return selectVideo(state, action);
		default:
			return state;
	}
};

export default reducer;
