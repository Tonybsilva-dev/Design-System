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
    backgroundColor="#133B5C"
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
        <img src="./TonySilva.png" width="100%" height="100%" alt="Logo-image" />
        {/* <video id="videoBG" autoPlay muted loop>
          <source src="./BLU.mp4" type="video/mp4" />
        </video> */}
      </Flex>
      <Flex
        justifyContent="center"
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
            backgroundColor="2D4059">
              {show ? <Icon name="view-off" /> : <Icon name="view" />}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Link
          alignSelf="flex-start"
          marginTop={2}
          fontSize="sm"
          color="#2D4059"
          fontWeight="bold"
          _hover={{ color: '#DECDC3' }}
        >
          Esqueceu sua senha?
          </Link>

        <Button
          marginTop={6}
          backgroundColor="#133B5C"
          _hover={{ backgroundColor: '#b0978f' }}
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
            color="#2D4059"
            fontWeight="bold"
            _hover={{ color: '#DECDC3' }}
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
            backgroundColor="#2D4059"
            _hover={{ backgroundColor: '#b0978f' }}
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
