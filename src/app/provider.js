'use client'

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './components/dummy';
import Navbar from './components/navbar';
import Hero from './components/hero';

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Navbar />
        <Hero />
        <Home />
      </ChakraProvider>
    </CacheProvider>
  );
}
