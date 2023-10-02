// components/VideoPlayer.js
import React, { useRef, useEffect } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const playPromise = videoRef.current.play();

    if (playPromise !== undefined) {
      playPromise.then(_ => {
        // Autoplay started
      }).catch(error => {
        // Autoplay failed, you can try to start the video manually on user interaction
        // videoRef.current.play();
      });
    }
  }, []);

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        src="/assistant.mov" // Replace with the path to your video file
        autoPlay
        playsInline // Required for autoplay on some devices
        onEnded={handleVideoEnded} // Pause the video when it ends
        controls // Show video controls
        style={{
          position: 'fixed',
          bottom: '0',
          left: '5px',
          width: '200px', // Set the desired width
          zIndex: '9999', // Adjust the z-index to be above other content
        }}
      />
      <style jsx>{`
        /* Customize the appearance of video controls */
        video::-webkit-media-controls-panel {
          display: flex;
          justify-content: center;
          background: transparent;
          color: transparent;
        }
        video::-webkit-media-controls-play-button {
          display: initial; /* Show only the play button */
        }
        /* Hide other controls */
        video::-webkit-media-controls-current-time-display,
        video::-webkit-media-controls-time-remaining-display,
        video::-webkit-media-controls-mute-button,
        video::-webkit-media-controls-volume-slider {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default VideoPlayer;
