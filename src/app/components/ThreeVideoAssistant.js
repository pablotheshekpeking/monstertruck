import React, { useRef, useMemo } from 'react';
import { useFrame } from 'react-three-fiber';
import * as THREE from 'three';

function ThreeVideoAssistant({ showVideo }) {
  const videoRef = useRef();

  // Check if WebGL 2 is supported
  const isWebGL2Available = (() => {
    try {
      const canvas = document.createElement('canvas');
      return !!(
        window.WebGL2RenderingContext &&
        canvas.getContext('webgl2')
      );
    } catch (e) {
      return false;
    }
  })();

  // Create a WebGLRenderer instance based on availability
  const renderer = useMemo(() => {
    if (isWebGL2Available) {
      return new THREE.WebGLRenderer({ antialias: true });
    } else {
      // Fallback to WebGL 1 if WebGL 2 is not available
      return new THREE.WebGLRenderer({ antialias: true });
    }
  }, [isWebGL2Available]);

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
    <>
      {isWebGL2Available ? (
        // Use WebGL 2 renderer
        <mesh>
          <planeBufferGeometry args={[16, 9]} />
          <meshBasicMaterial map={videoTexture} />
        </mesh>
      ) : (
        // Use WebGL 1 renderer
        <mesh>
          <planeGeometry args={[16, 9]} />
          <meshBasicMaterial map={videoTexture} />
        </mesh>
      )}
    </>
  );
}

export default ThreeVideoAssistant;
