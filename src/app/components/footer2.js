'use client'

import React from "react";
import { Stack, Box, Text } from "@chakra-ui/react";
const Footer2 = () => {
    return ( 
        <Stack direction={'row'} justify={'center'} bg={'#3D3D3D'} p={'10px'}>
            <Text>Terms of Use</Text>
            <Text>Privacy Statement</Text>
            <Text>Cookies Statement</Text>
            <Text>© 2023 MFTBC. All rights reserved. MONSTER is a Daimler Truck Group Brand.</Text>
        </Stack>
     );
}
 
export default Footer2;