'use client'

import React from "react";
import { Stack, Box, Text } from "@chakra-ui/react";
const Footer2 = () => {
    return ( 
        <Stack direction={'row'} justify={'center'} bg={'#3D3D3D'} p={'10px'} color={'#E7DFCC'} fontSize={['8px', '8px', '15px', '15px']}>
            <Text cursor={'pointer'} _hover={{ color: 'black', }}>Terms of Use</Text>
            <Text cursor={'pointer'} _hover={{ color: 'black', }}>Privacy Statement</Text>
            <Text cursor={'pointer'} _hover={{ color: 'black', }}>Cookies Statement</Text>
            <Text>© 2023 MFTBC. All rights reserved. MONSTER is a Daimler Truck Group Brand.</Text>
        </Stack>
     );
}
 
export default Footer2;