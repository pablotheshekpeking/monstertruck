'use client'

import React, { useState } from 'react';
import {
  Stack,
  Box,
  Text,
  Heading,
  Img,
  Button,
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
      direction={['column', 'column', 'row', 'row']}
      bg={'#3d3d50'}
      w={'100%'}
      pr={'50px'}
      pl={'50px'}
      justify={'center'}
    >
      <Box>
        <Img />
      </Box>
      <Box
        display={['block', 'block', 'none', 'none']} // Hide on larger screens
        ref={btnRef}
        onClick={onOpen}
        cursor="pointer"
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
          <DrawerContent bg="#3d3d50">
            <DrawerCloseButton color="white" />
            <DrawerHeader borderBottomWidth="1px" color="white">
              Menu
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
    </Stack>
  );
};

export default Navbar;
