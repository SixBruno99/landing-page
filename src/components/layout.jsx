import { Box, Flex } from "@chakra-ui/react";

// Components
import { Footer } from "./footer";
import { Header } from "./header";
import { Profile } from "./profile";

export const Layout = () => {
  return (
    <Flex flexDir="column" justifyContent="space-between" minH="100vh">
      <Header />
      <Box>
        <Profile />
        <Box margin="auto" h="2px" w="50%" bg="#2A2F4F" marginTop="2rem"></Box>
      </Box>
      <Footer />
    </Flex>
  );
};
