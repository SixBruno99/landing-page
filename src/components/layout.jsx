import { Box, Flex } from "@chakra-ui/react";

// Components
import { Footer } from "./footer";
import { Header } from "./header";
import { Profile } from "./profile";
import { Presentation } from "./sections/presentation";
import { Start } from "./sections/start";
import { Choice } from "./sections/choice";

export const Layout = () => {
  return (
    <Flex flexDir="column" justifyContent="space-between" minH="100vh">
      <Header />
      <Box w="90%" margin="auto">
        <Profile />
        <Box margin="auto" h="2px" w="50%" bg="#2A2F4F" marginTop="2rem"></Box>
      </Box>
      <Box w="90%" margin="auto">
        <Presentation />
        <Start />
        <Choice />
      </Box>
      <Footer />
    </Flex>
  );
};
