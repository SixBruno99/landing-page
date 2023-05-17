import { Box, Image, Text } from "@chakra-ui/react";

import Emoji from "../../assets/images/emoji.png";

export const Footer = () => {
  return (
    <Box marginTop="4rem">
      <Image margin="auto" src={Emoji} />
      <Box
        height="300px"
        bg="#12152B"
        justifyContent="center"
        display="flex"
        alignItems="center"
        borderRadius="120px 120px 0 0"
        boxShadow="rgba(0, 0, 0, 0.3) 10px -10px 20px"
      >
        <Text
          fontSize="48px"
          fontWeight="bold"
          textAlign="center"
          w="500px"
          bgGradient="linear-gradient(to right, #4AC7FA, #E649F5)"
          bgClip="text"
        >
          Obrigada!
        </Text>
      </Box>
    </Box>
  );
};
