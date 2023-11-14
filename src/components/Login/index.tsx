import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';

import { VscEye, VscEyeClosed } from 'react-icons/vsc';

import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { Logo } from '../Logo';

export default function Login() {
  const [showRepeatedPassword, setShowRepeatedPassword] = React.useState(false);

  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const onSubmit = handleSubmit(async (data) => {
    if (!data.password || !data.repeatedPassword) {
      return toast({
        description: 'Preencha todos os campos',
        status: 'error',
        duration: 3000,
      });
    }

    setIsLoading(true);
    // Submit the form data to the API
  });

  return (
    <Box
      w="100%"
      minHeight="100vh"
      bg="brand.800"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        maxW={['90%', '90%', '90%', '90%', '620px']}
        boxSizing="border-box"
        px={['5%', '5%', '5%', '5%', 24]}
        py={['20%', '20%', 150]}
      >
        <Logo />
        <Heading
          textAlign="center"
          size="md"
          color="white"
          fontSize="32px"
          fontWeight="semibold"
          mt={38}
        >
          Login
        </Heading>

        <form onSubmit={onSubmit}>
          <Stack gap={1}>
            <Text mt="18" fontWeight="Bold" color="white">
              Usuário
            </Text>
            <Input
              {...register('password')}
              size="lg"
              placeholder="Digite seu usuário"
              borderColor="transparent"
              borderRadius="8px"
              bg="brandDark.600"
              color="Black"
              _placeholder={{ color: 'brandDark.400' }}
              focusBorderColor="brandPink.600"
            />

            <Flex
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mt="18"
            >
              <Text fontWeight="bold" color="white">
                Senha
              </Text>
              <Link href="/" color="white" fontWeight="bold">
                Esqueceu sua senha?
              </Link>
            </Flex>

            <InputGroup>
              <Input
                {...register('repeatedPassword')}
                size="lg"
                placeholder="Digite sua senha"
                borderColor="transparent"
                borderRadius="8px"
                bg="brandDark.600"
                color="Black"
                width="400px"
                type={showRepeatedPassword ? 'text' : 'password'}
                _placeholder={{ color: 'brandDark.400' }}
                focusBorderColor="brandPink.600"
              />

              <InputRightElement mt="5px" mr={3}>
                <IconButton
                  colorScheme="black"
                  _hover={{ bg: 'transparent' }}
                  onClick={() => setShowRepeatedPassword(!showRepeatedPassword)}
                  aria-label={
                    showRepeatedPassword ? 'Ocultar senha' : 'Mostrar senha'
                  }
                  icon={
                    showRepeatedPassword ? (
                      <Icon boxSize={7} as={VscEyeClosed} color="black" />
                    ) : (
                      <Icon boxSize={7} as={VscEye} color="black" />
                    )
                  }
                />
              </InputRightElement>
            </InputGroup>

            <Button
              size="lg"
              isLoading={isLoading}
              type="submit"
              color="White"
              bg="brandPink.500"
              mt={26}
              _hover={{ bg: 'brandPink.400' }}
            >
              Login
            </Button>
            <Link
              href="/"
              color="white"
              fontWeight="bold"
              textAlign="center"
              mt={2}
            >
              Criar conta
            </Link>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}
