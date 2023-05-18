import { Box, Heading, Text, useMediaQuery } from "@chakra-ui/react";

export const Presentation = () => {
  const [isLargerThan624] = useMediaQuery('(min-width: 624px)')

  return (
    <Box marginTop="4rem">
      <Heading color="purple.900" fontStyle="italic">
        Apresentação
      </Heading>
      <Text
        marginTop="4rem"
        fontSize={isLargerThan624 ? "22px" : "20px"}
        textAlign="center"
        color="purple.800"
        fontWeight="500"
        px="1rem"
      >
        Oi pessoal!
        <br /> Sou a Letícia, tenho 19 anos e faz cerca de 2 anos que resolvi
        entrar no mundo da tecnologia. Estou cursando Ciência da Computação, fiz
        1 ano de estágio e atualmente trabalho como Dev Front-End na
        Coopersystem. Durante minha trajetória, descobri que a tecnologia pode
        ser um mundo intimidador para os iniciantes. Os conceitos complexos, as
        diferentes linguagens de programação e a grande quantidade de
        informações disponíveis podem parecer desesperadoras. Por isso, resolvi
        compartilhar um pouquinho do meu percurso até aqui, e contar as
        experiências que ocorreram nesse processo. Acredito que aprender com os
        erros e os acertos de outras pessoas pode encurtar o caminho. Portanto,
        reuni no manual algumas estratégias e lições que aprendi. O objetivo é
        incentivar e auxiliar quem está entrando agora nesse universo gigante,
        pois sei que é literalmente um mundo de coisas e dá uma sensação de
        angústia nesse início.
        <br />
        <br /> Estou ansiosa para compartilhar com vocês todas as dicas e
        insights que reuni ao longo desse período.
        <br />
        <br />
        <Text fontWeight="bold">Espero que gostem!</Text>
      </Text>
    </Box>
  );
};
