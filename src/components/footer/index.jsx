import { Box, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      height="300px"
      bg="#12152B"
      justifyContent="center"
      display="flex"
      alignItems="center"
      borderRadius="120px 120px 0 0"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 20px"
      marginTop="4rem"
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
  );
};
