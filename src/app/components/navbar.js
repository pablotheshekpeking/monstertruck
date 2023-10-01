'use client'

import React, { useState } from 'react';
import {
    Stack,
    Box,
    Text,
    Heading,
    Img,
    Button,
    Hide,
    Tooltip,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    useDisclosure,
} from '@chakra-ui/react';
import { CiLocationOn } from 'react-icons/ci'
import Link from 'next/link';

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
            <Text
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                cursor="pointer"
            >
                {children}
            </Text>
        </Tooltip>
    );
};

const Navbar = () => {
    const videoUrl = '/location.mov';
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <Stack
            color={'white'}
            direction={'row'}
            bg={'#241F21'}
            w={'100%'}
            pr={'50px'}
            pl={'50px'}
            justify={'center'}
        >
            <Box>
                <Link href={'../'}><Heading fontWeight={'bolder'} p={'20px'} size={'md'}>Monster Trucks</Heading></Link>
            </Box>
            <Box
                display={['block', 'block', 'none', 'none']} // Hide on larger screens
                ref={btnRef}
                onClick={onOpen}
                cursor="pointer"
                p={'20px'}
            >
                ☰
            </Box>
            {/* Mobile Drawer */}
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay>
                    <DrawerContent bg="#3d3d50" color="white">
                        <DrawerCloseButton color="white" />
                        <DrawerHeader borderBottomWidth="1px" color="white">
                            Monster Trucks
                        </DrawerHeader>
                        <DrawerBody>
                            <Link href={'../'}>
                                <Box
                                    _hover={{ backgroundColor: 'red' }}
                                    onClick={onClose}
                                    cursor="pointer"
                                >
                                    <Text p={'20px'}>PRODUCTS & SERVICES</Text>
                                </Box>
                            </Link>
                            <Link href={'../'}>
                                <Box
                                    _hover={{ backgroundColor: 'red' }}
                                    onClick={onClose}
                                    cursor="pointer"
                                >
                                    <Text p={'20px'}>ABOUT</Text>
                                </Box>
                            </Link>
                            <Link href={'../'}>
                                <Box
                                    _hover={{ backgroundColor: 'red' }}
                                    onClick={onClose}
                                    cursor="pointer"
                                >
                                    <Text p={'20px'}>CONTACT</Text>
                                </Box>
                            </Link>
                            <Link href={'../'}>
                                <Box
                                    _hover={{ backgroundColor: 'red' }}
                                    onClick={onClose}
                                    cursor="pointer"
                                >
                                    <Text p={'20px'}>PRESS & EVENTS</Text>
                                </Box>
                            </Link>
                            <Link href={'../'}>
                                <Box
                                    _hover={{ backgroundColor: 'red' }}
                                    onClick={onClose}
                                    cursor="pointer"
                                >
                                    <Text p={'20px'}><CiLocationOn /> FIND A DEALER</Text>
                                </Box>
                            </Link>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
            {/* Desktop Links */}
            <Hide below='lg'>
                <Link href={'../'}>
                    <Box _hover={{ backgroundColor: 'red' }}>
                        <Text p={'20px'}>PRODUCTS & SERVICES</Text>
                    </Box>
                </Link>
                <Link href={'../'}>
                    <Box _hover={{ backgroundColor: 'red' }}>
                        <Text p={'20px'}>ABOUT</Text>
                    </Box>
                </Link>
                <Link href={'../'}>
                    <Box _hover={{ backgroundColor: 'red' }}>
                        <Text p={'20px'}>CONTACT</Text>
                    </Box>
                </Link>
                <Link href={'../'}>
                    <Box _hover={{ backgroundColor: 'red' }}>
                        <Text p={'20px'}>PRESS & EVENTS</Text>
                    </Box>
                </Link>
                <Link href={'../'}>
                    <Box _hover={{ backgroundColor: 'red' }}>
                    <VideoTooltip videoUrl={videoUrl}><Text p={'20px'}><CiLocationOn />FIND A DEALER</Text></VideoTooltip>
                    </Box>
                </Link>
            </Hide>
        </Stack>
    );
};

export default Navbar;
