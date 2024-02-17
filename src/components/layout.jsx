import { Box, Flex } from "@chakra-ui/react";

// Components
import { Footer } from "./footer";
import { Header } from "./header";
import { Profile } from "./profile";
import { Presentation } from "./sections/presentation";
import { Start } from "./sections/start";
import { Choice } from "./sections/choice";
import { Portifolio } from "./sections/portfolio";
import { MarketPosition } from "./sections/market-position";
import { Tips } from "./sections/tips";

export const Layout = () => {
  return (
    <Flex flexDir="column" justifyContent="space-between" minH="100vh">
      <Header />
      <Box w="90%" margin="auto">
        <Profile
          name="LETÍCIA BALDIN GALVANI"
          photo="https://github.com/leticiabaldin.png"
          instagram="lletcode"
          instagramLink="https://www.instagram.com/lletcode/"
        />
        {/* <Profile
          name="FERNANDA KIPPER"
          photo="https://avatars.githubusercontent.com/u/61896274?v=4"
          instagram="kipper.dev"
          instagramLink="https://www.instagram.com/kipper.dev/"
        /> */}
        <Box margin="auto" h="2px" w="50%" bg="#2A2F4F" marginTop="2rem"></Box>
      </Box>
      <Box w="90%" margin="auto">
        <Presentation />
        <Start />
        <Choice />
        <Portifolio />
        <MarketPosition />
        <Tips />
      </Box>
      <Footer />
    </Flex>
  );
};
