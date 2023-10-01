'use client'

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import Hero from './components/hero';
import Discover from './components/discover';
import Hero2 from './components/hero2';
import Footer from './components/footer';
import Footer2 from './components/footer2';

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Hero />

        <Discover />

        <Hero2 />

        <Footer />
        <Footer2 />
      </ChakraProvider>
    </CacheProvider>
  );
}
