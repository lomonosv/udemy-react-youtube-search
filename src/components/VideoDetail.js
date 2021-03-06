import React from 'react';
import { connect } from 'react-redux';

const VideoDetail = ({ video }) => {
	if (!video) {
		return (
			<div className="loading-video-detail col-md-8">
				<div>Loading...</div>
			</div>
		);
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={ url }></iframe>
			</div>
			<div className="details">
				<div className="title">{ video.snippet.title }</div>
				<div className="description">{ video.snippet.description }</div>
			</div>
		</div>
	)
};

const mapStateToProps = state => {
	return {
		video: state.selectedVideo
	};
};

export default connect(mapStateToProps, null)(VideoDetail);
