import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";

// Images imports
import FrontEnd from "../../../assets/images/front-end.png";
import BackEnd from "../../../assets/images/back-end.png";

export const Choice = () => {
  return (
    <Box marginTop="4rem">
      <Heading color="purple.900" fontStyle="italic">
        São muitas linguagens, e agora?
      </Heading>
      <Text
        marginTop="4rem"
        fontSize="22px"
        textAlign="center"
        color="purple.800"
      >
        Calma, de novo kkkkkkk. Antes de escolher uma linguagem e se aprofundar
        nos estudos, vamos lembrar que:
      </Text>
      <OrderedList
        marginTop="2rem"
        fontSize="22px"
        textAlign="center"
        fontWeight="semibold"
        color="purple.800"
      >
        <ListItem>
          Existem muitas áreas na tecnologia, não apenas programação. Dê uma
          pesquisada sobre e veja qual chama mais chama sua atenção0.
        </ListItem>
        <ListItem>
          Existem 2 stacks principais: Front-end e Back-end. Escolha alguma das
          duas antes de procurar as linguagens.
          <br />
          <br />
        </ListItem>
      </OrderedList>
      <Text
        marginTop="2rem"
        fontSize="18px"
        textAlign="center"
        color="purple.800"
        textDecoration="underline"
        maxW="70%"
        margin="auto"
      >
        *Não necessariamente essa stack vai ser definitiva, mas é preciso tentar
        alguma pra escolher a que mais se identifica*
      </Text>

      <Grid
        gridTemplateColumns="1fr 1fr"
        marginTop="4rem"
        fontSize="22px"
        textAlign="center"
        fontWeight="semibold"
        color="purple.800"
        gap={10}
      >
        <GridItem dir="column">
          <Image boxSize="8rem" src={FrontEnd} margin="auto" />
          <Text marginTop="1rem" fontWeight="semibold" fontSize="32px">
            Front-end
          </Text>
          <Text marginTop="2rem">
            É o responsável por toda a estrutura, design, conteúdo,
            comportamento, desempenho e capacidade de resposta de um site ou
            aplicação, ou seja, tudo o que é apresentado aos usuários para
            interação.
          </Text>
        </GridItem>
        <GridItem dir="column">
          <Image boxSize="8rem" src={BackEnd} margin="auto" />
          <Text marginTop="1rem" fontWeight="semibold" fontSize="32px">
            Back-end
          </Text>
          <Text marginTop="2rem">
            É responsável pelo servidor, banco de dados e aplicação, ou seja,
            construir e manter esses componentes juntos para que as informações
            sejam organizadas e armazenadas corretamente, o que permite que uma
            página funcione bem, e se mantenha no ar.
          </Text>
        </GridItem>
      </Grid>

      <Text
        marginTop="2rem"
        fontSize="22px"
        textAlign="center"
        fontWeight="semibold"
        fontStyle="italic"
        color="purple.800"
      >
        Use um Roadmap! É um ótimo guia para se utilizar após ter escolhido uma
        stack e uma linguagem.
      </Text>
      <Text
        marginTop="2rem"
        fontSize="22px"
        textAlign="center"
        color="purple.800"
        fontStyle="italic"
        onClick={() => window.open("https://roadmap.sh/", "_blank")}
      >
        https://roadmap.sh/
      </Text>
      <Text
        fontSize="22px"
        textAlign="end"
        fontWeight="semibold"
        color="purple.400"
      >
        (Tem exemplos excelentes para diversas áreas)
      </Text>
    </Box>
  );
};
