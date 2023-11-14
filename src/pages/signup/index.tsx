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
import { Logo } from '@/components/Logo';

type SignUpFormData = {
  name: string;
  lastName: string;
  registration: string;
  phone: string;
  birthDate: string;
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

  const onSubmit = async (data: SignUpFormData) => {
    setIsSubmitting.on();

    // TODO: remove this console.log when the API is ready
    console.log(data);

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
    <Box
      minHeight="100vh"
      w="100%"
      bg="brand.900"
      alignItems="center"
      justifyContent="center"
      display="flex"
    >
      <Box
        maxW="800px"
        m="auto"
        py={['20%', '10%', 16]}
        px={['5%', '5%', '5%', '5%', 24]}
        borderRadius={[0, 8]}
        bg="brand.800"
        mt={[0, 16]}
        mb={[0, 20]}
      >
        <Logo />

        <Heading
          mt={38}
          textAlign="center"
          fontSize="xl"
          fontWeight="semibold"
          color="white"
        >
          Cadastre-se para acessar tudo sobre a maior feira de ciências do
          estado.
        </Heading>

        <Box mt={8}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <SimpleGrid columnGap={3} rowGap={4} columns={2}>
              <GridItem colSpan={colSpan}>
                <FormControl isRequired>
                  <FormLabel fontWeight="semibold" color="white">
                    Nome
                  </FormLabel>
                  <Input
                    bg="white"
                    focusBorderColor="brandPink.500"
                    placeholder="Ana"
                    type="text"
                    {...register('name')}
                  />
                </FormControl>
              </GridItem>

              <GridItem colSpan={colSpan}>
                <FormControl isRequired>
                  <FormLabel fontWeight="semibold" color="white">
                    Sobrenome
                  </FormLabel>
                  <Input
                    bg="white"
                    focusBorderColor="brandPink.500"
                    placeholder="Clara"
                    type="text"
                    {...register('lastName')}
                  />
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <FormLabel fontWeight="semibold" color="white">
                    Matrícula
                  </FormLabel>
                  <Input
                    bg="white"
                    focusBorderColor="brandPink.500"
                    placeholder="202399999"
                    type="number"
                    {...register('registration')}
                  />
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <FormLabel fontWeight="semibold" color="white">
                    Número de Telefone
                  </FormLabel>
                  <Input
                    bg="white"
                    focusBorderColor="brandPink.500"
                    placeholder="27 99999-9999"
                    type="number"
                    {...register('phone')}
                  />
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <FormLabel fontWeight="semibold" color="white">
                    Data de Nascimento
                  </FormLabel>
                  <Input
                    bg="white"
                    focusBorderColor="brandPink.500"
                    type="date"
                    color="grey"
                    {...register('birthDate')}
                  />
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <FormLabel fontWeight="semibold" color="white">
                    Email
                  </FormLabel>
                  <Input
                    bg="white"
                    focusBorderColor="brandPink.500"
                    placeholder="anaclara@example.com"
                    type="email"
                    {...register('email')}
                  />
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <FormLabel fontWeight="semibold" color="white">
                    Senha
                  </FormLabel>
                  <Input
                    bg="white"
                    focusBorderColor="brandPink.500"
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
                  href="/terms"
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
                Cadastrar-se
              </Button>
            </Flex>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
