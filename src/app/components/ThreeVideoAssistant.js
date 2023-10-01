// components/ThreeVideoAssistant.js
import React, { useRef, useMemo } from 'react';
import { useFrame } from 'react-three-fiber';
import * as THREE from 'three';

function ThreeVideoAssistant({ showVideo }) {
  const videoRef = useRef();

  // Create a texture from a video element
  const videoTexture = useMemo(() => {
    const texture = new THREE.VideoTexture(videoRef.current);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBAFormat;
    return texture;
  }, []);

  useFrame(() => {
    if (showVideo) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  });

  return (
    <mesh>
      <planeBufferGeometry args={[16, 9]} />
      <meshBasicMaterial map={videoTexture} />
    </mesh>
  );
}

export default ThreeVideoAssistant;
