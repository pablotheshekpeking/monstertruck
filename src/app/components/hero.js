'use client'

import React, { useState } from 'react';
import {
  Stack,
  Box,
  Text,
  Heading,
  Button,
  Tooltip, // Import Tooltip
} from '@chakra-ui/react';
import Navbar from './navbar';

const Hero = () => {
  const [showTooltip, setShowTooltip] = useState(false);

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
        <Stack direction={'column'}>
          <Box>
            <Stack direction={'row'}>
              <Box
                borderRight={'1px solid'}
                borderColor={'#dddddd'}
                pr={'10px'}
                fontWeight={'bold'}
              >
                <Text>Monster Trucks</Text>
              </Box>
              <Box>
                <Text>Heavy Duty</Text>
              </Box>
            </Stack>
          </Box>
          <Box pt={'20px'}>
            <Heading>MONSTER Truck. Bringing chaos to the streets.</Heading>
          </Box>
          <Box>
            <Text pb={'20px'} pt={'20px'}>
              The brand that will make your transition to noise successful.
              Our trucks and services are built from REAL MONSTER experience.
            </Text>
            <Tooltip // Add Tooltip component
              label="Click to learn more" // Tooltip content
              isOpen={showTooltip} // Show the tooltip when hovering
              placement="top"
            >
              <Button
                pr={'50px'}
                pl={'50px'}
                pt={'20px'}
                pb={'20px'}
                fontWeight={'bold'}
                bg={'#DE522E'}
                color={'white'}
                onMouseEnter={() => setShowTooltip(true)} // Show the tooltip on hover
                onMouseLeave={() => setShowTooltip(false)} // Hide the tooltip on hover out
              >
                READ MORE
              </Button>
            </Tooltip>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Hero;
