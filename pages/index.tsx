import { Button, Flex, Grid, Heading, Link, Text } from '@chakra-ui/core'
import Divider from '../components/Divider'
import Input from '../components/Input'

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
    '. . . .'
    '. logo form .'
    '. . . .'
    "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDir="column" alignItems="center">
        <img src="/salesforce.svg" width="150px" alt="Logo" />
        <Heading
          size="2xl"
          lineHeight="shorter"
          marginTop={16}
        >
          Your text here!
        </Heading>
      </Flex>

      <Flex
        gridArea="form"
        height="100%"
        flexDir="column"
        alignItems="stretch"
        backgroundColor="gray.700"
        borderRadius="sm"
        padding={16}
      >
        <Input
          placeholder="Email"
          autoComplete="off"
          defaultValue=""
        />

        <Input
          type="password"
          placeholder="Senha"
          marginTop={2}
          autoComplete="off"
          defaultValue=""
        />

        <Link
          alignSelf="flex-start"
          marginTop={2}
          fontSize="sm"
          color="blue.400"
          fontWeight="bold"
          _hover={{ color: 'blue.300' }}
        >
          Esqueceu sua senha?
          </Link>

        <Button
          marginTop={6}
          backgroundColor="blue.400"
          _hover={{ backgroundColor: 'blue.300' }}
          borderRadius="sm"
          height="50px"
        >
          Entrar
          </Button>

        <Text
          textAlign="center"
          fontSize="sm"
          color="gray.300"
          marginTop={6}
        >
          Não tem uma conta? {" "}
          <Link
            color="blue.400"
            fontWeight="bold"
            _hover={{ color: 'blue.300' }}
          >
            Registre-se
 </Link>
        </Text>
        <Divider />

        <Flex alignItems="center">
          <Text fontSize="sm" color="white">
            Ou entre com
          </Text>

          <Button
            height="50px"
            flex="1"
            background="gray.600"
            _hover={{ backgroundColor: 'blue.500' }}
            marginLeft={6}
            borderRadius="sm"
          >
            Github
          </Button>
        </Flex>
      </Flex>
    </Grid>
  )
}
