import React, {Component} from 'react';
import _ from 'lodash';
import SearchBar from './SearchBar';
import VideoPlayerList from './VideoPlayerList';
import VideoPlayer  from './VideoPlayer' ;
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyB98DWWFNSA1FZNvn6CyZkk1o0SA-9KBG8';

class App extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSearch("alan walker");
        
    }
    videoSearch(searchTerm) {
        YTSearch({ key: API_KEY, term: searchTerm }, videos => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        })
        console.log(searchTerm);
    }
    render(){
        const videoSearch = _.debounce( (term) => {this.videoSearch(term)}, 500)
        return (
            <div id='App'>
                <SearchBar onSearchTermChange= {videoSearch} />
                <div>
                <VideoPlayer video = {this.state.selectedVideo} />
                <VideoPlayerList onVideoSelect = {selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
                </div>
            </div>
        )
    }
}

export default App;


