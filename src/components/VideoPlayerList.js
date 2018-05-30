import React, {Component} from 'react';
import VideoPlayerListItems from './VideoPlayerListItems';

class VideoPlayerList extends Component {
    render(){
        let videos = this.props.videos.map((video, i)=>{
            return <VideoPlayerListItems onVideoSelect={this.props.onVideoSelect} video={video} key={i} id = {video.etag} />
        })
        return (
            <div id='VideoPlayerList'>
                <ul className="col-md-4 list-group">
                {videos}
                </ul>
            </div>
        )
    }
}

export default VideoPlayerList