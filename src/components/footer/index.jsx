import { Box, Image, Text, useMediaQuery } from "@chakra-ui/react";

import Emoji from "../../assets/images/emoji.png";

export const Footer = () => {
  const [isLargerThan624] = useMediaQuery("(min-width: 624px)");

  return (
    <Box marginTop="4rem">
      <Image
        boxSize={isLargerThan624 ? "" : "6rem"}
        objectFit="scale-down"
        margin="auto"
        src={Emoji}
      />
      <Box
        borderRadius={isLargerThan624 ? "120px 120px 0 0" : "90px 90px 0 0"}
        height={isLargerThan624 ? "300px" : "250px"}
        boxShadow="rgba(0, 0, 0, 0.3) 10px -10px 20px"
        justifyContent="center"
        alignItems="center"
        display="flex"
        bg="#12152B"
      >
        <Text
          fontSize={isLargerThan624 ? "48px" : "36px"}
          bgGradient="linear-gradient(to right, #4AC7FA, #E649F5)"
          textAlign="center"
          fontWeight="bold"
          bgClip="text"
          w="500px"
          px="2rem"
        >
          Obrigada!
        </Text>
      </Box>
    </Box>
  );
};
