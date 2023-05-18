import { Box, Heading, ListItem, Text, UnorderedList, useMediaQuery } from "@chakra-ui/react";

export const Tips = () => {
  const [isLargerThan624] = useMediaQuery("(min-width: 624px)");

  return (
    <Box marginTop="4rem">
      <Heading color="purple.900" fontStyle="italic" maxW="90%">
        Dicas que aprendi ao longo da jornada:
      </Heading>
      <UnorderedList marginTop="4rem">
        <ListItem fontSize={isLargerThan624 ? "22px" : "20px"} mx="2rem" color="purple.900" fontWeight="500">
          Não tente ver tudo ao mesmo tempo, escolher uma
          <br /> área pra focar mais e procurar aprender a base daquilo
          <br /> até passar para um próximo assunto;
          <br />
          <br />
        </ListItem>
        <ListItem fontSize={isLargerThan624 ? "22px" : "20px"} mx="2rem" color="purple.900" fontWeight="500">
          Trabalhar no Networking: ir em palestras e eventos de
          <br /> tecnologia, fazer conexões nas redes sociais(Linkedin,
          <br /> Instagram), procurar estar acompanhando as notícias e<br />{" "}
          comunidades;
          <br />
          <br />
        </ListItem>
        <ListItem fontSize={isLargerThan624 ? "22px" : "20px"} mx="2rem" color="purple.900" fontWeight="500">
          Não investir em cursos muito caros até ter certeza que
          <br /> aquilo te interessa.
        </ListItem>
      </UnorderedList>

      <Box marginX="auto" h="2px" w="60%" bg="#2A2F4F" marginY="8rem"></Box>

      <Text
        marginTop="4rem"
        fontSize={isLargerThan624 ? "22px" : "20px"}
        textAlign="center"
        color="purple.900"
        fontWeight="500"
        px="1rem"
      >
        Espero que tenha conseguido agregar com a minha jornada
        <br />
        até aqui. Estou em processo de aprendizado também e<br />
        acredito que essa troca seja vantajosa para todos.
      </Text>
      <Text
        marginTop="2rem"
        fontSize="22px"
        fontStyle="italic"
        textAlign="end"
        color="purple.900"
        px={isLargerThan624 ? "4rem" : "2rem"}
      >
        Att, Letícia Baldin
      </Text>
    </Box>
  );
};
