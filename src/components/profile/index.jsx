import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";

// Instagram Logo import
import Logo from "../../assets/logo-instageam.jpg";

export const Profile = () => {
  return (
    <Flex justifyContent="center">
        <Avatar
          size="2xl"
          name="Letícia Baldin"
          bg="purple.700"
          color="white"
          src="https://github.com/leticiabaldin.png"
        />
        <Box paddingLeft="3rem">
          <Text fontSize="32px" fontWeight="semibold" color="purple.800">
            LETÍCIA BALDIN GALVANI
          </Text>
          <Text fontSize="20px" fontWeight="semibold" color="purple.900">
            Graduanda de Ciência da Computação | Dev Front-End Jr.
          </Text>
          <Flex alignItems="center">
            <Image borderRadius="full" boxSize="32px" src={Logo} />
            <Text
              fontSize="20px"
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
