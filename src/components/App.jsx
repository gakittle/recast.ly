import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: exampleVideoData,
      player: exampleVideoData[0],
    };
  }
  
  onTitleClick(video) {
    this.setState({
      player: video
    });
  }

  onSearchInput(query) {
    var options = {
      query: query,
      max: 5,
      key: YOUTUBE_API_KEY,
    };

    this.props.searchYouTube(options, this.setFirstVideos.bind(this));
  }

  setFirstVideos(videos) {
    this.setState({
      list: videos,
      player: videos[0],
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onInput={this.onSearchInput.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.player}/>
          </div>
          <div className="col-md-5">
            <VideoList onClick={this.onTitleClick.bind(this)} videos={this.state.list}/>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    var options = {
      query: 'puppies',
      max: 5,
      key: YOUTUBE_API_KEY,
    };

    this.props.searchYouTube(options, this.setFirstVideos.bind(this));
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
