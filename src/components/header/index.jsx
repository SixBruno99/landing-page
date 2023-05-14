import { Box, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box
      height="300px"
      bg="#2A2F4F"
      justifyContent="center"
      display="flex"
      alignItems="center"
      borderRadius="0 0 120px 120px"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 20px"
      marginBottom="4rem"
    >
      <Text
        fontSize="48px"
        fontWeight="bold"
        textAlign="center"
        w="500px"
        bgGradient="linear-gradient(to right, #0098db, #afbbf2,	#b498d4, #ca25e1)"
        bgClip="text"
      >
        MANUAL DE DICAS PARA INICIANTES
      </Text>
    </Box>
  );
};
