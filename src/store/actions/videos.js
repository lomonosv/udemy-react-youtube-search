import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import * as actionTypes from './actionTypes';
import { GOOGLE_API_KEY } from '../../api/google-api-key';

const searchVideosSuccess = (videos) => {
	return {
		type: actionTypes.SEARCH_VIDEOS,
		videos: videos
	};
};

const searchVideosInternal = _.debounce((dispatch, term) => {
	YTSearch({
		key: GOOGLE_API_KEY,
		term: term
	}, videos => dispatch(searchVideosSuccess(videos)));
}, 300);

export const searchVideos = (term) => {
	return dispatch => {
		searchVideosInternal(dispatch, term);
	};
};

export const selectVideo = (video) => {
	return {
		type: actionTypes.SELECT_VIDEO,
		selectedVideo: video
	};
};
