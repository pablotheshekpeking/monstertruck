// components/VideoAssistant.js
'use client'
import React, { useState } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const VideoAssistant = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
      transition={{ duration: 0.3 }}
    >
      <Box
        position="fixed"
        bottom="20px"
        left="20px"
        width="240px"
        bg="rgba(0, 0, 0, 0.7)"
        borderRadius="8px"
        padding="10px"
        color="white"
        display={isVisible ? "block" : "none"}
      >
        <Heading fontSize="xl">Video Assistant</Heading>
        <p>Click to toggle visibility</p>
      </Box>
      <Button
        position="fixed"
        bottom="20px"
        left="20px"
        background="transparent"
        border="none"
        color="black"
        cursor="pointer"
        onClick={toggleVisibility}
      >
        Toggle
      </Button>
    </motion.div>
  );
};

export default VideoAssistant;
