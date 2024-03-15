const Video = ({ videoId, autoplay }) => {
  const youtubeIframeURL = `https://www.youtube.com/embed/${videoId}?controls=1&autoplay=${autoplay}`;

  return (
    <iframe
      className='rounded-xl mt-4 px-2 w-full h-96'
      title='YouTube video player'
      src={youtubeIframeURL}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    ></iframe>
  );
};

export default Video;
