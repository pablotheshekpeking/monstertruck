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
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <Stack
            color={'white'}
            direction={'row'}
            bg={'#3d3d50'}
            w={'100%'}
            pr={'50px'}
            pl={'50px'}
            justify={'center'}
        >
            <Box>
                <Img w={'100%'} h={'auto'} src='https://media.istockphoto.com/id/1252703616/photo/monster-truck.jpg?s=612x612&w=0&k=20&c=k3tT3tVygsZWdU-AemqBCoHGO7GnfUyy98QJIKXtg3Q=' />
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
                                    <Text p={'20px'}>FIND A DEALER</Text>
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
                        <Text p={'20px'}>FIND A DEALER</Text>
                    </Box>
                </Link>
            </Hide>
        </Stack>
    );
};

export default Navbar;
