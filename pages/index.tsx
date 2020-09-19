import React from 'react';
import { Button, Flex, Grid, Heading, Link, Text, useToast, InputGroup, InputRightElement, Icon } from '@chakra-ui/core'
import Divider from '../components/Divider'
import Input from '../components/Input'
import Nav from '../components/Nav'

export default function Home() {
  const toast = useToast();

  const [show, setShow] = React.useState(false);
  const handleClickShowPassword = () => setShow(!show);

  return (
    <Grid
    backgroundColor="#0054f3"
      as="main"
      height="100vh"
      templateColumns=" 1fr 400px"
      templateRows="1fr"
      templateAreas="
    'logo form'
    'logo form'
    'logo form'
    "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDir="column" alignItems="center" >
        {/* <img src="./METABLUE.gif" width="500px" alt="Logo-image" /> */}
        <video id="videoBG" autoPlay muted loop>
          <source src="./BLU.mp4" type="video/mp4" />
        </video>
      </Flex>
      <Flex
        gridArea="form"
        height="100%"
        flexDir="column"
        alignItems="stretch"
        backgroundColor="gray.700"
        padding={16}
        // style={{
        //   background: "linear-gradient(180deg, #f7efd2 0%, #0054f3 100%)"
        // }}
      >
        <Input
          placeholder="Email"
          autoComplete="off"
        />
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Senha"
            marginTop={2}
            autoComplete="off"
          />
          <InputRightElement width="3.5rem">
            <Button 
            h="1.75rem" 
            size="sm" 
            top={3} 
            onClick={handleClickShowPassword} 
            backgroundColor="gray.800">
              {show ? <Icon name="view-off" /> : <Icon name="view" />}
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
            backgroundColor="gray.800"
            _hover={{ backgroundColor: 'gray.600' }}
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
