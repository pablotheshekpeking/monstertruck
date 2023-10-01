import React, { useState } from 'react';
import {
    Stack,
    Box,
    Text,
    Heading,
    Button,
    Tooltip,
} from '@chakra-ui/react';

const VideoTooltip = ({ children, videoUrl }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <Tooltip
            label={
                <Box>
                    <video
                        src={videoUrl}
                        autoPlay
                        loop
                        style={{ width: '100%', maxWidth: '300px' }}
                    />
                </Box>
            }
            isOpen={showTooltip}
            placement="top"
            hasArrow
            p={'20px'}
        >
            <Button
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                cursor="pointer"
                bg={'white'}
                m={'auto'}
                _hover={{ background: '#DE522E', color: 'white', }}
            >
                {children}
            </Button>
        </Tooltip>
    );
};

const Hero2 = () => {
    const videoUrl = '/readmorevid.mov'; // Replace with the actual video URL

    return (
        <Stack
            minH={'100vh'}
            backgroundImage={
                'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://wallpaperset.com/w/full/0/3/e/542840.jpg)'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
            color={'white'}
            justify={'center'}
        >
            <Box m={'auto'}>
                <Stack direction={'column'} m={'auto'} textAlign={'center'}>
                    <Box pt={'20px'}>
                        <Heading>Inspired by sustainability</Heading>
                    </Box>
                    <Box>
                        <Text pb={'50px'} pt={'50px'}>
                        Inspired to create a new benchmark for Class 4-5 trucks, 
                        we are proud to introduce a purely electric truck that is safe, reliable and efficient.
                        </Text>
                        <VideoTooltip videoUrl={videoUrl}>
                            <Button
                                pr={'50px'}
                                pl={'50px'}
                                pt={'20px'}
                                pb={'20px'}
                                fontWeight={'bold'}
                                bg={'white'}
                                m={'auto'}
                                color={'#DE522E'}
                                _hover={{ background: '#DE522E', color: 'white', }}
                            >
                                DISCOVER OUR STORY
                            </Button>
                        </VideoTooltip>
                    </Box>
                </Stack>
            </Box>
        </Stack>
    );
};

export default Hero2;
