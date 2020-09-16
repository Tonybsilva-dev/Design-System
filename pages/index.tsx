import React from 'react';
import { Button, Flex, Grid, Heading, Link, Text, useToast, InputGroup, InputRightElement, Icon } from '@chakra-ui/core'
import Divider from '../components/Divider'
import Input from '../components/Input'
import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function Home() {
  const toast = useToast();

  const [show, setShow] = React.useState(false);
  const handleClickShowPassword = () => setShow(!show);

  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 400px 400px 1fr"
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
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Senha"
            marginTop={2}
            autoComplete="off"
            defaultValue=""
          />
          <InputRightElement width="3.5rem">
            <Button h="1.75rem" size="sm" top={3} onClick={handleClickShowPassword} backgroundColor="gray.800">
              {show ? <Icon name="view-off" /> :  <Icon name="view" />}
            </Button>
          </InputRightElement>
        </InputGroup>

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
          onClick={() =>
            toast({
              title: "Feito!",
              description: "Login realizado com sucesso!",
              status: "success",
              position: "top",
              duration: 1500,
              isClosable: true,
            })}
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
