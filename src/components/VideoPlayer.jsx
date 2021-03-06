import exampleVideoData from '/src/data/exampleVideoData.js';

var VideoPlayer = (props) => {
  var domain = 'https://www.youtube.com/embed/';
  var vidId = props.video.id.videoId;
  
  if (props) {
    return (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={domain + vidId} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{props.video.snippet.title}</h3>
          <div>{props.video.snippet.description}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={domain + exampleVideoData[0].id.videoId} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{exampleVideoData[0].snippet.title}</h3>
          <div>{exampleVideoData[0].snippet.description}</div>
        </div>
      </div>
    );
  }
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
