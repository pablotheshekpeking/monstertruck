'use client'

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import Hero from './components/hero';

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Hero />
      </ChakraProvider>
    </CacheProvider>
  );
}
