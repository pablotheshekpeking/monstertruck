'use client'

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './components/dummy';
import Navbar from './components/navbar';

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Navbar />
        <Home />
      </ChakraProvider>
    </CacheProvider>
  );
}
