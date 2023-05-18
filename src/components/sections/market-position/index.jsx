import {
  Box,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
  useMediaQuery,
} from "@chakra-ui/react";

// Images imports
import Linkedin from "../../../assets/images/linkedin.png";
import LinkedinProfile from "../../../assets/images/linkedin-profile.png";
import CurriculumExemple from "../../../assets/images/curriculum-exemple.png";

export const MarketPosition = () => {
  const [isLargerThan624] = useMediaQuery("(min-width: 624px)");

  return (
    <Box marginTop="4rem">
      <Heading color="purple.900" fontStyle="italic" maxW="90%">
        Como melhoro o meu posicionamento no mercado?
      </Heading>
      <UnorderedList>
        <ListItem
          marginTop="4rem"
          fontSize={isLargerThan624 ? "22px" : "18x"}
          mx="2rem"
          color="purple.900"
          fontWeight="500"
        >
          Entenda que conhecimento técnico não é tudo. As habilidades
          comportamentais e a forma como você mostra sua imagem também é muito
          importante.
        </ListItem>
      </UnorderedList>

      <Box w={isLargerThan624 ? "80%" : "90%"} margin="auto">
        <Flex marginTop={isLargerThan624 ? "2rem" : "1rem"}>
          <Image boxSize="4rem" src={Linkedin} />
          <Text
            marginLeft={isLargerThan624 ? "1.5rem" : "0.5rem"}
            fontSize={isLargerThan624 ? "22px" : "18px"}
            textAlign="center"
            fontWeight="bold"
            fontStyle="italic"
            color="purple.800"
          >
            Monte um perfil profissional e direto no seu Linkedin!
          </Text>
        </Flex>
        <Image marginTop="1rem" w="100%" src={LinkedinProfile} />
      </Box>
      <Text
        marginTop={isLargerThan624 ? "4rem" : "2rem"}
        fontSize={isLargerThan624 ? "22px" : "18px"}
        textAlign="center"
        color="purple.800"
        fontWeight="500"
        px="1rem"
      >
        Coloque suas stacks e conhecimento da área de uma forma
        <br />
        direta. Faça uma apresentação boa sobre o seu perfil também,
        <br />
        isso ajuda a dar uma cara profissional para o perfil.
      </Text>
      <Text
        px="2rem"
        marginTop="2rem"
        fontSize={isLargerThan624 ? "22px" : "20px"}
        fontWeight="bold"
        fontStyle="italic"
        textAlign={isLargerThan624 ? "start" : "center"}
        color="purple.800"
      >
        Invista no seu currículo também.
      </Text>

      <Box
        display={isLargerThan624 ? "flex" : ""}
        marginTop="1rem"
        justifyContent="space-around"
      >
        <Image margin={isLargerThan624 ? "" : "auto"} marginTop={isLargerThan624 ? "" : "1rem"} objectFit="contain" src={CurriculumExemple} />

        <Text
          fontSize="18px"
          fontWeight="500"
          textAlign="center"
          color="purple.900"
          px="1rem"
          marginTop={isLargerThan624 ? "" : "1rem"}
        >
          Quando iniciei na área, não tinha nenhuma
          <br />
          experiência profissional para colocar. Então
          <br />
          busquei cursos extras, no youtube, em
          <br />
          plataformas como Alura, Udemy e os extra
          <br />
          curriculares da faculdade também.
          <br />
          Agregar o currículo é muito importante para que
          <br />
          os recrutadores vejam que está se esforçando e
          <br />
          buscando conhecimento por fora. Também
          <br />
          participei de projetos voluntários que me
          <br />
          ajudaram nisso.
        </Text>
      </Box>
      <Text
        marginTop="2rem"
        fontSize="19px"
        fontWeight="500"
        fontStyle="italic"
        textAlign="center"
        color="purple.900"
        px="2rem"
      >
        Mas cuidado com a quantidade de informações. É bom ser direto e claro
        <br />
        ao que se relaciona com o objetivo da vaga. Caso já tenha experiência em
        <br />
        alguma outra área, descreva suas atividades de forma mais específica e
        <br />
        tente ligar os pontos. Ex: Trabalhava com atendimento ao cliente, então
        <br />
        desenvolvi capacidade de comunicação, trabalho em equipe...
      </Text>
    </Box>
  );
};
