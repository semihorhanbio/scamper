const Video = ({ videoId }) => {
  const youtubeIframeURL = `https://www.youtube.com/embed/${videoId}?controls=1&autoplay=${0}`;

  return (
    <iframe
      className='rounded-xl mt-4 px-2 w-1/2 h-96'
      title='YouTube video player'
      width='460'
      height='315'
      src={youtubeIframeURL}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    ></iframe>
  );
};

export default Video;
