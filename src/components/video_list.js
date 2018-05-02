import React from 'react'
import VideoListItem from './video_list_item'

const videoList = (props) => {
	
	return(
		<ul className = "col-md-4 "list-group>
			{props.videos.map((video) => 
				<VideoListItem key={video.etag} video = {video} onVideoSelect={props.onVideoSelect}/>
			)}
		</ul>
	)	
}
export default videoList;