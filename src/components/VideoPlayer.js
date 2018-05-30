import React , {Component} from 'react';

class VideoPlayer extends Component {
    render(){
        const video = this.props.video;
        if(!video){
            return <div>Loading</div>
        }
        const videoId = video.id.videoId;
        const url = `https://www.youtube.com/embed/${videoId}`;
        return (
            <div id='VideoPlayer' className="video-detail col-md-8">
                <div className = "embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url}></iframe>
                </div>
                <div className = "details">
                    <div className="details-title">||{video.snippet.title}||</div>
                    <div className="details-description">{video.snippet.description}</div>
                </div>
            </div>
        )
    }
}

export default VideoPlayer;