'use client'

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import Hero from './components/hero';
import Discover from './components/discover';

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Hero />

        <Discover />
      </ChakraProvider>
    </CacheProvider>
  );
}
