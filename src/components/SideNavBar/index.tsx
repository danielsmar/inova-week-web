import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {
  MdOutlineDashboard,
  MdOutlineDateRange,
  MdOutlineGroup,
  MdOutlineMessage,
  MdOutlineNotificationsNone,
  MdExitToApp,
} from 'react-icons/md';
import { FiUser } from 'react-icons/fi';
import { PiUserCircleThin } from 'react-icons/pi';
import { Logo } from '../Logo';

export default function SideNavBar() {
  const router = useRouter();

  const navItems = [
    { label: 'Perfil', path: '/', icon: FiUser },
    { label: 'Dashboard', path: '/', icon: MdOutlineDashboard },
    { label: 'Eventos', path: '/', icon: MdOutlineDateRange },
    { label: 'Meu grupo', path: '/', icon: MdOutlineGroup },
    { label: 'Mensagens', path: '/', icon: MdOutlineMessage },
    { label: 'Avisos', path: '/', icon: MdOutlineNotificationsNone },
  ];
  const logoutItem = { label: 'Sair', path: '/singin', icon: MdExitToApp };

  const isActiveRoute = (path: string) => router.pathname === path;

  return (
    <Box w="290px" bg="brand.800" h="100%" p={4}>
      <Box mt="30px" mb="30px">
        <Logo />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt="40px"
        >
          <PiUserCircleThin color="white" size={130} />
        </Box>
        <Text
          color="white"
          fontSize="18px"
          fontWeight="bold"
          textAlign="center"
        >
          Neymar da Silva Santos Junior
        </Text>

        <Text color="white" fontSize="13px" textAlign="center">
          Aluno
        </Text>
      </Box>
      <Flex direction="column" ml={7}>
        <VStack spacing="40px" align="stretch">
          {navItems.map((item) => (
            <Flex
              key={item.path}
              align="center"
              cursor="pointer"
              onClick={() => router.push(item.path)}
              _hover={{ color: 'brandPink.300' }}
              color={isActiveRoute(item.path) ? 'brand.300' : 'white'}
            >
              <Box size={30} as={item.icon} mr={2} borderColor="transparent" />
              <Text fontWeight="semibold">{item.label}</Text>
            </Flex>
          ))}
        </VStack>
        <Flex
          mt="110px"
          flexDirection="row"
          align="center"
          cursor="pointer"
          onClick={() => router.push(logoutItem.path)}
          _hover={{ color: 'brandPink.300' }}
          color={isActiveRoute(logoutItem.path) ? 'brand.300' : 'white'}
        >
          <Box
            size={30}
            as={logoutItem.icon}
            mr={2}
            borderColor="transparent"
          />
          <Text fontWeight="semibold">{logoutItem.label}</Text>
        </Flex>
      </Flex>
    </Box>
  );
}
