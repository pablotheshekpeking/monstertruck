'use client'

import React from "react";
import { Stack, Box, Text, Heading } from "@chakra-ui/react";
import Link from 'next/link';
const Footer = () => {
    return (
        <Stack
            color={'white'}
            direction={['column', 'column', 'row', 'row']}
            bg={'#241F21'}
            w={'100%'}
            pr={'50px'}
            pl={'50px'}
            justify={'center'}
        >
            <Box><Link href={'../'}><Heading fontWeight={'bolder'} p={'20px'} size={'md'}>Monster Trucks</Heading></Link></Box>
            <Box>
                <Stack direction={'row'}>
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
                </Stack>
            </Box>
        </Stack>
    );
}

export default Footer;