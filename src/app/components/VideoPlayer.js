// components/VideoPlayer.js
import React, { useState, useEffect } from 'react';

const VideoPlayer = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById('videoPlayer');

    const handleVideoEnd = () => {
      setVideoEnded(true);
    };

    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, []);

  return (
    <video
      id="videoPlayer"
      src="/location.mov" // Replace with the path to your video file
      autoPlay={!videoEnded}
      loop={!videoEnded}
      muted
      style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '200px', // Set the desired width
        zIndex: '9999', // Adjust the z-index to be above other content
        display: videoEnded ? 'none' : 'block',
      }}
    />
  );
};

export default VideoPlayer;
