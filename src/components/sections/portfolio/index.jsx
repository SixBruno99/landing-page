import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

// Images imports
import GitHub from "../../../assets/images/github-logo.png";
import Git from "../../../assets/images/git-logo.png";
import PortifolioImage from "../../../assets/images/portifolio.png";

export const Portifolio = () => {
  return (
    <Box marginTop="4rem">
      <Heading color="purple.900" fontStyle="italic" maxW="90%">
        Estou estudando mas sinto que não estou evoluindo, o que faço?
      </Heading>
      <Text
        marginTop="4rem"
        fontSize="22px"
        textAlign="center"
        color="purple.800"
        fontWeight="500"
        px="1rem"
      >
        O treino é a melhor ferramenta pra isso! Faça projetos pessoais,
        paralelos aos cursos que estiver fazendo. O aprendizado na prática
        costuma ajudar bastante.
      </Text>
      <Flex>
        <Image boxSize="8rem" objectFit="contain" src={GitHub} />
        <Box>
          <Text
            marginTop="2rem"
            fontSize="22px"
            textAlign="center"
            fontWeight="bold"
            fontStyle="italic"
            color="purple.800"
          >
            Monte um portfólio e suba seus projetos no GitHub!
          </Text>
          <Text
            marginTop="1rem"
            fontSize="22px"
            textAlign="center"
            fontWeight="500"
            fontStyle="italic"
            color="purple.800"
            onClick={() => window.open("https://github.com/", "_blank")}
          >
            https://github.com/
          </Text>
        </Box>
      </Flex>
      <Text
        marginTop="4rem"
        fontSize="22px"
        textAlign="center"
        color="purple.800"
        fontWeight="500"
        px="1rem"
      >
        Além dessa prática te auxiliar com recrutadores e clientes, vai te
        ajudar a ver de forma nítida a sua evolução.
        <br />
        É extremamente satisfatório ver seus projetos antigos depois de um
        tempo, você consegue perceber o tanto que melhorou e exatamente o ponto
        de onde começou.
        <br />
        Não tenha vergonha dos seus trabalhos iniciais, ou pensem que são muito
        ”simples”, garanto que no futuro vai ser muito interessante passar por
        eles, e é uma forma de deixar o processo mais visível também!
        <br />
      </Text>
      <Image boxSize="6rem" objectFit="contain" src={Git} />
      <Text
        fontSize="20px"
        fontStyle="italic"
        textAlign="center"
        color="purple.800"
        px="2rem"
      >
        Para subir seus projetos no Github, é necessário usar os comandos do
        <br />
        Git, uma ferramenta de versionamento de código. É interessante
        <br />
        buscar tutoriais inicias pra entender como funciona e os comandos
        <br />
        principais para aplicar nos seus projetos. É muito vantajoso ter uma
        <br /> boa noção de Git, já que é utilizado pela maioria das empresas de
        TI.
      </Text>
      <Text
        marginTop="0.5rem"
        fontSize="22px"
        fontWeight="600"
        color="purple.800"
        px="2rem"
      >
        OU
      </Text>
      <Text
        fontSize="22px"
        fontWeight="500"
        textAlign="center"
        color="purple.800"
        px="2rem"
      >
        Crie um portfólio para treinar a linguagem que você está estudando
        naquele momento(principalmente se for Front-end)
      </Text>
      <Flex marginTop="2rem">
        <Text fontSize="22px" fontWeight="600" color="purple.800" px="2rem">
          Exemplo:
        </Text>
        <Image marginLeft="16" objectFit="scale-down" src={PortifolioImage} />
      </Flex>
    </Box>
  );
};
