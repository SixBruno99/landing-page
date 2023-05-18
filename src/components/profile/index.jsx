import { Avatar, Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";

// Instagram Logo import
import Logo from "../../assets/logo-instageam.jpg";

export const Profile = () => {

  const [isLargerThan624] = useMediaQuery('(min-width: 624px)')

  return (
    <Flex justifyContent="center">
      <Flex alignItems="center">

        <Avatar
        
        size={isLargerThan624 ? "2xl" : "xl"}
        name="Letícia Baldin"
        bg="purple.700"
        color="white"
        src="https://github.com/leticiabaldin.png"
        />
        </Flex>
        <Box paddingLeft={isLargerThan624 ? "3rem" : "0.75rem"}>
          <Text fontSize={isLargerThan624 ? "32px" : "24px"} fontWeight="semibold" color="purple.900">
            LETÍCIA BALDIN GALVANI
          </Text>
          <Text fontSize={isLargerThan624 ? "20px" : "16px"} marginTop="0.5rem" fontWeight="semibold" color="purple.900">
            Graduanda de Ciência da Computação | Dev Front-End Jr.
          </Text>
          <Flex alignItems="center" marginTop="0.5rem">
            <Image borderRadius="full" boxSize="32px" src={Logo} />
            <Text
              fontSize={isLargerThan624 ? "20px" : "14px"}
              fontWeight="bold"
              color="purple.900"
              paddingLeft="0.5rem"
            >
              Instagram: @lletcode
            </Text>
          </Flex>
        </Box>
    </Flex>
  );
};
