// components/VideoPlayer.js
import React, { useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <video
      ref={videoRef}
      src="/assistant.mov" // Replace with the path to your video file
      autoPlay
      controls
      loop={handleVideoEnded}
      onEnded={handleVideoEnded} // Pause the video when it ends
      style={{
        position: 'fixed',
        bottom: '0',
        left: '5px',
        width: '200px', // Set the desired width
        zIndex: '9999', // Adjust the z-index to be above other content
      }}
    />
  );
};

export default VideoPlayer;
