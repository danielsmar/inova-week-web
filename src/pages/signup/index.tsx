import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  Text,
  useBoolean,
  useBreakpointValue,
  Link,
  useToast,
} from '@chakra-ui/react';

import { useForm } from 'react-hook-form';

import { CgChevronRight } from 'react-icons/cg';

type SignUpFormData = {
  name: string;
  lastName: string;
  registration: string;
  phone: string;
  email: string;
  password: string;
};

export default function SignUp() {
  const { register, handleSubmit } = useForm<SignUpFormData>();
  const [termsCheck, setTermsCheck] = useBoolean();
  const [isSubmitting, setIsSubmitting] = useBoolean();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const toast = useToast();
  const colSpan = isMobile ? 2 : 1;

  const onSubmit = async () => {
    setIsSubmitting.on();

    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ data: { success: true } });
        }, 2000);
      });

      toast({
        title: 'Concluído!',
        description: 'Cadastro finalizado com sucesso.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Erro!',
        description: 'Ocorreu um erro ao se cadastrar. Tente novamente.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting.off();
    }
  };

  return (
    <Box h="100vh" w="100%" bg="brand.800">
      <Box p={8} margin="auto" maxW="500px">
        <Heading textAlign="center" size="lg" color="white">
          Criar Conta
        </Heading>

        <Box mt={4}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <SimpleGrid columnGap={3} rowGap={4} columns={2}>
              <GridItem colSpan={colSpan}>
                <FormControl isRequired>
                  <FormLabel color="white">Nome</FormLabel>
                  <Input
                    bg="white"
                    placeholder="Ana"
                    type="text"
                    {...register('name')}
                  />
                </FormControl>
              </GridItem>

              <GridItem colSpan={colSpan}>
                <FormControl isRequired>
                  <FormLabel color="white">Sobrenome</FormLabel>
                  <Input
                    bg="white"
                    placeholder="Clara"
                    type="text"
                    {...register('lastName')}
                  />
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <FormLabel color="white">Matrícula</FormLabel>
                  <Input
                    bg="white"
                    placeholder="202399999"
                    type="number"
                    {...register('registration')}
                  />
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <FormLabel color="white">Número de Telefone</FormLabel>
                  <Input
                    bg="white"
                    placeholder="27 99999-9999"
                    type="number"
                    {...register('phone')}
                  />
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <FormLabel color="white">Email</FormLabel>
                  <Input
                    bg="white"
                    placeholder="anaclara@example.com"
                    type="email"
                    {...register('email')}
                  />
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <FormLabel color="white">Senha</FormLabel>
                  <Input
                    bg="white"
                    placeholder="*********"
                    type="password"
                    {...register('password')}
                  />
                </FormControl>
              </GridItem>
            </SimpleGrid>

            <Checkbox
              colorScheme="brandPink"
              mt={6}
              onChange={setTermsCheck.toggle}
            >
              <Text color="white">
                Li e aceito os{' '}
                <Link
                  color="brandPink.500"
                  href="/"
                  target="_blank"
                  fontWeight="bold"
                  onClick={() => console.log('check')}
                >
                  termos e condições de uso.
                </Link>
              </Text>
            </Checkbox>

            <Flex mt={3} align="center" justify="flex-end">
              <Button
                type="submit"
                w="100%"
                size="md"
                rightIcon={<CgChevronRight size={20} />}
                colorScheme="brandPink"
                iconSpacing="auto"
                isDisabled={!termsCheck}
                isLoading={isSubmitting}
                onClick={() => console.log('submit')}
              >
                Enviar
              </Button>
            </Flex>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
