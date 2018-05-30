import React, {Component} from 'react';

class VideoPlayerListItems extends Component {
    render(){
        let video = this.props.video;
        return (
            <li onClick={ ()=> this.props.onVideoSelect(video)}  className="list-group-item">
                <div className="video-list media">
                    <div className = "media-left">
                        <img className = "media-object" src={video.snippet.thumbnails.default.url} />
                    </div>
                    <div className = "media-body">
                        <div className = "media-heading">
                            {video.snippet.title}
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default VideoPlayerListItems;