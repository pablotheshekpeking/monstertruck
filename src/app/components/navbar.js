'use client'

import React from 'react';
import { Stack, Box, Text, Heading, Img } from '@chakra-ui/react';
import Link from 'next/link';

const Navbar = () => {
    return ( 
        <Stack color={'white'} direction={['column', 'column', 'row', 'row']} bg={'#3d3d50'} w={'100%'} pr={'50px'} pl={'50px'} pt={'20px'} pb={'20px'} justify={'center'}>
            <Box><Img /></Box>
            <Link href={'../'}><Box _hover={{ backgroundColor: 'red',}}><Text p={'20px'}>PRODUCTS & SERVICES</Text></Box></Link>
            <Link href={'../'}><Box _hover={{ backgroundColor: 'red',}}><Text p={'20px'}>ABOUT</Text></Box></Link>
            <Link href={'../'}><Box _hover={{ backgroundColor: 'red',}}><Text p={'20px'}>CONTACT</Text></Box></Link>
            <Link href={'../'}><Box _hover={{ backgroundColor: 'red',}}><Text p={'20px'}>PRESS & EVENTS</Text></Box></Link>
            <Link href={'../'}><Box _hover={{ backgroundColor: 'red',}}><Text p={'20px'}>FIND A DEALER</Text></Box></Link>
        </Stack> 
     );
}
 
export default Navbar;