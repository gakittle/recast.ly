var searchYouTube = (options, callback) => {
  return ($.get('https://www.googleapis.com/youtube/v3/search', {q: options.query, maxResults: options.max, key: options.key, part: 'snippet', videoEmbeddable: 'true'})
  );
};

export default searchYouTube;
