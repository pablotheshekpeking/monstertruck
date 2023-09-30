'use client'

import React from 'react';
import { Stack, Box, Text, Heading, Img } from '@chakra-ui/react';
import Link from 'next/link';

const Navbar = () => {
    return ( 
        <Stack direction={['column', 'column', 'row', 'row']} bg={'#3d3d50'} w={'100%'} pr={'50px'} pl={'50px'} pt={'20px'} pb={'20px'} justify={'center'}>
            <Box><Img /></Box>
            <Link href={'../'}><Box _hover={{ backgroundColor: 'red',}}><Text>PRODUCTS & SERVICES</Text></Box></Link>
            <Link href={'../'}><Box _hover={{ backgroundColor: 'red',}}><Text>ABOUT</Text></Box></Link>
            <Link href={'../'}><Box _hover={{ backgroundColor: 'red',}}><Text>CONTACT</Text></Box></Link>
            <Link href={'../'}><Box _hover={{ backgroundColor: 'red',}}><Text>PRESS & EVENTS</Text></Box></Link>
            <Link href={'../'}><Box _hover={{ backgroundColor: 'red',}}><Text>FIND A DEALER</Text></Box></Link>
        </Stack> 
     );
}
 
export default Navbar;