import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

// Images imports
import Exemple1 from "../../../assets/images/exemple1.jpg";
import Exemple2 from "../../../assets/images/exemple2.jpg";

export const Start = () => {
  const [isLargerThan624] = useMediaQuery("(min-width: 624px)");

  return (
    <Box marginTop="4rem">
      <Heading color="purple.900" fontStyle="italic">
        Por onde começo?
      </Heading>
      <Text
        marginTop="4rem"
        fontSize={isLargerThan624 ? "22px" : "20px"}
        textAlign="center"
        color="purple.800"
        fontWeight="500"
        px="1rem"
      >
        Provavelmente, se você escolheu essa área, já deve ter visto alguns
        vídeos de faculdades a se fazer, ou sobre o mercado de trabalho e a
        grande quantidade de vagas que a tecnologia oferece. Mas calma! Um passo
        de cada vez. Antes de escolher por onde iniciar os estudos, é
        interessante entender a base da computação:
        <Text fontWeight="bold">a lógica.</Text>
        <br />
        Quando eu estava no ensino médio e comecei a cogitar a ideia de ir para
        a tecnologia, achava tudo muito interessante e grandioso e fiquei muito
        empolgada com o tanto de informação que achava, mas percebi que não
        conhecia exatamente do que se tratava o princípio fundamental:{" "}
        <p style={{ fontWeight: "bold" }}>Lógica de programação.</p>
      </Text>
      <Text
        marginTop="2rem"
        fontSize="18px"
        textAlign="end"
        color="purple.800"
        textDecoration="underline"
      >
        Organizar as ideias de
        <br />
        forma lógica e coesa a<br />
        fim de se resolver um
        <br />
        problema/situação.
      </Text>
      <Text
        marginTop="2rem"
        fontSize={isLargerThan624 ? "22px" : "20px"}
        textAlign="center"
        color="purple.800"
        fontWeight="500"
      >
        Trouxe alguns exemplos de informações gratuitas:
      </Text>
      <Flex marginTop="2rem" flexDir="column" gap={10}>
        <Image src={Exemple1} />
        <Image src={Exemple2} />
      </Flex>
      <Text
        marginTop="2rem"
        fontSize={isLargerThan624 ? "22px" : "20px"}
        textAlign="center"
        color="purple.800"
        onClick={() =>
          window.open(
            "https://kenzie.com.br/blog/logica-de-programacao/",
            "_blank"
          )
        }
      >
        https://kenzie.com.br/blog/logica-de-programacao/
      </Text>
    </Box>
  );
};
