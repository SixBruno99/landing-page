import { Flex } from "@chakra-ui/react";

// Components
import { Footer } from "./footer";
import { Header } from "./header/indes";

export const Layout = () => {
  return (
    <Flex flexDir="column" justifyContent="space-between" minH="100vh">
      <Header />
      <Footer />
    </Flex>
  );
};
