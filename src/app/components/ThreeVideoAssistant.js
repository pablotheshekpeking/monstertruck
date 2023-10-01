import React, { useRef, useMemo } from 'react';
import { useFrame, extend, Canvas } from 'react-three-fiber';
import * as THREE from 'three';

// Import necessary components for WebGL2Renderer
import { WebGLMultisampleRenderTarget } from 'three/examples/jsm/webgl/WebGLMultisampleRenderTarget.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { CopyShader } from 'three/examples/jsm/shaders/CopyShader.js';

extend({ EffectComposer, RenderPass, ShaderPass });

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
