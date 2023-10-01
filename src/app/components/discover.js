'use client'

import React from "react";
import { Stack, Box, Text, Heading, Img } from "@chakra-ui/react";
const Discover = () => {
    return ( 
        <Stack pt={'50px'} pb={'50px'}>
            <Heading textAlign={'center'} pb={'50px'}>Discover why we are the future of transportation</Heading>
            <Stack direction={'row'} m={'auto'} pb={'50px'}>
                <Box><Img src='/125.png' /></Box>
                <Box><Img src='/5M.png' /></Box>
                <Box><Img src='/0-Emission.png' /></Box>
            </Stack>
        </Stack>
     );
}
 
export default Discover;