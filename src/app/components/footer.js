'use client'

import React from "react";
import { Stack, Box, Text } from "@chakra-ui/react";
import Link from 'next/link';
const Footer = () => {
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
            <Box><Link href={'../'}><Heading fontWeight={'bolder'} p={'20px'} size={'md'}>Monster Trucks</Heading></Link></Box>
            <Box>
            <Link href={'../'}>
                    <Box _hover={{ color: 'black' }}>
                        <Text p={'20px'}>PRODUCTS & SERVICES</Text>
                    </Box>
                </Link>
                <Link href={'../'}>
                    <Box _hover={{ color: 'black' }}>
                        <Text p={'20px'}>ABOUT</Text>
                    </Box>
                </Link>
                <Link href={'../'}>
                    <Box _hover={{ color: 'black' }}>
                        <Text p={'20px'}>CONTACT</Text>
                    </Box>
                </Link>
                <Link href={'../'}>
                    <Box _hover={{ color: 'black' }}>
                        <Text p={'20px'}>PRESS & EVENTS</Text>
                    </Box>
                </Link>
                <Link href={'../'}>
                    <Box _hover={{ color: 'black' }}>
                    <VideoTooltip videoUrl={videoUrl}><Text p={'20px'}>FIND A DEALER</Text></VideoTooltip>
                    </Box>
                </Link>
            </Box>
        </Stack>
     );
}
 
export default Footer;