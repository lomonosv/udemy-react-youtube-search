import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions/index';
import VideoListItem from './VideoListItem';

const VideoList = props => {
	const videoItems = props.videos.map(video =>
		<VideoListItem
			onVideoSelect={ props.selectVideo }
			key={ video.etag }
			video={ video } />
	);

	return (
		<ul className="col-md-4 list-group">
			{ videoItems }
		</ul>
	);
};


const mapStateToProps = state => {
	return {
		videos: state.videos
	};
};

const mapDispatchToProps = dispatch => {
	return {
		selectVideo: (video) => dispatch(actions.selectVideo(video))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
