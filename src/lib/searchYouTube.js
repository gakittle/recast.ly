var searchYouTube = (options, callback) => {
  return (
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        q: options.query,
        maxResults: options.max,
        key: options.key,
        part: 'snippet',
        type: 'video',
        videoEmbeddable: 'true'
      },
      type: 'GET',
      contentType: 'application/json',
      success: (data) => {
        callback(data.items);
      },
      error: (error) => { console.log('error: unsuccessful search', error); }
    })
  );
};

export default searchYouTube;
