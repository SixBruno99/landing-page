import { Box, Text, useMediaQuery } from "@chakra-ui/react";

export const Header = () => {
  const [isLargerThan624] = useMediaQuery("(min-width: 624px)");

  return (
    <Box
      borderRadius={isLargerThan624 ? "0 0 120px 120px" : "0 0 90px 90px"}
      height={isLargerThan624 ? "300px" : "250px"}
      boxShadow="rgba(0, 0, 0, 0.3) 0px 10px 20px"
      justifyContent="center"
      marginBottom="4rem"
      alignItems="center"
      display="flex"
      bg="#12152B"
    >
      <Text
        bgGradient="linear-gradient(to right, #4AC7FA, #E649F5)"
        fontSize={isLargerThan624 ? "48px" : "32px"}
        textAlign="center"
        fontWeight="bold"
        bgClip="text"
        w="500px"
        px={isLargerThan624 ? "0" : "2rem"}
      >
        MANUAL DE DICAS PARA INICIANTES
      </Text>
    </Box>
  );
};
