'use client'

import React from 'react';
import { Stack, Box, Text, Heading, Img } from '@chakra-ui/react';

const Navbar = () => {
    return ( 
        <Stack direction={['column', 'column', 'row', 'row']} bg={'#3d3d50'} w={'100%'} pr={'50px'} pl={'50px'} pt={'20px'} pb={'20px'}>
            <Box><Img /></Box>
            <Box _hover={{ backgroundColor: 'red',}}><Text>PRODUCTS & SERVICES</Text></Box>
            <Box _hover={{ backgroundColor: 'red',}}><Text>ABOUT</Text></Box>
            <Box _hover={{ backgroundColor: 'red',}}><Text>CONTACT</Text></Box>
            <Box _hover={{ backgroundColor: 'red',}}><Text>PRESS & EVENTS</Text></Box>
            <Box _hover={{ backgroundColor: 'red',}}><Text>FIND A DEALER</Text></Box>
        </Stack>
     );
}
 
export default Navbar;