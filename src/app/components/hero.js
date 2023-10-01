'use client'

// components/Hero.js
import React, { useState } from 'react';
import {
    Stack,
    Box,
    Text,
    Heading,
    Img,
    Button,
} from '@chakra-ui/react';
import Navbar from './navbar';
import { Canvas } from 'react-three-fiber'; // Import Canvas from react-three-fiber
import ThreeVideoAssistant from './ThreeVideoAssistant';

const Hero = () => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <Stack
            minH={'100vh'}
            backgroundImage={
                'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://media.istockphoto.com/id/1252703616/photo/monster-truck.jpg?s=612x612&w=0&k=20&c=k3tT3tVygsZWdU-AemqBCoHGO7GnfUyy98QJIKXtg3Q=)'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
            color={'white'}
        >
            <Navbar />
            <Box m={'auto'}>
                {/* Your existing content */}
                {/* ... */}
                <Button
                    pr={'50px'}
                    pl={'50px'}
                    pt={'20px'}
                    pb={'20px'}
                    fontWeight={'bold'}
                    bg={'#DE522E'}
                    color={'white'}
                    onMouseEnter={() => setShowVideo(true)}
                    onMouseLeave={() => setShowVideo(false)}
                >
                    READ MORE
                </Button>
                <Canvas
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: showVideo ? 1 : -1 }}
                >
                    {showVideo && <ThreeVideoAssistant showVideo={showVideo} />}
                </Canvas>
            </Box>
            {/* Video Element */}
            <video
                src="/vid1.webm" // Adjust the path to your video file
                autoPlay
                loop
                muted
                style={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    zIndex: showVideo ? -1 : 1, // Make sure the video is behind the 3D assistant
                    display: showVideo ? 'none' : 'block', // Hide the video when the assistant is active
                }}
            />
        </Stack>
    );
};

export default Hero;
